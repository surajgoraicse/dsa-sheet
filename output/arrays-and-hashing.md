# Arrays & Hashing — Problem Sheet

## Patterns Reference

| Pattern | Core Learning Objective & Intuition | Prerequisites | Priority |
|---|---|---|---|
| Frequency Counting & Hash Maps | Master hash maps/sets for O(1) existence checks, counting, and grouping — the entry point to almost every other pattern. | None | 🔥 High |
| Prefix Sum & Difference Arrays | Precompute cumulative sums for O(1) range-sum queries; use difference arrays to apply O(1) range updates. | Frequency Counting | 🔥 High |
| Two Sum / Complement Search | Single-pass lookups by storing "what you need to find" in a hash map instead of nested loops. | Hashing | 🔥 High |
| Kadane's Algorithm (Max/Min Subarray) | Track local-optimum-so-far vs. global-optimum, the seed idea behind 1D DP later. | None | 🔥 High |
| Sorting-First Techniques | Solve problems (anagram grouping, interval-adjacent checks, dedup) by imposing order before scanning. | None | ⚡ Medium |
| Cyclic Sort / In-Place Index Mapping | Use array values as implicit hash keys (value ↔ index) to find missing/duplicate numbers in O(1) space. | Arrays basics | ⚡ Medium |
| Matrix Traversal & In-Place Manipulation | Direction-vector traversal, spiral order, and in-place rotation/transpose on 2D arrays. | Arrays basics | ⚡ Medium |
| Subarray/Subsequence Counting via Prefix Hashing | Combine prefix sums with a hash map (prefix-sum frequency) to count subarrays matching a target sum/property. | Prefix Sum, Hashing | 🔥 High |

---

