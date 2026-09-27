# String Algorithms — Problem Sheet

## Patterns Reference

| Pattern | Core Learning Objective & Intuition | Prerequisites | Priority |
|---|---|---|---|
| Basic String Operations | Master fundamental string operations like traversal, reversal, and basic checks — foundation for advanced string patterns. | None | 🔥 High |
| String Hashing (Polynomial Rolling Hash) | Compute a fixed-size hash for any substring in O(1) after O(n) preprocessing. | Modular Arithmetic | 🔥 High |
| KMP Algorithm (Knuth-Morris-Pratt) | Precompute a "failure function" so pattern matching never re-examines matched characters. | Basic String Traversal | 🔥 High |
| Z-Function | Compute, for every position, the length of the longest substring starting there that matches the string's prefix. | Basic String Traversal | 🔥 High |
| Rabin-Karp (Hashing-Based Pattern Matching) | Use rolling hashes to slide a window across text, comparing hash values. | String Hashing | ⚡ Medium |
| Manacher's Algorithm (Longest Palindromic Substring in O(n)) | Exploit palindrome symmetry to reuse previously-computed palindrome radii. | Palindrome Expansion (Two Pointers) | ⚡ Medium |
| Trie-Based String Matching | Reuse the trie structure to match multiple patterns via shared prefixes. | Trie Construction | 🔥 High |
| Aho-Corasick Algorithm (Multi-Pattern Matching) | Extend a trie with failure links to match many patterns in a single pass. | Trie Construction, KMP | ⚡ Medium |
| Suffix Array & LCP Array | Sort all suffixes of a string lexicographically, then use the LCP array. | Sorting, String Hashing | ⚡ Medium |
| Longest Palindromic Subsequence / Substring (DP) | Distinguish subsequence vs. substring palindrome problems. | Interval DP, LCS | 🔥 High |
| Anagram & Permutation-in-String Detection | Use fixed-size frequency-count windows to detect anagram matches. | Sliding Window, Frequency Counting | 🔥 High |
| Edit Distance & String Transformation DP | Model insert/delete/replace operations as a 2D DP. | LCS, Matrix/2D DP | 🔥 High |

---

## Table of Contents
- [Basic String Operations](#basic-string-operations)
- [String Hashing](#string-hashing-polynomial-rolling-hash)
- [KMP Algorithm](#kmp-algorithm-knuth-morris-pratt)
- [Z-Function](#z-function)
- [Rabin-Karp](#rabin-karp-hashing-based-pattern-matching)
- [Manacher's Algorithm](#manachers-algorithm)
- [Longest Palindromic Substring](#longest-palindromic-substringsubsequence)
- [String Basics (Parentheses & Conversions)](#string-basics-parentheses--conversions)
- [Uncategorized / Needs Review](#uncategorized--needs-review)

---

## Basic String Operations

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Reverse a String I](https://leetcode.com/problems/reverse-string/) | Striver | Not Started |
| 2 | [Reverse a String II](https://leetcode.com/problems/reverse-string/) | Striver | Not Started |
| 3 | [Check if String is Palindrome or Not](https://leetcode.com/problems/valid-palindrome/) | Striver | Not Started |
| 4 | [Palindrome Check](https://leetcode.com/problems/valid-palindrome/) | Striver | Not Started |
| 5 | [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/) | Striver | Not Started |
| 6 | [Largest Odd Number in a String](https://leetcode.com/problems/largest-odd-number-in-string/) | Striver | Not Started |
| 7 | [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/) | Striver | Not Started |
| 8 | [Rotate String](https://leetcode.com/problems/rotate-string/) | Striver | Not Started |

## String Hashing (Polynomial Rolling Hash)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [String Hashing](https://cses.fi/problemset/task/1753) | CSES | Not Started |

## KMP Algorithm (Knuth-Morris-Pratt)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [KMP Algorithm or LPS array](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) | Striver | Not Started |
| 2 | [Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/) | Striver | Not Started |
| 3 | [Longest happy prefix](https://leetcode.com/problems/longest-happy-prefix/) | Striver | Not Started |
| 4 | [Pattern Positions](https://cses.fi/problemset/task/1753) | CSES | Not Started |

## Z-Function

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Z function](https://takeuforward.org/practice/dsa/z-function?category=advanced-problems-%28less-asked%29&source=strivers-a2z-dsa-sheet) | Striver | Not Started |

## Rabin-Karp (Hashing-Based Pattern Matching)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Rabin Karp Algorithm](https://leetcode.com/problems/repeated-string-match/) | Striver | Not Started |

## Manacher's Algorithm

| # | Problem (linked) | Source | Status |
|---|---|---|---|

## Longest Palindromic Substring/Subsequence

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) | Striver | Not Started |
| 2 | [Longest Palindrome](https://cses.fi/problemset/task/1111) | CSES | Not Started |

## String Basics (Parentheses & Conversions)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Remove Outermost Parentheses](https://leetcode.com/problems/remove-outermost-parentheses/) | Striver | Not Started |
| 2 | [Maximum Nesting Depth of the Parentheses](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/) | Striver | Not Started |
| 3 | [Reverse every word in a string](https://leetcode.com/problems/reverse-words-in-a-string/) | Striver | Not Started |
| 4 | [Roman to Integer](https://leetcode.com/problems/roman-to-integer/) | Striver | Not Started |
| 5 | [String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/) | Striver | Not Started |
| 6 | [Minimum number of bracket reversals to make an expression balanced](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/) | Striver | Not Started |
| 7 | [Count and say](https://leetcode.com/problems/count-and-say/) | Striver | Not Started |
| 8 | [Sum of Beauty of All Substrings](https://leetcode.com/problems/sum-of-beauty-of-all-substrings/) | Striver | Not Started |
| 9 | [Palindrome Reorder](https://cses.fi/problemset/task/1755) | CSES | Not Started |
| 10 | [String Reorder](https://cses.fi/problemset/task/1743) | CSES | Not Started |

## Uncategorized / Needs Review

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Finding Borders](https://cses.fi/problemset/task/1732) | CSES | Not Started |
| 2 | [Finding Periods](https://cses.fi/problemset/task/1733) | CSES | Not Started |
| 3 | [Minimal Rotation](https://cses.fi/problemset/task/1110) | CSES | Not Started |
| 4 | [Word Combinations](https://cses.fi/problemset/task/1731) | CSES | Not Started |
| 5 | [Counting Patterns](https://cses.fi/problemset/task/2103) | CSES | Not Started |
| 6 | [Pattern Positions](https://cses.fi/problemset/task/2104) | CSES | Not Started |
| 7 | [Distinct Substrings](https://cses.fi/problemset/task/2105) | CSES | Not Started |
| 8 | [Repeating Substring](https://cses.fi/problemset/task/2106) | CSES | Not Started |
| 9 | [String Functions](https://cses.fi/problemset/task/2107) | CSES | Not Started |
| 10 | [Substring Order I](https://cses.fi/problemset/task/2108) | CSES | Not Started |
| 11 | [Substring Order II](https://cses.fi/problemset/task/2109) | CSES | Not Started |
| 12 | [Substring Distribution](https://cses.fi/problemset/task/2110) | CSES | Not Started |
| 13 | [Required Substring](https://cses.fi/problemset/task/1112) | CSES | Not Started |
| 14 | [Palindrome Queries](https://cses.fi/problemset/task/2420) | CSES | Not Started |
