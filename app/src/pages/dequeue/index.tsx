// components/Dequeue.tsx
import React, { useState, useRef } from 'react';
import styles from './Dequeue.module.css';

class DeQueue {
  items: { [key: number]: any } = {};
  itemToRemoveFrontKey = 0;
  itemToAddRearKey = 0;

  addToRear(item: any) {
    this.items[this.itemToAddRearKey] = item;
    this.itemToAddRearKey++;
  }

  removeFromRear() {
    if (this.itemToAddRearKey === 0) return;
    const itemToRemove = this.items[this.itemToAddRearKey - 1];
    delete this.items[this.itemToAddRearKey - 1];
    this.itemToAddRearKey--;
    return itemToRemove;
  }

  addToFront(item: any) {
    if (this.isEmpty()) {
      this.addToRear(item);
    } else if (this.itemToRemoveFrontKey > 0) {
      this.itemToRemoveFrontKey--;
      this.items[this.itemToRemoveFrontKey] = item;
    } else {
      for (let i = this.itemToAddRearKey; i >= 1; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.items[0] = item;
      this.itemToAddRearKey++;
    }
  }

  removeFromFront() {
    const itemToRemove = this.items[this.itemToRemoveFrontKey];
    delete this.items[this.itemToRemoveFrontKey];
    this.itemToRemoveFrontKey++;
    return itemToRemove;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.itemToAddRearKey - this.itemToRemoveFrontKey;
  }

  clear() {
    this.items = {};
    this.itemToRemoveFrontKey = 0;
    this.itemToAddRearKey = 0;
  }
}

const Dequeue: React.FC = () => {
  const [dequeue, setDequeue] = useState(new DeQueue());
  const [items, setItems] = useState<any[]>([]);
  const palindromeInputRef = useRef<HTMLInputElement>(null);

  const renderDeQueue = (updatedItems = Object.values(dequeue.items)) => {
    setItems([...updatedItems]);
  };

  const PEEK_SIDES = {
    FRONT: 'front' as const,
    REAR: 'rear' as const,
  };

  const peekDequeue = (side: 'front' | 'rear') => {
    const target = side === PEEK_SIDES.FRONT ? `${styles.box_item}:first-child` : `${styles.box_item}:last-child`;
    const peekedElement = document.querySelector(`${target}`);
    if (!peekedElement) return;
    peekedElement.scrollIntoView();
    peekedElement.classList.add(styles.peeking);
    setTimeout(() => {
      peekedElement.classList.remove(styles.peeking);
    }, 500);
  };

  const checkIfPalindrome = (str: string) => {
    let isPalindrome = true;
    const palDeq = new DeQueue();
    str.split('').forEach((char) => palDeq.addToRear(char));
    while (palDeq.size() > 1 && isPalindrome) {
      const front = palDeq.removeFromFront();
      const rear = palDeq.removeFromRear();
      if (front !== rear) {
        isPalindrome = false;
      }
    }
    return isPalindrome;
  };

  const addToRear = () => {
    const randomNumber = Math.round(Math.random() * 50 + 1);
    dequeue.addToRear(randomNumber);
    renderDeQueue();
  };

  const removeFromRear = () => {
    dequeue.removeFromRear();
    renderDeQueue();
    peekDequeue(PEEK_SIDES.REAR);
  };

  const addToFront = () => {
    const randomNumber = Math.round(Math.random() * 50 + 1);
    dequeue.addToFront(randomNumber);
    renderDeQueue();
  };

  const removeFromFront = () => {
    dequeue.removeFromFront();
    renderDeQueue();
    peekDequeue(PEEK_SIDES.FRONT);
  };

  const clearQueue = () => {
    dequeue.clear();
    renderDeQueue();
  };

  const isEmptyQueue = () => {
    alert(`Double Ended Queue is${dequeue.isEmpty() ? '' : ' not'} empty`);
  };

  const checkPalindrome = () => {
    const input = palindromeInputRef.current?.value || '';
    const result = checkIfPalindrome(input);
    alert(`The string "${input}" is ${result ? '' : 'not '}a palindrome`);
  };

  const getSize = () => {
    alert(`The size of the Double Ended Queue is ${dequeue.size()}`);
  };

  return (

    <div className={styles.container}>
      <section>
      <div className="app-container">

      <h1>DeQueue</h1>
      <div className={styles.box_container}>
        <div className={styles.box}>
          {items.map((item, index) => (
            <div key={index} className={styles.box_item}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttons_container}>
        <div className={styles.btn_group}>
          <button onClick={addToFront} className="btn btn-primary">Add To Front</button>
          <button onClick={removeFromFront} className="btn btn-warning">Remove from Front</button>
          <button onClick={() => peekDequeue(PEEK_SIDES.FRONT)} className="btn btn-info">Peek Front</button>
        </div>
        <div className={styles.btn_group}>
          <button onClick={addToRear} className="btn btn-primary">Add To Rear</button>
          <button onClick={removeFromRear} className="btn btn-warning">Remove from Rear</button>
          <button onClick={() => peekDequeue(PEEK_SIDES.REAR)} className="btn btn-info">Peek Rear</button>
        </div>
        <div className={styles.btn_group}>
          <button onClick={clearQueue} className="btn btn-danger">Clear</button>
          <button onClick={isEmptyQueue} className="btn btn-light">Is Empty</button>
          <button onClick={getSize} className="btn btn-dark">Size</button>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.form_group}>
          <input ref={palindromeInputRef} type="text" className="form-control" placeholder="Check Palindrome" />
          <button onClick={checkPalindrome} className="btn btn-dark">Check</button>
        </div>
      </div>
      </div>
      </section>
    </div>
  );
};

export default Dequeue;
