# Advanced Graphs — Problem Sheet

## Patterns Reference

| Pattern | Core Learning Objective & Intuition | Prerequisites | Priority |
|---|---|---|---|
| Dijkstra's Algorithm (Single-Source Shortest Path) | Use a min-heap to always expand the currently-closest unvisited node, relaxing edges greedily under non-negative weights. | Heap/Priority Queue, BFS | 🔥 High |
| Bellman-Ford Algorithm | Relax all edges V−1 times to handle negative weights, and detect negative cycles. | Graph Representation | 🔥 High |
| Floyd-Warshall (All-Pairs Shortest Path) | Use a triple-nested DP where the middle "via node" is the outermost loop. | DP basics, Graph Representation | 🔥 High |
| Minimum Spanning Tree — Prim's Algorithm | Grow a tree greedily from a start node, always adding the cheapest edge that connects a new node. | Heap/Priority Queue, Dijkstra's | 🔥 High |
| Minimum Spanning Tree — Kruskal's Algorithm | Sort all edges by weight and greedily add them if they don't form a cycle, using Union-Find. | Union-Find, Sorting | 🔥 High |
| Network Flow (Max Flow — Ford-Fulkerson/Edmonds-Karp) | Repeatedly find augmenting paths in a residual graph, pushing flow until no augmenting path remains. | BFS, Graph Representation | ⚡ Medium |
| Strongly Connected Components (Tarjan's/Kosaraju's) | Identify maximal groups of mutually-reachable nodes. | DFS Traversal, Topological Sort | ⚡ Medium |
| Bridges & Articulation Points | Use DFS discovery/low-link values to find edges/nodes whose removal disconnects the graph. | Tarjan's SCC concepts | ⚡ Medium |
| Shortest Path with State (Dijkstra on Expanded State Space) | Extend Dijkstra by encoding extra state into the "node." | Dijkstra's Algorithm, Bitmask DP | 🔥 High |
| Eulerian Path/Circuit (Hierholzer's Algorithm) | Construct a path/circuit traversing every edge exactly once. | Graph Representation, DFS | ⚡ Medium |

---

## Table of Contents
- [Dijkstra's Algorithm](#dijkstras-algorithm-single-source-shortest-path)
- [Bellman-Ford Algorithm](#bellman-ford-algorithm)
- [Floyd-Warshall](#floyd-warshall-all-pairs-shortest-path)
- [Minimum Spanning Tree — Prim's & Kruskal's](#minimum-spanning-tree)
- [Network Flow](#network-flow-max-flow)
- [Strongly Connected Components](#strongly-connected-components-tarjanskosarajus)
- [Bridges & Articulation Points](#bridges--articulation-points)
- [Shortest Path with State](#shortest-path-with-state)
- [Eulerian Path/Circuit](#eulerian-pathcircuit-hierholzers-algorithm)
- [Uncategorized / Needs Review](#uncategorized--needs-review)

---

## Dijkstra's Algorithm (Single-Source Shortest Path)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Dijkstra's algorithm](https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1) | Striver | Not Started |
| 2 | [Print Shortest Path](https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1) | Striver | Not Started |
| 3 | [Shortest Distance in a Binary Maze](https://leetcode.com/problems/shortest-path-in-binary-matrix/) | Striver | Not Started |
| 4 | [Path with minimum effort](https://leetcode.com/problems/path-with-minimum-effort/) | Striver | Not Started |
| 5 | [Cheapest flight within K stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) | Striver | Not Started |
| 6 | [Number of ways to arrive at destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/) | Striver | Not Started |
| 7 | [Network Delay Time](https://leetcode.com/problems/network-delay-time/) | Striver | Not Started |
| 8 | [Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/) | Striver | Not Started |
| 9 | [Shortest Routes I](https://cses.fi/problemset/task/1671) | CSES | Not Started |
| 10 | [Flight Discount](https://cses.fi/problemset/task/1195) | CSES | Not Started |
| 11 | [Flight Routes](https://cses.fi/problemset/task/1196) | CSES | Not Started |
| 12 | [Investigation](https://cses.fi/problemset/task/1202) | CSES | Not Started |

## Bellman-Ford Algorithm

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Bellman ford algorithm](https://www.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/1) | Striver | Not Started |
| 2 | [Minimum multiplications to reach end](https://www.geeksforgeeks.org/problems/minimum-multiplications-to-reach-end/1) | Striver | Not Started |
| 3 | [High Score](https://cses.fi/problemset/task/1673) | CSES | Not Started |

## Floyd-Warshall (All-Pairs Shortest Path)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Floyd warshall algorithm](https://www.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1) | Striver | Not Started |
| 2 | [Find the city with the smallest number of neighbors](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/) | Striver | Not Started |
| 3 | [Shortest Routes II](https://cses.fi/problemset/task/1672) | CSES | Not Started |

## Minimum Spanning Tree

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Find the MST weight](https://leetcode.com/problems/connecting-cities-with-minimum-cost/) | Striver | Not Started |
| 2 | [Road Reparation](https://cses.fi/problemset/task/1675) | CSES | Not Started |

## Network Flow (Max Flow)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Download Speed](https://cses.fi/problemset/task/1694) | CSES | Not Started |
| 2 | [Police Chase](https://cses.fi/problemset/task/1695) | CSES | Not Started |
| 3 | [School Dance](https://cses.fi/problemset/task/1696) | CSES | Not Started |
| 4 | [Distinct Routes](https://cses.fi/problemset/task/1711) | CSES | Not Started |

## Strongly Connected Components (Tarjan's/Kosaraju's)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Kosaraju's algorithm](https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/) | Striver | Not Started |
| 2 | [Flight Routes Check](https://cses.fi/problemset/task/1682) | CSES | Not Started |
| 3 | [Planets and Kingdoms](https://cses.fi/problemset/task/1683) | CSES | Not Started |

## Bridges & Articulation Points

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Bridges in graph](https://leetcode.com/problems/critical-connections-in-a-network/) | Striver | Not Started |
| 2 | [Articulation point in graph](https://www.geeksforgeeks.org/problems/articulation-point2616/1) | Striver | Not Started |

## Shortest Path with State

| # | Problem (linked) | Source | Status |
|---|---|---|---|

## Eulerian Path/Circuit (Hierholzer's Algorithm)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Mail Delivery](https://cses.fi/problemset/task/1691) | CSES | Not Started |
| 2 | [De Bruijn Sequence](https://cses.fi/problemset/task/1692) | CSES | Not Started |
| 3 | [Teleporters Path](https://cses.fi/problemset/task/1693) | CSES | Not Started |

## Uncategorized / Needs Review

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Nearest Shops](https://cses.fi/problemset/task/3303) | CSES | Not Started |
| 2 | [Prüfer Code](https://cses.fi/problemset/task/1134) | CSES | Not Started |
| 3 | [Tree Traversals](https://cses.fi/problemset/task/1702) | CSES | Not Started |
| 4 | [Course Schedule II](https://cses.fi/problemset/task/1757) | CSES | Not Started |
| 5 | [Acyclic Graph Edges](https://cses.fi/problemset/task/1756) | CSES | Not Started |
| 6 | [Strongly Connected Edges](https://cses.fi/problemset/task/2177) | CSES | Not Started |
| 7 | [Even Outdegree Edges](https://cses.fi/problemset/task/2179) | CSES | Not Started |
| 8 | [Graph Girth](https://cses.fi/problemset/task/1707) | CSES | Not Started |
| 9 | [Fixed Length Walk Queries](https://cses.fi/problemset/task/3357) | CSES | Not Started |
| 10 | [MST Edge Check](https://cses.fi/problemset/task/3407) | CSES | Not Started |
| 11 | [MST Edge Set Check](https://cses.fi/problemset/task/3408) | CSES | Not Started |
| 12 | [MST Edge Cost](https://cses.fi/problemset/task/3409) | CSES | Not Started |
| 13 | [Network Breakdown](https://cses.fi/problemset/task/1677) | CSES | Not Started |
| 14 | [Critical Cities](https://cses.fi/problemset/task/1703) | CSES | Not Started |
| 15 | [Visiting Cities](https://cses.fi/problemset/task/1203) | CSES | Not Started |
| 16 | [Graph Coloring](https://cses.fi/problemset/task/3308) | CSES | Not Started |
| 17 | [Transfer Speeds Sum](https://cses.fi/problemset/task/3111) | CSES | Not Started |
| 18 | [Tree Coin Collecting I](https://cses.fi/problemset/task/3114) | CSES | Not Started |
| 19 | [Tree Coin Collecting II](https://cses.fi/problemset/task/3149) | CSES | Not Started |
| 20 | [Tree Isomorphism I](https://cses.fi/problemset/task/1700) | CSES | Not Started |
| 21 | [Tree Isomorphism II](https://cses.fi/problemset/task/1701) | CSES | Not Started |
| 22 | [Flight Route Requests](https://cses.fi/problemset/task/1699) | CSES | Not Started |
| 23 | [Bus Companies](https://cses.fi/problemset/task/3158) | CSES | Not Started |
| 24 | [Split into Two Paths](https://cses.fi/problemset/task/3358) | CSES | Not Started |
| 25 | [Network Renovation](https://cses.fi/problemset/task/1704) | CSES | Not Started |
| 26 | [Forbidden Cities](https://cses.fi/problemset/task/1705) | CSES | Not Started |
| 27 | [Creating Offices](https://cses.fi/problemset/task/1752) | CSES | Not Started |
| 28 | [New Flight Routes](https://cses.fi/problemset/task/1685) | CSES | Not Started |
