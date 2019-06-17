// Design and implement a data structure for Least Frequently Used (LFU) cache. It should support the following operations: get and put.
// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reaches its capacity, it should invalidate the least frequently used item before inserting a new item. For the purpose of this problem, when there is a tie (i.e., two or more keys that have the same frequency), the least recently used key would be evicted.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:
// LFUCache cache = new LFUCache( 2 /* capacity */ );
// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.get(3);       // returns 3.
// cache.put(4, 4);    // evicts key 1.
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.lru = new Array();
    this.ar = new Array();
    
    this.minHeapify = function(i){
        if (i>=this.ar.length) return;
        let temp = i;
        
        if ((2 * i) + 1 < this.ar.length){
            if (this.ar[(2 * i) + 1][1] < this.ar[temp][1]) temp=(2*i)+1;
            else if (this.ar[(2 * i) + 1][1] === this.ar[temp][1]){
                if (this.lru.indexOf(this.ar[(2 * i) + 1][0]) < this.lru.indexOf(this.ar[temp][0])) temp=(2*i)+1;
            }
        }
        if ((2 * i) + 2 < this.ar.length){
            if (this.ar[(2 * i) + 2][1] < this.ar[temp][1]) temp=(2*i)+2;
            else if (this.ar[(2 * i) + 2][1] === this.ar[temp][1]){
                if(this.lru.indexOf(this.ar[(2 * i) + 2][0]) < this.lru.indexOf(this.ar[temp][0])) temp=(2 * i) + 2;
            }
        }
        
        if (temp !== i){            
            [this.ar[i], this.ar[temp]] = [this.ar[temp], this.ar[i]];
            
            this.map.set(this.ar[i][0], i);
            this.map.set(this.ar[temp][0], temp);
            
            this.minHeapify(temp);
        }
    }
    
    this.insertHeap = function(key,val){
        let ind = -1;

        if (this.map.has(key)) ind = this.map.get(key);
        
        if (ind !== -1){
            this.ar[ind][1] += 1;
            this.ar[ind][2] = val;
            this.minHeapify(ind);
            return;
        }
        else{
             if (this.ar.length >= this.capacity){                 
                 let old = this.extractMinHeap();
                 if (old === -1) return;
            }
            
            this.ar.push([key, 1, val]);
            this.map.set(key, this.ar.length - 1);
            
            let i = this.ar.length - 1;            
            while (Math.floor((i - 1) / 2) >= 0 && this.ar[Math.floor((i - 1) / 2)][1] > this.ar[i][1]){
                this.minHeapify((Math.floor((i - 1) / 2)));
                i = (Math.floor((i - 1) / 2));
            }   
        }        
            
    }
    
    this.extractMinHeap = function(){
        if (this.ar.length <= 0) return -1;
        let res = this.ar[0];
        this.ar[0] = this.ar[this.ar.length - 1];
        this.ar.pop();
        this.minHeapify(0);     
        this.lru.splice(this.lru.indexOf(res[0]), 1);
        this.map.delete(res[0]);
        return res;
        
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    let ind = this.lru.indexOf(key);
    if (ind !== -1){
        this.lru.splice(ind, 1);
        this.lru.push(key);
    }
    else this.lru.push(key);
    
    if (this.map.has(key)){
        let item=this.ar[this.map.get(key)];
        this.insertHeap(key, item[2]);
        return item[2];
    }     
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    let ind = this.lru.indexOf(key);
    if (ind !== -1){
        this.lru.splice(ind, 1);
        this.lru.push(key);
    }
    else this.lru.push(key);
    
    this.insertHeap(key, value);
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */