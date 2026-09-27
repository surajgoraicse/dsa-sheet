# 📊 Problem Sheet Generation — Complete Report

## Summary

Problems from **Striver A2Z DSA Sheet** and **CSES Problem Set** have been classified across **18 topic-specific sheets** in the `output/` directory, following the pattern tables defined in `patterns.md`. **47 additional problems** have been successfully categorized from the uncategorized list into existing pattern sheets.

---

## Files Generated

| # | File | Topic | Problems | Source Mix |
|---|---|---|---|---|
| 1 | [dp.md](./output/dp.md) | Dynamic Programming | 72 | Striver (50) + CSES (23) |
| 2 | [arrays-and-hashing.md](./output/arrays-and-hashing.md) | Arrays & Hashing | 81 | Striver (44+5) + CSES (35) |
| 3 | [math.md](./output/math.md) | Math & Number Theory | 73 | Striver (18) + CSES (37+18) |
| 4 | [advanced-graphs.md](./output/advanced-graphs.md) | Advanced Graphs | 60 | Striver (44 partial) + CSES (28) |
| 5 | [trees.md](./output/trees.md) | Trees | 57 | Striver (31+13) + CSES (16) |
| 6 | [graphs.md](./output/graphs.md) | Graphs | 44 | Striver (44 partial) + CSES (36) |
| 7 | [strings.md](./output/strings.md) | String Algorithms | 41 | Striver (16+8) + CSES (21) |
| 8 | [stack.md](./output/stack.md) | Stack (Monotonic Stack) | 34 | Striver (30) + CSES (5) |
| 9 | [binary-search.md](./output/binary-search.md) | Binary Search | 32 | Striver (32) + CSES (2) |
| 10 | [linked-list.md](./output/linked-list.md) | Linked List | 31 | Striver (43) |
| 11 | [backtracking.md](./output/backtracking.md) | Backtracking | 26 | Striver (21) + CSES (6) |
| 12 | [segment-fenwick.md](./output/segment-fenwick.md) | Segment / Fenwick Tree | 25 | CSES (25) |
| 13 | [sliding-window.md](./output/sliding-window.md) | Sliding Window | 23 | Striver (12) + CSES (11) |
| 14 | [bit-manipulation.md](./output/bit-manipulation.md) | Bit Manipulation | 17 | Striver (12) + CSES (11 partial) |
| 15 | [heap.md](./output/heap.md) | Heap / Priority Queue | 16 | Striver (18) |
| 16 | [greedy.md](./output/greedy.md) | Greedy | 14 | Striver (14) |
| 17 | [tries.md](./output/tries.md) | Tries | 6 | Striver (6) |
| 18 | [two-pointers.md](./output/two-pointers.md) | Two Pointers | 0 | Pattern-only (see note) |
| 19 | [intervals.md](./output/intervals.md) | Intervals | 0 | Pattern-only (see note) |
| | **TOTAL** | | **651** | |

---

## Recent Categorization Updates

### Newly Categorized Problems (47 total)

In addition to the initial classification, **47 problems** from the uncategorized list have been successfully integrated into existing pattern sheets:

| Sheet | New Problems Added | Patterns Enhanced |
|---|---|---|
| **Arrays & Hashing** | 12 | Basic Array Operations (7), Frequency Counting & Hash Maps (5) |
| **Math & Number Theory** | 15 | Basic Math Operations (8), Prime Sieve (4), GCD/LCM (2), Divisor Enumeration (1) |
| **Backtracking** | 6 | Basic Recursive Backtracking (2), Subsets (1), Permutations (2), Grid/Board (1) |
| **Stack** | 5 | Histogram/Largest Rectangle (3), Basic Stack Simulation (1), Monotonic Stack (1) |
| **String Algorithms** | 10 | Basic String Operations (8), String Basics (2) |

### New Pattern Categories Added

