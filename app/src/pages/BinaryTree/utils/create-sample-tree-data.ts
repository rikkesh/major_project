import BinarySearchTree from './binary_search_tree';

const createSampleTreeData = (tree: BinarySearchTree) => {
  tree.insert('10');
  tree.insert('20');
  tree.insert('8');
  tree.insert('6');
  tree.insert('25');
  tree.insert('9');
  tree.insert('19');
};

export default createSampleTreeData;
