// Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

// Note: The input string may contain letters other than the parentheses ( and ).

// Example 1:
// Input: "()())()"
// Output: ["()()()", "(())()"]

// Example 2:
// Input: "(a)())()"
// Output: ["(a)()()", "(a())()"]

// Example 3:
// Input: ")("
// Output: [""]

/**
 * @param {string} s
 * @return {string[]}
 */
const isValid = s => {
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c == '(') counter++;
        if (c == ')' && counter-- === 0) return false;
    }
    return counter === 0;
}

var removeInvalidParentheses = (s) => {
    if (!s.length) return [''];
    let res = [];
    let queue = [s];
    let visited = [s];
    let found = false;
    
    while (queue.length) {
        const s = queue.shift();
        if (isValid(s)) {
            res.push(s);
            found = true;
        }
        if (found) continue;
        
        for (let i = 0; i < s.length; i++) {
            const c = s[i];
            if (c != '(' && c != ')') continue;
            const t = s.slice(0, i) + s.slice(i + 1);
            if (!visited.includes(t)) {
                queue.push(t);
                visited.push(t);
            }
        }
    }
    return res;
};

/**
 * @param {string} s
 * @return {string[]}
 */
const recurse = (s, res, temp, pos, l, r, open) => {
    if (l < 0 || r < 0 || open < 0) return;
    
    if (pos == s.length) {
      if (l == 0 && r == 0 && open == 0) {
        if (!res.includes(temp)) res.push(temp);
      }
      return;
    }
    
    if (s[pos] == '(') {
      recurse(s, res, temp + '(', pos + 1, l, r, open + 1);
      recurse(s, res, temp, pos + 1, l - 1, r, open);
    } else if (s[pos] == ')') {
      recurse(s, res, temp + ')', pos + 1, l, r, open - 1);
      recurse(s, res, temp, pos + 1, l, r - 1, open);
    } else {
      recurse(s, res, temp + s[pos], pos + 1, l, r, open);
    }
  }
  
  var removeInvalidParentheses = (s) => {
    if (!s.length) return [''];
    let res = [];
    let l = 0;
    let r = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] == '(') l++;
      else if (s[i] == ')') {
        if (l > 0) l--;
        else r++;
      }
    }
    
    recurse(s, res, '', 0, l, r, 0);
    return res;
  };