// Given a list accounts, each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.
// Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some email that is common to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.
// After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.

// Example 1:
// Input: 
// accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]
// Output: [["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],  ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]]
// Explanation: 
// The first and third John's are the same person as they have the common email "johnsmith@mail.com".
// The second John and Mary are different people as none of their email addresses are used by other accounts.
// We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'], 
// ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.

// Note:
// The length of accounts will be in the range [1, 1000].
// The length of accounts[i] will be in the range [1, 10].
// The length of accounts[i][j] will be in the range [1, 30].

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = (accounts) => {
    let mp = new Map();
    for (let j = 0; j < accounts.length; j++) {
        let arr = accounts[j]
        var name = arr[0]
        for (let i = 1; i < arr.length; i++) {
            var curEmail = arr[i]
            if (!mp.has(curEmail)) {
                mp.set(curEmail, [])
            }
            let curLs = mp.get(curEmail)
            if (!curLs.includes(j)) {
                curLs.push(j)
            }
        }
    }
    
    let res = []
    let visited = []
    const dfs = (cur, email) => {
        let indexs = mp.get(email)
        for (let i of indexs) {
            if (visited.includes(i)) continue
            visited.push(i)
            let curEmails = accounts[i].slice(1)
            for (let curEmail of curEmails) {
                if (!cur.includes(curEmail)) cur.push(curEmail)
                dfs(cur, curEmail)
            }
        }
    }    
    
    for (let j = 0; j < accounts.length; j++) {
        let arr = accounts[j]
        let cur = []
        let emails = arr.slice(1)
        if (visited.includes(j)) continue
        visited.push(j)
        for (let email of emails) {
            if (!cur.includes(email)) cur.push(email)
            dfs(cur, email)
        }
        cur.sort()
        cur.unshift(arr[0])
        res.push(cur)
    }
    res.sort((a,b) => {return a[0].localeCompare(b[0])})
    return res
};