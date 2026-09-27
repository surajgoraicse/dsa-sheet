# Backtracking — Problem Sheet

## Patterns Reference

| Pattern | Core Learning Objective & Intuition | Prerequisites | Priority |
|---|---|---|---|
| Subsets / Power Set Generation | Master the core recursive "include or exclude" branching that generates every possible subset. | Recursion | 🔥 High |
| Permutations Generation | Build sequences by choosing an unused element at each recursive level, using a visited-tracker or swap-based in-place technique. | Recursion | 🔥 High |
| Combinations with Pruning | Generate fixed-size selections while pruning branches early when remaining elements can't possibly complete a valid combination. | Subsets Generation | 🔥 High |
| Combination Sum (Bounded/Unbounded Choices) | Extend combination backtracking to target-sum problems, learning when to advance the index (no reuse) vs. stay (reuse allowed). | Combinations with Pruning | 🔥 High |
| Duplicate Handling in Backtracking (Skip-Sibling Technique) | Sort input first, then skip adjacent duplicate choices at the same recursion depth to avoid generating duplicate results. | Combinations with Pruning | 🔥 High |
| Grid/Board Backtracking (Word Search, N-Queens style) | Combine DFS with a "place, recurse, un-place" cycle on a 2D board. | Recursion, Matrix Traversal | 🔥 High |
| Partitioning Backtracking (Palindrome/String Splits) | Backtrack over valid split points in a sequence, recursing on the remainder after each valid prefix segment. | String Partitioning (DP) | ⚡ Medium |
| Constraint Satisfaction (Sudoku-style) | Combine backtracking with constraint propagation, choosing the most-constrained cell first. | Grid Backtracking | ⚡ Medium |
| Backtracking with Memoization (Bridging to DP) | Recognize when overlapping subproblems in a backtracking search can be cached. | Backtracking basics, DP basics | 🔥 High |

---

## Table of Contents
- [Subsets / Power Set Generation](#subsets--power-set-generation)
- [Permutations Generation](#permutations-generation)
- [Combinations with Pruning](#combinations-with-pruning)
- [Combination Sum (Bounded/Unbounded Choices)](#combination-sum-boundedunbounded-choices)
- [Duplicate Handling in Backtracking](#duplicate-handling-in-backtracking-skip-sibling-technique)
- [Grid/Board Backtracking](#gridboard-backtracking-word-search-n-queens-style)
- [Partitioning Backtracking](#partitioning-backtracking-palindromestring-splits)
- [Constraint Satisfaction (Sudoku-style)](#constraint-satisfaction-sudoku-style)
- [Backtracking with Memoization](#backtracking-with-memoization-bridging-to-dp)
- [Uncategorized / Needs Review](#uncategorized--needs-review)

---

## Subsets / Power Set Generation

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Generate All Subsequences](https://www.geeksforgeeks.org/problems/power-set4302/1) | Striver | Not Started |
| 2 | [Subset Sum I](https://www.geeksforgeeks.org/problems/subset-sums2234/1) | Striver | Not Started |
| 3 | [Subset Sum II](https://leetcode.com/problems/subsets-ii/) | Striver | Not Started |
| 4 | [Power Set using Bit Manipulation](https://leetcode.com/problems/subsets/) | Striver | Not Started |
| 5 | [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | Striver | Not Started |

## Permutations Generation

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Print All Permutations of a String/Array](https://leetcode.com/problems/permutations/) | Striver | Not Started |

## Combinations with Pruning

| # | Problem (linked) | Source | Status |
|---|---|---|---|

## Combination Sum (Bounded/Unbounded Choices)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Combination Sum](https://leetcode.com/problems/combination-sum/) | Striver | Not Started |
| 2 | [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/) | Striver | Not Started |
| 3 | [Combination Sum III](https://leetcode.com/problems/combination-sum-iii/) | Striver | Not Started |

## Duplicate Handling in Backtracking (Skip-Sibling Technique)

| # | Problem (linked) | Source | Status |
|---|---|---|---|

## Grid/Board Backtracking (Word Search, N-Queens style)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [N-Queen Problem](https://leetcode.com/problems/n-queens/) | Striver | Not Started |
| 2 | [Word Search](https://leetcode.com/problems/word-search/) | Striver | Not Started |
| 3 | [Rat in a Maze](https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1) | Striver | Not Started |
| 4 | [M Coloring Problem](https://www.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1) | Striver | Not Started |

## Partitioning Backtracking (Palindrome/String Splits)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) | Striver | Not Started |

## Constraint Satisfaction (Sudoku-style)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Sudoku Solver](https://leetcode.com/problems/sudoku-solver/) | Striver | Not Started |

## Backtracking with Memoization (Bridging to DP)

| # | Problem (linked) | Source | Status |
|---|---|---|---|

## Uncategorized / Needs Review

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Expression Add Operators](https://leetcode.com/problems/expression-add-operators/) | Striver | Not Started |
| 2 | [Kth Permutation Sequence](https://leetcode.com/problems/permutation-sequence/) | Striver | Not Started |
| 3 | [Count Good Numbers](https://leetcode.com/problems/count-good-numbers/) | Striver | Not Started |
| 4 | [Sort a Stack Using Recursion](https://www.geeksforgeeks.org/problems/sort-a-stack/1) | Striver | Not Started |
| 5 | [Reverse a Stack Using Recursion](https://www.geeksforgeeks.org/problems/reverse-a-stack/1) | Striver | Not Started |
