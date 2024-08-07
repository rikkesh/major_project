export const defaultBSTUIConfig = {
  HIGHLIGHT_CLASS: 'node__element--highlight',
  HIGHLIGHT_TIME: 300,
};

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

export class BinarySearchTreeUI {
  highlightTimer: number | null = null;
  treeContainerSelector: string;
  actionsContainerSelector: string;
  config: { HIGHLIGHT_CLASS: string; HIGHLIGHT_TIME: number };
  tree: Tree;
  render: (node: TreeNode | null, containerSelector?: string) => void;

  constructor(
    tree: Tree,
    render?: (node: TreeNode | null, containerSelector?: string) => void,
    treeContainerSelector = '.tree',
    actionsContainerSelector = '.bst-actions-container',
    config = defaultBSTUIConfig
  ) {
    this.treeContainerSelector = treeContainerSelector;
    this.actionsContainerSelector = actionsContainerSelector;
    this.config = config;
    this.tree = tree;
    this.render = render || this.renderTree;
    const root = document.documentElement;
    root.style.setProperty(
      '--animation-timing',
      `${this.config.HIGHLIGHT_TIME / 1000}s`
    );
  }

  template(): string {
    return `
    <div class="btn-group">
      <button id="insertBtn" class="btn btn-warning">
        Insert Node
      </button>
      <button id="removeElementBtn" class="btn btn-dark">
        Remove Node
      </button>
    </div>
    <div class="btn-group">
      <button id="searchBtn" class="btn btn-primary">Search</button>
      <button id="minValueBtn" class="btn btn-warning">
        Min Value
      </button>
      <button id="maxValueBtn" class="btn btn-dark">Max Value</button>
    </div>
    <div class="btn-group">
      <button id="inOrderTravBtn" class="btn btn-primary">
        In Order Traversal
      </button>
      <button id="postOrderTravBtn" class="btn btn-warning">
        Post Order Traversal
      </button>
      <button id="preOrderTravBtn" class="btn btn-dark">
        Pre Order Traversal
      </button>
    </div>
    <div class="btn-group">
      <button id="resetBtn" class="btn btn-danger">
        Delete Tree
      </button>
    </div>
    `;
  }

  traverseUINodes(nodes: TreeNode[]): void {
    nodes.reduce((pr, node) => {
      return pr.then(() => this.highlightNode(node));
    }, Promise.resolve());
  }

  getTreeUI(node: TreeNode | null): string {
    if (!node) {
      return '';
    }
    const { left, right, value } = node;
    return `
      <div class="node__element" data-node-id="${value}">${value}</div>
      ${
        left || right
          ? `
            <div class="node__bottom-line"></div>
            <div class="node__children">
            <div class="node node--left">
              ${left ? this.getTreeUI(left) : ''}
            </div>
            <div class="node node--right">
              ${right ? this.getTreeUI(right) : ''}
            </div>
            </div>
          `
          : ''
      }
    `;
  }

  renderTree(
    node: TreeNode | null = this.tree.root,
    containerSelector: string = this.treeContainerSelector
  ): void {
    const treeContainer = document.querySelector(containerSelector) as HTMLElement;
    if (!node) {
      treeContainer.innerHTML = '';
      return;
    }
    const template = this.getTreeUI(node);
    treeContainer.innerHTML = template;
  }

  highlightNode({ value }: TreeNode): Promise<void> {
    const nodeElement = document.querySelector(`[data-node-id="${value}"]`) as HTMLElement;
    if (this.highlightTimer !== null) {
      clearTimeout(this.highlightTimer);
      nodeElement.classList.remove(this.config.HIGHLIGHT_CLASS);
      this.highlightTimer = null;
      return Promise.resolve();
    }
    nodeElement.classList.add(this.config.HIGHLIGHT_CLASS);
    document.querySelectorAll('button').forEach((btn) => {
      (btn as HTMLButtonElement).setAttribute('disabled', 'true');
    });
    return new Promise((resolve) => {
      this.highlightTimer = window.setTimeout(() => {
        nodeElement.classList.remove(this.config.HIGHLIGHT_CLASS);
        document.querySelectorAll('button').forEach((btn) => {
          (btn as HTMLButtonElement).removeAttribute('disabled');
        });
        this.highlightTimer = null;
        resolve();
      }, this.config.HIGHLIGHT_TIME);
    });
  }