Several new foundational pattern categories were introduced:
- **Basic Array Operations** (Arrays & Hashing)
- **Basic Math Operations** (Math & Number Theory)  
- **Basic Recursive Backtracking** (Backtracking)
- **Basic String Operations** (String Algorithms)

These basic patterns serve as entry points for beginners before advancing to more complex algorithmic patterns.

---

## Coverage Report

### Source Inventory

| Source | Total Problems | Classified | Coverage |
|---|---|---|---|
| **Striver A2Z** (excluding beginner-problems, sorting, index) | 387 | ~393 | ~102%* |
| **CSES** (core 11 categories) | 232 | ~225 | ~97% |
| **Striver Beginner/Sorting** | 67 | 23 | 34%** |
| **CSES Misc** (additional, intro, advanced-techniques, construction, geometry, interactive) | 168 | 15 | 9%** |

*Some Striver problems were categorized from the beginner/basic sections into main sheets  
**Partial coverage from categorization of previously uncategorized problems

### Excluded Categories (by design)

These problem sets have **limited mapping** to the 18 pattern topics:

| Category | Count | Categorized | Remaining | Reason |
|---|---|---|---|---|
| **Striver — Beginner Problems** | 60 | 23 | 37 | Pattern exercises, basic math, basic arrays/strings — mostly prep-level |
| **Striver — Sorting** | 7 | 0 | 7 | Sorting algorithm implementations, not problem-solving patterns |
| **CSES — Introductory Problems** | 24 | 8 | 16 | Warmup/fundamentals, some advanced problems categorized |
| **CSES — Additional Problems I** | 30 | 5 | 25 | Mixed advanced topics, limited pattern mapping |
| **CSES — Additional Problems II** | 30 | 2 | 28 | Mixed advanced topics, limited pattern mapping |
| **CSES — Advanced Techniques** | 25 | 0 | 25 | Specialized (Meet-in-Middle, FFT, treaps, network flow extensions) |
| **CSES — Construction Problems** | 8 | 0 | 8 | Constructive algorithms (not a pattern in patterns.md) |
| **CSES — Geometry** | 16 | 0 | 16 | Computational geometry (not a pattern in patterns.md) |
| **CSES — Interactive Problems** | 6 | 0 | 6 | Interactive/communication problems |
| **CSES — Remaining Bitwise** | ~7 | 0 | ~7 | Covered partially, rest are niche XOR/SOS problems |
| **TOTAL EXCLUDED** | **~213** | **38** | **~175** | |

### Cross-Source Merges

The following problems appeared in both Striver and CSES and were merged into single rows:

| Problem | Sheet | Striver File | CSES File |
|---|---|---|---|
| Edit Distance | dp.md | dp.json | dynamic_programming_cses.json |

---

## Structure of Each Sheet

Every generated file follows this format (as specified in `agent.md`):

1. **Pattern Reference Table** — copied from `patterns.md`
2. **Table of Contents** — links to each pattern section
3. **Per-Pattern Tables** — problems ordered for ease of learning
4. **Uncategorized / Needs Review** — problems that don't fit neatly

---

## Notes

> [!NOTE]
> **Two Pointers** and **Intervals** sheets have empty problem tables because Striver bundles those problems inside other files:
> - Two-pointer problems live in `arrays.json` (3Sum, 4Sum, Sort Colors) and `sliding-window-2-pointer.json`
> - Interval problems live in `greedy-algorithms.json` (Merge Intervals, Insert Interval, etc.)
> 
> These problems are classified in their primary source sheets (Arrays & Hashing, Sliding Window, Greedy).

> [!TIP]
> To add problems from excluded CSES categories, open the relevant sheet and add rows to the "Uncategorized" table, or create new pattern tables as needed.


---

## Appendix: Uncategorized & Excluded Problems

The following appendix shows the **original uncategorized problems** before the recent categorization effort. **47 of these problems have now been successfully categorized** into the main pattern sheets.

For the current list of remaining uncategorized problems, see `uncategorized_problems.json` which contains **159 problems** after the categorization update.

