// You have 4 cards each containing a number from 1 to 9. You need to judge whether they could operated through *, /, +, -, (, ) to get the value of 24.

// Example 1:
// Input: [4, 1, 8, 7]
// Output: True
// Explanation: (8-4) * (7-1) = 24

// Example 2:
// Input: [1, 2, 1, 2]
// Output: False

// Note:
// The division operator / represents real division, not integer division. For example, 4 / (1 - 2/3) = 12.
// Every operation done is between two numbers. In particular, we cannot use - as a unary operator. For example, with [1, 1, 1, 1] as input, the expression -1 - 1 - 1 - 1 is not allowed.
// You cannot concatenate numbers together. For example, if the input is [1, 2, 1, 2], we cannot write this as 12 + 12.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = (nums) => {
    let sum=0;
    const cal6 = (str) => {
        if (str.length <= 0) return false;
        let temp;
        try{
            temp = eval(str.substring(0, 3));
            temp = eval(temp.toString()+' '+str.substring(3, 5));
            temp = eval(temp.toString()+' '+str.substring(5));
            if (temp === 24) return true;    
        }
        catch(err){ console.log(`-1. ${err}`); }
        
        try{
            temp = eval(str.substring(2, 5));
            temp = eval(str.substring(0, 2)+' '+temp.toString());
            temp = eval(temp.toString()+' '+str.substring(5));
            if (temp === 24) return true;    
        }
        catch(err){ console.log(`0. ${err}`); }
        
        try{
            temp = eval(str.substring(0, 3));
            let temp2 = eval(str.substring(4));
            temp = eval(temp.toString()+' '+str.substring(3, 4)+' '+temp2.toString());
            if (temp === 24) return true;    
        }
        catch(err){ console.log(`1. ${err}`); }
        
        try{
            temp = eval(str.substring(2, 5));
            temp = eval(temp.toString()+' '+str.substring(5));
            temp = eval(str.substring(0, 2)+' '+temp.toString());
            if (temp === 24) return true;    
        }
        catch(err){ console.log(`2. ${err}`); }
        
        try{
            temp = eval(str.substring(4));
            temp = eval(str.substring(2, 4)+' '+temp.toString());
            temp = eval(str.substring(0, 2)+' '+temp.toString());
            if (temp === 24) return true;    
        }
        catch(err){ console.log(`3. ${err}`); }
        
        if (Math.round(temp) === 24) return true;
        return false;
    }
    let ar = new Array();
    const getPermutation = (str) => {
        if (str.length >= 4){
            if (str.length == 4) ar.push(str);
            return;
        }
        for (let i = 0;i < nums.length; i++){
            let t = nums[i];
            let copy = [...nums];
            nums.splice(i, 1);
            getPermutation(str + t);
            nums = [...copy];
        }
    };
    const solve = (i,str) => {  
        if (sum == 24) return true;
        if (i == nums.length - 1){
            str += nums[i];            
            if ((eval(str)) == 24){
                sum = 24;
                return true;
            }
            if (cal6(str)){
                sum = 24;
                return true;
            } 
            return false;
        }
        solve(i + 1,str + nums[i] + '+');
        solve(i + 1,str + nums[i] + '-');
        solve(i + 1,str + nums[i] + '*');
        solve(i + 1,str + nums[i] + '/');
    };
    
    getPermutation('');
    
    ar.map((item)=>{
        nums = item.split('');
        solve(0,'');  
    })    
    return sum==24;
};