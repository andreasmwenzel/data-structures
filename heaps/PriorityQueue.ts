export class PriorityQueue<T>{
  values: Array<{item:T, priority:number}> = [];
  get size(): number {
    return this.values.length;
  }

  protected parent(i: number):number {
    return Math.floor((i - 1) / 2);
  }
  protected left(i: number):number  {
    return 2 * i + 1;
  }
  protected right(i: number):number  {
    return 2 * i + 2;
  }

  protected swap(i: number, j: number):void {
    [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
  }

  insert(item: T, priority:number):void {
    this.values.push({item:item, priority:priority});
    this.heapifyUp(this.values.length - 1);
  };

  pop(): T{
    const ret:T = this.values[0].item;
    this.swap(0, this.values.length - 1);
    this.values.pop();
    this.heapifyDown(0);
    return ret;
  }
  peak(): T {
    return this.values[0].item;
  }

  protected heapifyUp(index: number) {
    if (index === 0) {
      return;
    }
    const parent = this.parent(index);
    if (this.values[index].priority > this.values[parent].priority) {
      this.swap(index, parent);
      this.heapifyUp(parent);
    }
  }

  protected heapifyDown(index: number):void {
    const left = this.left(index);
    if (left >= this.size) { //no left child, we are at a leaf
      return; 
    }
    const right = this.right(index);
    if (right < this.size && this.values[right].priority > this.values[left].priority) { //right larger than left
      if (this.values[right].priority > this.values[index].priority) { //right larger than element
        this.swap(index, right);
        return this.heapifyDown(right);
      }
    }
    if (this.values[left].priority > this.values[index].priority) {
      this.swap(index, left);
      return this.heapifyDown(left);
    }
  }

  print() {
    console.log(this.values);
  }
}