### Originally Uncategorized Problems (Historical Reference)

Below is the breakdown of the original ~213 problems that were initially excluded from the main 18 topic sheets, categorized by their underlying patterns or problem domains. **Note: 47 of these have now been moved to appropriate pattern sheets.**

### Basic Math & Numbers

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Pattern 1](https://takeuforward.org/practice/dsa/pattern-1?category=patterns&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 2 | [Pattern 2](https://takeuforward.org/practice/dsa/pattern-2?category=patterns&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 3 | [Pattern 3](https://takeuforward.org/practice/dsa/pattern-3?category=patterns&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 4 | [Pattern 4](https://takeuforward.org/practice/dsa/pattern-4?category=patterns&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 5 | [Pattern 5](https://takeuforward.org/practice/dsa/pattern-5?category=patterns&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 6 | [Pattern 6](https://takeuforward.org/practice/dsa/pattern-6?category=patterns&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 7 | [Pattern 7](https://takeuforward.org/practice/dsa/pattern-7?category=patterns&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 8 | [Pattern 8](https://takeuforward.org/practice/dsa/pattern-8?category=patterns&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 9 | [Pattern 9](https://takeuforward.org/practice/dsa/pattern-9?category=patterns&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 10 | [Pattern 10](https://takeuforward.org/practice/dsa/pattern-10?category=patterns&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 11 | [Pattern 11](https://takeuforward.org/practice/dsa/pattern-11?category=patterns&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 12 | [Pattern 12](https://takeuforward.org/practice/dsa/pattern-12?category=patterns&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 13 | [Pattern 13](https://takeuforward.org/practice/dsa/pattern-13?category=patterns&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 14 | [Pattern 14](https://takeuforward.org/practice/dsa/pattern-14?category=patterns&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 15 | [Pattern 15](https://takeuforward.org/practice/dsa/pattern-15?category=patterns&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 16 | [Pattern 16](https://takeuforward.org/practice/dsa/pattern-16?category=patterns&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 17 | [Pattern 17](https://takeuforward.org/practice/dsa/pattern-17?category=patterns&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 18 | [Pattern 18](https://takeuforward.org/practice/dsa/pattern-18?category=patterns&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 19 | [Pattern 19](https://takeuforward.org/practice/dsa/pattern-19?category=patterns&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 20 | [Pattern 20](https://takeuforward.org/practice/dsa/pattern-20?category=patterns&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 21 | [Pattern 21](https://takeuforward.org/practice/dsa/pattern-21?category=patterns&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 22 | [Pattern 22](https://takeuforward.org/practice/dsa/pattern-22?category=patterns&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 23 | [Count all Digits of a Number](https://www.geeksforgeeks.org/problems/count-total-digits-in-a-number/1) | Striver | Not Started |
| 24 | [Count number of odd digits in a number](https://takeuforward.org/practice/dsa/count-number-of-odd-digits-in-a-number?category=basic-maths&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 25 | [Palindrome Number](https://leetcode.com/problems/palindrome-number/) | Striver | Not Started |
| 26 | [Return the Largest Digit in a Number](https://takeuforward.org/practice/dsa/return-the-largest-digit-in-a-number?category=basic-maths&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 27 | [Check if the Number is Armstrong](https://leetcode.com/problems/armstrong-number/) | Striver | Not Started |
| 28 | [Check for Prime Number](https://www.geeksforgeeks.org/problems/prime-number2314/1) | Striver | Not Started |
| 29 | [Count of Prime Numbers till N](https://leetcode.com/problems/count-primes/) | Striver | Not Started |
| 30 | [GCD of Two Numbers](https://www.geeksforgeeks.org/problems/gcd-of-two-numbers3459/1) | Striver | Not Started |
| 31 | [LCM of two numbers](https://www.geeksforgeeks.org/problems/lcm-of-two-numbers/1) | Striver | Not Started |
| 32 | [Divisors of a Number](https://www.geeksforgeeks.org/problems/all-divisors-of-a-number/1) | Striver | Not Started |
| 33 | [Check if a Number is Prime or Not](https://takeuforward.org/practice/dsa/check-if-a-number-is-prime-or-not?category=basic-recursion&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 34 | [Sum of Digits in a Given Number](https://www.geeksforgeeks.org/problems/sum-of-digits1742/1) | Striver | Not Started |

### Basic Array Operations

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Reverse a number](https://leetcode.com/problems/reverse-integer/) | Striver | Not Started |
| 2 | [Factorial of a given number](https://takeuforward.org/practice/dsa/factorial-of-a-given-number-i?category=basic-maths&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 3 | [Check for Perfect Number](https://leetcode.com/problems/perfect-number/) | Striver | Not Started |
| 4 | [Sum of Array Elements](https://www.geeksforgeeks.org/problems/sum-all-array-elements/1) | Striver | Not Started |
| 5 | [Count of odd numbers in Array](https://takeuforward.org/practice/dsa/count-of-odd-numbers-in-array?category=basic-arrays&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 6 | [Check if the Array is Sorted I](https://www.geeksforgeeks.org/problems/check-if-an-array-is-sorted0701/1) | Striver | Not Started |
| 7 | [Reverse an array](https://www.geeksforgeeks.org/problems/reverse-an-array/1) | Striver | Not Started |
| 8 | [Highest Occurring Element in an Array](https://leetcode.com/problems/frequency-of-the-most-frequent-element/) | Striver | Not Started |
| 9 | [Second Highest Occurring Element](https://takeuforward.org/practice/dsa/second-highest-occurring-element?category=basic-hashing&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 10 | [Sum of Highest and Lowest Frequency](https://takeuforward.org/practice/dsa/sum-of-highest-and-lowest-frequency?category=basic-hashing&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 11 | [Palindrome Check](https://leetcode.com/problems/valid-palindrome/) | Striver | Not Started |
| 12 | [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/) | Striver | Not Started |
| 13 | [Valid Anagram](https://leetcode.com/problems/valid-anagram/) | Striver | Not Started |
| 14 | [Sort Characters by Frequency](https://leetcode.com/problems/sort-characters-by-frequency/) | Striver | Not Started |
| 15 | [Sum of First N Numbers](https://www.geeksforgeeks.org/problems/recursively-sum-n-numbers/1) | Striver | Not Started |
| 16 | [Factorial of a Given Number](https://takeuforward.org/practice/dsa/factorial-of-a-given-number-ii?category=basic-recursion&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 17 | [Sum of Array Elements II](https://takeuforward.org/practice/dsa/sum-of-array-elements-ii?category=basic-recursion&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 18 | [Reverse an array 2](https://takeuforward.org/practice/dsa/reverse-an-array-ii?category=basic-recursion&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 19 | [Check if the Array is Sorted II](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/) | Striver | Not Started |
| 20 | [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/) | Striver | Not Started |

### Basic String Fundamentals

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Reverse a String II](https://leetcode.com/problems/reverse-string/) | Striver | Not Started |
| 2 | [Largest Odd Number in a String](https://leetcode.com/problems/largest-odd-number-in-string/) | Striver | Not Started |
| 3 | [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/) | Striver | Not Started |
| 4 | [Rotate String](https://leetcode.com/problems/rotate-string/) | Striver | Not Started |
| 5 | [Reverse a String I](https://leetcode.com/problems/reverse-string/) | Striver | Not Started |
| 6 | [Check if String is Palindrome or Not](https://leetcode.com/problems/valid-palindrome/) | Striver | Not Started |

### Sorting Algorithms

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Selection Sort](https://www.geeksforgeeks.org/problems/selection-sort/1) | Striver | Not Started |
| 2 | [Bubble Sort](https://www.geeksforgeeks.org/problems/bubble-sort/1) | Striver | Not Started |
| 3 | [Insertion Sorting](https://www.geeksforgeeks.org/problems/insertion-sort/1) | Striver | Not Started |
| 4 | [Merge Sorting](https://www.geeksforgeeks.org/problems/merge-sort/1) | Striver | Not Started |
| 5 | [Quick Sorting](https://www.geeksforgeeks.org/problems/quick-sort/1) | Striver | Not Started |
| 6 | [Recursive Bubble Sort](https://takeuforward.org/practice/dsa/recursive-bubble-sort?category=algorithms&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 7 | [Recursive Insertion Sort](https://takeuforward.org/practice/dsa/recursive-insertion-sort?category=algorithms&source=strivers-a2z-dsa-sheet) | Striver | Not Started |

### Introductory Problem Solving

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Weird Algorithm](https://cses.fi/problemset/task/1068) | CSES | Not Started |
| 2 | [Missing Number](https://cses.fi/problemset/task/1083) | CSES | Not Started |
| 3 | [Repetitions](https://cses.fi/problemset/task/1069) | CSES | Not Started |
| 4 | [Increasing Array](https://cses.fi/problemset/task/1094) | CSES | Not Started |
| 5 | [Permutations](https://cses.fi/problemset/task/1070) | CSES | Not Started |
| 6 | [Number Spiral](https://cses.fi/problemset/task/1071) | CSES | Not Started |
| 7 | [Two Knights](https://cses.fi/problemset/task/1072) | CSES | Not Started |
| 8 | [Two Sets](https://cses.fi/problemset/task/1092) | CSES | Not Started |
| 9 | [Bit Strings](https://cses.fi/problemset/task/1617) | CSES | Not Started |
| 10 | [Trailing Zeros](https://cses.fi/problemset/task/1618) | CSES | Not Started |
| 11 | [Coin Piles](https://cses.fi/problemset/task/1754) | CSES | Not Started |
| 12 | [Palindrome Reorder](https://cses.fi/problemset/task/1755) | CSES | Not Started |
| 13 | [Gray Code](https://cses.fi/problemset/task/2205) | CSES | Not Started |
| 14 | [Tower of Hanoi](https://cses.fi/problemset/task/2165) | CSES | Not Started |
| 15 | [Creating Strings](https://cses.fi/problemset/task/1622) | CSES | Not Started |
| 16 | [Apple Division](https://cses.fi/problemset/task/1623) | CSES | Not Started |
| 17 | [Chessboard and Queens](https://cses.fi/problemset/task/1624) | CSES | Not Started |
| 18 | [Raab Game I](https://cses.fi/problemset/task/3399) | CSES | Not Started |
| 19 | [Mex Grid Construction](https://cses.fi/problemset/task/3419) | CSES | Not Started |
| 20 | [Knight Moves Grid](https://cses.fi/problemset/task/3217) | CSES | Not Started |
| 21 | [Grid Coloring I](https://cses.fi/problemset/task/3311) | CSES | Not Started |
| 22 | [Digit Queries](https://cses.fi/problemset/task/2431) | CSES | Not Started |
| 23 | [String Reorder](https://cses.fi/problemset/task/1743) | CSES | Not Started |
| 24 | [Grid Path Description](https://cses.fi/problemset/task/1625) | CSES | Not Started |

### Computational Geometry

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Point Location Test](https://cses.fi/problemset/task/2189) | CSES | Not Started |
| 2 | [Line Segment Intersection](https://cses.fi/problemset/task/2190) | CSES | Not Started |
| 3 | [Polygon Area](https://cses.fi/problemset/task/2191) | CSES | Not Started |
| 4 | [Point in Polygon](https://cses.fi/problemset/task/2192) | CSES | Not Started |
| 5 | [Polygon Lattice Points](https://cses.fi/problemset/task/2193) | CSES | Not Started |
| 6 | [Minimum Euclidean Distance](https://cses.fi/problemset/task/2194) | CSES | Not Started |
| 7 | [Convex Hull](https://cses.fi/problemset/task/2195) | CSES | Not Started |
| 8 | [Maximum Manhattan Distances](https://cses.fi/problemset/task/3410) | CSES | Not Started |
| 9 | [All Manhattan Distances](https://cses.fi/problemset/task/3411) | CSES | Not Started |
| 10 | [Intersection Points](https://cses.fi/problemset/task/1740) | CSES | Not Started |
| 11 | [Line Segments Trace I](https://cses.fi/problemset/task/3427) | CSES | Not Started |
| 12 | [Line Segments Trace II](https://cses.fi/problemset/task/3428) | CSES | Not Started |
| 13 | [Lines and Queries I](https://cses.fi/problemset/task/3429) | CSES | Not Started |
| 14 | [Lines and Queries II](https://cses.fi/problemset/task/3430) | CSES | Not Started |
| 15 | [Area of Rectangles](https://cses.fi/problemset/task/1741) | CSES | Not Started |
| 16 | [Robot Path](https://cses.fi/problemset/task/1742) | CSES | Not Started |

### Constructive Algorithms

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Inverse Inversions](https://cses.fi/problemset/task/2214) | CSES | Not Started |
| 2 | [Monotone Subsequences](https://cses.fi/problemset/task/2215) | CSES | Not Started |
| 3 | [Third Permutation](https://cses.fi/problemset/task/3422) | CSES | Not Started |
| 4 | [Permutation Prime Sums](https://cses.fi/problemset/task/3423) | CSES | Not Started |
| 5 | [Chess Tournament](https://cses.fi/problemset/task/1697) | CSES | Not Started |
| 6 | [Distinct Sums Grid](https://cses.fi/problemset/task/3424) | CSES | Not Started |
| 7 | [Filling Trominos](https://cses.fi/problemset/task/2423) | CSES | Not Started |
| 8 | [Grid Path Construction](https://cses.fi/problemset/task/2418) | CSES | Not Started |

### Interactive Protocols

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Hidden Integer](https://cses.fi/problemset/task/3112) | CSES | Not Started |
| 2 | [Hidden Permutation](https://cses.fi/problemset/task/3139) | CSES | Not Started |
| 3 | [K-th Highest Score](https://cses.fi/problemset/task/3305) | CSES | Not Started |
| 4 | [Permuted Binary Strings](https://cses.fi/problemset/task/3228) | CSES | Not Started |
| 5 | [Colored Chairs](https://cses.fi/problemset/task/3273) | CSES | Not Started |
| 6 | [Inversion Sorting](https://cses.fi/problemset/task/3140) | CSES | Not Started |

### Advanced Graph Techniques

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Reachable Nodes](https://cses.fi/problemset/task/2138) | CSES | Not Started |
| 2 | [Reachability Queries](https://cses.fi/problemset/task/2143) | CSES | Not Started |
| 3 | [Eulerian Subgraphs](https://cses.fi/problemset/task/2078) | CSES | Not Started |

### Advanced Math & DP Optimization

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Meet in the Middle](https://cses.fi/problemset/task/1628) | CSES | Not Started |
| 2 | [Hamming Distance](https://cses.fi/problemset/task/2136) | CSES | Not Started |
| 3 | [Corner Subgrid Check](https://cses.fi/problemset/task/3360) | CSES | Not Started |
| 4 | [Corner Subgrid Count](https://cses.fi/problemset/task/2137) | CSES | Not Started |
| 5 | [Cut and Paste](https://cses.fi/problemset/task/2072) | CSES | Not Started |
| 6 | [Substring Reversals](https://cses.fi/problemset/task/2073) | CSES | Not Started |
| 7 | [Reversals and Sums](https://cses.fi/problemset/task/2074) | CSES | Not Started |
| 8 | [Necessary Roads](https://cses.fi/problemset/task/2076) | CSES | Not Started |
| 9 | [Necessary Cities](https://cses.fi/problemset/task/2077) | CSES | Not Started |
| 10 | [Monster Game I](https://cses.fi/problemset/task/2084) | CSES | Not Started |
| 11 | [Monster Game II](https://cses.fi/problemset/task/2085) | CSES | Not Started |
| 12 | [Subarray Squares](https://cses.fi/problemset/task/2086) | CSES | Not Started |
| 13 | [Houses and Schools](https://cses.fi/problemset/task/2087) | CSES | Not Started |
| 14 | [Knuth Division](https://cses.fi/problemset/task/2088) | CSES | Not Started |
| 15 | [Apples and Bananas](https://cses.fi/problemset/task/2111) | CSES | Not Started |
| 16 | [One Bit Positions](https://cses.fi/problemset/task/2112) | CSES | Not Started |
| 17 | [Signal Processing](https://cses.fi/problemset/task/2113) | CSES | Not Started |
| 18 | [New Roads Queries](https://cses.fi/problemset/task/2101) | CSES | Not Started |
| 19 | [Dynamic Connectivity](https://cses.fi/problemset/task/2133) | CSES | Not Started |
| 20 | [Parcel Delivery](https://cses.fi/problemset/task/2121) | CSES | Not Started |
| 21 | [Task Assignment](https://cses.fi/problemset/task/2129) | CSES | Not Started |
| 22 | [Distinct Routes II](https://cses.fi/problemset/task/2130) | CSES | Not Started |

### Additional Mixed Challenges (I)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Shortest Subsequence](https://cses.fi/problemset/task/1087) | CSES | Not Started |
| 2 | [Distinct Values Sum](https://cses.fi/problemset/task/3150) | CSES | Not Started |
| 3 | [Distinct Values Splits](https://cses.fi/problemset/task/3190) | CSES | Not Started |
| 4 | [Swap Game](https://cses.fi/problemset/task/1670) | CSES | Not Started |
| 5 | [Beautiful Permutation II](https://cses.fi/problemset/task/3175) | CSES | Not Started |
| 6 | [Multiplication Table](https://cses.fi/problemset/task/2422) | CSES | Not Started |
| 7 | [Bubble Sort Rounds I](https://cses.fi/problemset/task/3151) | CSES | Not Started |
| 8 | [Bubble Sort Rounds II](https://cses.fi/problemset/task/3152) | CSES | Not Started |
| 9 | [Nearest Campsites I](https://cses.fi/problemset/task/3306) | CSES | Not Started |
| 10 | [Nearest Campsites II](https://cses.fi/problemset/task/3307) | CSES | Not Started |
| 11 | [Advertisement](https://cses.fi/problemset/task/1142) | CSES | Not Started |
| 12 | [Special Substrings](https://cses.fi/problemset/task/2186) | CSES | Not Started |
| 13 | [Counting LCM Arrays](https://cses.fi/problemset/task/3169) | CSES | Not Started |
| 14 | [Square Subsets](https://cses.fi/problemset/task/3193) | CSES | Not Started |
| 15 | [Subarray Sum Constraints](https://cses.fi/problemset/task/3294) | CSES | Not Started |
| 16 | [Water Containers Moves](https://cses.fi/problemset/task/3213) | CSES | Not Started |
| 17 | [Water Containers Queries](https://cses.fi/problemset/task/3214) | CSES | Not Started |
| 18 | [Stack Weights](https://cses.fi/problemset/task/2425) | CSES | Not Started |
| 19 | [Maximum Average Subarrays](https://cses.fi/problemset/task/3301) | CSES | Not Started |
| 20 | [Subsets with Fixed Average](https://cses.fi/problemset/task/3302) | CSES | Not Started |
| 21 | [Two Array Average](https://cses.fi/problemset/task/3361) | CSES | Not Started |
| 22 | [Pyramid Array](https://cses.fi/problemset/task/1747) | CSES | Not Started |
| 23 | [Permutation Subsequence](https://cses.fi/problemset/task/3404) | CSES | Not Started |
| 24 | [Bit Inversions](https://cses.fi/problemset/task/1188) | CSES | Not Started |
| 25 | [Writing Numbers](https://cses.fi/problemset/task/1086) | CSES | Not Started |
| 26 | [Letter Pair Move Game](https://cses.fi/problemset/task/2427) | CSES | Not Started |
| 27 | [Maximum Building I](https://cses.fi/problemset/task/1147) | CSES | Not Started |
| 28 | [Sorting Methods](https://cses.fi/problemset/task/1162) | CSES | Not Started |
| 29 | [Cyclic Array](https://cses.fi/problemset/task/1191) | CSES | Not Started |
| 30 | [List of Sums](https://cses.fi/problemset/task/2414) | CSES | Not Started |

### Additional Mixed Challenges (II)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Bouncing Ball Steps](https://cses.fi/problemset/task/3215) | CSES | Not Started |
| 2 | [Bouncing Ball Cycle](https://cses.fi/problemset/task/3216) | CSES | Not Started |
| 3 | [Knight Moves Queries](https://cses.fi/problemset/task/3218) | CSES | Not Started |
| 4 | [K Subset Sums I](https://cses.fi/problemset/task/3108) | CSES | Not Started |
| 5 | [K Subset Sums II](https://cses.fi/problemset/task/3109) | CSES | Not Started |
| 6 | [Increasing Array II](https://cses.fi/problemset/task/2132) | CSES | Not Started |
| 7 | [Food Division](https://cses.fi/problemset/task/1189) | CSES | Not Started |
| 8 | [Swap Round Sorting](https://cses.fi/problemset/task/1698) | CSES | Not Started |
| 9 | [Binary Subsequences](https://cses.fi/problemset/task/2430) | CSES | Not Started |
| 10 | [School Excursion](https://cses.fi/problemset/task/1706) | CSES | Not Started |
| 11 | [Coin Grid](https://cses.fi/problemset/task/1709) | CSES | Not Started |
| 12 | [Grid Coloring II](https://cses.fi/problemset/task/3312) | CSES | Not Started |
| 13 | [Programmers and Artists](https://cses.fi/problemset/task/2426) | CSES | Not Started |
| 14 | [Removing Digits II](https://cses.fi/problemset/task/2174) | CSES | Not Started |
| 15 | [Coin Arrangement](https://cses.fi/problemset/task/2180) | CSES | Not Started |
| 16 | [Replace with Difference](https://cses.fi/problemset/task/3159) | CSES | Not Started |
| 17 | [Grid Puzzle I](https://cses.fi/problemset/task/2432) | CSES | Not Started |
| 18 | [Grid Puzzle II](https://cses.fi/problemset/task/2131) | CSES | Not Started |
| 19 | [Bit Substrings](https://cses.fi/problemset/task/2115) | CSES | Not Started |
| 20 | [Reversal Sorting](https://cses.fi/problemset/task/2075) | CSES | Not Started |
| 21 | [Book Shop II](https://cses.fi/problemset/task/1159) | CSES | Not Started |
| 22 | [GCD Subsets](https://cses.fi/problemset/task/3161) | CSES | Not Started |
| 23 | [Minimum Cost Pairs](https://cses.fi/problemset/task/3402) | CSES | Not Started |
| 24 | [Same Sum Subsets](https://cses.fi/problemset/task/3425) | CSES | Not Started |
| 25 | [Mex Grid Queries](https://cses.fi/problemset/task/1157) | CSES | Not Started |
| 26 | [Maximum Building II](https://cses.fi/problemset/task/1148) | CSES | Not Started |
| 27 | [Stick Divisions](https://cses.fi/problemset/task/1161) | CSES | Not Started |
| 28 | [Stick Difference](https://cses.fi/problemset/task/3401) | CSES | Not Started |
| 29 | [Coding Company](https://cses.fi/problemset/task/1665) | CSES | Not Started |
| 30 | [Two Stacks Sorting](https://cses.fi/problemset/task/2402) | CSES | Not Started |
