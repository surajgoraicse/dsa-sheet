# Dynamic Programming — Problem Sheet

## Patterns Reference

| DP Pattern | Core Learning Objective & Intuition | Prerequisites | Priority |
|---|---|---|---|
| Fibonacci Style & Linear 1D | Master the base mechanics of memoization (Top-Down) vs. Tabulation (Bottom-Up), state arrays, and space optimization. | Recursion | 🔥 High |
| Matrix & 2D Grid | Transition from 1D states to 2D grid coordinates. Learn grid boundaries, pathfinding minimization/maximization, and direction vectors. | Linear 1D | 🔥 High |
| 0/1 Knapsack & Bounded States | The foundation of decision-making. Learn the "include/exclude" choice mechanic and tracking changing capacities. | Linear 1D | 🔥 High |
| Unbounded Knapsack & Combinations | Transition from single-use items to infinite-use choices. Learn how loop order changes counts (Permutations vs. Combinations). | 0/1 Knapsack | 🔥 High |
| Longest Common Subsequence (LCS) | The entry point to multi-sequence strings. Learn how to compare two independent pointers matching characters across strings. | Matrix / 2D Grid | 🔥 High |
| Sequence Matching & Substrings | Extends LCS to wildcards, regex, and edit distances. Focuses on handling complex boundary conditions. | LCS | ⚡ Medium |
| Longest Increasing Subsequence (LIS) | Introduces coordinate-based decisions where the optimal past state must be searched via a nested loop or Binary Search (O(N log N)). | Linear 1D | 🔥 High |
| State Machine DP (Stock Variant) | Teaches how to model complex internal states (e.g., holding, sold, cooling down) as explicit transitions. | Linear 1D | 🔥 High |
| Circular / Ring Structures | Solves wrap-around dependencies by breaking the ring at strategic points or running dual DP sweeps. | Linear 1D / Knapsack | ⚡ Medium |
| String Partitioning / Palindromes | Splitting strings into optimal segments. Teaches how to look inward-outward or precompute valid boolean matrices. | Matrix / LCS | 🔥 High |
| Interval DP & Matrix Chain Multiplication (MCM) | Solves range-based merging problems by computing optimal answers for small windows and expanding outward. | String Partitioning | 🔥 High |
| DP on Trees | Combines Tree traversals (DFS) with DP state aggregation, passing optimal sub-tree decisions up to parent nodes. | Recursion / Trees | 🔥 High |
| Bitmask DP | Used when choices depend on the exact subset of elements already used. Replaces sets/boolean arrays with integer bitmasks (O(2^N)). | Combinatorics / Bitwise | 🔥 High |
| DP on Graphs / Digit DP | Tracking states across topological sorts, shortest path DAGs, or building numbers digit-by-digit under mathematical constraints. | Graph Theory / Bitmask | ⚡ Medium |

---

