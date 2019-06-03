// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.
// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = (ransomNote, magazine) => {
    magazine = magazine.split('');
    for (let i = 0; i < ransomNote.length; i++) {
        const index = magazine.indexOf(ransomNote[i]);
        if (index === -1) return false;
        magazine.splice(index, 1);
    }
    return true;
};

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = (ransomNote, magazine) => {
    ransomNote = ransomNote.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt());
    magazine = magazine.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt());
    let i = 0;
    let j = 0;
    while (i < ransomNote.length && j < magazine.length) {
        if (ransomNote[i] === magazine[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }
    return i === ransomNote.length;
};