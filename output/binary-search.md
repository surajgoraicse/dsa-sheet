# Binary Search — Problem Sheet

## Patterns Reference

| Pattern | Core Learning Objective & Intuition | Prerequisites | Priority |
|---|---|---|---|
| Classic Binary Search on Sorted Array | Master the core mechanic: halve the search space each step using a monotonic comparison, and get the boundary conditions right. | Sorted arrays | 🔥 High |
| Lower Bound / Upper Bound (First & Last Occurrence) | Adapt classic binary search to find the leftmost/rightmost index satisfying a condition, not just an exact match. | Classic Binary Search | 🔥 High |
| Binary Search on Rotated/Modified Arrays | Detect which half is "properly sorted" at each step and decide which half to discard, even when the array isn't fully sorted. | Classic Binary Search | 🔥 High |
| Binary Search on Answer (Monotonic Predicate) | Reframe an optimization problem as "can I achieve X?", binary-searching over the answer space itself instead of array indices. | Classic Binary Search | 🔥 High |
| Binary Search on 2D Matrix (Row/Column Monotonicity) | Exploit row-wise and column-wise sorted order to eliminate a full row or column per comparison, not just one element. | Classic Binary Search | ⚡ Medium |
| Binary Search + Greedy Feasibility Check | Pair a binary-searched candidate value with a greedy/simulation "is this feasible?" check. | Binary Search on Answer, Greedy basics | 🔥 High |
| Ternary Search / Search on Unimodal Functions | Extend binary search to functions that first increase then decrease (or vice versa), narrowing toward a single peak/valley. | Binary Search on Answer | ⚡ Medium |
| Binary Search on Implicit/Infinite Search Space | Search when there's no explicit array — only a predicate function and bounds you must define yourself. | Binary Search on Answer | ⚡ Medium |

---

## Table of Contents
- [Classic Binary Search on Sorted Array](#classic-binary-search-on-sorted-array)
- [Lower Bound / Upper Bound (First & Last Occurrence)](#lower-bound--upper-bound-first--last-occurrence)
- [Binary Search on Rotated/Modified Arrays](#binary-search-on-rotatedmodified-arrays)
- [Binary Search on Answer (Monotonic Predicate)](#binary-search-on-answer-monotonic-predicate)
- [Binary Search on 2D Matrix (Row/Column Monotonicity)](#binary-search-on-2d-matrix-rowcolumn-monotonicity)
- [Binary Search + Greedy Feasibility Check](#binary-search--greedy-feasibility-check)
- [Ternary Search / Search on Unimodal Functions](#ternary-search--search-on-unimodal-functions)
- [Binary Search on Implicit/Infinite Search Space](#binary-search-on-implicitinfinite-search-space)
- [Uncategorized / Needs Review](#uncategorized--needs-review)

---

## Classic Binary Search on Sorted Array

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Binary search to find X in sorted array](https://leetcode.com/problems/binary-search/) | Striver | Not Started |
| 2 | [Search Insert Position](https://leetcode.com/problems/search-insert-position/) | Striver | Not Started |
| 3 | [Ceil The Floor](https://www.geeksforgeeks.org/problems/ceil-the-floor2802/1) | Striver | Not Started |

## Lower Bound / Upper Bound (First & Last Occurrence)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Implement Lower Bound](https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1) | Striver | Not Started |
| 2 | [Implement Upper Bound](https://www.geeksforgeeks.org/problems/ceil-the-floor2802/1) | Striver | Not Started |
| 3 | [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | Striver | Not Started |
| 4 | [Count Occurrences in a Sorted Array](https://www.geeksforgeeks.org/problems/number-of-occurrence2259/1) | Striver | Not Started |

## Binary Search on Rotated/Modified Arrays

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | Striver | Not Started |
| 2 | [Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/) | Striver | Not Started |
| 3 | [Find minimum in rotated sorted array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | Striver | Not Started |
| 4 | [How many times has the array been rotated](https://www.geeksforgeeks.org/problems/rotation4723/1) | Striver | Not Started |
| 5 | [Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/) | Striver | Not Started |

## Binary Search on Answer (Monotonic Predicate)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Find the Nth root of M](https://www.geeksforgeeks.org/problems/find-nth-root-of-m5843/1) | Striver | Not Started |
| 2 | [Find the square root of a number](https://leetcode.com/problems/sqrtx/) | Striver | Not Started |
| 3 | [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) | Striver | Not Started |
| 4 | [Minimum Number of Days to Make M Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/) | Striver | Not Started |
| 5 | [Find the Smallest Divisor Given a Threshold](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/) | Striver | Not Started |
| 6 | [Capacity to Ship Packages within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) | Striver | Not Started |
| 7 | [Aggressive Cows](https://www.geeksforgeeks.org/problems/aggressive-cows/1) | Striver | Not Started |
| 8 | [Book Allocation Problem](https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1) | Striver | Not Started |
| 9 | [Split array - Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) | Striver | Not Started |
| 10 | [Painter's Partition Problem](https://www.geeksforgeeks.org/problems/the-painters-partition-problem1702/1) | Striver | Not Started |
| 11 | [Minimise Maximum Distance between Gas Stations](https://www.geeksforgeeks.org/problems/minimize-max-distance-to-gas-station/1) | Striver | Not Started |
| 12 | [Factory Machines](https://cses.fi/problemset/task/1620) | CSES | Not Started |
| 13 | [Array Division](https://cses.fi/problemset/task/1085) | CSES | Not Started |

## Binary Search on 2D Matrix (Row/Column Monotonicity)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Search in a 2D matrix](https://leetcode.com/problems/search-a-2d-matrix/) | Striver | Not Started |
| 2 | [Search in a 2D matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/) | Striver | Not Started |
| 3 | [Find Peak Element II](https://leetcode.com/problems/find-a-peak-element-ii/) | Striver | Not Started |
| 4 | [Row with max 1s](https://www.geeksforgeeks.org/problems/row-with-max-1s0023/1) | Striver | Not Started |
| 5 | [Median in a row wise sorted matrix](https://www.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1) | Striver | Not Started |

## Binary Search + Greedy Feasibility Check

| # | Problem (linked) | Source | Status |
|---|---|---|---|

## Ternary Search / Search on Unimodal Functions

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Find Peak Element](https://leetcode.com/problems/find-peak-element/) | Striver | Not Started |

## Binary Search on Implicit/Infinite Search Space

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Kth Missing Positive Number](https://leetcode.com/problems/kth-missing-positive-number/) | Striver | Not Started |

## Uncategorized / Needs Review

| # | Problem (linked) | Source | Status |
|---|---|---|---|
