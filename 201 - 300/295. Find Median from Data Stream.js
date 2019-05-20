// Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.
// For example,
// [2,3,4], the median is 3
// [2,3], the median is (2 + 3) / 2 = 2.5
// Design a data structure that supports the following two operations:
// void addNum(int num) - Add a integer number from the data stream to the data structure.
// double findMedian() - Return the median of all elements so far.

// Example:
// addNum(1)
// addNum(2)
// findMedian() -> 1.5
// addNum(3) 
// findMedian() -> 2
 
// Follow up:
// If all integer numbers from the stream are between 0 and 100, how would you optimize it?
// If 99% of all integer numbers from the stream are between 0 and 100, how would you optimize it?

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
const MAX_HEAP_FUNC = (a, b) => {
    return a > b;
  }
  
  const MIN_HEAP_FUNC = (a, b) => {
    return a < b;
  }
  
  class MedianFinder {
    constructor() {
      this.lowers = new Heap(MAX_HEAP_FUNC);
      this.greaters = new Heap(MIN_HEAP_FUNC);
      this.median = null;
    }
  
    addNum(number) {
      if (!this.lowers.size || number < this.lowers.peek()) {
        this.lowers.insert(number);
      } else {
        this.greaters.insert(number);
      }
      this.rebalanceHeaps();
      this.updateMedian();
    }
  
    rebalanceHeaps() {
      if (this.lowers.size - this.greaters.size === 2) {
        this.greaters.insert(this.lowers.removeMax());
      } else if (this.greaters.size - this.lowers.size === 2){
        this.lowers.insert(this.greaters.removeMax());
      }
    }
  
    updateMedian() {
      if (this.lowers.size === this.greaters.size) {
        this.median = (this.lowers.peek() + this.greaters.peek()) / 2;
      } else if (this.lowers.size > this.greaters.size) {
        this.median = this.lowers.peek();
      } else {
        this.median = this.greaters.peek();
      }
    }
  
    findMedian() {
      return this.median;
    }
  }
  
  class Heap {
    constructor(compareFunc, array) {
      this.compareFunc = compareFunc;
      this.size = 0;
      this.heap = [];
    }
  
    getParent(i) {
      return Math.floor((i - 1) / 2);
    }
    
    getLeft(i) {
      return i * 2 + 1;
    }
  
    getRight(i) {
      return i * 2 + 2;
    }
  
    peek() {
      if (this.size === 0) return new Error('Empty Heap');
      return this.heap[0];
    }
  
    insert(value) {
      this.heap.push(value), this.size++;
      this.siftUp(this.size - 1, this.heap);
    }
  
    removeMax() {
      if (this.size === 0) return new Error('Empty Heap');
      this.swap(0, this.size - 1, this.heap);
      let valueToRemove = this.heap.pop();
      this.size--;
      this.siftDown(0, this.size - 1, this.heap);
      return valueToRemove;
    }
  
    siftUp(currentIdx, heap) {
      let parentIdx = this.getParent(currentIdx);
  
      while (currentIdx > 0) {
        if (this.compareFunc(heap[currentIdx], heap[parentIdx])) {
          this.swap(parentIdx, currentIdx, heap);
          currentIdx = parentIdx;
          parentIdx = this.getParent(currentIdx);
        } else {
          return;
        }
      }
    }
  
    siftDown(currentIdx, endIdx, heap) {
      let leftChild = this.getLeft(currentIdx);
      
      while (leftChild <= endIdx) {
        const rightChild = this.getRight(currentIdx) <= endIdx ? this.getRight(currentIdx) : -1;
        let idxToSwap;
        
        if (rightChild !== -1) {
          if (this.compareFunc(heap[rightChild], heap[leftChild])) {
            idxToSwap = rightChild;
          } else {
            idxToSwap = leftChild;
          }
        } else {
          idxToSwap = leftChild;
        }
  
        if (this.compareFunc(heap[idxToSwap], heap[currentIdx])) {
          this.swap(idxToSwap, currentIdx, heap);
          currentIdx = idxToSwap;
          leftChild = this.getLeft(currentIdx);
        } else {
          return;
        }
      }
    }
  
    swap(i, j, heap) {
      [heap[i], heap[j]] = [heap[j], heap[i]];
    }
  }