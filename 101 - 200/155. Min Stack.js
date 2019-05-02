// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

// Example:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.minPos = -1;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    
    if (this.minPos == -1) this.minPos = 0;
    else if (x < this.stack[this.minPos]) this.minPos = this.stack.length - 1;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    if (this.minPos == this.stack.length) {
        this.minPos = this.stack.length - 1;
        let minVal = this.stack[this.minPos];
        for (let i = 0; i < this.stack.length; i++) {
            let val = this.stack[i];
            if (val < minVal) {
                minVal = val;
                this.minPos = i;
            }
        }
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.minPos];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */