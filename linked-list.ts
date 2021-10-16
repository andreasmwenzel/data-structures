class ListNode<T>{
  data: T;
  next: ListNode<T> | null = null;
  prev?: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
  }
}

const head = new ListNode(0);
head.next = new ListNode(1);
head.next.prev = head;

let x : ListNode<number> | null = head;
while (x) {
  console.log(x.data);
  x = x.next;
}

console.log(head.data, head.next.data, head.next.prev.data)