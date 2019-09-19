// Given a set of N people (numbered 1, 2, ..., N), we would like to split everyone into two groups of any size.
// Each person may dislike some other people, and they should not go into the same group. 
// Formally, if dislikes[i] = [a, b], it means it is not allowed to put the people numbered a and b into the same group.
// Return true if and only if it is possible to split everyone into two groups in this way.

// Example 1:
// Input: N = 4, dislikes = [[1,2],[1,3],[2,4]]
// Output: true
// Explanation: group1 [1,4], group2 [2,3]

// Example 2:
// Input: N = 3, dislikes = [[1,2],[1,3],[2,3]]
// Output: false

// Example 3:
// Input: N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
// Output: false
 
// Note:
// 1 <= N <= 2000
// 0 <= dislikes.length <= 10000
// 1 <= dislikes[i][j] <= N
// dislikes[i][0] < dislikes[i][1]
// There does not exist i != j for which dislikes[i] == dislikes[j].

/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = (N, dislikes) => {
    const groupList = new Array(N+1).fill(0);
    const enemyList = Array.from({ length: N+1 }, x => []);

    dislikes.forEach(function(people) {
        const personA = people[0],
              personB = people[1];
        enemyList[personA].push(personB);
        enemyList[personB].push(personA);
    });
    
    groupList[1] = 1;
    
    const findGroup = (person) => {
        for (let i = 0; i < enemyList[person].length; i++) {
            const enemy = enemyList[person][i];
            if (groupList[enemy] == groupList[person]) return false;
            if (groupList[enemy] !== 0) continue;
            groupList[enemy] =(groupList[person] == 1 ? 2 : 1);
            if (!findGroup(enemy)) return false;
        }
        return true;
    }
    
    for (let i = 1; i <= N; i++) {
        if (!findGroup(i)) return false;
    }
    
    return true;
};