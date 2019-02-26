// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

//Examples:
//Input:
// [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ]
//    ]
//Output: [1,2,3,6,9,8,7,4,5]
//Input:
// [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9,10,11,12]
//   ]
//Output: [1,2,3,4,8,12,11,10,9,5,6,7]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = (matrix, result = []) => {
    if (matrix.length === 0) {
        return result;
    }
    
    for (var i = 0; i < matrix.length; i++) {
        var current = matrix[i];
        if (i === 0) {
            result = [...result, ...current];
        } else {
            var last = current.pop();
            if (!last) {
                return result;
            }
            result.push(last);
            current.reverse();
        }
    }
    matrix.shift();
    return spiralOrder(matrix.reverse(), result);
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));