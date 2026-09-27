# Segment / Fenwick Tree — Problem Sheet

## Patterns Reference

| Pattern | Core Learning Objective & Intuition | Prerequisites | Priority |
|---|---|---|---|
| Fenwick Tree (BIT) — Point Update, Range Query | Master the core BIT mechanic: use the lowest-set-bit trick to update/query prefix sums in O(log n). | Bit Manipulation basics, Prefix Sum | 🔥 High |
| Fenwick Tree — Range Update, Point Query | Apply a difference-array trick on top of a BIT so a range update becomes two point updates. | Fenwick Tree (Point Update) | 🔥 High |
| Fenwick Tree — Range Update, Range Query | Maintain two BITs simultaneously to derive range-sum queries under range updates. | Fenwick Tree (Range Update, Point Query) | ⚡ Medium |
| Segment Tree — Build, Point Update, Range Query | Build a binary tree over array ranges where each node stores an aggregate. | Recursion, Divide and Conquer | 🔥 High |
| Segment Tree — Lazy Propagation (Range Update, Range Query) | Defer pending updates at a node using a "lazy" tag. | Segment Tree (Point Update) | 🔥 High |
| Segment Tree for Non-Sum Aggregates (Min/Max/GCD) | Recognize that the same segment tree structure generalizes to any associative combine function. | Segment Tree (Point Update) | 🔥 High |
| Merge Sort Tree (Segment Tree of Sorted Vectors) | Store a sorted copy of each range at every node to answer "count elements ≤ X in range [l,r]". | Segment Tree, Binary Search | ⚡ Medium |
| Persistent Segment Tree | Create a new "version" of the tree on each update by only copying O(log n) path. | Segment Tree (Point Update) | ⚡ Medium |
| Fenwick Tree for Counting Inversions / Order Statistics | Use coordinate compression plus a BIT over ranks to count inversions or find k-th smallest. | Fenwick Tree (Point Update), Sorting | 🔥 High |
| Segment Tree Beats / Advanced Range Operations | Extend lazy propagation to non-trivial operations (range chmin/chmax). | Segment Tree (Lazy Propagation) | ⚡ Medium |

---

## Table of Contents
- [Fenwick Tree (BIT) — Point Update, Range Query](#fenwick-tree-bit--point-update-range-query)
- [Segment Tree — Build, Point Update, Range Query](#segment-tree--build-point-update-range-query)
- [Segment Tree — Lazy Propagation](#segment-tree--lazy-propagation-range-update-range-query)
- [Segment Tree for Non-Sum Aggregates](#segment-tree-for-non-sum-aggregates-minmaxgcd)
- [Persistent Segment Tree](#persistent-segment-tree)
- [Uncategorized / Needs Review](#uncategorized--needs-review)

---

## Fenwick Tree (BIT) — Point Update, Range Query

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Dynamic Range Sum Queries](https://cses.fi/problemset/task/1648) | CSES | Not Started |
| 2 | [Range Xor Queries](https://cses.fi/problemset/task/1650) | CSES | Not Started |
| 3 | [Salary Queries](https://cses.fi/problemset/task/1144) | CSES | Not Started |

## Segment Tree — Build, Point Update, Range Query

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Static Range Sum Queries](https://cses.fi/problemset/task/1646) | CSES | Not Started |
| 2 | [Static Range Minimum Queries](https://cses.fi/problemset/task/1647) | CSES | Not Started |
| 3 | [Dynamic Range Minimum Queries](https://cses.fi/problemset/task/1649) | CSES | Not Started |
| 4 | [Hotel Queries](https://cses.fi/problemset/task/1143) | CSES | Not Started |
| 5 | [List Removals](https://cses.fi/problemset/task/1749) | CSES | Not Started |
| 6 | [Prefix Sum Queries](https://cses.fi/problemset/task/2166) | CSES | Not Started |
| 7 | [Pizzeria Queries](https://cses.fi/problemset/task/2206) | CSES | Not Started |
| 8 | [Subarray Sum Queries](https://cses.fi/problemset/task/1190) | CSES | Not Started |
| 9 | [Subarray Sum Queries II](https://cses.fi/problemset/task/3226) | CSES | Not Started |

## Segment Tree — Lazy Propagation (Range Update, Range Query)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Range Update Queries](https://cses.fi/problemset/task/1651) | CSES | Not Started |
| 2 | [Range Updates and Sums](https://cses.fi/problemset/task/1735) | CSES | Not Started |
| 3 | [Polynomial Queries](https://cses.fi/problemset/task/1736) | CSES | Not Started |

## Segment Tree for Non-Sum Aggregates (Min/Max/GCD)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Visible Buildings Queries](https://cses.fi/problemset/task/3304) | CSES | Not Started |
| 2 | [Range Interval Queries](https://cses.fi/problemset/task/3163) | CSES | Not Started |

## Persistent Segment Tree

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Range Queries and Copies](https://cses.fi/problemset/task/1737) | CSES | Not Started |

## Uncategorized / Needs Review

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Forest Queries](https://cses.fi/problemset/task/1652) | CSES | Not Started |
| 2 | [Forest Queries II](https://cses.fi/problemset/task/1739) | CSES | Not Started |
| 3 | [Distinct Values Queries](https://cses.fi/problemset/task/1734) | CSES | Not Started |
| 4 | [Distinct Values Queries II](https://cses.fi/problemset/task/3356) | CSES | Not Started |
| 5 | [Increasing Array Queries](https://cses.fi/problemset/task/2416) | CSES | Not Started |
| 6 | [Movie Festival Queries](https://cses.fi/problemset/task/1664) | CSES | Not Started |
| 7 | [Missing Coin Sum Queries](https://cses.fi/problemset/task/2184) | CSES | Not Started |
