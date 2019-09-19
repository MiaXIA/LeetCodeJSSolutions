// Given two arrays A and B of equal size, the advantage of A with respect to B is the number of indices i for which A[i] > B[i].
// Return any permutation of A that maximizes its advantage with respect to B.

// Example 1:
// Input: A = [2,7,11,15], B = [1,10,4,11]
// Output: [2,11,7,15]

// Example 2:
// Input: A = [12,24,8,32], B = [13,25,32,11]
// Output: [24,32,8,12]
 
// Note:
// 1 <= A.length = B.length <= 10000
// 0 <= A[i] <= 10^9
// 0 <= B[i] <= 10^9

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = (A, B) => {
    A.sort((a,b) => (a - b));
    let sortB = [...B].sort((a,b) => (a - b));
    let result = [], noUseA = [], obj = {};
    let j = 0;
    for (let b of B){
        obj[b] = [];
    }
    
    for (let i = 0; i < A.length; i++){
        if(A[i] > sortB[j]){
            obj[sortB[j]].push(A[i]);
            j += 1;
        } else{
            noUseA.push(A[i]);
        }
    }
    
    for (let b of B){
        if(obj[b].length > 0){
            result.push(obj[b].pop());
        } else{
            result.push(noUseA.pop());
        }
    }
    return result;
};