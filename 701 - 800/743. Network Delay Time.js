// There are N network nodes, labelled 1 to N.
// Given times, a list of travel times as directed edges times[i] = (u, v, w), where u is the source node, v is the target node, and w is the time it takes for a signal to travel from source to target.
// Now, we send a signal from a certain node K. How long will it take for all nodes to receive the signal? If it is impossible, return -1.

// Example 1:
// Input: times = [[2,1,1],[2,3,1],[3,4,1]], N = 4, K = 2
// Output: 2
 
// Note:
// N will be in the range [1, 100].
// K will be in the range [1, N].
// The length of times will be in the range [1, 6000].
// All edges times[i] = (u, v, w) will have 1 <= u, v <= N and 0 <= w <= 100.

/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
class ToNode {
    constructor(node, time) {
      this.node = node;
      this.time = time;
    }
  }
  
  const bfsTravel = (allNodes, fttData, toVisits) => {
    var nextToVisits = [];
    for (var i = 0; i < toVisits.length; i++) {
      var from = toVisits[i];
      var fromTime = allNodes[from];
      if (fttData[from] !== undefined) {
        var fft = fttData[from];
        for (var j = 0; j < fft.length; j++) {
          var thisTo = fft[j].node;
          var thisTime = fft[j].time;
          var totalTime = fromTime+thisTime;
          if (allNodes[thisTo] === undefined || totalTime<allNodes[thisTo]) {
            allNodes[thisTo] = totalTime;
            nextToVisits.push(thisTo);
          }
        }
      }
    }
    if (nextToVisits.length > 0) {
      bfsTravel(allNodes, fttData, nextToVisits);
    }
  }
  
  var networkDelayTime = (times, N, K) => {
    var fttData = {};
    for (var i = 0; i < times.length; i++) {
      var from = times[i][0];
      var to = times[i][1];
      var time = times[i][2];
      fttData[from] = fttData[from] || [];
      fttData[from].push( new ToNode(to, time) );
    }
    var allNodes = {};
    allNodes[K] = 0;
    bfsTravel(allNodes, fttData, [K]);
    
    if ( Object.keys(allNodes).length < N ) {
      return -1;
    }
    var maxTime = 0;
    var allNodesArr = Object.keys(allNodes);
    for (var i = 0; i < allNodesArr.length; i++) {
      var node = allNodesArr[i];
      var finishTime = allNodes[node];
      if (finishTime > maxTime) {
        maxTime = finishTime;
      }
    }
    return maxTime;
  };