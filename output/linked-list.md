# Linked List — Problem Sheet

## Patterns Reference

| Pattern | Core Learning Objective & Intuition | Prerequisites | Priority |
|---|---|---|---|
| Traversal & Basic Manipulation | Master pointer rewiring fundamentals: insert, delete, and traverse without losing references to `next` nodes. | None | 🔥 High |
| Fast-Slow Pointers (Middle & Cycle Detection) | Find the middle node or detect a cycle in one pass by advancing two pointers at different speeds. | Two Pointers basics | 🔥 High |
| Reversal (Iterative & Recursive) | Rewire `next` pointers in-place to reverse a full list or a bounded sub-range, tracking `prev`/`curr`/`next` correctly. | Traversal & Basic Manipulation | 🔥 High |
| Dummy Node Technique | Use a sentinel head node to eliminate special-casing when the real head might be removed or changed. | Traversal & Basic Manipulation | 🔥 High |
| Merge Two/K Sorted Lists | Combine two-pointer merging logic with linked list rewiring; extend to K lists via divide-and-conquer or a heap. | Reversal, Heap basics | 🔥 High |
| Cycle Detection & Cycle Start (Floyd's Algorithm) | Extend fast-slow meeting-point logic with a second phase to locate the exact node where a cycle begins. | Fast-Slow Pointers | 🔥 High |
| Deep Copy with Random/Auxiliary Pointers | Clone a list containing extra pointers using interleaving or a hash map to preserve reference integrity. | Traversal & Basic Manipulation | ⚡ Medium |
| Reordering & Partitioning (Reorder List, Odd-Even, Partition) | Split a list into logical sub-lists (by position or value) and reconnect them in a new order without extra space. | Reversal, Fast-Slow Pointers | ⚡ Medium |
| LRU/LFU Cache Design (Doubly Linked List + Hash Map) | Combine O(1) hash map lookups with a doubly linked list to maintain access-order eviction policies. | Dummy Node Technique, Hashing | 🔥 High |

---

## Table of Contents
- [Traversal & Basic Manipulation](#traversal--basic-manipulation)
- [Fast-Slow Pointers (Middle & Cycle Detection)](#fast-slow-pointers-middle--cycle-detection)
- [Reversal (Iterative & Recursive)](#reversal-iterative--recursive)
- [Dummy Node Technique](#dummy-node-technique)
- [Merge Two/K Sorted Lists](#merge-twok-sorted-lists)
- [Cycle Detection & Cycle Start (Floyd's Algorithm)](#cycle-detection--cycle-start-floyds-algorithm)
- [Deep Copy with Random/Auxiliary Pointers](#deep-copy-with-randomauxiliary-pointers)
- [Reordering & Partitioning](#reordering--partitioning)
- [LRU/LFU Cache Design](#lrulfu-cache-design)
- [Uncategorized / Needs Review](#uncategorized--needs-review)

---

## Traversal & Basic Manipulation

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Introduction to Linked List](https://www.geeksforgeeks.org/problems/introduction-to-linked-list/1) | Striver | Not Started |
| 2 | [Inserting a node in Linked List](https://www.geeksforgeeks.org/problems/linked-list-insertion-1587115620/1) | Striver | Not Started |
| 3 | [Deleting a node in Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list/) | Striver | Not Started |
| 4 | [Count nodes in Linked List](https://www.geeksforgeeks.org/problems/count-nodes-of-linked-list/1) | Striver | Not Started |
| 5 | [Search in Linked List](https://www.geeksforgeeks.org/problems/search-in-linked-list-1664434326/1) | Striver | Not Started |

## Fast-Slow Pointers (Middle & Cycle Detection)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Middle of a Linked List](https://leetcode.com/problems/middle-of-the-linked-list/) | Striver | Not Started |
| 2 | [Detect a Loop in Linked List](https://leetcode.com/problems/linked-list-cycle/) | Striver | Not Started |
| 3 | [Length of Loop in Linked List](https://www.geeksforgeeks.org/problems/find-length-of-loop/1) | Striver | Not Started |

## Reversal (Iterative & Recursive)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Reverse a Linked List (Iterative and Recursive)](https://leetcode.com/problems/reverse-linked-list/) | Striver | Not Started |
| 2 | [Reverse a Linked List in groups of Size K](https://leetcode.com/problems/reverse-nodes-in-k-group/) | Striver | Not Started |
| 3 | [Rotate a Linked List](https://leetcode.com/problems/rotate-list/) | Striver | Not Started |
| 4 | [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/) | Striver | Not Started |

## Dummy Node Technique

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | Striver | Not Started |
| 2 | [Delete all occurrences of a given key in a DLL](https://www.geeksforgeeks.org/problems/delete-all-occurrences-of-a-given-key-in-a-doubly-linked-list/1) | Striver | Not Started |
| 3 | [Remove duplicates from sorted DLL](https://www.geeksforgeeks.org/problems/remove-duplicates-from-a-sorted-doubly-linked-list/1) | Striver | Not Started |

## Merge Two/K Sorted Lists

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Merge 2 Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | Striver | Not Started |
| 2 | [Sort a Linked List](https://leetcode.com/problems/sort-list/) | Striver | Not Started |
| 3 | [Flattening a Linked List](https://www.geeksforgeeks.org/problems/flattening-a-linked-list/1) | Striver | Not Started |

## Cycle Detection & Cycle Start (Floyd's Algorithm)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Find the starting point of the Loop of Linked List](https://leetcode.com/problems/linked-list-cycle-ii/) | Striver | Not Started |

## Deep Copy with Random/Auxiliary Pointers

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Clone a Linked List with random and next pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) | Striver | Not Started |

## Reordering & Partitioning

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Check if Linked List is Palindrome](https://leetcode.com/problems/palindrome-linked-list/) | Striver | Not Started |
| 2 | [Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/) | Striver | Not Started |
| 3 | [Sort linked list of 0s 1s 2s](https://www.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1) | Striver | Not Started |
| 4 | [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) | Striver | Not Started |
| 5 | [Add 1 to a number represented by Linked List](https://www.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1) | Striver | Not Started |

## LRU/LFU Cache Design

| # | Problem (linked) | Source | Status |
|---|---|---|---|

## Uncategorized / Needs Review

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Introduction to DLL](https://www.geeksforgeeks.org/problems/introduction-to-doubly-linked-list/1) | Striver | Not Started |
| 2 | [Insert node in DLL](https://www.geeksforgeeks.org/problems/insert-a-node-in-doubly-linked-list/1) | Striver | Not Started |
| 3 | [Delete node in DLL](https://www.geeksforgeeks.org/problems/delete-node-in-doubly-linked-list/1) | Striver | Not Started |
| 4 | [Reverse a DLL](https://www.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1) | Striver | Not Started |
| 5 | [Find pairs with given sum in DLL](https://www.geeksforgeeks.org/problems/find-pairs-with-given-sum-in-doubly-linked-list/1) | Striver | Not Started |
| 6 | [Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/) | Striver | Not Started |
