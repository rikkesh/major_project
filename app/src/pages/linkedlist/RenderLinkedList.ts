// RenderLinkedList.ts
import LinkedList from './LinkedList';

export interface RenderLinkedListProps<T> {
  linkedList: LinkedList<T>;
}

const RenderLinkedList = <T,>({ linkedList }: RenderLinkedListProps<T>) => {
  // Render logic for the linked list
  console.log(linkedList.toString());
  
};

export default RenderLinkedList;
