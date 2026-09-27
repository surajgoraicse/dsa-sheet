## dp patterns

DP Pattern                                      | Core Learning Objective & Intuition                                                                                                     | Prerequisites           | Priority |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | -------- |
| Fibonacci Style & Linear 1D                     | Master the base mechanics of memoization (Top-Down) vs. Tabulation (Bottom-Up), state arrays, and space optimization.                   | Recursion               | 🔥 High  |
| Matrix & 2D Grid                                | Transition from 1D states to 2D grid coordinates. Learn grid boundaries, pathfinding minimization/maximization, and direction vectors.  | Linear 1D               | 🔥 High  |
| 0/1 Knapsack & Bounded States                   | The foundation of decision-making. Learn the "include/exclude" choice mechanic and tracking changing capacities.                        | Linear 1D               | 🔥 High  |
| Unbounded Knapsack & Combinations               | Transition from single-use items to infinite-use choices. Learn how loop order changes counts (Permutations vs. Combinations).          | 0/1 Knapsack            | 🔥 High  |
| Longest Common Subsequence (LCS)                | The entry point to multi-sequence strings. Learn how to compare two independent pointers matching characters across strings.            | Matrix / 2D Grid        | 🔥 High  |
| Sequence Matching & Substrings                  | Extends LCS to wildcards, regex, and edit distances. Focuses on handling complex boundary conditions.                                   | LCS                     | ⚡ Medium |
| Longest Increasing Subsequence (LIS)            | Introduces coordinate-based decisions where the optimal past state must be searched via a nested loop or Binary Search ($O(N \log N)$). | Linear 1D               | 🔥 High  |
| State Machine DP (Stock Variant)                | Teaches how to model complex internal states (e.g., holding, sold, cooling down) as explicit transitions.                               | Linear 1D               | 🔥 High  |
| Circular / Ring Structures                      | Solves wrap-around dependencies by breaking the ring at strategic points or running dual DP sweeps.                                     | Linear 1D / Knapsack    | ⚡ Medium |
| String Partitioning / Palindromes               | Splitting strings into optimal segments. Teaches how to look inward-outward or precompute valid boolean matrices.                       | Matrix / LCS            | 🔥 High  |
| Interval DP & Matrix Chain Multiplication (MCM) | Solves range-based merging problems by computing optimal answers for small windows and expanding outward.                               | String Partitioning     | 🔥 High  |
| DP on Trees                                     | Combines Tree traversals (DFS) with DP state aggregation, passing optimal sub-tree decisions up to parent nodes.                        | Recursion / Trees       | 🔥 High  |
| Bitmask DP                                      | Used when choices depend on the exact subset of elements already used. Replaces sets/boolean arrays with integer bitmasks ($O(2^N)$).   | Combinatorics / Bitwise | 🔥 High  |
| DP on Graphs / Digit DP                         | Tracking states across topological sorts, shortest path DAGs, or building numbers digit-by-digit under mathematical constraints.        | Graph Theory / Bitmask  | ⚡ Medium |





## Arrays & Hashing

|Pattern|Core Learning Objective & Intuition|Prerequisites|Priority|
|---|---|---|---|
|Frequency Counting & Hash Maps|Master hash maps/sets for O(1) existence checks, counting, and grouping — the entry point to almost every other pattern.|None|🔥 High|
|Prefix Sum & Difference Arrays|Precompute cumulative sums for O(1) range-sum queries; use difference arrays to apply O(1) range updates.|Frequency Counting|🔥 High|
|Two Sum / Complement Search|Single-pass lookups by storing "what you need to find" in a hash map instead of nested loops.|Hashing|🔥 High|
|Kadane's Algorithm (Max/Min Subarray)|Track local-optimum-so-far vs. global-optimum, the seed idea behind 1D DP later.|None|🔥 High|
|Sorting-First Techniques|Solve problems (anagram grouping, interval-adjacent checks, dedup) by imposing order before scanning.|None|⚡ Medium|
|Cyclic Sort / In-Place Index Mapping|Use array values as implicit hash keys (value ↔ index) to find missing/duplicate numbers in O(1) space.|Arrays basics|⚡ Medium|
|Matrix Traversal & In-Place Manipulation|Direction-vector traversal, spiral order, and in-place rotation/transpose on 2D arrays.|Arrays basics|⚡ Medium|
|Subarray/Subsequence Counting via Prefix Hashing|Combine prefix sums with a hash map (prefix-sum frequency) to count subarrays matching a target sum/property.|Prefix Sum, Hashing|🔥 High|

Want me to continue to **Two Pointers** next?

## Two Pointers

