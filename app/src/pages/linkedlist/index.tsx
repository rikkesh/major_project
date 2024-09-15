// pages/index.tsx
import { useEffect } from 'react';
import LinkedList from './LinkedList';
import initiateHandlers from './UIHandlers';
import RenderLinkedList from './RenderLinkedList';
import Head from 'next/head';
import '../../styles/linked_list.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './Slider';





const LinkedListComponent = () => {
  
  useEffect(() => {
  const linkedList = new LinkedList<string>();

    //only working after push
    linkedList.push('22');
    linkedList.push('33');
    linkedList.push('abc');
    linkedList.push('xyz');
    const cleanup = initiateHandlers(linkedList, RenderLinkedList);
    
    // Cleanup the event listeners when the component unmounts
    return cleanup;
  }, []);

  return (
    <div>
      <Head>
        <title>JS Linked List</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <main>
        <div className="container">
          <section>
            <div className="app-container">
              <h1>Linked List</h1>
              <div className="box_container">
                <div className="box"></div>
                <div className="box__line"></div>
                <div className="box__arrow">
                  <em className="fa fa-arrow-right"></em>
                </div>
              </div>
              <div className="buttons-container">
                <div className="btn-group">
                  <div id="pushBtn" className="btn btn-primary">Push</div>
                  <div id="insertAtBtn" className="btn btn-warning">Insert At</div>
                  <div id="removeElementBtn" className="btn btn-dark">Remove Element</div>
                </div>
                <div className="btn-group">
                  <div id="removeElementAtBtn" className="btn btn-primary">Remove Element At</div>
                  <div id="getElementAtBtn" className="btn btn-warning">Get Element At</div>
                  <div id="indexOfBtn" className="btn btn-dark">Index Of</div>
                </div>
                <div className="btn-group">
                  <div id="toStringBtn" className="btn btn-primary">LinkedList.toString()</div>
                </div>
                <div className="btn-group">
                  <div id="sizeBtn" className="btn btn-dark">Size</div>
                  <div id="isEmptyBtn" className="btn btn-light">Is Empty</div>
                  <div id="clearBtn" className="btn btn-danger">Clear</div>
                </div>
              </div>
            </div>
          </section>
          <App></App>
        </div>
      </main>
    </div>
  );
};

export default LinkedListComponent;
