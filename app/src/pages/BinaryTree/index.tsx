// // pages/index.tsx
// import { useEffect } from 'react';
// import BinarySearchTreeUI from '../components/bst-ui';
// import BinarySearchTree from '../components/js_binary_search_tree';
// import createSampleTreeData from '../utils/create-sample-tree-data';
// import '@styles/globals.css';
// import '@styles/tree.css';

// const HomePage = () => {
//   useEffect(() => {
//     const myTree = new BinarySearchTree();
//     createSampleTreeData(myTree);
//     console.log('treeData', myTree);
//     const bstUI = new BinarySearchTreeUI(myTree, null, '.tree');
//     bstUI.init();
//     bstUI.render();
//   }, []);

//   return (
//     <div className="container">
//       <section>
//         <div className="buttons-container bst-actions-container">
//           {/* UI buttons will appear here */}
//         </div>
//       </section>
//       <section>
//         <div className="app-container">
//           <h1>JavaScript Binary Search Tree</h1>
//           <div className="tree">
//             {/* this is where the tree renders */}
//             <div className="node node--root"></div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;
