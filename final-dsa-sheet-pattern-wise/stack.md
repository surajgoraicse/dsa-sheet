# Stack (Monotonic Stack) — Problem Sheet

## Patterns Reference

| Pattern | Core Learning Objective & Intuition | Prerequisites | Priority |
|---|---|---|---|
| Basic Stack Simulation (Valid Parentheses style) | Master using a stack to match nested/paired structures via push-on-open, pop-and-check-on-close. | None | 🔥 High |
| Next Greater / Next Smaller Element | Maintain a monotonic stack while scanning left-to-right; pop elements that are "dominated" by the current one to resolve their answer in O(1) amortized. | Basic Stack Simulation | 🔥 High |
| Previous Greater / Previous Smaller Element | Same monotonic mechanic run in the mirrored direction — teaches that the direction of the scan determines which "side" question you're answering. | Next Greater Element | 🔥 High |
| Histogram / Largest Rectangle Style | Use a monotonic increasing stack to find, for each bar, the maximal width it can extend before hitting a smaller bar on either side. | Next Smaller Element | 🔥 High |
| Stack-Based Expression Evaluation | Evaluate or convert expressions (infix/postfix, basic calculator) by using a stack to defer operators until their operands are ready. | Basic Stack Simulation | ⚡ Medium |
| Monotonic Stack for Span/Count Problems | Instead of storing the answer directly, store indices/counts on the stack to compute spans (e.g., stock span, number of visible elements). | Next Greater Element | ⚡ Medium |
| Stack + Greedy Removal (Remove K Digits style) | Greedily pop larger previous elements when a smaller current one appears, under a fixed removal budget, to build the optimal result. | Monotonic Stack basics | 🔥 High |
| Min/Max Stack (Auxiliary Stack Design) | Design a stack supporting O(1) getMin/getMax by maintaining a parallel stack of running extremes. | Basic Stack Simulation | ⚡ Medium |

---

## Table of Contents
- [Basic Stack Simulation (Valid Parentheses style)](#basic-stack-simulation-valid-parentheses-style)
- [Next Greater / Next Smaller Element](#next-greater--next-smaller-element)
- [Previous Greater / Previous Smaller Element](#previous-greater--previous-smaller-element)
- [Histogram / Largest Rectangle Style](#histogram--largest-rectangle-style)
- [Stack-Based Expression Evaluation](#stack-based-expression-evaluation)
- [Monotonic Stack for Span/Count Problems](#monotonic-stack-for-spancount-problems)
- [Stack + Greedy Removal (Remove K Digits style)](#stack--greedy-removal-remove-k-digits-style)
- [Min/Max Stack (Auxiliary Stack Design)](#minmax-stack-auxiliary-stack-design)
- [Uncategorized / Needs Review](#uncategorized--needs-review)

---

## Basic Stack Simulation (Valid Parentheses style)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Implement Stack using Arrays](https://www.geeksforgeeks.org/problems/implement-stack-using-array/1) | Striver | Not Started |
| 2 | [Implement Stack using Linked List](https://www.geeksforgeeks.org/problems/implement-stack-using-linked-list/1) | Striver | Not Started |
| 3 | [Balanced Parenthesis](https://leetcode.com/problems/valid-parentheses/) | Striver | Not Started |
| 4 | [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/) | Striver | Not Started |
| 5 | [Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/) | Striver | Not Started |
| 6 | [Two Stacks Sorting](https://cses.fi/problemset/task/2402) | CSES | Not Started |

## Next Greater / Next Smaller Element

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Next greater element I](https://leetcode.com/problems/next-greater-element-i/) | Striver | Not Started |
| 2 | [Next greater element II](https://leetcode.com/problems/next-greater-element-ii/) | Striver | Not Started |
| 3 | [Number of NGE to the Right](https://www.geeksforgeeks.org/problems/number-of-nges-to-the-right/1) | Striver | Not Started |
| 4 | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | Striver | Not Started |
| 5 | [Nearest Smaller Values](https://cses.fi/problemset/task/1645) | CSES | Not Started |

## Previous Greater / Previous Smaller Element

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Sum of subarray minimums](https://leetcode.com/problems/sum-of-subarray-minimums/) | Striver | Not Started |
| 2 | [Sum of subarray ranges](https://leetcode.com/problems/sum-of-subarray-ranges/) | Striver | Not Started |

## Histogram / Largest Rectangle Style

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Largest rectangle in histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) | Striver | Not Started |
| 2 | [Maximal rectangle](https://leetcode.com/problems/maximal-rectangle/) | Striver | Not Started |
| 3 | [Advertisement](https://cses.fi/problemset/task/1142) | CSES | Not Started |
| 4 | [Maximum Building I](https://cses.fi/problemset/task/1147) | CSES | Not Started |
| 5 | [Maximum Building II](https://cses.fi/problemset/task/1148) | CSES | Not Started |

## Stack-Based Expression Evaluation

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Prefix to Infix](https://www.geeksforgeeks.org/problems/prefix-to-infix-conversion/1) | Striver | Not Started |
| 2 | [Prefix to Postfix](https://www.geeksforgeeks.org/problems/prefix-to-postfix-conversion/1) | Striver | Not Started |
| 3 | [Postfix to Infix](https://www.geeksforgeeks.org/problems/postfix-to-infix-conversion/1) | Striver | Not Started |
| 4 | [Postfix to Prefix](https://www.geeksforgeeks.org/problems/postfix-to-prefix-conversion/1) | Striver | Not Started |
| 5 | [Infix to Postfix](https://www.geeksforgeeks.org/problems/infix-to-postfix-1587115620/1) | Striver | Not Started |

## Monotonic Stack for Span/Count Problems

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Online Stock Span](https://leetcode.com/problems/online-stock-span/) | Striver | Not Started |
| 2 | [Asteroid Collision](https://leetcode.com/problems/asteroid-collision/) | Striver | Not Started |
| 3 | [Stack Weights](https://cses.fi/problemset/task/2425) | CSES | Not Started |

## Stack + Greedy Removal (Remove K Digits style)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Remove K digits](https://leetcode.com/problems/remove-k-digits/) | Striver | Not Started |

## Min/Max Stack (Auxiliary Stack Design)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Implement Min Stack](https://leetcode.com/problems/min-stack/) | Striver | Not Started |

## Uncategorized / Needs Review

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Implement Queue using Arrays](https://www.geeksforgeeks.org/problems/implement-queue-using-array/1) | Striver | Not Started |
| 2 | [Implement Queue using Linked List](https://www.geeksforgeeks.org/problems/implement-queue-using-linked-list/1) | Striver | Not Started |
| 3 | [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) | Striver | Not Started |
| 4 | [Celebrity Problem](https://leetcode.com/problems/find-the-celebrity/) | Striver | Not Started |
| 5 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | Striver | Not Started |
| 6 | [LFU Cache](https://leetcode.com/problems/lfu-cache/) | Striver | Not Started |
