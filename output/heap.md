# Heap / Priority Queue — Problem Sheet

## Patterns Reference

| Pattern | Core Learning Objective & Intuition | Prerequisites | Priority |
|---|---|---|---|
| Heap Construction & Basic Operations | Master push/pop/peek mechanics and the heap-invariant that keeps the extremum at the root in O(log n). | Arrays basics | 🔥 High |
| Top-K Elements (Fixed-Size Heap) | Maintain a heap of size K, evicting the worst element on each insert, to track the K largest/smallest in O(n log K). | Heap Construction | 🔥 High |
| K-Way Merge | Push one candidate from each of K sorted sources into a heap, repeatedly popping the min and pushing that source's next element. | Heap Construction, Merge Two Lists | 🔥 High |
| Two-Heap Technique (Median Maintenance) | Balance a max-heap (lower half) and min-heap (upper half) so the median is always accessible at the two roots in O(1). | Heap Construction | 🔥 High |
| Heap + Greedy Scheduling (Task/Interval Problems) | Use a heap to always pick the "next best" choice greedily under ordering constraints. | Heap Construction, Greedy basics | 🔥 High |
| Custom Comparator Heaps (Multi-Criteria Ordering) | Design comparators that order heap elements by composite/derived keys rather than raw values. | Heap Construction | ⚡ Medium |
| Heap-Based Dijkstra-Style Lazy Deletion | Push updated/duplicate entries instead of decreasing keys in place, and lazily discard stale entries when popped. | Heap Construction, Graph basics | 🔥 High |
| Heapify (Build Heap in O(n)) | Understand why bottom-up heap construction is O(n), not O(n log n). | Heap Construction | ⚡ Medium |

---

## Table of Contents
- [Heap Construction & Basic Operations](#heap-construction--basic-operations)
- [Top-K Elements (Fixed-Size Heap)](#top-k-elements-fixed-size-heap)
- [K-Way Merge](#k-way-merge)
- [Two-Heap Technique (Median Maintenance)](#two-heap-technique-median-maintenance)
- [Heap + Greedy Scheduling](#heap--greedy-scheduling-taskinterval-problems)
- [Custom Comparator Heaps](#custom-comparator-heaps-multi-criteria-ordering)
- [Heap-Based Dijkstra-Style Lazy Deletion](#heap-based-dijkstra-style-lazy-deletion)
- [Heapify](#heapify-build-heap-in-on)
- [Uncategorized / Needs Review](#uncategorized--needs-review)

---

## Heap Construction & Basic Operations

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Implement Min Heap](https://www.geeksforgeeks.org/problems/operations-on-binary-min-heap/1) | Striver | Not Started |
| 2 | [Check if an Array is a Min Heap](https://www.geeksforgeeks.org/problems/does-array-represent-heap4702/1) | Striver | Not Started |
| 3 | [Convert Min Heap to Max Heap](https://www.geeksforgeeks.org/problems/convert-min-heap-to-max-heap-1666385109/1) | Striver | Not Started |

## Top-K Elements (Fixed-Size Heap)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | Striver | Not Started |
| 2 | [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) | Striver | Not Started |
| 3 | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | Striver | Not Started |
| 4 | [Sort Characters by Frequency](https://leetcode.com/problems/sort-characters-by-frequency/) | Striver | Not Started |
| 5 | [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) | Striver | Not Started |

## K-Way Merge

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) | Striver | Not Started |
| 2 | [Merge K Sorted Arrays](https://www.geeksforgeeks.org/problems/merge-k-sorted-arrays/1) | Striver | Not Started |
| 3 | [Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/) | Striver | Not Started |

## Two-Heap Technique (Median Maintenance)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) | Striver | Not Started |

## Heap + Greedy Scheduling (Task/Interval Problems)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Task Scheduler](https://leetcode.com/problems/task-scheduler/) | Striver | Not Started |
| 2 | [Hand of Straights](https://leetcode.com/problems/hand-of-straights/) | Striver | Not Started |
| 3 | [Design Twitter](https://leetcode.com/problems/design-twitter/) | Striver | Not Started |

## Custom Comparator Heaps (Multi-Criteria Ordering)

| # | Problem (linked) | Source | Status |
|---|---|---|---|

## Heap-Based Dijkstra-Style Lazy Deletion

| # | Problem (linked) | Source | Status |
|---|---|---|---|

## Heapify (Build Heap in O(n))

| # | Problem (linked) | Source | Status |
|---|---|---|---|

## Uncategorized / Needs Review

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Replace each element by its rank in the array](https://leetcode.com/problems/rank-transform-of-an-array/) | Striver | Not Started |
