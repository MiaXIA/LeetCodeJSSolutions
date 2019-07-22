// Print a binary tree in an m*n 2D string array following these rules:
// The row number m should be equal to the height of the given binary tree.
// The column number n should always be an odd number.
// The root node's value (in string format) should be put in the exactly middle of the first row it can be put. The column and the row where the root node belongs will separate the rest space into two parts (left-bottom part and right-bottom part). You should print the left subtree in the left-bottom part and print the right subtree in the right-bottom part. The left-bottom part and the right-bottom part should have the same size. Even if one subtree is none while the other is not, you don't need to print anything for the none subtree but still need to leave the space as large as that for the other subtree. However, if two subtrees are none, then you don't need to leave space for both of them.
// Each unused space should contain an empty string "".
// Print the subtrees following the same rules.

// Example 1:
// Input:
//      1
//     /
//    2
// Output:
// [["", "1", ""],
//  ["2", "", ""]]

// Example 2:
// Input:
//      1
//     / \
//    2   3
//     \
//      4
// Output:
// [["", "", "", "1", "", "", ""],
//  ["", "2", "", "", "", "3", ""],
//  ["", "", "4", "", "", "", ""]]

// Example 3:
// Input:
//       1
//      / \
//     2   5
//    / 
//   3 
//  / 
// 4 
// Output:
// [["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""]
//  ["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""]
//  ["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]
//  ["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]]
// Note: The height of binary tree is in the range of [1, 10].

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
let res2;

const getHeight = (root) => {
    if (root == null) return 0;
    return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

const getWidth = (height) => {
    if (height < 1) return 0;
    return (Math.pow(2, height - 1)) + getWidth(height - 1);
}

const print = (width,root,ind,res) => {
    if (ind >= res.length) return;
    let ar = new Array(width).fill("");
    let part = Math.floor(width / (Math.pow(2, ind)));
    let offset = 0;
    for (let i = 0;i < res[ind].length; i++){
        if (res[ind][i] && res[ind][i].val !== 'null') ar[offset + Math.floor(part / 2)] = res[ind][i].val + "";
        offset += part + 1;
    }
    res2[ind] = ar;
    print(width, root, ind+1, res);
}

var printTree = (root) => {    
    let height = getHeight(root);
    let width  = getWidth(height);
    let que=new Array();
    let res=new Array();
    if (root) que.push(root);
    while (que.length > 0){
        let i=0,j=que.length;
        res.push([...que]);
        if (res.length === height) break;
        while (i < j){
            let node=que.shift();
            if (node && node.val !== 'null'){
                que.push(node.left);
                que.push(node.right);   
            } else {
                que.push(new TreeNode('null'));
                que.push(new TreeNode('null'));
            }            
            i++;
        }
    }    
    res2 = new Array(height);
    print(width, root, 0, res);
    return res2;
};