## Table of Contents
- [Frequency Counting & Hash Maps](#frequency-counting--hash-maps)
- [Prefix Sum & Difference Arrays](#prefix-sum--difference-arrays)
- [Two Sum / Complement Search](#two-sum--complement-search)
- [Kadane's Algorithm (Max/Min Subarray)](#kadanes-algorithm-maxmin-subarray)
- [Sorting-First Techniques](#sorting-first-techniques)
- [Cyclic Sort / In-Place Index Mapping](#cyclic-sort--in-place-index-mapping)
- [Matrix Traversal & In-Place Manipulation](#matrix-traversal--in-place-manipulation)
- [Subarray/Subsequence Counting via Prefix Hashing](#subarraysubsequence-counting-via-prefix-hashing)
- [Uncategorized / Needs Review](#uncategorized--needs-review)

---

## Frequency Counting & Hash Maps

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Majority Element-I](https://leetcode.com/problems/majority-element/) | Striver | Not Started |
| 2 | [Majority Element-II](https://leetcode.com/problems/majority-element-ii/) | Striver | Not Started |
| 3 | [Longest Consecutive Sequence in an Array](https://leetcode.com/problems/longest-consecutive-sequence/) | Striver | Not Started |
| 4 | [Remove duplicates from sorted array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | Striver | Not Started |
| 5 | [Playlist](https://cses.fi/problemset/task/1141) | CSES | Not Started |
| 6 | [Collecting Numbers](https://cses.fi/problemset/task/2216) | CSES | Not Started |
| 7 | [Collecting Numbers II](https://cses.fi/problemset/task/2217) | CSES | Not Started |

## Prefix Sum & Difference Arrays

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Longest subarray with sum K](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/) | Striver | Not Started |
| 2 | [Largest Subarray with Sum 0](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/) | Striver | Not Started |
| 3 | [Subarray Sums I](https://cses.fi/problemset/task/1660) | CSES | Not Started |
| 4 | [Subarray Sums II](https://cses.fi/problemset/task/1661) | CSES | Not Started |
| 5 | [Subarray Divisibility](https://cses.fi/problemset/task/1662) | CSES | Not Started |

## Two Sum / Complement Search

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | Striver | Not Started |
| 2 | [Sum of Two Values](https://cses.fi/problemset/task/1640) | CSES | Not Started |
| 3 | [Sum of Three Values](https://cses.fi/problemset/task/1641) | CSES | Not Started |
| 4 | [Sum of Four Values](https://cses.fi/problemset/task/1642) | CSES | Not Started |

## Kadane's Algorithm (Max/Min Subarray)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Kadane's Algorithm](https://leetcode.com/problems/maximum-subarray/) | Striver | Not Started |
| 2 | [Maximum Product Subarray in an Array](https://leetcode.com/problems/maximum-product-subarray/) | Striver | Not Started |
| 3 | [Maximum Subarray Sum](https://cses.fi/problemset/task/1643) | CSES | Not Started |
| 4 | [Maximum Subarray Sum II](https://cses.fi/problemset/task/1644) | CSES | Not Started |

## Sorting-First Techniques

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Sort an array of 0's 1's and 2's](https://leetcode.com/problems/sort-colors/) | Striver | Not Started |
| 2 | [Next Permutation](https://leetcode.com/problems/next-permutation/) | Striver | Not Started |
| 3 | [Rearrange array elements by sign](https://leetcode.com/problems/rearrange-array-elements-by-sign/) | Striver | Not Started |
| 4 | [Leaders in an Array](https://leetcode.com/problems/buildings-with-an-ocean-view/) | Striver | Not Started |
| 5 | [Merge two sorted arrays without extra space](https://leetcode.com/problems/merge-sorted-array/) | Striver | Not Started |
| 6 | [Union of two sorted arrays](https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1) | Striver | Not Started |
| 7 | [Intersection of two sorted arrays](https://www.geeksforgeeks.org/problems/intersection-of-two-sorted-array-1587115620/1) | Striver | Not Started |
| 8 | [Concert Tickets](https://cses.fi/problemset/task/1091) | CSES | Not Started |
| 9 | [Movie Festival](https://cses.fi/problemset/task/1629) | CSES | Not Started |
| 10 | [Movie Festival II](https://cses.fi/problemset/task/1632) | CSES | Not Started |
| 11 | [Towers](https://cses.fi/problemset/task/1073) | CSES | Not Started |

## Cyclic Sort / In-Place Index Mapping

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Find missing number](https://leetcode.com/problems/missing-number/) | Striver | Not Started |
| 2 | [Find the repeating and missing number](https://www.geeksforgeeks.org/problems/find-missing-and-repeating2512/1) | Striver | Not Started |
| 3 | [Missing Coin Sum](https://cses.fi/problemset/task/2183) | CSES | Not Started |

## Matrix Traversal & In-Place Manipulation

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Print the matrix in spiral manner](https://leetcode.com/problems/spiral-matrix/) | Striver | Not Started |
| 2 | [Rotate matrix by 90 degrees](https://leetcode.com/problems/rotate-image/) | Striver | Not Started |
| 3 | [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) | Striver | Not Started |
| 4 | [Pascal's Triangle I](https://leetcode.com/problems/pascals-triangle/) | Striver | Not Started |
| 5 | [Pascal's Triangle II](https://leetcode.com/problems/pascals-triangle-ii/) | Striver | Not Started |
| 6 | [Pascal's Triangle III](https://takeuforward.org/practice/dsa/pascals-triangle-iii?category=faqs-medium&source=strivers-a2z-dsa-sheet) | Striver | Not Started |

## Subarray/Subsequence Counting via Prefix Hashing

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Count subarrays with given sum](https://leetcode.com/problems/subarray-sum-equals-k/) | Striver | Not Started |
| 2 | [Count subarrays with given xor K](https://www.geeksforgeeks.org/problems/count-subarray-with-given-xor/1) | Striver | Not Started |
| 3 | [Distinct Values Subarrays II](https://cses.fi/problemset/task/2428) | CSES | Not Started |

## Uncategorized / Needs Review

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Linear Search](https://www.geeksforgeeks.org/problems/who-will-win-1587115621/1) | Striver | Not Started |
| 2 | [Largest Element](https://takeuforward.org/practice/dsa/largest-element?category=fundamentals&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 3 | [Second Largest Element](https://www.geeksforgeeks.org/problems/second-largest3735/1) | Striver | Not Started |
| 4 | [Maximum Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/) | Striver | Not Started |
| 5 | [Left Rotate Array by One](https://leetcode.com/problems/rotate-array/) | Striver | Not Started |
| 6 | [Left Rotate Array by K Places](https://leetcode.com/problems/rotate-array/) | Striver | Not Started |
| 7 | [Move Zeros to End](https://leetcode.com/problems/move-zeroes/) | Striver | Not Started |
| 8 | [Count Inversions](https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1) | Striver | Not Started |
| 9 | [Reverse Pairs](https://leetcode.com/problems/reverse-pairs/) | Striver | Not Started |
| 10 | [3 Sum](https://leetcode.com/problems/3sum/) | Striver | Not Started |
| 11 | [4 Sum](https://leetcode.com/problems/4sum/) | Striver | Not Started |
| 12 | [Stick Lengths](https://cses.fi/problemset/task/1074) | CSES | Not Started |
| 13 | [Ferris Wheel](https://cses.fi/problemset/task/1090) | CSES | Not Started |
| 14 | [Tasks and Deadlines](https://cses.fi/problemset/task/1630) | CSES | Not Started |
| 15 | [Reading Books](https://cses.fi/problemset/task/1631) | CSES | Not Started |
| 16 | [Nested Ranges Check](https://cses.fi/problemset/task/2168) | CSES | Not Started |
| 17 | [Nested Ranges Count](https://cses.fi/problemset/task/2169) | CSES | Not Started |
| 18 | [Room Allocation](https://cses.fi/problemset/task/1164) | CSES | Not Started |
| 19 | [Factory Machines](https://cses.fi/problemset/task/1620) | CSES | Not Started |
| 20 | [Array Division](https://cses.fi/problemset/task/1085) | CSES | Not Started |
| 21 | [Traffic Lights](https://cses.fi/problemset/task/1163) | CSES | Not Started |
| 22 | [Nearest Smaller Values](https://cses.fi/problemset/task/1645) | CSES | Not Started |
| 23 | [Josephus Problem I](https://cses.fi/problemset/task/2162) | CSES | Not Started |
| 24 | [Josephus Problem II](https://cses.fi/problemset/task/2163) | CSES | Not Started |
| 25 | [Distinct Values Subarrays](https://cses.fi/problemset/task/3420) | CSES | Not Started |
| 26 | [Distinct Values Subsequences](https://cses.fi/problemset/task/3421) | CSES | Not Started |
