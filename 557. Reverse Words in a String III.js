// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.

/**
 * @param {string} s
 * @return {string}
 */
const reverse = word => {
    let charArr = word.split('');
    for (let i = 0; i < Math.floor(charArr.length / 2); i++) {
        [charArr[i], charArr[charArr.length - 1 - i]] = [charArr[charArr.length - 1 - i], charArr[i]];
    }
    return charArr.join('');
}

var reverseWords = (s) => {
    let wordArr = s.split(' ');
    let res = '';
    for (let i = 0; i < wordArr.length; i++) {
        let word = wordArr[i];
        word = reverse(word);
        res += word + ' ';
    }
    return res.substring(0, res.length - 1);
};