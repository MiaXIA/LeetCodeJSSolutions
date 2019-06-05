// Given an m x n matrix of positive integers representing the height of each unit cell in a 2D elevation map, compute the volume of water it is able to trap after raining.

// Note:
// Both m and n are less than 110. The height of each unit cell is greater than 0 and is less than 20,000.

// Example:
// Given the following 3x6 height map:
// [
//   [1,4,3,1,3,2],
//   [3,2,1,3,2,4],
//   [2,3,3,2,3,1]
// ]
// Return 4.
// The above image represents the elevation map [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]] before the rain.
// After the rain, water is trapped between the blocks. The total volume of water trapped is 4.

/**
 * @param {number[][]} heightMap
 * @return {number}
 */
const dfs = (matrix, minh, h, i, j) => {
	if(i===0||i==matrix.length-1||j===0||j==matrix[0].length-1) return;
	if(minh[i][j]===0) return;
	if(minh[i][j]>h&&minh[i][j]!=matrix[i][j]){
		minh[i][j] = Math.max(matrix[i][j], h); 
		dfs(matrix, minh, minh[i][j], i-1, j);
    	dfs(matrix, minh, minh[i][j], i+1, j);
    	dfs(matrix, minh, minh[i][j], i, j-1);
    	dfs(matrix, minh, minh[i][j], i, j+1);
	}    	
};

var trapRainWater = (heightMap) => {
    let water = 0, minh = Array(heightMap.length).fill([]);
    for(let i in minh) minh[i] = new Array(heightMap[0].length).fill(0);
    if(heightMap.length<3||heightMap[0].length<3) return water;
	for(let i=0;i<heightMap.length;i++){
		minh[i][0] = heightMap[i][0];
		minh[i][heightMap[0].length-1] = heightMap[i][heightMap[0].length-1]; 
	}
	for(let j=0;j<heightMap[0].length;j++){
		minh[0][j] = heightMap[0][j];
		minh[heightMap.length-1][j] = heightMap[heightMap.length-1][j];    			
	}
	for(let i=1;i<heightMap.length-1;i++)
		for(let j=1;j<heightMap[0].length-1;j++){
			let min = Number.MAX_VALUE;
			if(minh[i-1][j]!==0) min = Math.min(min, minh[i-1][j]);
			if(minh[i+1][j]!==0) min = Math.min(min, minh[i+1][j]);
			if(minh[i][j+1]!==0) min = Math.min(min, minh[i][j+1]);
			if(minh[i][j-1]!==0) min = Math.min(min, minh[i][j-1]);    			
			minh[i][j] = Math.max(heightMap[i][j], min);
			//pass by
			dfs(heightMap, minh, minh[i][j], i-1, j);    	 
	    	dfs(heightMap, minh, minh[i][j], i, j-1);    	    	
		}
	
	for(let i=1;i<heightMap.length-1;i++)
		for(let j=1;j<heightMap[0].length-1;j++){
			water += minh[i][j]-heightMap[i][j];
		}
	
	return water;
};

/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = (heightMap) => {
    var q = new myQueue();
    var visited = [];
    var x = heightMap.length;
    if (!x) return 0;
    var y = heightMap[0].length;
    if (!y) return 0;
    var sum = 0;
    for (var i = 0; i < x; i++) {
        var temp = Array(y).fill(false);
        visited.push(temp);
    }
    for (var j = 0; j < y; j++) {
        q.push({value: heightMap[0][j], loc: [0, j]});
        visited[0][j] = true;
        q.push({value: heightMap[x-1][j], loc: [x-1, j]});
        visited[x-1][j] = true;
    }
    for (var i = 1; i < x-1; i++) {
        q.push({value: heightMap[i][0], loc: [i, 0]});
        visited[i][0] = true;
        q.push({value: heightMap[i][y-1], loc: [i, y-1]});
        visited[i][y-1] = true;
    }
    while (!q.empty()) {
        var temp = q.pop();
        var locx = temp.loc[0];
        var locy = temp.loc[1];
        var v = temp.value;
        if (locx !== 0) {
            if (!visited[locx-1][locy]) {
                visited[locx-1][locy] = true;
                if (heightMap[locx-1][locy] > v) {
                    q.push({value:heightMap[locx-1][locy], loc:[locx-1, locy]});
                } else {
                    sum += v - heightMap[locx-1][locy];
                    q.push({value:v, loc:[locx-1, locy]});
                }
            }
        }
        if (locx !== x-1) {
            if (!visited[locx+1][locy]) {
                visited[locx+1][locy] = true;
                if (heightMap[locx+1][locy] > v) {
                    q.push({value:heightMap[locx+1][locy], loc:[locx+1, locy]});
                } else {
                    sum += v - heightMap[locx+1][locy];
                    q.push({value:v, loc:[locx+1, locy]});
                }
            }
        }
        if (locy !== 0) {
            if (!visited[locx][locy-1]) {
                visited[locx][locy-1] = true;
                if (heightMap[locx][locy-1] > v) {
                    q.push({value:heightMap[locx][locy-1], loc:[locx, locy-1]});
                } else {
                    sum += v - heightMap[locx][locy-1];
                    q.push({value:v, loc:[locx, locy-1]});
                }
            }
        }
        if (locy !== y-1) {
            if (!visited[locx][locy+1]) {
                visited[locx][locy+1] = true;
                if (heightMap[locx][locy+1] > v) {
                    q.push({value:heightMap[locx][locy+1], loc:[locx, locy+1]});
                } else {
                    sum += v - heightMap[locx][locy+1];
                    q.push({value:v, loc:[locx, locy+1]});
                }

            }
        }
    }
    return sum;
};

