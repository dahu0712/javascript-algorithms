import { defaultEquals } from '../../utils/utils'
import LinkedListNode from './LinkedListNode'

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn // 用于比较链表中的元素是否相等
  }
}
