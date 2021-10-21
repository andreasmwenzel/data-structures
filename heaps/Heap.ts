export abstract class Heap{
  values: number[] = [];
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

  insert(item: number):void {
    this.values.push(item);
    this.heapifyUp(this.values.length - 1);
  };

  pop(): number{
    const ret:number = this.values[0];
    this.swap(0, this.values.length - 1);
    this.values.pop();
    this.heapifyDown(0);
    return ret;
  }
  peak(): number {
    return this.values[0];
  }

  protected abstract heapifyUp(index: number):void;
  protected abstract heapifyDown(index:number):void;

  print() {
    console.log(this.values);
  }
}