// The demons had captured the princess (P) and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of M x N rooms laid out in a 2D grid. Our valiant knight (K) was initially positioned in the top-left room and must fight his way through the dungeon to rescue the princess.
// The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately.
// Some of the rooms are guarded by demons, so the knight loses health (negative integers) upon entering these rooms; other rooms are either empty (0's) or contain magic orbs that increase the knight's health (positive integers).
// In order to reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.
// Write a function to determine the knight's minimum initial health so that he is able to rescue the princess.

// For example, given the dungeon below, the initial health of the knight must be at least 7 if he follows the optimal path RIGHT-> RIGHT -> DOWN -> DOWN
// -2(K)  -3   3
// -5     -10  1
// 10     30   -5(P)
 
// Note:
// The knight's health has no upper bound.
// Any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = (dungeon) => {
    if (dungeon.length === 0) return 1;
    let map = [];
    let i = dungeon.length - 1;
    let j = dungeon[0].length - 1;
    
    for (let m = 0; m <= i; m++) map[m] = [];
    
    while (i >= 0 && j >= 0) {
        if (i === dungeon.length - 1 && j === dungeon[0].length - 1) {
            map[i][j] = 1 - dungeon[i][j] <= 0 ? 1 : 1 - dungeon[i][j];
        } else if (i === dungeon.length - 1) {
            map[i][j] = map[i][j + 1] - dungeon[i][j] <= 0 ? 1 : map[i][j + 1] - dungeon[i][j];
        } else if (j === dungeon[0].length - 1) {
            map[i][j] = map[i + 1][j] - dungeon[i][j] <= 0 ? 1 : map[i + 1][j] - dungeon[i][j];
        } else {
            let hp = Math.min(map[i][j + 1], map[i + 1][j]) - dungeon[i][j];
            map[i][j] = hp <= 0 ? 1 : hp;
        }
        j === 0 ? (j = dungeon[0].length - 1, i--) : j--;
    }
    return map[0][0];
};