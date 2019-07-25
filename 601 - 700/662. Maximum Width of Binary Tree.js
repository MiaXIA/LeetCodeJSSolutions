// Given a binary tree, write a function to get the maximum width of the given tree. The width of a tree is the maximum width among all levels. The binary tree has the same structure as a full binary tree, but some nodes are null.
// The width of one level is defined as the length between the end-nodes (the leftmost and right most non-null nodes in the level, where the null nodes between the end-nodes are also counted into the length calculation.

// Example 1:
// Input: 

//            1
//          /   \
//         3     2
//        / \     \  
//       5   3     9 
// Output: 4
// Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).

// Example 2:
// Input: 
//           1
//          /  
//         3    
//        / \       
//       5   3     
// Output: 2
// Explanation: The maximum width existing in the third level with the length 2 (5,3).

// Example 3:
// Input: 
//           1
//          / \
//         3   2 
//        /        
//       5      
// Output: 2
// Explanation: The maximum width existing in the second level with the length 2 (3,2).

// Example 4:
// Input: 
//           1
//          / \
//         3   2
//        /     \  
//       5       9 
//      /         \
//     6           7
// Output: 8
// Explanation:The maximum width existing in the fourth level with the length 8 (6,null,null,null,null,null,null,7).

// Note: Answer will in the range of 32-bit signed integer.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = (root) => {
    let que = new Array();
    que.push(root);
    let res = 1;
    while (que.length > 0){
        let i = 0, len = que.length, temp;        
        let low = -1, high = -1;
        i = 0;
        while (i < len){
            temp = que.shift();
            if (!isNaN(temp)){
                que.push(temp);
                i++;
                continue;
            }
                
            if (temp.left == null){
                if (que.length <= 0 || isNaN(que[que.length - 1])) que.push(1);
                else que[que.length - 1] += 1;
            }
            else {
                if (low == -1) low = que.length + 1 - (len - (i));
                else high = que.length + 1 - (len - (i));
                que.push(temp.left);
            }
            
            if (temp.right == null){
                if (que.length <= 0 || isNaN(que[que.length - 1])) que.push(1);
                else que[que.length - 1] += 1;
            }
            else {
                if (low == -1) low = que.length + 1 - (len - (i));
                else high = que.length + 1 - (len - (i));
                que.push(temp.right);
            }   
            i++;
        }
              
        if (low == -1) break;
        if (high == -1) continue;
        
        let ans = 2;
        
        for (let i = low + 1; i < high; i++){
            if (!isNaN(que[i])){                
                ans += (que[i]); 
                que[i] = 2 * que[i];
            }                
            else ans += 1;
        }
        res = Math.max(ans, res);                           
    }
    return res;
};