  onRemoveElementBtnClick(): void {
    const element = prompt('Enter element to remove from the tree');
    if (!element) return;
    const removedEl = this.tree.remove(element);
    if (removedEl) {
      this.highlightNode(removedEl).then(() => {
        this.render(this.tree.root);
      });
    } else {
      alert('Element not found');
    }
  }

  setTemplate(): void {
    const actionsContainer = document.querySelector(
      this.actionsContainerSelector
    ) as HTMLElement;
    actionsContainer.innerHTML = this.template();
  }

  onInsertBtnClick(): void {
    const element = prompt('Enter element to add to tree');
    if (!element) return;
    const node = this.tree.insert(element);
    this.render(this.tree.root);
    this.highlightNode(node);
  }

  onMinValueBtnClick(): void {
    const node = this.tree.min();
    if (node) {
      this.highlightNode(node);
    } else {
      alert('Node not found');
    }
  }

  onSearchBtnClick(): void {
    const searchVal = prompt('Enter the node value to search in the tree');
    if (!searchVal) return;
    const searchedNode = this.tree.search(searchVal);
    if (searchedNode) {
      this.highlightNode(searchedNode);
      console.log(searchVal + ' is found');
    } else {
      alert('Node not found');
    }
  }

  onMaxValueBtnClick(): void {
    const node = this.tree.max();
    if (node) {
      this.highlightNode(node);
    } else {
      alert('Node not found');
    }
  }

  onPreOrderTravBtnClick(): void {
    const array = this.tree.preOrderTraverse();
    this.traverseUINodes(array);
    console.log(array);
  }

  onInOrderTravBtnClick(): void {
    const array = this.tree.inOrderTraverse();
    this.traverseUINodes(array);
    console.log(array);
  }

  onPostOrderTravBtnClick(): void {
    const array = this.tree.postOrderTraverse();
    this.traverseUINodes(array);
    console.log(array);
  }

  onResetBtnClick(): void {
    if (this.tree.root) {
      this.highlightNode(this.tree.root).then(() => {
        this.tree.root = null;
        this.render(this.tree.root);
      });
    }
  }

  init(): void {
    this.setTemplate();
    const insert = document.querySelector('#insertBtn') as HTMLButtonElement;
    const removeElementBtn = document.querySelector('#removeElementBtn') as HTMLButtonElement;
    const minValueBtn = document.querySelector('#minValueBtn') as HTMLButtonElement;
    const maxValueBtn = document.querySelector('#maxValueBtn') as HTMLButtonElement;
    const searchBtn = document.querySelector('#searchBtn') as HTMLButtonElement;
    const preOrderTravBtn = document.querySelector('#preOrderTravBtn') as HTMLButtonElement;
    const inOrderTravBtn = document.querySelector('#inOrderTravBtn') as HTMLButtonElement;
    const postOrderTravBtn = document.querySelector('#postOrderTravBtn') as HTMLButtonElement;
    const resetBtn = document.querySelector('#resetBtn') as HTMLButtonElement;
    
    removeElementBtn.addEventListener(
      'click',
      this.onRemoveElementBtnClick.bind(this)
    );
    insert.addEventListener('click', this.onInsertBtnClick.bind(this));
    minValueBtn.addEventListener('click', this.onMinValueBtnClick.bind(this));
    searchBtn.addEventListener('click', this.onSearchBtnClick.bind(this));
    maxValueBtn.addEventListener('click', this.onMaxValueBtnClick.bind(this));
    preOrderTravBtn.addEventListener(
      'click',
      this.onPreOrderTravBtnClick.bind(this)
    );
    inOrderTravBtn.addEventListener(
      'click',
      this.onInOrderTravBtnClick.bind(this)
    );
    postOrderTravBtn.addEventListener(
      'click',
      this.onPostOrderTravBtnClick.bind(this)
    );
    resetBtn.addEventListener('click', this.onResetBtnClick.bind(this));
  }
}

export default BinarySearchTreeUI;
