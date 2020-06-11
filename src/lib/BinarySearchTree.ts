/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-05-30 22:00:22
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-06-11 22:34:08
 */



interface treeNode {
  key:number,
  left:treeNode | null
  right:treeNode | null
}
interface searchRes {
  flag:boolean,
  current:treeNode | null
  parent:treeNode | null
  isLeftChild: boolean
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
  max:Function // 最大值
  min:Function // 最小值
  isNode:Function // 是否有节点.
  delete:Function
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

   // 后序遍历
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
  
  // 最大值
  public max():number {
    let tree = this.root
    while (tree.right !== null) {
      tree = tree.right
    }
    return tree.key
  }
  // 最小值
  public min():number {
    let tree = this.root
    while (tree.left !== null) {
      tree = tree.left
    }
    return tree.key
  }
  // 查找
  public isNode(key:number):Boolean {
    let res:searchRes = {
      flag: false,
      current: this.root,
      parent: null,
      isLeftChild: false
    }
    
    this.searchNode(this.root, key, res)
    return res.flag
  }

  // 递归搜索节点
  private searchNode(node:treeNode|null, key:number, res:searchRes):void {
    if (node === null) {
      res.current = null
      res.flag = false
      return
    }
    
    if (node.key > key) {
      res.parent = node
      res.isLeftChild = true
      this.searchNode(node.left, key, res)
    }
    else if (node.key < key) {
      res.parent = node
      res.isLeftChild = false
      this.searchNode(node.right, key, res)
    }
    else if (node.key === key) {
      res.current = node
      res.flag = true
      return
    }
  }

  // 删除节点
  public delete(key:number) {
    let searchRes:searchRes = {
      flag: false,
      current: this.root,
      parent: null,
      isLeftChild: false
    }
    let res:Boolean = true
    this.searchNode(this.root, key, searchRes)
    console.log(searchRes)
    // 未找到
    if (!searchRes.flag) {
      res = false
      return res
    }
    // 删除根节点
    if (searchRes.parent === null) {
      // 只有根节点
      if (
        searchRes.current
        && searchRes.current.left === null
        && searchRes.current.right === null
      ) {

        this.root = null as unknown as treeNode
      } else if (
        searchRes.current
        && searchRes.current.left
        && searchRes.current.right === null
      ) {
        // 根节点只有左节点
        this.root = searchRes.current.left
      } else if (
        searchRes.current
        && searchRes.current.left === null
        && searchRes.current.right
      ) {
        // 根节点只有右节点
        this.root = searchRes.current.right
      } else if (
        searchRes.current
        && searchRes.current.left
        && searchRes.current.right
      ) {
        // 删除根节点有两个子节点
        this.getAfter(searchRes.current, this.root, searchRes.isLeftChild, true)
      }
      return res
    }

    //  删除叶子节点
    if (
      searchRes.current
      && searchRes.current.left === null
      && searchRes.current.right === null
    ) {
      if (searchRes.isLeftChild && searchRes.parent) {
        searchRes.parent.left = null
      } else if (!searchRes.isLeftChild && searchRes.parent) {
        searchRes.parent.right = null
      }
      return res
    }
    // 删除只有一个子节点的对象,且为左节点
    if (
      searchRes.current
      && searchRes.current.left
      && searchRes.current.right === null
    ) {
      if (searchRes.isLeftChild && searchRes.parent) {
        searchRes.parent.left = searchRes.current.left
      } else if (
        !searchRes.isLeftChild && searchRes.parent) {
        searchRes.parent.right = searchRes.current.left
      }
      return res
    }
    // 删除只有一个子节点的对象,且为右节点
    if (
      searchRes.current
      && searchRes.current.left === null
      && searchRes.current.right
    ) {
      if (searchRes.isLeftChild && searchRes.parent) {
        searchRes.parent.left = searchRes.current.right
      } else if (!searchRes.isLeftChild && searchRes.parent) {
        searchRes.parent.right = searchRes.current.right
      }
      return res
    }

    // 删除有两个子节点时
    if (
      searchRes.current
      && searchRes.current.left
      && searchRes.current.right
    ) {
      // 找到该子节点的后继,然后把后继替换为该节点
      this.getAfter(searchRes.current, searchRes.parent, searchRes.isLeftChild)
    }
  }

  // 线性查找指定节点的后继
  private getAfter(node:treeNode, parent:treeNode, isLeftChild:boolean, isRoot:Boolean = false) {
    let deleteNode = node
    let currentAfter = deleteNode.right 
    let afterNode:treeNode = currentAfter as treeNode
    let parentAfterNode:treeNode = currentAfter as treeNode
    let index = 0
    
    while (currentAfter !== null) {
      index++
      parentAfterNode = afterNode
      afterNode = currentAfter
      currentAfter = currentAfter.left
    }
    if (index > 1) {
      // 当删除节点的后继节点不是直接右子节点
      parentAfterNode.left= afterNode.right
      // parentAfterNode.left = null
      afterNode.right = deleteNode.right
    }
    

    if (isRoot) {
      afterNode.left = deleteNode.left
      afterNode.right = deleteNode.right
      this.root = afterNode
    } else {
      afterNode.left = deleteNode.left
      if (isLeftChild) {
        parent.left = afterNode
      } else {
        parent.right = afterNode
      }
    }
    
  }
}

let bst = new BinarySearchTree()

bst.add(10)
// bst.add(5)
// bst.add(7)
// bst.add(2)
// bst.add(1)
// bst.add(4)
// bst.add(9)
// bst.add(6)
// bst.add(20)
// bst.add(40)
// bst.add(30)
// bst.add(38)
// bst.add(25)
// bst.add(24)
// bst.add(27)
// bst.add(32)
// bst.add(35)
// bst.add(39)
// bst.add(22)
// bst.add(18)
// bst.add(8)
// bst.add(3)
// bst.add(15)
// bst.add(16)
// bst.add(11)
// bst.add(50)
// bst.add(51)
// bst.add(46)
// bst.add(47)

console.log(bst.root)

let bstArr = bst.preOrder()
console.log(bstArr)
let bstArr1 = bst.middleOrder()
console.log(bstArr1)
let bstArr2 = bst.postOrder()
console.log(bstArr2)

console.log(bst.max())
console.log(bst.min())

console.log(bst.isNode(3))
console.log(bst.isNode(50))
console.log(bst.isNode(7))

// 删除叶子节点
// bst.delete(3)

// 删除只有一个子节点的,且为左节点
// bst.delete(9)

// 删除只有一个右节点的,且为右节点
// bst.delete(46)

// 删除有两个子节点,后继节点没有右子节点的情况
// bst.delete(20)

// 删除有两个子节点,但是后继节点有右子节点的情况
// bst.delete(40)


// 删除根节点有两个子节点,但是后继节点有右子节点的情况
bst.delete(10)

// console.log(bst.isNode(2))
bst.add(5)
console.log(bst.root)
