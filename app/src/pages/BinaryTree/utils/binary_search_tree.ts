// // components/js_binary_search_tree.ts
// const COMPARISON = {
//     EQUAL: 0,
//     SMALLER: -1,
//     GREATER: 1,
//   };
  
//   const defaultCompareNumberFn = (a: number | string, b: number | string): number => {
//     if (Number(a) === Number(b)) {
//       return COMPARISON.EQUAL;
//     }
//     return Number(a) < Number(b) ? COMPARISON.SMALLER : COMPARISON.GREATER;
//   };
  
//   class TreeNode {
//     value: string;
//     parent: TreeNode | null;
//     left: TreeNode | null;
//     right: TreeNode | null;
  
//     constructor(value: string, parent: TreeNode | null = null) {
//       this.value = value.toString();
//       this.parent = parent;
//       this.left = null;
//       this.right = null;
//     }
  
//     get isLeaf(): boolean {
//       return this.left === null && this.right === null;
//     }
  
//     get hasChildren(): boolean {
//       return !this.isLeaf;
//     }
//   }
  
//   class BinarySearchTree {
//     root: TreeNode | null;
//     compareFn: (a: number | string, b: number | string) => number;
  
//     constructor(compareFn = defaultCompareNumberFn) {
//       this.root = null;
//       this.compareFn = compareFn;
//     }
  
//     insert(value: string): TreeNode | boolean {
//       let node = this.root;
//       let insertedNode: TreeNode;
  
//       if (node == null) {
//         this.root = new TreeNode(value);
//         return this.root;
//       }
  
//       while (true) {
//         const comparison = this.compareFn(value, node.value);
  
//         if (comparison === COMPARISON.EQUAL) {
//           insertedNode = node;
//           return node;
//         }
  
//         if (comparison === COMPARISON.SMALLER) {
//           if (node.left === null) {
//             insertedNode = new TreeNode(value, node);
//             node.left = insertedNode;
//             return true;
//           }
//           node = node.left;
//         }
  
//         if (comparison === COMPARISON.GREATER) {
//           if (node.right === null) {
//             insertedNode = new TreeNode(value, node);
//             node.right = insertedNode;
//             return true;
//           }
//           node = node.right;
//         }
//       }
//     }
  
//     remove(value: string, node?: TreeNode): TreeNode | null {
//       node = node ? node : this.search(value);
  
//       if (!node) return null;
  
//       const nodeIsRoot = node.parent === null;
//       const hasBothChildren = node.left !== null && node.right !== null;
//       const isLeftChild = !nodeIsRoot ? node.parent.left === node : false;
  
//       if (node.isLeaf) {
//         if (nodeIsRoot) {
//           this.root = null;
//         } else if (isLeftChild) {
//           node.parent.left = null;
//         } else {
//           node.parent.right = null;
//         }
//         return node;
//       }
//       if (!hasBothChildren) {
//         const child = node.left !== null ? node.left : node.right;
//         if (nodeIsRoot) {
//           this.root = child;
//         } else if (isLeftChild) {
//           node.parent.left = child;
//         } else {
//           node.parent.right = child;
//         }
//         child.parent = node.parent;
//         return node;
//       }
  
//       const minRightLeaf = this.min(node.right);
//       if (minRightLeaf.parent.left === minRightLeaf) {
//         minRightLeaf.parent.left = null;
//       } else {
//         minRightLeaf.parent.right = null;
//       }
//       const clone = { ...node };
//       node.value = minRightLeaf.value;
//       return clone;
//     }
  
//     search(value: string): TreeNode | undefined {
//       return this.inOrderTraverse().find((node) => node.value === value);
//     }
  
//     min(node: TreeNode = this.root): TreeNode | null {
//       let current = node;
//       while (current !== null && current.left !== null) {
//         current = current.left;
//       }
//       return current;
//     }
  
//     max(node: TreeNode = this.root): TreeNode | null {
//       let current = node;
//       while (current !== null && current.right !== null) {
//         current = current.right;
//       }
//       return current;
//     }
  
//     inOrderTraverse(node: TreeNode = this.root, traversed: TreeNode[] = []): TreeNode[] {
//       if (node === null) {
//         return traversed;
//       }
//       if (node.left) {
//         traversed.push(...this.inOrderTraverse(node.left));
//       }
//       traversed.push(node);
//       if (node.right) {
//         traversed.push(...this.inOrderTraverse(node.right));
//       }
//       return traversed;
//     }
  
//     preOrderTraverse(node: TreeNode = this.root, traversed: TreeNode[] = []): TreeNode[] {
//       if (node === null) {
//         return traversed;
//       }
//       traversed.push(node);
//       if (node.left) {
//         traversed.push(...this.preOrderTraverse(node.left));
//       }
//       if (node.right) {
//         traversed.push(...this.preOrderTraverse(node.right));
//       }
//       return traversed;
//     }
  
//     postOrderTraverse(node: TreeNode = this.root, traversed: TreeNode[] = []): TreeNode[] {
//       if (node === null) {
//         return traversed;
//       }
//       if (node.left) {
//         traversed.push(...this.postOrderTraverse(node.left));
//       }
//       if (node.right) {
//         traversed.push(...this.postOrderTraverse(node.right));
//       }
//       traversed.push(node);
//       return traversed;
//     }
//   }
  
//   export default BinarySearchTree;
  