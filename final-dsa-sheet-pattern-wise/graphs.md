# Graphs — Problem Sheet

## Patterns Reference

| Pattern | Core Learning Objective & Intuition | Prerequisites | Priority |
|---|---|---|---|
| Graph Representation (Adjacency List/Matrix) | Master converting problem inputs into adjacency lists/matrices. | Arrays/Hashing basics | 🔥 High |
| DFS Traversal (Connected Components) | Explore as deep as possible before backtracking, using a visited set to find connected components / islands. | Graph Representation, Recursion | 🔥 High |
| BFS Traversal (Shortest Path in Unweighted Graphs) | Use a queue for level-by-level exploration, guaranteeing the shortest path in edge-count terms. | Graph Representation | 🔥 High |
| Cycle Detection (Undirected Graphs) | Detect a cycle via DFS by tracking the parent node. | DFS Traversal | 🔥 High |
| Cycle Detection (Directed Graphs) | Use a three-color or recursion-stack technique to distinguish a back-edge (cycle). | DFS Traversal | 🔥 High |
| Topological Sort (Kahn's BFS & DFS-based) | Order nodes so every edge points forward. | Cycle Detection (Directed) | 🔥 High |
| Multi-Source BFS | Seed the BFS queue with multiple starting nodes simultaneously. | BFS Traversal | 🔥 High |
| Union-Find (Disjoint Set Union) | Group elements into sets with near-O(1) union/find via path compression and union by rank. | Arrays basics | 🔥 High |
| Bipartite Graph Check (2-Coloring) | Attempt to 2-color the graph via BFS/DFS; a coloring conflict proves non-bipartiteness. | BFS/DFS Traversal | ⚡ Medium |
| Graph Coloring / Constraint Propagation | Extend 2-coloring to general k-coloring using backtracking. | Bipartite Check, Backtracking | ⚡ Medium |
| Clone Graph / Graph Construction | Use DFS/BFS with a hash map to deep-copy a graph. | DFS Traversal, Hashing | ⚡ Medium |

---

## Table of Contents
- [Graph Representation](#graph-representation-adjacency-listmatrix)
- [DFS Traversal (Connected Components)](#dfs-traversal-connected-components)
- [BFS Traversal (Shortest Path in Unweighted Graphs)](#bfs-traversal-shortest-path-in-unweighted-graphs)
- [Cycle Detection (Undirected Graphs)](#cycle-detection-undirected-graphs)
- [Cycle Detection (Directed Graphs)](#cycle-detection-directed-graphs)
- [Topological Sort](#topological-sort-kahns-bfs--dfs-based)
- [Multi-Source BFS](#multi-source-bfs)
- [Union-Find (Disjoint Set Union)](#union-find-disjoint-set-union)
- [Bipartite Graph Check](#bipartite-graph-check-2-coloring)
- [Uncategorized / Needs Review](#uncategorized--needs-review)

---

## Graph Representation (Adjacency List/Matrix)

| # | Problem (linked) | Source | Status |
|---|---|---|---|

## DFS Traversal (Connected Components)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Number of Provinces](https://leetcode.com/problems/number-of-provinces/) | Striver | Not Started |
| 2 | [Number of Islands](https://leetcode.com/problems/number-of-islands/) | Striver | Not Started |
| 3 | [Flood Fill](https://leetcode.com/problems/flood-fill/) | Striver | Not Started |
| 4 | [Surrounded Regions](https://leetcode.com/problems/surrounded-regions/) | Striver | Not Started |
| 5 | [Number of Enclaves](https://leetcode.com/problems/number-of-enclaves/) | Striver | Not Started |
| 6 | [Counting Rooms](https://cses.fi/problemset/task/1192) | CSES | Not Started |

## BFS Traversal (Shortest Path in Unweighted Graphs)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Rotten Oranges](https://leetcode.com/problems/rotting-oranges/) | Striver | Not Started |
| 2 | [Word ladder I](https://leetcode.com/problems/word-ladder/) | Striver | Not Started |
| 3 | [Word ladder II](https://leetcode.com/problems/word-ladder-ii/) | Striver | Not Started |
| 4 | [Shortest path in undirected graph with unit weights](https://takeuforward.org/practice/dsa/shortest-path-in-undirected-graph-with-unit-weights?category=hard-problems&source=strivers-a2z-dsa-sheet) | Striver | Not Started |
| 5 | [Labyrinth](https://cses.fi/problemset/task/1193) | CSES | Not Started |
| 6 | [Message Route](https://cses.fi/problemset/task/1667) | CSES | Not Started |
| 7 | [Monsters](https://cses.fi/problemset/task/1194) | CSES | Not Started |

## Cycle Detection (Undirected Graphs)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Detect cycle in an undirected graph](https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1) | Striver | Not Started |
| 2 | [Round Trip](https://cses.fi/problemset/task/1669) | CSES | Not Started |

## Cycle Detection (Directed Graphs)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Detect cycle in a directed graph](https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1) | Striver | Not Started |
| 2 | [Course Schedule I](https://leetcode.com/problems/course-schedule/) | Striver | Not Started |
| 3 | [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) | Striver | Not Started |
| 4 | [Round Trip II](https://cses.fi/problemset/task/1678) | CSES | Not Started |
| 5 | [Cycle Finding](https://cses.fi/problemset/task/1197) | CSES | Not Started |

## Topological Sort (Kahn's BFS & DFS-based)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Topological sort](https://www.geeksforgeeks.org/problems/topological-sort/1) | Striver | Not Started |
| 2 | [Alien Dictionary](https://leetcode.com/problems/alien-dictionary/) | Striver | Not Started |
| 3 | [Shortest path in DAG](https://www.geeksforgeeks.org/problems/shortest-path-in-directed-acyclic-graph/1) | Striver | Not Started |
| 4 | [Course Schedule](https://cses.fi/problemset/task/1679) | CSES | Not Started |
| 5 | [Longest Flight Route](https://cses.fi/problemset/task/1680) | CSES | Not Started |
| 6 | [Game Routes](https://cses.fi/problemset/task/1681) | CSES | Not Started |

## Multi-Source BFS

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [0/1 Matrix (Nearest cell having 1)](https://leetcode.com/problems/01-matrix/) | Striver | Not Started |

## Union-Find (Disjoint Set Union)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Disjoint Set](https://www.geeksforgeeks.org/problems/disjoint-set-union-find/1) | Striver | Not Started |
| 2 | [Number of operations to make network connected](https://leetcode.com/problems/number-of-operations-to-make-network-connected/) | Striver | Not Started |
| 3 | [Accounts merge](https://leetcode.com/problems/accounts-merge/) | Striver | Not Started |
| 4 | [Number of islands II](https://leetcode.com/problems/number-of-islands-ii/) | Striver | Not Started |
| 5 | [Making a large island](https://leetcode.com/problems/making-a-large-island/) | Striver | Not Started |
| 6 | [Most stones removed with same row or column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/) | Striver | Not Started |
| 7 | [Building Roads](https://cses.fi/problemset/task/1666) | CSES | Not Started |
| 8 | [Road Construction](https://cses.fi/problemset/task/1676) | CSES | Not Started |

## Bipartite Graph Check (2-Coloring)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Bipartite Check](https://leetcode.com/problems/is-graph-bipartite/) | Striver | Not Started |
| 2 | [Building Teams](https://cses.fi/problemset/task/1668) | CSES | Not Started |

## Uncategorized / Needs Review

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Planets Queries I](https://cses.fi/problemset/task/1750) | CSES | Not Started |
| 2 | [Planets Queries II](https://cses.fi/problemset/task/1160) | CSES | Not Started |
| 3 | [Planets Cycles](https://cses.fi/problemset/task/1751) | CSES | Not Started |
| 4 | [Giant Pizza](https://cses.fi/problemset/task/1684) | CSES | Not Started |
| 5 | [Coin Collector](https://cses.fi/problemset/task/1686) | CSES | Not Started |
| 6 | [Hamiltonian Flights](https://cses.fi/problemset/task/1690) | CSES | Not Started |
| 7 | [Knight's Tour](https://cses.fi/problemset/task/1689) | CSES | Not Started |
