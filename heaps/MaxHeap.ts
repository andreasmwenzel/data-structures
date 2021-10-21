import { Heap } from "./Heap";

export class MaxHeap extends Heap{
  protected heapifyUp(index: number) {
    if (index === 0) {
      return;
    }
    const parent = this.parent(index);
    if (this.values[index] > this.values[parent]) {
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
    if (right < this.size && this.values[right] > this.values[left]) { //right larger than left
      if (this.values[right] > this.values[index]) { //right larger than element
        this.swap(index, right);
        return this.heapifyDown(right);
      }
    }
    if (this.values[left] > this.values[index]) {
      this.swap(index, left);
      return this.heapifyDown(left);
    }
  }
}