## Table of Contents
- [Fibonacci Style & Linear 1D](#fibonacci-style--linear-1d)
- [Matrix & 2D Grid](#matrix--2d-grid)
- [0/1 Knapsack & Bounded States](#01-knapsack--bounded-states)
- [Unbounded Knapsack & Combinations](#unbounded-knapsack--combinations)
- [Longest Common Subsequence (LCS)](#longest-common-subsequence-lcs)
- [Sequence Matching & Substrings](#sequence-matching--substrings)
- [Longest Increasing Subsequence (LIS)](#longest-increasing-subsequence-lis)
- [State Machine DP (Stock Variant)](#state-machine-dp-stock-variant)
- [Circular / Ring Structures](#circular--ring-structures)
- [String Partitioning / Palindromes](#string-partitioning--palindromes)
- [Interval DP & Matrix Chain Multiplication (MCM)](#interval-dp--matrix-chain-multiplication-mcm)
- [DP on Trees](#dp-on-trees)
- [Bitmask DP](#bitmask-dp)
- [DP on Graphs / Digit DP](#dp-on-graphs--digit-dp)
- [Uncategorized / Needs Review](#uncategorized--needs-review)

---

## Fibonacci Style & Linear 1D

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Climbing stairs](https://leetcode.com/problems/climbing-stairs/) | Striver | Not Started |
| 2 | [Frog Jump](https://www.geeksforgeeks.org/problems/geek-jump/1) | Striver | Not Started |
| 3 | [Frog jump with K distances](https://takeuforward.org/practice/dsa/frog-jump-with-k-distances?category=1d-dp&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 4 | [Maximum sum of non adjacent elements](https://leetcode.com/problems/house-robber/) | Striver | Not Started |
| 5 | [House robber](https://leetcode.com/problems/house-robber/) | Striver | Not Started |
| 6 | [Dice Combinations](https://cses.fi/problemset/task/1633) | CSES | Not Started |
| 7 | [Removing Digits](https://cses.fi/problemset/task/1637) | CSES | Not Started |
| 8 | [Counting Towers](https://cses.fi/problemset/task/2413) | CSES | Not Started |

## Matrix & 2D Grid

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Ninja's training](https://www.geeksforgeeks.org/problems/geeks-training/1) | Striver | Not Started |
| 2 | [Grid unique paths](https://leetcode.com/problems/unique-paths/) | Striver | Not Started |
| 3 | [Unique paths II](https://leetcode.com/problems/unique-paths-ii/) | Striver | Not Started |
| 4 | [Minimum Falling Path Sum](https://leetcode.com/problems/minimum-falling-path-sum/) | Striver | Not Started |
| 5 | [Triangle](https://leetcode.com/problems/triangle/) | Striver | Not Started |
| 6 | [Cherry pickup II](https://leetcode.com/problems/cherry-pickup-ii/) | Striver | Not Started |
| 7 | [Grid Paths I](https://cses.fi/problemset/task/1638) | CSES | Not Started |
| 8 | [Minimal Grid Path](https://cses.fi/problemset/task/3359) | CSES | Not Started |
| 9 | [Array Description](https://cses.fi/problemset/task/1746) | CSES | Not Started |

## 0/1 Knapsack & Bounded States

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Subset sum equals to target](https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1) | Striver | Not Started |
| 2 | [Partition equal subset sum](https://leetcode.com/problems/partition-equal-subset-sum/) | Striver | Not Started |
| 3 | [Partition a set into two subsets with minimum absolute sum difference](https://leetcode.com/problems/last-stone-weight-ii/) | Striver | Not Started |
| 4 | [Count subsets with sum K](https://www.geeksforgeeks.org/problems/perfect-sum-problem5633/1) | Striver | Not Started |
| 5 | [Count partitions with given difference](https://www.geeksforgeeks.org/problems/partitions-with-given-difference/1) | Striver | Not Started |
| 6 | [0 and 1 Knapsack](https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1) | Striver | Not Started |
| 7 | [Target sum](https://leetcode.com/problems/target-sum/) | Striver | Not Started |
| 8 | [Book Shop](https://cses.fi/problemset/task/1158) | CSES | Not Started |
| 9 | [Money Sums](https://cses.fi/problemset/task/1745) | CSES | Not Started |
| 10 | [Two Sets II](https://cses.fi/problemset/task/1093) | CSES | Not Started |

## Unbounded Knapsack & Combinations

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Minimum coins](https://leetcode.com/problems/coin-change/) | Striver | Not Started |
| 2 | [Coin change II](https://leetcode.com/problems/coin-change-ii/) | Striver | Not Started |
| 3 | [Unbounded knapsack](https://takeuforward.org/practice/dsa/unbounded-knapsack?category=dp-on-subsequences&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 4 | [Rod cutting problem](https://www.geeksforgeeks.org/problems/rod-cutting0840/1) | Striver | Not Started |
| 5 | [Minimizing Coins](https://cses.fi/problemset/task/1634) | CSES | Not Started |
| 6 | [Coin Combinations I](https://cses.fi/problemset/task/1635) | CSES | Not Started |
| 7 | [Coin Combinations II](https://cses.fi/problemset/task/1636) | CSES | Not Started |

## Longest Common Subsequence (LCS)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Longest common subsequence](https://leetcode.com/problems/longest-common-subsequence/) | Striver | Not Started |
| 2 | [Longest common substring](https://www.geeksforgeeks.org/problems/longest-common-substring1452/1) | Striver | Not Started |
| 3 | [Shortest common supersequence](https://leetcode.com/problems/shortest-common-supersequence/) | Striver | Not Started |
| 4 | [Minimum insertions or deletions to convert string A to B](https://leetcode.com/problems/delete-operation-for-two-strings/) | Striver | Not Started |
| 5 | [Longest Common Subsequence](https://cses.fi/problemset/task/3403) | CSES | Not Started |

## Sequence Matching & Substrings

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Distinct subsequences](https://leetcode.com/problems/distinct-subsequences/) | Striver | Not Started |
| 2 | [Edit distance](https://leetcode.com/problems/edit-distance/) | Striver, CSES | Not Started |
| 3 | [Wildcard matching](https://leetcode.com/problems/wildcard-matching/) | Striver | Not Started |
| 4 | [Word Break](https://leetcode.com/problems/word-break/) | Striver | Not Started |

## Longest Increasing Subsequence (LIS)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) | Striver | Not Started |
| 2 | [Print Longest Increasing Subsequence](https://takeuforward.org/practice/dsa/print-longest-increasing-subsequence?category=lis-dp&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 3 | [Largest Divisible Subset](https://leetcode.com/problems/largest-divisible-subset/) | Striver | Not Started |
| 4 | [Longest String Chain](https://leetcode.com/problems/longest-string-chain/) | Striver | Not Started |
| 5 | [Longest Bitonic Subsequence](https://www.geeksforgeeks.org/problems/longest-bitonic-subsequence0824/1) | Striver | Not Started |
| 6 | [Number of Longest Increasing Subsequences](https://leetcode.com/problems/number-of-longest-increasing-subsequence/) | Striver | Not Started |
| 7 | [Increasing Subsequence](https://cses.fi/problemset/task/1145) | CSES | Not Started |
| 8 | [Increasing Subsequence II](https://cses.fi/problemset/task/1748) | CSES | Not Started |

## State Machine DP (Stock Variant)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Best time to buy and sell stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | Striver | Not Started |
| 2 | [Best time to buy and sell stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) | Striver | Not Started |
| 3 | [Best time to buy and sell stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) | Striver | Not Started |
| 4 | [Best time to buy and sell stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/) | Striver | Not Started |
| 5 | [Best time to buy and sell stock with transaction fees](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/) | Striver | Not Started |
| 6 | [Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) | Striver | Not Started |

## Circular / Ring Structures

| # | Problem (linked) | Source | Status |
|---|---|---|---|

## String Partitioning / Palindromes

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Longest palindromic subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/) | Striver | Not Started |
| 2 | [Minimum insertions to make string palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/) | Striver | Not Started |
| 3 | [Count Palindromic Subsequences](https://leetcode.com/problems/count-palindromic-subsequences/) | Striver | Not Started |
| 4 | [Palindrome partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/) | Striver | Not Started |

## Interval DP & Matrix Chain Multiplication (MCM)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Matrix chain multiplication](https://www.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1) | Striver | Not Started |
| 2 | [Burst balloons](https://leetcode.com/problems/burst-balloons/) | Striver | Not Started |
| 3 | [Partition Array for Maximum Sum](https://leetcode.com/problems/partition-array-for-maximum-sum/) | Striver | Not Started |
| 4 | [Different Ways to Evaluate a Boolean Expression](https://leetcode.com/problems/parsing-a-boolean-expression/) | Striver | Not Started |
| 5 | [Rectangle Cutting](https://cses.fi/problemset/task/1744) | CSES | Not Started |
| 6 | [Removal Game](https://cses.fi/problemset/task/1097) | CSES | Not Started |

## DP on Trees

| # | Problem (linked) | Source | Status |
|---|---|---|---|

## Bitmask DP

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Elevator Rides](https://cses.fi/problemset/task/1653) | CSES | Not Started |
| 2 | [Counting Tilings](https://cses.fi/problemset/task/2181) | CSES | Not Started |

## DP on Graphs / Digit DP

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Counting Numbers](https://cses.fi/problemset/task/2220) | CSES | Not Started |
| 2 | [Projects](https://cses.fi/problemset/task/1140) | CSES | Not Started |

## Uncategorized / Needs Review

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Mountain Range](https://cses.fi/problemset/task/3314) | CSES | Not Started |
