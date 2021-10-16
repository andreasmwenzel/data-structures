class TreeNode<T>{
  data:T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null  = null;

  constructor(data: T) {
    this.data = data;
  }
}

function printLeftView(node: TreeNode<number> | null, level: number = 0, outArray:number[] = []){
  //console.log(node?.data, level, outArray);
  if (!node) {
    return;
  }
 // console.log(outArray[level]);
  if (outArray[level] === undefined) {
    outArray.push(node.data);
    process.stdout.write(node.data + " ");
  }
  printLeftView(node.left, level+1, outArray)
  printLeftView(node.right, level+1, outArray)

}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.right = new TreeNode(6);

printLeftView(root);
console.log();
