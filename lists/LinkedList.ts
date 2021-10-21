import { ListNode } from "./Node";

export class LinkedList<T>{
  private size = 0;
  get length(){return this.size}
  private head: ListNode<T> | null = null;

  constructor() {}
  insert(item: T) {
    this.size++;
    let h = this.head;
    if (!h) {
      this.head = new ListNode(item);
      return;
    }
    while (h.next) {
      h = h.next;
    }
    h.next = new ListNode(item);
  }
}