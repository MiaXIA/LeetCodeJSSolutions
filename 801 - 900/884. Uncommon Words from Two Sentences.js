// We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)
// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
// Return a list of all uncommon words. 
// You may return the list in any order.

// Example 1:
// Input: A = "this apple is sweet", B = "this apple is sour"
// Output: ["sweet","sour"]

// Example 2:
// Input: A = "apple apple", B = "banana"
// Output: ["banana"]
 
// Note:
// 0 <= A.length <= 200
// 0 <= B.length <= 200
// A and B both contain only spaces and lowercase letters.

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = (A, B) => {
    var arr1 = A.split(' ');
    var arr2 = B.split(' ');
    var res = {};

    for (var i = 0; i < arr1.length; i++){
        if (arr2.indexOf(arr1[i]) < 0){
            if (res[arr1[i]]) res[arr1[i]]  += 1;
            else res[arr1[i]]  = 1;   
        }
    }

    for (var i = 0; i < arr2.length; i++){
        if (arr1.indexOf(arr2[i]) < 0){
            if (res[arr2[i]])res[arr2[i]] += 1;
            else res[arr2[i]] = 1;
        }
    }

    var finalRes = [];
    for (var key in res){
        if (res[key] === 1) finalRes.push(key);
    }
    return finalRes;
};