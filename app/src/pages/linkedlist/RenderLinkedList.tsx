// RenderLinkedList.tsx
import LinkedList  from './LinkedList';

interface RenderLinkedListProps<T> {
  linkedList: LinkedList<T>;
}

const RenderLinkedList = <T,>({ linkedList }: RenderLinkedListProps<T>) => {
  const boxElement = document.querySelector('.box');
  
  if (!boxElement) return null;

  boxElement.querySelectorAll('.box_item').forEach((item) => item.remove());

  let current = linkedList.getHead();
  if (!current) return null;

  for (let i = 0; i < linkedList.size() && current !== null; i++) {
    const itemElement = document.createElement('DIV');
    itemElement.classList.add('box_item');
    itemElement.classList.add('icon', 'icon-arrow-right');
    itemElement.textContent = String(current.element);
    boxElement.append(itemElement);
    current = current.next;
  }

  return null;
};

export default RenderLinkedList;
