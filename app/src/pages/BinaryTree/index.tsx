import Head from 'next/head';
import { useEffect, useRef } from 'react';
import  BinarySearchTree from './utils/binary_search_tree';
import BinarySearchTreeUI from './components/bst-ui';
import createSampleTreeData from './utils/create-sample-tree-data'; // Ensure the path is correct
import '../../styles/tree.css';

const BinarySearchTreeComponent = () => {
  const bst = useRef<BinarySearchTree | null>(null);
  const bstUI = useRef<BinarySearchTreeUI | null>(null);

  useEffect(() => {
    if (!bst.current) {
      bst.current = new BinarySearchTree();
      createSampleTreeData(bst.current); // Use the function to create sample tree data
      bstUI.current = new BinarySearchTreeUI(bst.current);
      bstUI.current.init();
      bstUI.current.renderTree(); // Render the tree after initializing with sample data
    }
  }, []);

  const handleInsertNode = () => {
    const value = prompt('Enter value to insert:');
    if (value && bst.current) {
      const node = bst.current.insert(Number(value));
      bstUI.current?.highlightNode(node).then(() => {
        bstUI.current?.renderTree();
      });
    }
  };

  const handleRemoveNode = () => {
    const value = prompt('Enter value to remove:');
    if (value && bst.current) {
      const node = bst.current.remove(Number(value));
      if (node) {
        bstUI.current?.highlightNode(node).then(() => {
          bstUI.current?.renderTree();
        });
      } else {
        alert('Node not found');
      }
    }
  };

  return (
    <div>
      <Head>
        <title>Binary Search Tree Visualization</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        />
      </Head>

      <main>
        <div className="container">
          <section>
            <div className="buttons-container bst-actions-container">
              <div className="controls">
                <button onClick={handleInsertNode}>Insert Node</button>
                <button onClick={handleRemoveNode}>Remove Node</button>
              </div>
            </div>
          </section>
          <section>
            <div className="app-container">
              <h1>Binary Search Tree</h1>
              <div className="tree"></div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default BinarySearchTreeComponent;
