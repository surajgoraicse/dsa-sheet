# Math & Number Theory — Problem Sheet

## Patterns Reference

| Pattern | Core Learning Objective & Intuition | Prerequisites | Priority |
|---|---|---|---|
| Prime Sieve (Sieve of Eratosthenes) | Precompute primality for all numbers up to N in O(N log log N). | Basic Math | 🔥 High |
| GCD/LCM & Euclidean Algorithm | Master the recursive Euclidean algorithm for GCD, and derive LCM from it. | Basic Math | 🔥 High |
| Modular Arithmetic (Add/Sub/Mul under Mod) | Learn how to keep intermediate results bounded under a modulus. | Basic Math | 🔥 High |
| Modular Exponentiation (Fast Power) | Compute `a^b mod m` in O(log b) via repeated squaring. | Modular Arithmetic | 🔥 High |
| Modular Inverse (Fermat's Little Theorem / Extended Euclid) | Divide under a modulus by multiplying by a precomputed inverse. | Modular Exponentiation, GCD | 🔥 High |
| Combinatorics (nCr, nPr under Modulo) | Precompute factorials and modular inverse factorials to answer combination queries in O(1). | Modular Inverse | 🔥 High |
| Prime Factorization (Trial Division & Smallest Prime Factor Sieve) | Factorize numbers efficiently using precomputed smallest prime factor. | Prime Sieve | 🔥 High |
| Divisor Enumeration & Counting Divisors | Enumerate all divisors of N in O(√N). | Prime Factorization | ⚡ Medium |
| Digit DP (Counting Numbers with Digit Constraints) | Build numbers digit-by-digit while tracking a "tight" bound flag. | DP basics, Modular Arithmetic | ⚡ Medium |
| Matrix Exponentiation (Linear Recurrence Acceleration) | Represent a linear recurrence as matrix multiplication, then use fast exponentiation. | Modular Exponentiation, Linear Algebra | ⚡ Medium |
| Chinese Remainder Theorem (CRT) | Combine multiple modular congruences into a single equivalent congruence. | Modular Inverse, GCD | ⚡ Medium |

---

## Table of Contents
- [Prime Sieve (Sieve of Eratosthenes)](#prime-sieve-sieve-of-eratosthenes)
- [GCD/LCM & Euclidean Algorithm](#gcdlcm--euclidean-algorithm)
- [Modular Arithmetic](#modular-arithmetic-addsubmul-under-mod)
- [Modular Exponentiation (Fast Power)](#modular-exponentiation-fast-power)
- [Modular Inverse](#modular-inverse)
- [Combinatorics (nCr, nPr under Modulo)](#combinatorics-ncr-npr-under-modulo)
- [Prime Factorization](#prime-factorization)
- [Divisor Enumeration & Counting Divisors](#divisor-enumeration--counting-divisors)
- [Matrix Exponentiation](#matrix-exponentiation-linear-recurrence-acceleration)
- [Game Theory](#game-theory)
- [Probability / Expected Value](#probability--expected-value)
- [Uncategorized / Needs Review](#uncategorized--needs-review)

---

## Prime Sieve (Sieve of Eratosthenes)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Print all primes till N](https://takeuforward.org/practice/dsa/print-all-primes-till-n?category=sieve-of-eratosthenes&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 2 | [Count primes in range L to R](https://leetcode.com/problems/count-primes/) | Striver | Not Started |
| 3 | [Prime Multiples](https://cses.fi/problemset/task/2185) | CSES | Not Started |
| 4 | [Next Prime](https://cses.fi/problemset/task/3396) | CSES | Not Started |
| 5 | [Counting Coprime Pairs](https://cses.fi/problemset/task/2417) | CSES | Not Started |

## GCD/LCM & Euclidean Algorithm

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Common Divisors](https://cses.fi/problemset/task/1081) | CSES | Not Started |

## Modular Arithmetic (Add/Sub/Mul under Mod)

| # | Problem (linked) | Source | Status |
|---|---|---|---|

## Modular Exponentiation (Fast Power)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Exponentiation](https://cses.fi/problemset/task/1095) | CSES | Not Started |
| 2 | [Exponentiation II](https://cses.fi/problemset/task/1712) | CSES | Not Started |

## Modular Inverse

| # | Problem (linked) | Source | Status |
|---|---|---|---|

## Combinatorics (nCr, nPr under Modulo)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Binomial Coefficients](https://cses.fi/problemset/task/1079) | CSES | Not Started |
| 2 | [Creating Strings II](https://cses.fi/problemset/task/1715) | CSES | Not Started |
| 3 | [Distributing Apples](https://cses.fi/problemset/task/1716) | CSES | Not Started |
| 4 | [Christmas Party](https://cses.fi/problemset/task/1717) | CSES | Not Started |
| 5 | [Bracket Sequences I](https://cses.fi/problemset/task/2064) | CSES | Not Started |
| 6 | [Bracket Sequences II](https://cses.fi/problemset/task/2187) | CSES | Not Started |
| 7 | [Counting Necklaces](https://cses.fi/problemset/task/2209) | CSES | Not Started |
| 8 | [Counting Grids](https://cses.fi/problemset/task/2210) | CSES | Not Started |
| 9 | [Permutation Order](https://cses.fi/problemset/task/3397) | CSES | Not Started |
| 10 | [Permutation Rounds](https://cses.fi/problemset/task/3398) | CSES | Not Started |

## Prime Factorization

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Prime factorisation of a Number](https://takeuforward.org/practice/dsa/prime-factorisation-of-a-number?category=sieve-of-eratosthenes&source=strivers-a2z-dsa-sheet) | Striver | Not Started |

## Divisor Enumeration & Counting Divisors

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Counting Divisors](https://cses.fi/problemset/task/1713) | CSES | Not Started |
| 2 | [Sum of Divisors](https://cses.fi/problemset/task/1082) | CSES | Not Started |
| 3 | [Divisor Analysis](https://cses.fi/problemset/task/2182) | CSES | Not Started |

## Matrix Exponentiation (Linear Recurrence Acceleration)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Fibonacci Numbers](https://cses.fi/problemset/task/1722) | CSES | Not Started |
| 2 | [Throwing Dice](https://cses.fi/problemset/task/1096) | CSES | Not Started |
| 3 | [Graph Paths I](https://cses.fi/problemset/task/1723) | CSES | Not Started |
| 4 | [Graph Paths II](https://cses.fi/problemset/task/1724) | CSES | Not Started |
| 5 | [System of Linear Equations](https://cses.fi/problemset/task/3154) | CSES | Not Started |

## Game Theory

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Stick Game](https://cses.fi/problemset/task/1729) | CSES | Not Started |
| 2 | [Nim Game I](https://cses.fi/problemset/task/1730) | CSES | Not Started |
| 3 | [Nim Game II](https://cses.fi/problemset/task/1098) | CSES | Not Started |
| 4 | [Stair Game](https://cses.fi/problemset/task/1099) | CSES | Not Started |
| 5 | [Grundy's Game](https://cses.fi/problemset/task/2207) | CSES | Not Started |
| 6 | [Another Game](https://cses.fi/problemset/task/2208) | CSES | Not Started |

## Probability / Expected Value

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Dice Probability](https://cses.fi/problemset/task/1725) | CSES | Not Started |
| 2 | [Moving Robots](https://cses.fi/problemset/task/1726) | CSES | Not Started |
| 3 | [Candy Lottery](https://cses.fi/problemset/task/1727) | CSES | Not Started |
| 4 | [Inversion Probability](https://cses.fi/problemset/task/1728) | CSES | Not Started |

## Uncategorized / Needs Review

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Josephus Queries](https://cses.fi/problemset/task/2164) | CSES | Not Started |
| 2 | [Sum of Four Squares](https://cses.fi/problemset/task/3355) | CSES | Not Started |
| 3 | [Triangle Number Sums](https://cses.fi/problemset/task/3406) | CSES | Not Started |
| 4 | [Counting Sequences](https://cses.fi/problemset/task/2228) | CSES (Counting) | Not Started |
| 5 | [Counting Permutations](https://cses.fi/problemset/task/1075) | CSES (Counting) | Not Started |
| 6 | [Permutation Inversions](https://cses.fi/problemset/task/2229) | CSES (Counting) | Not Started |
| 7 | [Counting Bishops](https://cses.fi/problemset/task/2176) | CSES (Counting) | Not Started |
| 8 | [Grid Paths II](https://cses.fi/problemset/task/1078) | CSES (Counting) | Not Started |
| 9 | [Empty String](https://cses.fi/problemset/task/1080) | CSES (Counting) | Not Started |
| 10 | [Grid Completion](https://cses.fi/problemset/task/2429) | CSES (Counting) | Not Started |
| 11 | [Counting Reorders](https://cses.fi/problemset/task/2421) | CSES (Counting) | Not Started |
| 12 | [Tournament Graph Distribution](https://cses.fi/problemset/task/3232) | CSES (Counting) | Not Started |
| 13 | [Collecting Numbers Distribution](https://cses.fi/problemset/task/3157) | CSES (Counting) | Not Started |
| 14 | [Functional Graph Distribution](https://cses.fi/problemset/task/2415) | CSES (Counting) | Not Started |
| 15 | [Raab Game II](https://cses.fi/problemset/task/3400) | CSES (Counting) | Not Started |
| 16 | [Filled Subgrid Count I](https://cses.fi/problemset/task/3413) | CSES (Counting) | Not Started |
| 17 | [Filled Subgrid Count II](https://cses.fi/problemset/task/3414) | CSES (Counting) | Not Started |
| 18 | [All Letter Subgrid Count I](https://cses.fi/problemset/task/3415) | CSES (Counting) | Not Started |
| 19 | [All Letter Subgrid Count II](https://cses.fi/problemset/task/3416) | CSES (Counting) | Not Started |
| 20 | [Border Subgrid Count I](https://cses.fi/problemset/task/3417) | CSES (Counting) | Not Started |
| 21 | [Border Subgrid Count II](https://cses.fi/problemset/task/3418) | CSES (Counting) | Not Started |
