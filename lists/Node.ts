export class ListNode<T>{
  data: T;
  next: ListNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

export class DoublyLinkedListNode<T> extends ListNode<T>{
  prev: ListNode<T> | null = null;

  constructor(data: T) {
    super(data);
  }
}