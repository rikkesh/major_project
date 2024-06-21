// pages/index.tsx
import { useEffect } from 'react';

// ...rest of the code

class Queue {
  items: { [key: number]: number } = {};
  itemToAddKey = 0;
  itemToRemoveKey = 0;

  add(item: number) {
    this.items[this.itemToAddKey] = item;
    this.itemToAddKey++;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.itemToAddKey = 0;
    this.itemToRemoveKey = 0;
  }

  remove() {
    if (this.isEmpty()) {
      return undefined;
    }
    const item = this.items[this.itemToRemoveKey];
    delete this.items[this.itemToRemoveKey];
    this.itemToRemoveKey++;
    return item;
  }

  size() {
    return this.itemToAddKey - this.itemToRemoveKey;
  }

  peek() {
    return this.items[this.itemToRemoveKey];
  }
}

const QueueComponent = () => {
    
  useEffect(() => {
    const myQueue = new Queue();

    const peekQueueItem = () => {
      const peekedElement = document.querySelector('.box_item:first-child');
      if (!peekedElement) {
        return;
      }
      peekedElement.classList.add('peeking');
      setTimeout(() => {
        peekedElement.classList.remove('peeking');
      }, 500);
    };

    const renderQueue = () => {
      const queueElement = document.querySelector('.box');
      queueElement?.querySelectorAll('.box_item').forEach((item) => item.remove());
      for (const key in myQueue.items) {
        const item = myQueue.items[key];
        const queueItemElement = document.createElement('DIV');
        queueItemElement.classList.add('box_item');
        queueItemElement.textContent = item.toString();
        queueElement?.append(queueItemElement);
      }
    };

    const initiateHandlers = () => {
      const addItemBtn = document.querySelector('#addItemBtn');
      const peekItemBtn = document.querySelector('#peekItemBtn');
      const takeOutItemBtn = document.querySelector('#takeOutItemBtn');
      const clearBtn = document.querySelector('#clearBtn');

      clearBtn?.addEventListener('click', () => {
        myQueue.clear();
        renderQueue();
      });

      addItemBtn?.addEventListener('click', () => {
        const randomNumber = Math.round(Math.random() * 50 + 1);
        myQueue.add(randomNumber);
        renderQueue();
      });

      takeOutItemBtn?.addEventListener('click', () => {
        myQueue.remove();
        renderQueue();
        peekQueueItem();
      });

      peekItemBtn?.addEventListener('click', () => {
        peekQueueItem();
      });
    };

    renderQueue();
    initiateHandlers();
  }, []);

  return (
    <div className="container">
      <section>
        <div className="app-container">
          <h1>Queue</h1>
          <div className="box_container">
            <div className="box"></div>
          </div>
          <div className="buttons-container">
            <div className="btn-group">
              <div id="addItemBtn" className="btn btn-primary">Add Item</div>
              <div id="takeOutItemBtn" className="btn btn-warning">Remove Item</div>
              <div id="peekItemBtn" className="btn btn-dark">Peek</div>
              <div id="clearBtn" className="btn btn-danger">Clear</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QueueComponent;
