class TreeNode {
  value: string;
  parent: TreeNode | null;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: string | number, parent: TreeNode | null = null) {
    this.value = value.toString();
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  get isLeaf(): boolean {
    return this.left === null && this.right === null;
  }

  get hasChildren(): boolean {
    return !this.isLeaf;
  }
}

export default TreeNode;
