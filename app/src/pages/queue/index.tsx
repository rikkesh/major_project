// pages/index.tsx
import { useEffect } from 'react';
import styles from './Queue.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


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
      const peekedElement = document.querySelector(`.${styles.boxItem}:first-child`);
      if (!peekedElement) {
        return;
      }
      peekedElement.classList.add(styles.peeking);
      setTimeout(() => {
        peekedElement.classList.remove(styles.peeking);
      }, 500);
    };

    const renderQueue = () => {
      const queueElement = document.querySelector(`.${styles.box}`);
      queueElement?.querySelectorAll(`.${styles.boxItem}`).forEach((item) => item.remove());
      for (const key in myQueue.items) {
        const item = myQueue.items[key];
        const queueItemElement = document.createElement('DIV');
        queueItemElement.classList.add(styles.boxItem);
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
    <div className={styles.container}>
      <section>
        <div className={styles.appContainer}>
          <h1>Queue</h1>
          <div className={styles.boxContainer}>
            <div className={styles.box}></div>
          </div>
          <div className={styles.buttonsContainer}>
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
