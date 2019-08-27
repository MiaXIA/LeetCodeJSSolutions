// Two strings X and Y are similar if we can swap two letters (in different positions) of X, so that it equals Y.
// For example, "tars" and "rats" are similar (swapping at positions 0 and 2), and "rats" and "arts" are similar, but "star" is not similar to "tars", "rats", or "arts".
// Together, these form two connected groups by similarity: {"tars", "rats", "arts"} and {"star"}.  Notice that "tars" and "arts" are in the same group even though they are not similar.  Formally, each group is such that a word is in the group if and only if it is similar to at least one other word in the group.
// We are given a list A of strings.  Every string in A is an anagram of every other string in A.  How many groups are there?

// Example 1:
// Input: ["tars","rats","arts","star"]
// Output: 2

// Note:
// A.length <= 2000
// A[i].length <= 1000
// A.length * A[i].length <= 20000
// All words in A consist of lowercase letters only.
// All words in A have the same length and are anagrams of each other.
// The judging time limit has been increased for this question.

/**
 * @param {string[]} A
 * @return {number}
 */
var numSimilarGroups = (A) => {
	let groups = 0;
	let grouped = {};
	for (let i = 0; i < A.length; i++){
		if (!grouped[A[i]]){
			groups++;
			let queue = [A[i]];
			while (queue.length > 0){
				let cur = queue.pop();
				grouped[cur] = true;
				for (let j = i + 1; j < A.length; j++){
					if (!grouped[A[j]] && ok(cur, A[j])){
						queue.push(A[j]);
					}
				}
			}
		}
	}
	return groups;
};

const ok = (a,b) => {
	let diff = 0;
	for (let i = 0; i < a.length; i++){
		if (a[i] !== b[i]){
			diff++;
			if (diff > 2) return false;
		}
	}
	return diff === 2;
}