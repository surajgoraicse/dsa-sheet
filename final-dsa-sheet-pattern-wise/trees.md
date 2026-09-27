# Trees — Problem Sheet

## Patterns Reference

| Pattern | Core Learning Objective & Intuition | Prerequisites | Priority |
|---|---|---|---|
| DFS Traversals (Preorder, Inorder, Postorder) | Master recursive (and iterative, stack-based) tree traversal — the foundation every other tree pattern builds on. | Recursion | 🔥 High |
| BFS / Level-Order Traversal | Use a queue to process nodes level by level, tracking level boundaries for per-level aggregation problems. | Basic Trees | 🔥 High |
| Recursive Tree Property Computation (Height, Diameter, Balance) | Compute a value bottom-up by combining left/right subtree results at each node. | DFS Traversals | 🔥 High |
| Path Sum & Root-to-Leaf Path Problems | Track accumulated state (sum, path list) as you descend, and decide what to do with it at leaf nodes. | DFS Traversals | 🔥 High |
| Lowest Common Ancestor (LCA) | Learn the "search both subtrees, combine results" pattern to find the deepest node that is an ancestor of two targets. | Recursive Tree Property Computation | 🔥 High |
| Binary Search Tree (BST) Properties & Operations | Exploit the left < node < right invariant for validation, insertion, deletion, and in-order-gives-sorted-sequence tricks. | DFS Traversals | 🔥 High |
| Tree Construction from Traversals | Rebuild a unique tree from traversal pairs by using traversal properties to locate subtree boundaries. | DFS Traversals | ⚡ Medium |
| Serialization / Deserialization | Design an encoding scheme that lets a tree be flattened to a string and reconstructed exactly. | DFS/BFS Traversals | ⚡ Medium |
| Morris Traversal (O(1) Space Traversal) | Use temporary threading of null right pointers to traverse a tree without recursion or an explicit stack. | DFS Traversals | ⚡ Medium |
| Tree DP (Subtree Aggregation with Choices) | Combine tree traversal with DP state at each node — the bridge into the DP-on-Trees pattern. | Recursive Tree Property Computation, DP basics | 🔥 High |

---

