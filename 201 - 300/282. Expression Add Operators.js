// Given a string that contains only digits 0-9 and a target value, return all possibilities to add binary operators (not unary) +, -, or * between the digits so they evaluate to the target value.

// Example 1:
// Input: num = "123", target = 6
// Output: ["1+2+3", "1*2*3"] 

// Example 2:
// Input: num = "232", target = 8
// Output: ["2*3+2", "2+3*2"]

// Example 3:
// Input: num = "105", target = 5
// Output: ["1*0+5","10-5"]

// Example 4:
// Input: num = "00", target = 0
// Output: ["0+0", "0-0", "0*0"]

// Example 5:
// Input: num = "3456237490", target = 9191
// Output: []

/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
function NumIterator(num, start) {
    this.num = num;
    this.start = start;
    this.stringLength = 0;
    this.hasLeadingZero = num.charAt(this.start) === '0';
  }
  
  NumIterator.prototype.next = function() {
    if(!this.hasNext()) return null;
    this.stringLength += 1;
    var endIndex = this.stringLength + this.start;
    return parseInt(this.num.slice(this.start, endIndex), 10);
  }
  
  NumIterator.prototype.hasNext = function() {
    return (this.stringLength + this.start < this.num.length) &&
    (this.stringLength === 0 || !this.hasLeadingZero);
  }
  
  //
  // Expression
  // Parser & evaluator.  Maybe LR(1)? Gotta read up.
  //
  function Expression(value) {
    this.total = 0;
    this.lhs = value;
    this.tokens = [value];
  }
  
  Expression.prototype.parseOp = function (operator, rhs) {
    this.tokens.push(operator, rhs);
    
    switch(operator) {
      // Apply multiplication immediately, it's highest precendence
      case '*':
        this.lhs = this.lhs * rhs;
        break;
      case '-':
        rhs = -rhs;
      case '+':
        this.total += this.lhs;
        this.lhs = rhs;
        break;
    }
  }
  
  Expression.prototype.value = function () {
    return this.total + this.lhs;
  }
  
  Expression.prototype.toString = function () {
    return this.tokens.join('');
  }
  
  Expression.prototype.clone = function () {
    var clone = new Expression(this.lhs);
    clone.total = this.total;
    clone.tokens = this.tokens.slice();
    return clone;
  }
  
  Expression.OPERATORS = ['*', '+', '-'];
  
  function addOperators(num, target) {
    const solutions = [];
    
    function dfs(expression, splitIndex) {
      if(splitIndex === num.length) {
        if(expression.value() === target) solutions.push(expression.toString());
      }
      
      const operands = new NumIterator(num, splitIndex);
      while(operands.hasNext()) {
        let rhs = operands.next();
        if (splitIndex === 0) dfs(new Expression(rhs), operands.stringLength);
        else {
          for(let operator of Expression.OPERATORS) {
            let branchExpression = expression.clone();
            branchExpression.parseOp(operator, rhs);
            dfs(branchExpression, splitIndex + operands.stringLength);
          }
        }
      }
    }
    
    dfs(new Expression(NaN), 0);
    return solutions;
  }