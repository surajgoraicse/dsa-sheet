#!/usr/bin/env node
/**
 * scrape-cses.js
 * Scrapes the CSES Problem Set (https://cses.fi/problemset/list) into JSON,
 * writing one file per category into an output folder.
 *
 * Each file (e.g. "introductory_problems_cses.json") looks like:
 * {
 *   "category": "Introductory Problems",
 *   "problems": [
 *     { "id": "1068", "name": "Weird Algorithm",
 *       "url": "https://cses.fi/problemset/task/1068",
 *       "solved": 179280, "submissions": 187230 },
 *     ...
 *   ]
 * }
 *
 * Setup:
 *   npm install cheerio
 *
 * Usage:
 *   node scrape-cses.js                 -> writes into ./cses_problems/
 *   node scrape-cses.js my-output-dir   -> writes into ./my-output-dir/
 *
 * Requires Node 18+ (for the built-in fetch API).
 */

const fs = require('fs');
const cheerio = require('cheerio');

const BASE_URL = 'https://cses.fi';
const LIST_URL = `${BASE_URL}/problemset/list`;

async function scrapeCSES() {
  const res = await fetch(LIST_URL, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; cses-scraper/1.0)' }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${LIST_URL}: ${res.status} ${res.statusText}`);
  }

  const html = await res.text();
  const $ = cheerio.load(html);

  const categories = [];
  let currentCategory = null;

  // Walk headings and lists in document order instead of relying on exact
  // class names (which CSES could change). The page structure is:
  //   <h2>Category Name</h2>
  //   <ul><li><a href="/problemset/task/ID">Name</a> ... solved/submissions ... </li></ul>
  $('h1, h2, ul').each((_, el) => {
    const tag = el.tagName.toLowerCase();

    if (tag === 'h1' || tag === 'h2') {
      const title = $(el).text().trim();
      if (title && title !== 'CSES Problem Set') {
        currentCategory = { category: title, problems: [] };
        categories.push(currentCategory);
      }
      return;
    }

    // tag === 'ul'
    if (!currentCategory) return;

    $(el).children('li').each((__, li) => {
      const $li = $(li);
      const link = $li.find('a[href*="/problemset/task/"]').first();
      if (!link.length) return; // not a task row (e.g. a nav list)

      const href = link.attr('href');
      const idMatch = href.match(/\/task\/(\d+)/);
      const id = idMatch ? idMatch[1] : null;
      const name = link.text().trim();

      // Stats render somewhere in the li as "solved / submissions"
      const statsText = $li.text().replace(name, '').trim();
      const statsMatch = statsText.match(/(\d[\d,]*)\s*\/\s*(\d[\d,]*)/);
      const solved = statsMatch ? parseInt(statsMatch[1].replace(/,/g, ''), 10) : null;
      const submissions = statsMatch ? parseInt(statsMatch[2].replace(/,/g, ''), 10) : null;

      currentCategory.problems.push({
        id,
        name,
        url: href.startsWith('http') ? href : `${BASE_URL}${href}`,
        solved,
        submissions
      });
    });
  });

  // Drop headings that had no task links under them (e.g. "General")
  return categories.filter(c => c.problems.length > 0);
}

// "Introductory Problems" -> "introductory_problems_cses.json"
function categoryToFilename(category) {
  const slug = category
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
  return `${slug}_cses.json`;
}

async function main() {
  const outputDir = process.argv[2] || 'cses_problems';

  console.log(`Fetching ${LIST_URL} ...`);
  const data = await scrapeCSES();

  const totalProblems = data.reduce((sum, c) => sum + c.problems.length, 0);
  console.log(`Found ${data.length} categories, ${totalProblems} problems.`);

  fs.mkdirSync(outputDir, { recursive: true });

  for (const categoryData of data) {
    const filename = categoryToFilename(categoryData.category);
    const filePath = `${outputDir}/${filename}`;
    fs.writeFileSync(filePath, JSON.stringify(categoryData, null, 2), 'utf-8');
    console.log(`Saved ${categoryData.problems.length} problems -> ${filePath}`);
  }

  console.log(`Done. ${data.length} category files written to ./${outputDir}/`);
}

main().catch(err => {
  console.error('Scrape failed:', err.message);
  process.exit(1);
});