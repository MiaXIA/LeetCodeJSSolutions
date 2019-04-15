// Given a string containing only digits, restore it by returning all possible valid IP address combinations.

// Example:
// Input: "25525511135"
// Output: ["255.255.11.135", "255.255.111.35"]

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = (s) => {
    let res = new Set();
    dfs(s, '', 0, res);
    return [...res];
};

const dfs = (s, path, depth, res) => {
    if (!s.length && depth === 4) return res.add(path);
    if (!s.length || depth === 4) return;
    
    for (let i = 1; i <= 3; i++) {
        let sub = s.substring(0, i);
        let num = parseInt(sub);
        
        let isValidZero = num === 0 && sub.length === 1;
        let isValidNonZero = num > 0 && num < 256 && sub[0] !== '0';
        
        if (isValidZero || isValidNonZero) {
            let nextPath = path.length ? path + '.' + sub : sub;
            dfs(s.substring(i), nextPath, depth + 1, res);
        }
    }
}
