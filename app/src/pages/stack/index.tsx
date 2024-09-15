// pages/index.tsx
import { useEffect } from 'react';
import styles from './stack.module.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './Slider';

const StackComponent = () => {
  useEffect(() => {
    const initiateHandlers = () => {
      const addItemBtn = document.querySelector('#addItemBtn');
      const peekItemBtn = document.querySelector('#peekItemBtn');
      const takeOutItemBtn = document.querySelector('#takeOutItemBtn');
      const dToBConvertBtn = document.querySelector('#dToBConvertBtn');

      if (dToBConvertBtn) {
        dToBConvertBtn.addEventListener('click', () => {
          myStack.clear();
          const input = document.querySelector('#decimalToBinaryInput') as HTMLInputElement;
          decimalToBinary(Number(input?.value));
        });
      }

      if (addItemBtn) {
        addItemBtn.addEventListener('click', () => {
          const randomNumber = Math.round(Math.random() * 50 + 1);
          addItemToStack(randomNumber);
        });
      }

      if (takeOutItemBtn) {
        takeOutItemBtn.addEventListener('click', () => {
          myStack.takeOut();
          renderStack();
          peekStackItem();
        });
      }

      if (peekItemBtn) {
        peekItemBtn.addEventListener('click', () => {
          peekStackItem();
        });
      }
    };

    const renderStack = () => {
      const stackElement = document.querySelector(`.${styles.box}`);
      stackElement?.querySelectorAll(`.${styles.boxItem}`).forEach((item) => item.remove());
      myStack.items.forEach((item) => {
        const stackItemElement = document.createElement('DIV');
        stackItemElement.classList.add(styles.boxItem);
        stackItemElement.textContent = item.toString();
        stackElement?.prepend(stackItemElement);
      });
    };

    class Stack {
      items: number[] = [];
      add(item: number) {
        this.items.push(item);
      }

      isEmpty() {
        return this.items.length === 0;
      }

      clear() {
        this.items.length = 0;
      }

      takeOut() {
        if (this.isEmpty()) {
          return undefined;
        }
        return this.items.pop();
      }

      size() {
        return this.items.length;
      }

      peek() {
        return this.items[this.items.length - 1];
      }
    }

    const decimalToBinary = (decimalNumber: number) => {
      const reminderStack = new Stack();
      let currentNumber = decimalNumber;
      let currentReminder;
      let binaryString = '';
      while (currentNumber > 0) {
        currentReminder = Math.floor(currentNumber % 2);
        reminderStack.add(currentReminder);
        addItemToStack(currentReminder); // JUST TO SHOW IN THE UI
        currentNumber = Math.floor(currentNumber / 2);
      }

      while (!reminderStack.isEmpty()) {
        const stackItem = reminderStack.takeOut();
        if (stackItem !== undefined) {
          binaryString += stackItem.toString();
        }
      }

      return binaryString;
    };

    const myStack = new Stack();

    const peekStackItem = () => {
      const peekedElement = document.querySelector(`.${styles.boxItem}:first-child`);
      if (!peekedElement) {
        return;
      }
      peekedElement.classList.add(styles.peeking);
      setTimeout(() => {
        peekedElement.classList.remove(styles.peeking);
      }, 500);
    };

    const addItemToStack = (item: number) => {
      myStack.add(item);
      renderStack();
    };

    renderStack();
    initiateHandlers();
  }, []);

  return (
    <div>
    <div className={styles.container}>
      <section>
        <div className={styles.appContainer}>
          <div className="mb-3">
            <label htmlFor="decimalToBinaryInput" className="form-label">
              Decimal to binary
            </label>
            <input
              type="number"
              className="form-control"
              id="decimalToBinaryInput"
              aria-describedby="decimalToBinary"
            />
          </div>
          <button id="dToBConvertBtn" className="btn btn-primary">
            Convert
          </button>
          <h1>Stack</h1>
          <div className={styles.boxContainer}>
            <div className={styles.box}></div>
          </div>
          <div className={styles.buttonsContainer}>
            <div className="btn-group">
              <div id="addItemBtn" className="btn btn-primary">
                Add Item
              </div>
              <div id="takeOutItemBtn" className="btn btn-danger">
                Take Out Item
              </div>
              <div id="peekItemBtn" className="btn btn-dark">
                Peek
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <App/>
    </div>

  );
};

export default StackComponent;