## Table of Contents
- [DFS Traversals (Preorder, Inorder, Postorder)](#dfs-traversals-preorder-inorder-postorder)
- [BFS / Level-Order Traversal](#bfs--level-order-traversal)
- [Recursive Tree Property Computation](#recursive-tree-property-computation-height-diameter-balance)
- [Path Sum & Root-to-Leaf Path Problems](#path-sum--root-to-leaf-path-problems)
- [Lowest Common Ancestor (LCA)](#lowest-common-ancestor-lca)
- [Binary Search Tree (BST) Properties & Operations](#binary-search-tree-bst-properties--operations)
- [Tree Construction from Traversals](#tree-construction-from-traversals)
- [Serialization / Deserialization](#serialization--deserialization)
- [Morris Traversal](#morris-traversal-o1-space-traversal)
- [Tree DP](#tree-dp-subtree-aggregation-with-choices)
- [Uncategorized / Needs Review](#uncategorized--needs-review)

---

## DFS Traversals (Preorder, Inorder, Postorder)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/) | Striver | Not Started |
| 2 | [Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/) | Striver | Not Started |
| 3 | [Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/) | Striver | Not Started |
| 4 | [Iterative Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/) | Striver | Not Started |
| 5 | [Iterative Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/) | Striver | Not Started |
| 6 | [Iterative Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/) | Striver | Not Started |

## BFS / Level-Order Traversal

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) | Striver | Not Started |
| 2 | [Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) | Striver | Not Started |
| 3 | [Top View of Binary Tree](https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1) | Striver | Not Started |
| 4 | [Bottom View of Binary Tree](https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1) | Striver | Not Started |
| 5 | [Right/Left View of Binary Tree](https://leetcode.com/problems/binary-tree-right-side-view/) | Striver | Not Started |
| 6 | [Vertical Order Traversal](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/) | Striver | Not Started |

## Recursive Tree Property Computation (Height, Diameter, Balance)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Maximum depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | Striver | Not Started |
| 2 | [Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/) | Striver | Not Started |
| 3 | [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) | Striver | Not Started |
| 4 | [Same Binary Tree](https://leetcode.com/problems/same-tree/) | Striver | Not Started |
| 5 | [Symmetric Binary Tree](https://leetcode.com/problems/symmetric-tree/) | Striver | Not Started |
| 6 | [Count Number of Nodes in Complete Binary Tree](https://leetcode.com/problems/count-complete-tree-nodes/) | Striver | Not Started |
| 7 | [Tree Diameter](https://cses.fi/problemset/task/1131) | CSES | Not Started |
| 8 | [Tree Distances I](https://cses.fi/problemset/task/1132) | CSES | Not Started |
| 9 | [Tree Distances II](https://cses.fi/problemset/task/1133) | CSES | Not Started |

## Path Sum & Root-to-Leaf Path Problems

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Maximum Sum Path in a Binary Tree](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | Striver | Not Started |
| 2 | [Boundary of Binary Tree](https://leetcode.com/problems/boundary-of-binary-tree/) | Striver | Not Started |
| 3 | [Path Queries](https://cses.fi/problemset/task/1138) | CSES | Not Started |
| 4 | [Path Queries II](https://cses.fi/problemset/task/2134) | CSES | Not Started |
| 5 | [Counting Paths](https://cses.fi/problemset/task/1136) | CSES | Not Started |

## Lowest Common Ancestor (LCA)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) | Striver | Not Started |
| 2 | [Company Queries I](https://cses.fi/problemset/task/1687) | CSES | Not Started |
| 3 | [Company Queries II](https://cses.fi/problemset/task/1688) | CSES | Not Started |
| 4 | [Distance Queries](https://cses.fi/problemset/task/1135) | CSES | Not Started |

## Binary Search Tree (BST) Properties & Operations

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/) | Striver | Not Started |
| 2 | [Minimum Element in a BST](https://www.geeksforgeeks.org/problems/minimum-element-in-bst/1) | Striver | Not Started |
| 3 | [Ceil in a Binary Search Tree](https://www.geeksforgeeks.org/problems/implementing-ceil-in-bst/1) | Striver | Not Started |
| 4 | [Floor in a Binary Search Tree](https://www.geeksforgeeks.org/problems/floor-in-bst/1) | Striver | Not Started |
| 5 | [Insert into a BST](https://leetcode.com/problems/insert-into-a-binary-search-tree/) | Striver | Not Started |
| 6 | [Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/) | Striver | Not Started |
| 7 | [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) | Striver | Not Started |
| 8 | [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) | Striver | Not Started |
| 9 | [Lowest Common Ancestor of a BST](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) | Striver | Not Started |
| 10 | [Inorder Successor in BST](https://leetcode.com/problems/inorder-successor-in-bst/) | Striver | Not Started |
| 11 | [BST Iterator](https://leetcode.com/problems/binary-search-tree-iterator/) | Striver | Not Started |
| 12 | [Two Sum in BST](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/) | Striver | Not Started |
| 13 | [Recover BST](https://leetcode.com/problems/recover-binary-search-tree/) | Striver | Not Started |
| 14 | [Largest BST in Binary Tree](https://www.geeksforgeeks.org/problems/largest-bst/1) | Striver | Not Started |

## Tree Construction from Traversals

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | Striver | Not Started |
| 2 | [Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) | Striver | Not Started |

## Serialization / Deserialization

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | Striver | Not Started |
| 2 | [Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) | Striver | Not Started |

## Morris Traversal (O(1) Space Traversal)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Morris Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/) | Striver | Not Started |
| 2 | [Morris Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/) | Striver | Not Started |

## Tree DP (Subtree Aggregation with Choices)

| # | Problem (linked) | Source | Status |
|---|---|---|---|
| 1 | [Subordinates](https://cses.fi/problemset/task/1674) | CSES | Not Started |
| 2 | [Tree Matching](https://cses.fi/problemset/task/1130) | CSES | Not Started |
| 3 | [Subtree Queries](https://cses.fi/problemset/task/1137) | CSES | Not Started |
| 4 | [Distinct Colors](https://cses.fi/problemset/task/1139) | CSES | Not Started |
| 5 | [Finding a Centroid](https://cses.fi/problemset/task/2079) | CSES | Not Started |
| 6 | [Fixed-Length Paths I](https://cses.fi/problemset/task/2080) | CSES | Not Started |
| 7 | [Fixed-Length Paths II](https://cses.fi/problemset/task/2081) | CSES | Not Started |

## Uncategorized / Needs Review

| # | Problem (linked) | Source | Status |
|---|---|---|---|
