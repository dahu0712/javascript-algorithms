import { defaultEquals } from '../../utils/utils.js'
import LinkedListNode from './LinkedListNode.js'

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn // 用于比较链表中的元素是否相等
  }

  push(element) {
    const node = new LinkedListNode(element)
    let current
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  removeAt(index) {
    // 输入值是否合法
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      } else {
        let previous
        for (let i = 0; i < index; i++) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }
}

const linkList = new LinkedList()
linkList.push(16)
linkList.push(10)
console.log(linkList)

linkList.removeAt(0)
console.log(linkList)

