// LinkedList.ts
export const defaultEqFn = (a: any, b: any): boolean => a === b;

export class Node<T> {
  element: T;
  next: Node<T> | null;

  constructor(element: T, next: Node<T> | null = null) {
    this.element = element;
    this.next = next;
  }
}

export default class LinkedList<T> {
  head: Node<T> | null;
  count: number;
  equalsFn: (a: T, b: T) => boolean;

  constructor(equalsFn: (a: T, b: T) => boolean = defaultEqFn) {
    this.head = null;
    this.count = 0;
    this.equalsFn = equalsFn;
  }

  push(element: T): Node<T> {
    const node = new Node(element);
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
    return node;
  }

  removeAt(index: number): Node<T> | undefined {
    if (index < 0 || index >= this.size()) {
      return undefined;
    }
    let current = this.head;
    if (index === 0) {
      this.head = current!.next;
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous!.next;
      previous!.next = current!.next;
    }
    this.count--;
    return current!;
  }

  getElementAt(index: number): Node<T> | undefined {
    if (index < 0 || index >= this.size()) {
      return undefined;
    }
    let current = this.head;
    for (let i = 0; i < index && current !== null; i++) {
      current = current.next;
    }
    return current!;
  }

  insertAt(element: T, index: number): Node<T> | undefined {
    if (index < 0 || index > this.size()) {
      return undefined;
    }
    const node = new Node(element);
    if (index === 0) {
      const current = this.head;
      node.next = current;
      this.head = node;
    } else {
      const previous = this.getElementAt(index - 1);
      const current = previous!.next;
      node.next = current;
      previous!.next = node;
    }
    this.count++;
    return node;
  }

  indexOf(element: T): number {
    let current = this.head;
    for (let i = 0; i < this.size() && current !== null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  remove(element: T): Node<T> | undefined {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  clear(): void {
    this.head = null;
    this.count = 0;
  }

  size(): number {
    return this.count;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  getHead(): Node<T> | null {
    return this.head;
  }

  toString(): string {
    if (this.isEmpty()) {
      return '';
    } else {
      const linkedListArray: T[] = [];
      let current = this.head;
      for (let i = 0; i < this.size() && current !== null; i++) {
        linkedListArray.push(current.element);
        current = current.next;
      }
      return linkedListArray.join(', ');
    }
  }
}
