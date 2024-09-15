

interface TreeNode {
  value: any;
  left: TreeNode | null;
  right: TreeNode | null;
  parent: TreeNode | null;
    // Explicit declaration for getter properties
    isLeaf: boolean;
    hasChildren: boolean;
}

interface Tree {
  root: TreeNode | null;
  insert(value: any): TreeNode;
  remove(value: any): TreeNode | null;
  search(value: any): TreeNode | null;
  min(): TreeNode | null;
  max(): TreeNode | null;
  preOrderTraverse(): TreeNode[];
  inOrderTraverse(): TreeNode[];
  postOrderTraverse(): TreeNode[];
}

const COMPARISON = {
  EQUAL: 0,
  SMALLER: -1,
  GREATER: 1,
};

const defaultCompareNumberFn = (a: string | number, b: string | number): number => {
  if (Number(a) === Number(b)) {
    return COMPARISON.EQUAL;
  }

  return Number(a) < Number(b) ? COMPARISON.SMALLER : COMPARISON.GREATER;
};

export default class BinarySearchTree implements Tree {
  root: TreeNode | null;
  compareFn: (a: string | number, b: string | number) => number;

  constructor(compareFn: (a: string | number, b: string | number) => number = defaultCompareNumberFn) {
    this.root = null;
    this.compareFn = compareFn;
  }

  insert(value: any): TreeNode {
    const newNode: TreeNode = { value, parent:this.root, left: null, right: null };
    
    if (!this.root) {
      this.root = newNode;
      return newNode;
    }
    
    let current: TreeNode = this.root;
    while (true) {
      const comparison = this.compareFn(value, current.value);
      
      if (comparison === COMPARISON.SMALLER) {
        if (!current.left) {
          current.left = newNode;
          return newNode;
        }
        current = current.left;
      } else if (comparison === COMPARISON.GREATER) {
        if (!current.right) {
          current.right = newNode;
          return newNode;
        }
        current = current.right;
      } else {
        // value is equal to current.value, handle duplicates if necessary (e.g., skip insertion)
        return current;
      }
    }
  }
  

  remove(value: any, node?: TreeNode | null): TreeNode | null {
    // If node is not provided, search for it by value
    node = node ?? this.search(value);
  
    // If node is not found, return null
    if (!node) return null;
  
    // Check if the node is the root node
    const nodeIsRoot = !node.parent; // root node has no parent
    const hasBothChildren = node.left !== null && node.right !== null;
    const isLeftChild = !nodeIsRoot ? node.parent!.left === node : false;
  
    if (node.isLeaf) {
      // Node is a leaf
      if (nodeIsRoot) {
        this.root = null;
      } else if (isLeftChild) {
        node.parent!.left = null;
      } else {
        node.parent!.right = null;
      }
    } else if (!hasBothChildren) {
      // Node has only one child
      const child = node.left ?? node.right!;
      if (nodeIsRoot) {
        this.root = child;
      } else if (isLeftChild) {
        node.parent!.left = child;
      } else {
        node.parent!.right = child;
      }
      child.parent = node.parent;
    } else {
      // Node has two children
      const minRightLeaf = this.min(node.right);
      if (!minRightLeaf) return null; // Edge case if minRightLeaf is null
      
      // Remove the successor node
      if (minRightLeaf.parent!.left === minRightLeaf) {
        minRightLeaf.parent!.left = null;
      } else {
        minRightLeaf.parent!.right = null;
      }
      
      // Replace node value with successor's value
      node.value = minRightLeaf.value;
    }
  
    return node;
  }
  
  

  search(value: any): TreeNode | null {
    // Perform in-order traversal to get the nodes in sorted order
    const nodes = this.inOrderTraverse();
    
    // Find and return the node that matches the value
    const foundNode = nodes.find(node => node.value === value);
    
    // Return the found node or null if not found
    return foundNode || null;
  }
  

  min(node: TreeNode | null = this.root): TreeNode | null {
    let current: TreeNode | null = node;
    while (current?.left) {
      current = current.left;
    }
    return current;
  }
  

  max(node: TreeNode | null = this.root): TreeNode | null {
    let current: TreeNode | null = this.root;
    while (current?.right) {
      current = current.right;
    }
    return current;
  }

  preOrderTraverse(): TreeNode[] {
    const result: TreeNode[] = [];
    function traverse(node: TreeNode | null) {
      if (node) {
        result.push(node);
        traverse(node.left);
        traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }

  inOrderTraverse(): TreeNode[] {
    const result: TreeNode[] = [];
    function traverse(node: TreeNode | null) {
      if (node) {
        traverse(node.left);
        result.push(node);
        traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }

  postOrderTraverse(): TreeNode[] {
    const result: TreeNode[] = [];
    function traverse(node: TreeNode | null) {
      if (node) {
        traverse(node.left);
        traverse(node.right);
        result.push(node);
      }
    }
    traverse(this.root);
    return result;
  }
}
