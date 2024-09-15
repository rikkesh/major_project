interface TreeNode {
  value: any;
  left: TreeNode | null;
  right: TreeNode | null;
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
    const newNode: TreeNode = { value, left: null, right: null };
    if (!this.root) {
      this.root = newNode;
      return newNode;
    }
    let current: TreeNode = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return newNode;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return newNode;
        }
        current = current.right;
      }
    }
  }

  remove(value: any): TreeNode | null {
    // Implement the remove logic here, ensuring it returns a TreeNode or null
    return null;
  }

  search(value: any): TreeNode | null {
    let current: TreeNode | null = this.root;
    while (current) {
      if (value === current.value) {
        return current;
      }
      current = value < current.value ? current.left : current.right;
    }
    return null;
  }

  min(): TreeNode | null {
    let current: TreeNode | null = this.root;
    while (current?.left) {
      current = current.left;
    }
    return current;
  }

  max(): TreeNode | null {
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