|Pattern|Core Learning Objective & Intuition|Prerequisites|Priority|
|---|---|---|---|
|Opposite-Direction Pointers (Sorted Array)|Master the core mechanic: converge two pointers from both ends based on a comparison against a target, eliminating one side per step.|Sorting|🔥 High|
|Same-Direction / Fast-Slow Pointers|Use a slow pointer to mark a "write position" while a fast pointer scans ahead — foundation for in-place dedup and partitioning.|Arrays basics|🔥 High|
|Two Pointers on Two Different Arrays|Merge or compare two separately-sorted sequences by advancing whichever pointer is "behind," without extra space.|Sorting|🔥 High|
|Container / Area Maximization|Greedily move the pointer bounding the smaller dimension, proving why moving the larger one can never improve the answer.|Opposite-Direction Pointers|🔥 High|
|Three Pointers (3Sum / 4Sum family)|Fix one (or two) indices via a loop, then run a two-pointer sweep on the remaining range; handle duplicate-skipping cleanly.|Opposite-Direction Pointers|🔥 High|
|Partition-Based Pointers (Dutch National Flag)|Maintain three regions with multiple pointers to sort/partition an array into categories in a single pass.|Same-Direction Pointers|⚡ Medium|
|Palindrome Expansion via Two Pointers|Expand outward from a center (or check inward from edges) to verify or construct palindromic structure.|Opposite-Direction Pointers|⚡ Medium|
|Cycle Detection (Floyd's Tortoise & Hare)|Two pointers moving at different speeds meet iff a cycle exists — extends the fast-slow idea to linked structures/sequences.|Fast-Slow Pointers|🔥 High|

Continue to **Sliding Window** next?


## Sliding Window

|Pattern|Core Learning Objective & Intuition|Prerequisites|Priority|
|---|---|---|---|
|Fixed-Size Window|Master the core mechanic: slide a constant-size window by adding the new right element and removing the old left element in O(1) amortized.|Arrays basics|🔥 High|
|Variable-Size Window (Expand/Shrink on Condition)|Grow the window while a condition holds, shrink it when violated — the workhorse pattern for "longest/shortest subarray satisfying X."|Fixed-Size Window|🔥 High|
|Window with Hash Map / Frequency Counter|Track character/element counts inside the window to solve substring-matching and "at most K distinct" problems.|Variable-Size Window, Hashing|🔥 High|
|Minimum Window Substring Style|Two-phase window: expand until valid, then aggressively shrink to find the true minimum, updating the answer at each valid shrink.|Window with Hash Map|🔥 High|
|Monotonic Deque Window (Sliding Window Maximum/Minimum)|Maintain a deque of "candidates" in monotonic order so the window's max/min is always O(1) to query, evicting stale/dominated elements.|Fixed-Size Window, Monotonic Stack|🔥 High|
|Sliding Window on Two Pointers with Counters (At Most K)|Convert "exactly K" constraints into a difference of two "at most K" window counts — a key algebraic trick.|Window with Hash Map|⚡ Medium|
|Sliding Window + Prefix Sum Hybrid|Combine prefix sums with window bounds for problems mixing sum constraints with contiguous-range requirements.|Prefix Sum, Variable-Size Window|⚡ Medium|

Continue to **Stack (Monotonic Stack)** next?


## Stack (Monotonic Stack)

|Pattern|Core Learning Objective & Intuition|Prerequisites|Priority|
|---|---|---|---|
|Basic Stack Simulation (Valid Parentheses style)|Master using a stack to match nested/paired structures via push-on-open, pop-and-check-on-close.|None|🔥 High|
|Next Greater / Next Smaller Element|Maintain a monotonic stack while scanning left-to-right; pop elements that are "dominated" by the current one to resolve their answer in O(1) amortized.|Basic Stack Simulation|🔥 High|
|Previous Greater / Previous Smaller Element|Same monotonic mechanic run in the mirrored direction — teaches that the direction of the scan determines which "side" question you're answering.|Next Greater Element|🔥 High|
|Histogram / Largest Rectangle Style|Use a monotonic increasing stack to find, for each bar, the maximal width it can extend before hitting a smaller bar on either side.|Next Smaller Element|🔥 High|
|Stack-Based Expression Evaluation|Evaluate or convert expressions (infix/postfix, basic calculator) by using a stack to defer operators until their operands are ready.|Basic Stack Simulation|⚡ Medium|
|Monotonic Stack for Span/Count Problems|Instead of storing the answer directly, store indices/counts on the stack to compute spans (e.g., stock span, number of visible elements).|Next Greater Element|⚡ Medium|
|Stack + Greedy Removal (Remove K Digits style)|Greedily pop larger previous elements when a smaller current one appears, under a fixed removal budget, to build the optimal result.|Monotonic Stack basics|🔥 High|
|Min/Max Stack (Auxiliary Stack Design)|Design a stack supporting O(1) getMin/getMax by maintaining a parallel stack of running extremes.|Basic Stack Simulation|⚡ Medium|



## Binary Search

|Pattern|Core Learning Objective & Intuition|Prerequisites|Priority|
|---|---|---|---|
|Classic Binary Search on Sorted Array|Master the core mechanic: halve the search space each step using a monotonic comparison, and get the boundary conditions (`lo`, `hi`, `mid`) exactly right.|Sorted arrays|🔥 High|
|Lower Bound / Upper Bound (First & Last Occurrence)|Adapt classic binary search to find the leftmost/rightmost index satisfying a condition, not just an exact match.|Classic Binary Search|🔥 High|
|Binary Search on Rotated/Modified Arrays|Detect which half is "properly sorted" at each step and decide which half to discard, even when the array isn't fully sorted.|Classic Binary Search|🔥 High|
|Binary Search on Answer (Monotonic Predicate)|Reframe an optimization problem as "can I achieve X?", binary-searching over the answer space itself instead of array indices.|Classic Binary Search|🔥 High|
|Binary Search on 2D Matrix (Row/Column Monotonicity)|Exploit row-wise and column-wise sorted order to eliminate a full row or column per comparison, not just one element.|Classic Binary Search|⚡ Medium|
|Binary Search + Greedy Feasibility Check|Pair a binary-searched candidate value with a greedy/simulation "is this feasible?" check — the standard shape for allocation/capacity problems.|Binary Search on Answer, Greedy basics|🔥 High|
|Ternary Search / Search on Unimodal Functions|Extend binary search to functions that first increase then decrease (or vice versa), narrowing toward a single peak/valley.|Binary Search on Answer|⚡ Medium|
|Binary Search on Implicit/Infinite Search Space|Search when there's no explicit array — only a predicate function and bounds you must define yourself (e.g., "search insert position," exponential search).|Binary Search on Answer|⚡ Medium|

Continue to **Linked List** next?


## Linked List

|Pattern|Core Learning Objective & Intuition|Prerequisites|Priority|
|---|---|---|---|
|Traversal & Basic Manipulation|Master pointer rewiring fundamentals: insert, delete, and traverse without losing references to `next` nodes.|None|🔥 High|
|Fast-Slow Pointers (Middle & Cycle Detection)|Find the middle node or detect a cycle in one pass by advancing two pointers at different speeds.|Two Pointers basics|🔥 High|
|Reversal (Iterative & Recursive)|Rewire `next` pointers in-place to reverse a full list or a bounded sub-range, tracking `prev`/`curr`/`next` correctly.|Traversal & Basic Manipulation|🔥 High|
|Dummy Node Technique|Use a sentinel head node to eliminate special-casing when the real head might be removed or changed.|Traversal & Basic Manipulation|🔥 High|
|Merge Two/K Sorted Lists|Combine two-pointer merging logic with linked list rewiring; extend to K lists via divide-and-conquer or a heap.|Reversal, Heap basics|🔥 High|
|Cycle Detection & Cycle Start (Floyd's Algorithm)|Extend fast-slow meeting-point logic with a second phase to locate the exact node where a cycle begins.|Fast-Slow Pointers|🔥 High|
|Deep Copy with Random/Auxiliary Pointers|Clone a list containing extra pointers (e.g., `random`) using interleaving or a hash map to preserve reference integrity.|Traversal & Basic Manipulation|⚡ Medium|
|Reordering & Partitioning (Reorder List, Odd-Even, Partition)|Split a list into logical sub-lists (by position or value) and reconnect them in a new order without extra space.|Reversal, Fast-Slow Pointers|⚡ Medium|
|LRU/LFU Cache Design (Doubly Linked List + Hash Map)|Combine O(1) hash map lookups with a doubly linked list to maintain access-order eviction policies.|Dummy Node Technique, Hashing|🔥 High|

Continue to **Trees** next?


## Trees

|Pattern|Core Learning Objective & Intuition|Prerequisites|Priority|
|---|---|---|---|
|DFS Traversals (Preorder, Inorder, Postorder)|Master recursive (and iterative, stack-based) tree traversal — the foundation every other tree pattern builds on.|Recursion|🔥 High|
|BFS / Level-Order Traversal|Use a queue to process nodes level by level, tracking level boundaries for per-level aggregation problems.|Basic Trees|🔥 High|
|Recursive Tree Property Computation (Height, Diameter, Balance)|Compute a value bottom-up by combining left/right subtree results at each node — the core "return value up the recursion" mechanic.|DFS Traversals|🔥 High|
|Path Sum & Root-to-Leaf Path Problems|Track accumulated state (sum, path list) as you descend, and decide what to do with it at leaf nodes.|DFS Traversals|🔥 High|
|Lowest Common Ancestor (LCA)|Learn the "search both subtrees, combine results" pattern to find the deepest node that is an ancestor of two targets.|Recursive Tree Property Computation|🔥 High|
|Binary Search Tree (BST) Properties & Operations|Exploit the left < node < right invariant for validation, insertion, deletion, and in-order-gives-sorted-sequence tricks.|DFS Traversals|🔥 High|
|Tree Construction from Traversals|Rebuild a unique tree from traversal pairs (preorder+inorder, etc.) by using traversal properties to locate subtree boundaries.|DFS Traversals|⚡ Medium|
|Serialization / Deserialization|Design an encoding scheme (with null markers) that lets a tree be flattened to a string and reconstructed exactly.|DFS/BFS Traversals|⚡ Medium|
|Morris Traversal (O(1) Space Traversal)|Use temporary threading of null right pointers to traverse a tree without recursion or an explicit stack.|DFS Traversals|⚡ Medium|
|Tree DP (Subtree Aggregation with Choices)|Combine tree traversal with DP state at each node (e.g., "include this node or not") — the bridge into the DP-on-Trees pattern.|Recursive Tree Property Computation, DP basics|🔥 High|

Continue to **Tries** next?



## Tries

|Pattern|Core Learning Objective & Intuition|Prerequisites|Priority|
|---|---|---|---|
|Trie Construction & Insertion|Master building a prefix tree node-by-node, using a children map/array and an end-of-word marker.|Hashing, Recursion|🔥 High|
|Prefix Search & Word Search (Exact Match)|Traverse the trie character-by-character to check for exact word existence vs. prefix existence — two related but distinct queries.|Trie Construction|🔥 High|
|Wildcard / Pattern Matching in Tries|Extend trie search with backtracking (DFS) to handle wildcard characters that can match any node at that level.|Trie Construction, Backtracking basics|⚡ Medium|
|Trie for Autocomplete / Prefix Counting|Augment trie nodes with counters (word count, prefix count) to support "how many words share this prefix" queries efficiently.|Trie Construction|⚡ Medium|
|Word Search on Grid + Trie (Board Search Optimization)|Combine a trie of target words with grid DFS/backtracking, pruning search paths early when no trie branch matches.|Trie Construction, Backtracking|🔥 High|
|Bitwise Trie (Binary Trie for XOR Problems)|Build a trie over binary representations of numbers to answer "maximum XOR pair" style queries by greedily choosing opposite bits.|Trie Construction, Bit Manipulation basics|🔥 High|
|Trie with Deletion & Reference Counting|Support word removal by decrementing reference counts and pruning dead branches, without breaking shared prefixes.|Trie Construction|⚡ Medium|

Continue to **Heap/Priority Queue** next?


## Heap / Priority Queue

|Pattern|Core Learning Objective & Intuition|Prerequisites|Priority|
|---|---|---|---|
|Heap Construction & Basic Operations|Master push/pop/peek mechanics and the heap-invariant (parent ≤/≥ children) that keeps the extremum at the root in O(log n).|Arrays basics|🔥 High|
|Top-K Elements (Fixed-Size Heap)|Maintain a heap of size K, evicting the worst element on each insert, to track the K largest/smallest seen so far in O(n log K).|Heap Construction|🔥 High|
|K-Way Merge|Push one candidate from each of K sorted sources into a heap, repeatedly popping the min and pushing that source's next element.|Heap Construction, Merge Two Lists|🔥 High|
|Two-Heap Technique (Median Maintenance)|Balance a max-heap (lower half) and min-heap (upper half) so the median is always accessible at the two roots in O(1).|Heap Construction|🔥 High|
|Heap + Greedy Scheduling (Task/Interval Problems)|Use a heap to always pick the "next best" choice greedily — e.g., earliest finish time, least frequent task — under ordering constraints.|Heap Construction, Greedy basics|🔥 High|
|Custom Comparator Heaps (Multi-Criteria Ordering)|Design comparators that order heap elements by composite/derived keys (ratios, tuples, custom priority) rather than raw values.|Heap Construction|⚡ Medium|
|Heap-Based Dijkstra-Style Lazy Deletion|Push updated/duplicate entries instead of decreasing keys in place, and lazily discard stale entries when popped.|Heap Construction, Graph basics|🔥 High|
|Heapify (Build Heap in O(n))|Understand why bottom-up heap construction is O(n), not O(n log n), and when to build a heap directly from an array.|Heap Construction|⚡ Medium|

Continue to **Backtracking** next?


## Backtracking

|Pattern|Core Learning Objective & Intuition|Prerequisites|Priority|
|---|---|---|---|
|Subsets / Power Set Generation|Master the core recursive "include or exclude" branching that generates every possible subset.|Recursion|🔥 High|
|Permutations Generation|Build sequences by choosing an unused element at each recursive level, using a visited-tracker or swap-based in-place technique.|Recursion|🔥 High|
|Combinations with Pruning|Generate fixed-size selections while pruning branches early when remaining elements can't possibly complete a valid combination.|Subsets Generation|🔥 High|
|Combination Sum (Bounded/Unbounded Choices)|Extend combination backtracking to target-sum problems, learning when to advance the index (no reuse) vs. stay (reuse allowed).|Combinations with Pruning|🔥 High|
|Duplicate Handling in Backtracking (Skip-Sibling Technique)|Sort input first, then skip adjacent duplicate choices at the same recursion depth to avoid generating duplicate results.|Combinations with Pruning|🔥 High|
|Grid/Board Backtracking (Word Search, N-Queens style)|Combine DFS with a "place, recurse, un-place" cycle on a 2D board, tracking visited cells or column/diagonal constraints.|Recursion, Matrix Traversal|🔥 High|
|Partitioning Backtracking (Palindrome/String Splits)|Backtrack over valid split points in a sequence, recursing on the remainder after each valid prefix segment.|String Partitioning (DP)|⚡ Medium|
|Constraint Satisfaction (Sudoku-style)|Combine backtracking with constraint propagation, choosing the most-constrained cell first to prune the search space aggressively.|Grid Backtracking|⚡ Medium|
|Backtracking with Memoization (Bridging to DP)|Recognize when overlapping subproblems in a backtracking search can be cached, transitioning the exponential search toward polynomial DP.|Backtracking basics, DP basics|🔥 High|

Continue to **Graphs** next?


## Graphs

|Pattern|Core Learning Objective & Intuition|Prerequisites|Priority|
|---|---|---|---|
|Graph Representation (Adjacency List/Matrix)|Master converting problem inputs into adjacency lists/matrices — the prerequisite for every graph algorithm that follows.|Arrays/Hashing basics|🔥 High|
|DFS Traversal (Connected Components)|Explore as deep as possible before backtracking, using a visited set to find connected components / islands.|Graph Representation, Recursion|🔥 High|
|BFS Traversal (Shortest Path in Unweighted Graphs)|Use a queue for level-by-level exploration, guaranteeing the shortest path in edge-count terms on unweighted graphs.|Graph Representation|🔥 High|
|Cycle Detection (Undirected Graphs)|Detect a cycle via DFS by tracking the parent node, so revisiting a non-parent visited node signals a cycle.|DFS Traversal|🔥 High|
|Cycle Detection (Directed Graphs)|Use a three-color (white/gray/black) or recursion-stack technique to distinguish a back-edge (cycle) from a cross/forward edge.|DFS Traversal|🔥 High|
|Topological Sort (Kahn's BFS & DFS-based)|Order nodes so every edge points forward, using in-degree counting (Kahn's) or post-order DFS reversal.|Cycle Detection (Directed)|🔥 High|
|Multi-Source BFS|Seed the BFS queue with multiple starting nodes simultaneously to compute shortest distance from "the nearest of several sources."|BFS Traversal|🔥 High|
|Union-Find (Disjoint Set Union)|Group elements into sets with near-O(1) union/find via path compression and union by rank — the backbone of connectivity problems.|Arrays basics|🔥 High|
|Bipartite Graph Check (2-Coloring)|Attempt to 2-color the graph via BFS/DFS; a coloring conflict proves the graph isn't bipartite.|BFS/DFS Traversal|⚡ Medium|
|Graph Coloring / Constraint Propagation|Extend 2-coloring to general k-coloring or constraint-based node labeling problems using backtracking.|Bipartite Check, Backtracking|⚡ Medium|
|Clone Graph / Graph Construction|Use DFS/BFS with a hash map (old node → new node) to deep-copy a graph without infinite recursion on cycles.|DFS Traversal, Hashing|⚡ Medium|

Continue to **Advanced Graphs** next?


## Advanced Graphs

|Pattern|Core Learning Objective & Intuition|Prerequisites|Priority|
|---|---|---|---|
|Dijkstra's Algorithm (Single-Source Shortest Path)|Use a min-heap to always expand the currently-closest unvisited node, relaxing edges greedily under non-negative weights.|Heap/Priority Queue, BFS|🔥 High|
|Bellman-Ford Algorithm|Relax all edges V−1 times to handle negative weights, and detect negative cycles via a final extra relaxation pass.|Graph Representation|🔥 High|
|Floyd-Warshall (All-Pairs Shortest Path)|Use a triple-nested DP where the middle "via node" is the outermost loop, building up shortest paths through growing intermediate sets.|DP basics, Graph Representation|🔥 High|
|Minimum Spanning Tree — Prim's Algorithm|Grow a tree greedily from a start node, always adding the cheapest edge that connects a new node, using a heap.|Heap/Priority Queue, Dijkstra's|🔥 High|
|Minimum Spanning Tree — Kruskal's Algorithm|Sort all edges by weight and greedily add them if they don't form a cycle, using Union-Find to detect cycles efficiently.|Union-Find, Sorting|🔥 High|
|Network Flow (Max Flow — Ford-Fulkerson/Edmonds-Karp)|Repeatedly find augmenting paths (via BFS) in a residual graph, pushing flow until no augmenting path remains.|BFS, Graph Representation|⚡ Medium|
|Strongly Connected Components (Tarjan's/Kosaraju's)|Identify maximal groups of mutually-reachable nodes using DFS discovery times/low-links, or two-pass DFS on the graph and its transpose.|DFS Traversal, Topological Sort|⚡ Medium|
|Bridges & Articulation Points|Use DFS discovery/low-link values to find edges/nodes whose removal disconnects the graph.|Tarjan's SCC concepts|⚡ Medium|
|Shortest Path with State (Dijkstra on Expanded State Space)|Extend Dijkstra by encoding extra state (fuel, keys held, moves used) into the "node," turning constrained shortest-path problems into standard Dijkstra.|Dijkstra's Algorithm, Bitmask DP|🔥 High|
|Eulerian Path/Circuit (Hierholzer's Algorithm)|Construct a path/circuit traversing every edge exactly once by greedily following edges and backtracking to insert detours.|Graph Representation, DFS|⚡ Medium|

Continue to **Greedy** next?


## Greedy

|Pattern|Core Learning Objective & Intuition|Prerequisites|Priority|
|---|---|---|---|
|Activity Selection / Interval Scheduling|Master the core greedy proof pattern: sort by a key (end time) and greedily pick whichever choice preserves the most future options.|Sorting|🔥 High|
|Greedy on Sorted Ratios (Fractional Knapsack style)|Sort items by value-per-unit-cost and consume the highest-ratio items first, taking partial amounts when needed.|Sorting|🔥 High|
|Jump Game / Reachability Greedy|Track the farthest reachable index seen so far while scanning, proving that always extending "reach" is optimal.|Arrays basics|🔥 High|
|Greedy Exchange Argument Problems|Learn to justify a greedy choice by proving any optimal solution can be transformed into the greedy one without losing value.|Sorting|⚡ Medium|
|Two-Pointer Greedy (Gas Station, Candy style)|Combine greedy local decisions with a single-pass pointer sweep, using running totals to detect when a "restart" is needed.|Two Pointers, Prefix Sum|🔥 High|
|Heap-Based Greedy Scheduling|Use a heap to always process the "currently most urgent/valuable" task under ordering or capacity constraints.|Heap/Priority Queue|🔥 High|
|Greedy + Interval Merging/Partitioning|Merge or partition overlapping intervals via sorting on start/end, then greedily deciding merge boundaries or minimum groups needed.|Interval Scheduling|🔥 High|
|Greedy String/Array Construction|Build the lexicographically smallest/largest result by greedily deciding each position using a monotonic stack or local comparison.|Monotonic Stack|⚡ Medium|
|Greedy vs. DP Boundary Recognition|Recognize when a problem that looks greedy actually requires DP because the "obviously best" local choice isn't provably optimal.|DP basics, Greedy basics|🔥 High|

Continue to **Intervals** next?


## Intervals

|Pattern|Core Learning Objective & Intuition|Prerequisites|Priority|
|---|---|---|---|
|Interval Sorting Fundamentals (by Start/End)|Master why sorting by start vs. end changes what a single greedy pass can answer — the foundation for every interval pattern below.|Sorting|🔥 High|
|Merge Overlapping Intervals|Sort by start, then merge the current interval into the previous one whenever their ranges overlap.|Interval Sorting Fundamentals|🔥 High|
|Insert Interval into Sorted List|Handle three phases explicitly (before overlap, merging overlap, after overlap) when inserting a new interval into an already-merged list.|Merge Overlapping Intervals|🔥 High|
|Non-Overlapping Intervals (Minimum Removals)|Sort by end time and greedily keep the interval that frees up the earliest room for future intervals, counting removals needed.|Interval Sorting Fundamentals, Greedy basics|🔥 High|
|Minimum Meeting Rooms / Interval Point Sweeping|Convert intervals into separate sorted start/end event streams (or a heap of end times) to track maximum concurrent overlap.|Heap/Priority Queue, Sorting|🔥 High|
|Interval Intersection (Two Sorted Lists)|Advance two pointers across two separate interval lists, computing pairwise overlaps and discarding the interval that ends first.|Two Pointers, Interval Sorting Fundamentals|🔥 High|
|Sweep Line with Delta/Difference Array|Mark +1 at an interval's start and −1 just after its end on a difference array, then prefix-sum to get coverage counts at every point.|Prefix Sum & Difference Arrays|⚡ Medium|
|Interval Scheduling with Weights (DP over Intervals)|Sort by end time, then use binary search to find the last non-conflicting interval, turning selection into a DP over "take or skip."|Binary Search, DP basics|⚡ Medium|

Continue to **Bit Manipulation** next?


## Bit Manipulation

|Pattern|Core Learning Objective & Intuition|Prerequisites|Priority|
|---|---|---|---|
|Basic Bitwise Operators & Bit Tricks|Master AND/OR/XOR/NOT/shift mechanics and common one-liners (check bit, set bit, clear bit, toggle bit, isolate lowest set bit).|None|🔥 High|
|XOR Properties (Single/Pair Cancellation)|Exploit `a ^ a = 0` and `a ^ 0 = a` to find unique elements, missing numbers, or swap values without extra space.|Basic Bitwise Operators|🔥 High|
|Counting Set Bits (Brian Kernighan's Algorithm)|Repeatedly clear the lowest set bit (`n & (n-1)`) to count bits in O(popcount) instead of O(bit-width).|Basic Bitwise Operators|🔥 High|
|Bitmask as Subset Representation|Represent a subset of N elements as an N-bit integer, iterating over all `2^N` subsets or checking membership via bit tests.|Basic Bitwise Operators|🔥 High|
|Bit DP (State Compression)|Use a bitmask as the DP state dimension when the "which items are used" matters more than their count — bridges directly into Bitmask DP.|Bitmask as Subset Representation, DP basics|🔥 High|
|Binary Trie for XOR Maximization|Build a trie over bit representations to greedily choose opposite bits at each level, finding max/min XOR pairs efficiently.|Bitwise Trie (Tries topic)|🔥 High|
|Bit Manipulation for Number Properties (Power of Two, etc.)|Use bit-pattern identities (`n & (n-1) == 0`, bit parity) to check structural number properties in O(1).|Basic Bitwise Operators|⚡ Medium|
|Gray Code & Bit Sequence Generation|Generate sequences where consecutive values differ by exactly one bit, using the `i ^ (i >> 1)` formula.|Basic Bitwise Operators|⚡ Medium|
|Bitwise Prefix/Trie Aggregation (Subset Sum over Bitmasks)|Combine bitmask enumeration with submask iteration (`for sub = mask; sub; sub = (sub-1) & mask`) for subset-sum-style DP over bitmasks.|Bitmask as Subset Representation|⚡ Medium|

Continue to **Math & Number Theory** next?


## Math & Number Theory

|Pattern|Core Learning Objective & Intuition|Prerequisites|Priority|
|---|---|---|---|
|Prime Sieve (Sieve of Eratosthenes)|Precompute primality for all numbers up to N in O(N log log N) by marking multiples of each prime, instead of testing each number individually.|Basic Math|🔥 High|
|GCD/LCM & Euclidean Algorithm|Master the recursive Euclidean algorithm for GCD, and derive LCM from it — the building block for most number-theory problems.|Basic Math|🔥 High|
|Modular Arithmetic (Add/Sub/Mul under Mod)|Learn how to keep intermediate results bounded under a modulus without breaking correctness, including handling negative mod results.|Basic Math|🔥 High|
|Modular Exponentiation (Fast Power)|Compute `a^b mod m` in O(log b) via repeated squaring instead of O(b) repeated multiplication.|Modular Arithmetic|🔥 High|
|Modular Inverse (Fermat's Little Theorem / Extended Euclid)|Divide under a modulus by multiplying by a precomputed inverse, using Fermat's little theorem (prime mod) or extended Euclid (general case).|Modular Exponentiation, GCD|🔥 High|
|Combinatorics (nCr, nPr under Modulo)|Precompute factorials and modular inverse factorials to answer combination/permutation queries in O(1) after O(N) preprocessing.|Modular Inverse|🔥 High|
|Prime Factorization (Trial Division & Smallest Prime Factor Sieve)|Factorize numbers efficiently by precomputing each number's smallest prime factor, enabling O(log N) factorization per query.|Prime Sieve|🔥 High|
|Divisor Enumeration & Counting Divisors|Enumerate all divisors of N in O(√N) by checking pairs, and count total divisors across a range using a sieve-based approach.|Prime Factorization|⚡ Medium|
|Digit DP (Counting Numbers with Digit Constraints)|Build numbers digit-by-digit while tracking a "tight" bound flag, turning range-constrained counting problems into a DP over digit positions.|DP basics, Modular Arithmetic|⚡ Medium|
|Matrix Exponentiation (Linear Recurrence Acceleration)|Represent a linear recurrence as matrix multiplication, then use fast exponentiation on the matrix to compute the Nth term in O(k³ log n).|Modular Exponentiation, Linear Algebra basics|⚡ Medium|
|Chinese Remainder Theorem (CRT)|Combine multiple modular congruences into a single equivalent congruence under the product of the moduli.|Modular Inverse, GCD|⚡ Medium|

Continue to **Segment/Fenwick Tree** next?


## Segment / Fenwick Tree

|Pattern|Core Learning Objective & Intuition|Prerequisites|Priority|
|---|---|---|---|
|Fenwick Tree (Binary Indexed Tree) — Point Update, Range Query|Master the core BIT mechanic: use the lowest-set-bit trick to update/query prefix sums in O(log n) with a compact array, no explicit tree nodes.|Bit Manipulation basics, Prefix Sum|🔥 High|
|Fenwick Tree — Range Update, Point Query|Apply a difference-array trick on top of a BIT so a range update becomes two point updates, and a point query becomes a prefix sum.|Fenwick Tree (Point Update)|🔥 High|
|Fenwick Tree — Range Update, Range Query|Maintain two BITs simultaneously to derive range-sum queries under range updates via an algebraic prefix-sum identity.|Fenwick Tree (Range Update, Point Query)|⚡ Medium|
|Segment Tree — Build, Point Update, Range Query|Build a binary tree over array ranges where each node stores an aggregate (sum/min/max) of its range, enabling O(log n) point update and range query.|Recursion, Divide and Conquer|🔥 High|
|Segment Tree — Lazy Propagation (Range Update, Range Query)|Defer pending updates at a node using a "lazy" tag, pushing them down to children only when a query/update actually needs to descend further.|Segment Tree (Point Update)|🔥 High|
|Segment Tree for Non-Sum Aggregates (Min/Max/GCD)|Recognize that the same segment tree structure generalizes to any associative combine function, not just sum.|Segment Tree (Point Update)|🔥 High|
|Merge Sort Tree (Segment Tree of Sorted Vectors)|Store a sorted copy of each range at every node to answer "count elements ≤ X in range [l,r]" via binary search per node.|Segment Tree (Point Update), Binary Search|⚡ Medium|
|Persistent Segment Tree|Create a new "version" of the tree on each update by only copying the O(log n) path that changed, preserving all previous versions.|Segment Tree (Point Update)|⚡ Medium|
|Fenwick Tree for Counting Inversions / Order Statistics|Use coordinate compression plus a BIT over ranks to count inversions or find the k-th smallest element under updates.|Fenwick Tree (Point Update), Sorting|🔥 High|
|Segment Tree Beats / Advanced Range Operations|Extend lazy propagation to non-trivial operations (range chmin/chmax) by tracking extra per-node metadata (max, second-max, count).|Segment Tree (Lazy Propagation)|⚡ Medium|

Continue to **String Algorithms** (last topic on the list) next?


## String Algorithms

|Pattern|Core Learning Objective & Intuition|Prerequisites|Priority|
|---|---|---|---|
|String Hashing (Polynomial Rolling Hash)|Compute a fixed-size hash for any substring in O(1) after O(n) preprocessing, enabling fast substring-equality checks.|Modular Arithmetic|🔥 High|
|KMP Algorithm (Knuth-Morris-Pratt)|Precompute a "failure function" (longest proper prefix-suffix) so pattern matching never re-examines matched characters after a mismatch.|Basic String Traversal|🔥 High|
|Z-Function|Compute, for every position, the length of the longest substring starting there that matches the string's prefix — a versatile alternative to KMP.|Basic String Traversal|🔥 High|
|Rabin-Karp (Hashing-Based Pattern Matching)|Use rolling hashes to slide a window across text, comparing hash values before falling back to character comparison on collision.|String Hashing|⚡ Medium|
|Manacher's Algorithm (Longest Palindromic Substring in O(n))|Exploit palindrome symmetry to reuse previously-computed palindrome radii, avoiding the O(n²) expand-around-center approach.|Palindrome Expansion (Two Pointers)|⚡ Medium|
|Trie-Based String Matching|Reuse the trie structure to match multiple patterns against a text simultaneously via shared prefixes.|Trie Construction|🔥 High|
|Aho-Corasick Algorithm (Multi-Pattern Matching)|Extend a trie with failure links (like KMP's failure function, generalized to a tree) to match many patterns against text in a single pass.|Trie Construction, KMP Algorithm|⚡ Medium|
|Suffix Array & LCP Array|Sort all suffixes of a string lexicographically, then use the Longest Common Prefix array to answer substring/repetition queries efficiently.|Sorting, String Hashing|⚡ Medium|
|Longest Palindromic Subsequence / Substring (DP)|Distinguish subsequence (DP over `[i,j]` matching ends) from substring (contiguous, often via expansion or Manacher's) palindrome problems.|Interval DP, LCS|🔥 High|
|Anagram & Permutation-in-String Detection|Use fixed-size frequency-count windows (sliding window + hashing) to detect anagram matches without full re-sorting per window.|Sliding Window, Frequency Counting|🔥 High|
|Edit Distance & String Transformation DP|Model insert/delete/replace operations as a 2D DP over two string pointers, minimizing operations to transform one string into another.|LCS, Matrix/2D DP|🔥 High|

That completes all 18 topics on the planned list — Arrays & Hashing through String Algorithms. If you want, I can now compile these into one consolidated master reference file (or feed each topic's pattern list into the `agent.md` you built earlier to generate the full problem sheets for all of them).


