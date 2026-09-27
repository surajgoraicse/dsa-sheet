# Sliding Window — Problem Sheet

## Patterns Reference

| Pattern | Core Learning Objective & Intuition | Prerequisites | Priority |
|---|---|---|---|
| Fixed-Size Window | Master the core mechanic: slide a constant-size window by adding the new right element and removing the old left element in O(1) amortized. | Arrays basics | 🔥 High |
| Variable-Size Window (Expand/Shrink on Condition) | Grow the window while a condition holds, shrink it when violated — the workhorse pattern for "longest/shortest subarray satisfying X." | Fixed-Size Window | 🔥 High |
| Window with Hash Map / Frequency Counter | Track character/element counts inside the window to solve substring-matching and "at most K distinct" problems. | Variable-Size Window, Hashing | 🔥 High |
| Minimum Window Substring Style | Two-phase window: expand until valid, then aggressively shrink to find the true minimum, updating the answer at each valid shrink. | Window with Hash Map | 🔥 High |
| Monotonic Deque Window (Sliding Window Maximum/Minimum) | Maintain a deque of "candidates" in monotonic order so the window's max/min is always O(1) to query, evicting stale/dominated elements. | Fixed-Size Window, Monotonic Stack | 🔥 High |
| Sliding Window on Two Pointers with Counters (At Most K) | Convert "exactly K" constraints into a difference of two "at most K" window counts — a key algebraic trick. | Window with Hash Map | ⚡ Medium |
| Sliding Window + Prefix Sum Hybrid | Combine prefix sums with window bounds for problems mixing sum constraints with contiguous-range requirements. | Prefix Sum, Variable-Size Window | ⚡ Medium |

---

## Table of Contents
- [Fixed-Size Window](#fixed-size-window)
- [Variable-Size Window (Expand/Shrink on Condition)](#variable-size-window-expandshrink-on-condition)
- [Window with Hash Map / Frequency Counter](#window-with-hash-map--frequency-counter)
- [Minimum Window Substring Style](#minimum-window-substring-style)
- [Monotonic Deque Window (Sliding Window Maximum/Minimum)](#monotonic-deque-window-sliding-window-maximumminimum)
- [Sliding Window on Two Pointers with Counters (At Most K)](#sliding-window-on-two-pointers-with-counters-at-most-k)
- [Sliding Window + Prefix Sum Hybrid](#sliding-window--prefix-sum-hybrid)
- [Uncategorized / Needs Review](#uncategorized--needs-review)

---

## Fixed-Size Window

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Maximum Points You Can Obtain from Cards](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/) | Striver | Not Started |
| 2 | [Sliding Window Sum](https://cses.fi/problemset/task/3220) | CSES | Not Started |
| 3 | [Sliding Window Xor](https://cses.fi/problemset/task/3426) | CSES | Not Started |
| 4 | [Sliding Window Or](https://cses.fi/problemset/task/3405) | CSES | Not Started |

## Variable-Size Window (Expand/Shrink on Condition)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Striver | Not Started |
| 2 | [Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/) | Striver | Not Started |
| 3 | [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) | Striver | Not Started |

## Window with Hash Map / Frequency Counter

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/) | Striver | Not Started |
| 2 | [Longest Substring With At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/) | Striver | Not Started |
| 3 | [Sliding Window Distinct Values](https://cses.fi/problemset/task/3222) | CSES | Not Started |
| 4 | [Sliding Window Mode](https://cses.fi/problemset/task/3224) | CSES | Not Started |
| 5 | [Sliding Window Mex](https://cses.fi/problemset/task/3219) | CSES | Not Started |

## Minimum Window Substring Style

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) | Striver | Not Started |
| 2 | [Minimum Window Subsequence](https://leetcode.com/problems/minimum-window-subsequence/) | Striver | Not Started |

## Monotonic Deque Window (Sliding Window Maximum/Minimum)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Sliding Window Minimum](https://cses.fi/problemset/task/3221) | CSES | Not Started |
| 2 | [Sliding Window Median](https://cses.fi/problemset/task/1076) | CSES | Not Started |
| 3 | [Sliding Window Cost](https://cses.fi/problemset/task/1077) | CSES | Not Started |

## Sliding Window on Two Pointers with Counters (At Most K)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Number of Substrings Containing All Three Characters](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/) | Striver | Not Started |
| 2 | [Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/) | Striver | Not Started |
| 3 | [Count number of Nice subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/) | Striver | Not Started |
| 4 | [Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/) | Striver | Not Started |

## Sliding Window + Prefix Sum Hybrid

| # | Problem (linked) | Source | Status |
|---|---|---|---|

## Uncategorized / Needs Review

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Sliding Window Inversions](https://cses.fi/problemset/task/3223) | CSES | Not Started |
| 2 | [Sliding Window Advertisement](https://cses.fi/problemset/task/3227) | CSES | Not Started |
