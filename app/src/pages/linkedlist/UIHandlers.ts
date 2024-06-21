// UIHandlers.ts
import LinkedList from './LinkedList';
import RenderLinkedList, { RenderLinkedListProps } from './RenderLinkedList';

const initiateHandlers = (linkedList: LinkedList<string>, renderFn: (props: RenderLinkedListProps<string>) => void) => {
  const render = () => renderFn({ linkedList });

  const pushHandler = () => {
    const element = prompt('Enter element to push:');
    if (element !== null) {
      linkedList.push(element);
      render();
    }
  };

  const insertAtHandler = () => {
    const element = prompt('Enter element to insert:');
    const index = prompt('Enter index to insert at:');
    if (element !== null && index !== null) {
      linkedList.insertAt(element, parseInt(index));
      render();
    }
  };

  const removeElementHandler = () => {
    const element = prompt('Enter element to remove:');
    if (element !== null) {
      linkedList.remove(element);
      render();
    }
  };

  const getElementAtHandler = () => {
    const index = prompt('Enter index to get element at:');
    if (index !== null) {
      alert(linkedList.getElementAt(parseInt(index))?.element || 'Element not found');
    }
  };

  const indexOfHandler = () => {
    const element = prompt('Enter element to find index of:');
    if (element !== null) {
      alert(linkedList.indexOf(element));
    }
  };

  const removeElementAtHandler = () => {
    const index = prompt('Enter index to remove element at:');
    if (index !== null) {
      linkedList.removeAt(parseInt(index));
      render();
    }
  };

  const toStringHandler = () => {
    alert(linkedList.toString());
  };

  const sizeHandler = () => {
    alert(linkedList.size());
  };

  const isEmptyHandler = () => {
    alert(linkedList.isEmpty() ? 'List is empty' : 'List is not empty');
  };

  const clearHandler = () => {
    linkedList.clear();
    render();
  };

  document.getElementById('pushBtn')?.addEventListener('click', pushHandler);
  document.getElementById('insertAtBtn')?.addEventListener('click', insertAtHandler);
  document.getElementById('removeElementBtn')?.addEventListener('click', removeElementHandler);
  document.getElementById('getElementAtBtn')?.addEventListener('click', getElementAtHandler);
  document.getElementById('indexOfBtn')?.addEventListener('click', indexOfHandler);
  document.getElementById('removeElementAtBtn')?.addEventListener('click', removeElementAtHandler);
  document.getElementById('toStringBtn')?.addEventListener('click', toStringHandler);
  document.getElementById('sizeBtn')?.addEventListener('click', sizeHandler);
  document.getElementById('isEmptyBtn')?.addEventListener('click', isEmptyHandler);
  document.getElementById('clearBtn')?.addEventListener('click', clearHandler);

  return () => {
    document.getElementById('pushBtn')?.removeEventListener('click', pushHandler);
    document.getElementById('insertAtBtn')?.removeEventListener('click', insertAtHandler);
    document.getElementById('removeElementBtn')?.removeEventListener('click', removeElementHandler);
    document.getElementById('getElementAtBtn')?.removeEventListener('click', getElementAtHandler);
    document.getElementById('indexOfBtn')?.removeEventListener('click', indexOfHandler);
    document.getElementById('removeElementAtBtn')?.removeEventListener('click', removeElementAtHandler);
    document.getElementById('toStringBtn')?.removeEventListener('click', toStringHandler);
    document.getElementById('sizeBtn')?.removeEventListener('click', sizeHandler);
    document.getElementById('isEmptyBtn')?.removeEventListener('click', isEmptyHandler);
    document.getElementById('clearBtn')?.removeEventListener('click', clearHandler);
  };
};

export default initiateHandlers;
