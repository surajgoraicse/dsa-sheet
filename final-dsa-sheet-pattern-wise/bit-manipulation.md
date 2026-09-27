# Bit Manipulation — Problem Sheet

## Patterns Reference

| Pattern | Core Learning Objective & Intuition | Prerequisites | Priority |
|---|---|---|---|
| Basic Bitwise Operators & Bit Tricks | Master AND/OR/XOR/NOT/shift mechanics and common one-liners. | None | 🔥 High |
| XOR Properties (Single/Pair Cancellation) | Exploit `a ^ a = 0` and `a ^ 0 = a` to find unique elements, missing numbers. | Basic Bitwise Operators | 🔥 High |
| Counting Set Bits (Brian Kernighan's Algorithm) | Repeatedly clear the lowest set bit to count bits in O(popcount). | Basic Bitwise Operators | 🔥 High |
| Bitmask as Subset Representation | Represent a subset of N elements as an N-bit integer. | Basic Bitwise Operators | 🔥 High |
| Bit DP (State Compression) | Use a bitmask as the DP state dimension. | Bitmask as Subset Representation, DP basics | 🔥 High |
| Binary Trie for XOR Maximization | Build a trie over bit representations to answer "maximum XOR pair" queries. | Bitwise Trie (Tries topic) | 🔥 High |
| Bit Manipulation for Number Properties (Power of Two, etc.) | Use bit-pattern identities to check structural number properties in O(1). | Basic Bitwise Operators | ⚡ Medium |
| Gray Code & Bit Sequence Generation | Generate sequences where consecutive values differ by exactly one bit. | Basic Bitwise Operators | ⚡ Medium |
| Bitwise Prefix/Trie Aggregation (Subset Sum over Bitmasks) | Combine bitmask enumeration with submask iteration for subset-sum-style DP. | Bitmask as Subset Representation | ⚡ Medium |

---

## Table of Contents
- [Basic Bitwise Operators & Bit Tricks](#basic-bitwise-operators--bit-tricks)
- [XOR Properties (Single/Pair Cancellation)](#xor-properties-singlepair-cancellation)
- [Counting Set Bits](#counting-set-bits-brian-kernighans-algorithm)
- [Bitmask as Subset Representation](#bitmask-as-subset-representation)
- [Bit DP (State Compression)](#bit-dp-state-compression)
- [Bit Manipulation for Number Properties](#bit-manipulation-for-number-properties-power-of-two-etc)
- [Gray Code & Bit Sequence Generation](#gray-code--bit-sequence-generation)
- [Uncategorized / Needs Review](#uncategorized--needs-review)

---

## Basic Bitwise Operators & Bit Tricks

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Check if the i-th bit is Set or Not](https://takeuforward.org/practice/dsa/check-if-the-i-th-bit-is-set-or-not?category=bit-fundamentals&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 2 | [Check if a Number is Odd or Not](https://takeuforward.org/practice/dsa/check-if-a-number-is-odd-or-not?category=bit-fundamentals&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 3 | [Swap Two Numbers](https://takeuforward.org/practice/dsa/swap-two-numbers?category=bit-fundamentals&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 4 | [Minimum Bit Flips to Convert Number](https://leetcode.com/problems/minimum-bit-flips-to-convert-number/) | Striver | Not Started |

## XOR Properties (Single/Pair Cancellation)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Single Number - I](https://leetcode.com/problems/single-number/) | Striver | Not Started |
| 2 | [Single Number - II](https://leetcode.com/problems/single-number-ii/) | Striver | Not Started |
| 3 | [Single Number - III](https://leetcode.com/problems/single-number-iii/) | Striver | Not Started |
| 4 | [XOR of numbers in a given range](https://www.geeksforgeeks.org/problems/find-xor-of-numbers-from-l-to-r/1) | Striver | Not Started |
| 5 | [XOR Minimization](https://cses.fi/problemset/task/3416) | CSES | Not Started |

## Counting Set Bits (Brian Kernighan's Algorithm)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Count the Number of Set Bits](https://leetcode.com/problems/number-of-1-bits/) | Striver | Not Started |

## Bitmask as Subset Representation

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Power Set Bit Manipulation](https://leetcode.com/problems/subsets/) | Striver | Not Started |

## Bit DP (State Compression)

| # | Problem (linked) | Source | Status |
|---|---|---|---|

## Bit Manipulation for Number Properties (Power of Two, etc.)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Check if a Number is Power of 2 or Not](https://leetcode.com/problems/power-of-two/) | Striver | Not Started |
| 2 | [Divide two numbers without multiplication and division](https://leetcode.com/problems/divide-two-integers/) | Striver | Not Started |

## Gray Code & Bit Sequence Generation

| # | Problem (linked) | Source | Status |
|---|---|---|---|

## Uncategorized / Needs Review

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Hamming Distance](https://cses.fi/problemset/task/2136) | CSES | Not Started |
| 2 | [One Bit Positions](https://cses.fi/problemset/task/2112) | CSES | Not Started |
| 3 | [Bit Inversions](https://cses.fi/problemset/task/1188) | CSES | Not Started |
| 4 | [Bit Substrings](https://cses.fi/problemset/task/2115) | CSES | Not Started |
