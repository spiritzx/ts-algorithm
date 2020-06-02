/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-05-30 22:00:22
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-06-02 22:08:02
 */

interface treeNode {
  key:number,
  left:treeNode | null
  right:treeNode | null
}

class TreeNode implements treeNode {
  public key = 0
  public left = null
  public right = null
  constructor(key:number) {
    this.key = key
  }
}

interface binarySearchTree {
  root:treeNode | null
  add:Function // 增加节点
  preOrder:Function // 先序遍历 
  middleOrder:Function // 中序遍历
  postOrder:Function // 中序遍历
}
class BinarySearchTree implements binarySearchTree {
  public root = null as unknown as treeNode
  private preArr:Array<number> = []
  private middleArr:Array<number> = []
  private postArr:Array<number> = []
  
  public add(key:number) {
    let _root = this.root
    let node:treeNode = new TreeNode(key)
    if (_root === null) {
      this.root = node
    } else {
      this.insertNode(this.root, node)
    }
  }
  // 递归插入节点
  private insertNode(node:treeNode, newNode:treeNode) {
    if (node.key < newNode.key) {
      if (node.right === null) {
        node.right = newNode
        return
      }
      this.insertNode(node.right, newNode)
    } else {
      if (node.left === null) {
        node.left = newNode
        return
      }
      this.insertNode(node.left, newNode)
    }
  }
  // 插入遍历数组
  private insertOrderArr(key:number, arr:Array<number>) {
    arr.push(key)
  }
  // 先序遍历
  public preOrder() {
    this.preOrderFn(this.root, this.insertOrderArr)
    return this.preArr
  }
  // 先序递归遍历
  private preOrderFn(node:treeNode, handle:Function) {
    if (node !== null) {
      handle(node.key, this.preArr)
      node.left && this.preOrderFn(node.left, handle)
      node.right && this.preOrderFn(node.right, handle)
    }
  }
  // 中序遍历
  public middleOrder() {
    this.middleOrderFn(this.root, this.insertOrderArr)
    return this.middleArr
  }


  // 中序递归遍历
  private middleOrderFn(node:treeNode, handle:Function) {
    if (node !== null) {
      node.left && this.middleOrderFn(node.left, handle)
      handle(node.key, this.middleArr)
      node.right && this.middleOrderFn(node.right, handle)
    }
  }
   // 后序序遍历
   public postOrder() {
    this. postOrderFn(this.root, this.insertOrderArr)
    return this.postArr
  }

  // 后序递归遍历
  private  postOrderFn(node:treeNode, handle:Function) {
    if (node !== null) {
      node.left && this. postOrderFn(node.left, handle)
      node.right && this. postOrderFn(node.right, handle)
      handle(node.key, this.postArr)
    }
  }
  
}

let bst = new BinarySearchTree()

bst.add(7)
bst.add(1)
bst.add(2)
bst.add(4)
bst.add(5)
bst.add(10)
bst.add(11)
bst.add(8)
bst.add(3)

console.log(bst.root)

let bstArr = bst.preOrder()
console.log(bstArr)
let bstArr1 = bst.middleOrder()
console.log(bstArr1)
let bstArr2 = bst.postOrder()
console.log(bstArr2)