var myQueue = function() {
    this.cache = [];
}

myQueue.prototype.push = function(n) {
    var i;
    for (i = 0; i < this.cache.length; i++) {
        if (n.value < this.cache[i].value) {
            break;
        }
    }
    this.cache.splice(i, 0, n);
};

myQueue.prototype.pop = function() {
   return this.cache.shift(); 
};

myQueue.prototype.empty = function() {
    return this.cache.length === 0? true:false;
}

myQueue.prototype.print = function() {
    console.log(JSON.stringify(this.cache));
}

/**
 * @param {number[][]} heightMap
 * @return {number}
 */
function Heap(less) {
    this.heap = [];
    this.less = less;
}

Heap.prototype.exch = function(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
}

Heap.prototype.parent = function(x) {
    return (x-1) >> 1;
}

Heap.prototype.swim = function(x) {
    while (x>0) {
        let p = this.parent(x);
        if (this.less(this.heap[p], this.heap[x])) {
            this.exch(p, x);
            x = p;
        } else break;
    }
}

Heap.prototype.sink = function(x) {
    while(2*x+1<this.heap.length) {
        let c = 2*x+1;
        if (c+1<this.heap.length && this.less(this.heap[c], this.heap[c+1])) {
            c += 1;
        } 
        
        if (this.less(this.heap[x], this.heap[c])) {
            this.exch(x, c);
            x = c;
        } else break;
    }
}

Heap.prototype.push = function(v) {
    this.heap.push(v);
    this.swim(this.heap.length-1);
}

Heap.prototype.size = function() {
    return this.heap.length;
}

Heap.prototype.peak = function() {
    return this.heap.length > 0 ? this.heap[0] : null;
}

Heap.prototype.pop = function() {
    let top = this.heap[0];
    this.heap[0] = this.heap[this.heap.length-1];
    this.heap.pop();
    this.sink(0);
    return top;
}

var trapRainWater = (heightMap) => {
    if (!heightMap || !heightMap.length) return 0;
    let m = heightMap.length;
    let n = heightMap[0].length;
    
    let marked = Array(m);
    let minHeap = new Heap((v1, v2) => v2[2] < v1[2]);
    for (let i=0; i<m; i++) {
        marked[i] = Array(n).fill(false);
        for (let j=0; j<n; j++) {
            if (i===0 || j === 0 || i === m-1 || j=== n-1) {
                minHeap.push([i, j, heightMap[i][j]]);
                marked[i][j] = true;
            } 
        }
    }
    let res = 0;
    let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    while (minHeap.size()) {
        let c = minHeap.pop();
        for (let d of dirs) {
            dx = c[0] + d[0];
            dy = c[1] + d[1];
            if (dx>=0 && dx<m && dy>=0 && dy<n && !marked[dx][dy]) {
                marked[dx][dy] = true;
                res += Math.max(0, c[2] - heightMap[dx][dy]);
                minHeap.push([dx, dy, Math.max(c[2], heightMap[dx][dy])]);
            }
        }
    }
    return res;
};