// There are N dominoes in a line, and we place each domino vertically upright.
// In the beginning, we simultaneously push some of the dominoes either to the left or to the right.
// After each second, each domino that is falling to the left pushes the adjacent domino on the left.
// Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.
// When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.
// For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino.
// Given a string "S" representing the initial state. S[i] = 'L', if the i-th domino has been pushed to the left; S[i] = 'R', if the i-th domino has been pushed to the right; S[i] = '.', if the i-th domino has not been pushed.
// Return a string representing the final state. 

// Example 1:
// Input: ".L.R...LR..L.."
// Output: "LL.RR.LLRRLL.."

// Example 2:
// Input: "RR.L"
// Output: "RR.L"
// Explanation: The first domino expends no additional force on the second domino.

// Note:
// 0 <= N <= 10^5
// String dominoes contains only 'L', 'R' and '.'

/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = (dominoes) => {  
    dominoes = dominoes.split('');
    const records = dominoes.map((dominoe, idx) => { return { dominoe, idx } })
      .filter(record => record.dominoe !== '.');
    records.unshift({ dominoe: 'L', idx: -1 });
    records.push({ dominoe: 'R', idx: dominoes.length });
      
    for (let i = 0, len = records.length - 1; i < len; i++) pushOver(dominoes, records[i], records[i + 1]);
    return dominoes.join('');
  };
  
  const pushOver = (dominoes, lRecord, rRecord) => {
    const [l, lVal, r, rVal] = [lRecord.idx, lRecord.dominoe, rRecord.idx, rRecord.dominoe];
    if (lVal === 'L' && rVal === 'R') return;
    let [lIdx, rIdx] = [l + 1, r - 1];
    while (lIdx < rIdx) {
      dominoes[lIdx++] = lVal;
      dominoes[rIdx--] = rVal;
    }  
    if (lVal === rVal && lIdx === rIdx) dominoes[lIdx] = lVal;
  }