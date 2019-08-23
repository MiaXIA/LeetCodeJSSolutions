// We have a list of bus routes. Each routes[i] is a bus route that the i-th bus repeats forever. For example if routes[0] = [1, 5, 7], this means that the first bus (0-th indexed) travels in the sequence 1->5->7->1->5->7->1->... forever.
// We start at bus stop S (initially not on a bus), and we want to go to bus stop T. Travelling by buses only, what is the least number of buses we must take to reach our destination? Return -1 if it is not possible.

// Example:
// Input: 
// routes = [[1, 2, 7], [3, 6, 7]]
// S = 1
// T = 6
// Output: 2
// Explanation: 
// The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.
// Note:
// 1 <= routes.length <= 500.
// 1 <= routes[i].length <= 500.
// 0 <= routes[i][j] < 10 ^ 6.

/**
 * @param {number[][]} routes
 * @param {number} S
 * @param {number} T
 * @return {number}
 */
var numBusesToDestination = (routes, S, T) => {
    if (S === T) {
        return 0;
    }
    const map = createMap(routes);
    return bfs(routes.map((arr) => new Set(arr)), S, T, map);
};

const bfs = (routes, S, T, map) => {
    const queue = [];
    for (const bus of map[S]) {
        queue.push([bus, 1]);
    }
    const visited = new Set();
    while (queue.length) {
        const [bus, nBuses] = queue.shift();
        const containsDest = routes[bus].has(T);
        if (containsDest) {
            return nBuses;
        }
        for (const route of routes[bus]) {
            for (const nextBus of map[route]) {
                if (nextBus !== bus && !visited.has(nextBus)) {
                    visited.add(nextBus);
                    queue.push([nextBus, nBuses + 1]);
                }
            }
        }
    }
    return -1;
}

const createMap = (routes) => {
    const map = {};
    for (let i = 0; i < routes.length; i++) {
        for (let j = 0; j < routes[i].length; j++) {
            const route = routes[i][j];
            if (!(route in map)) map[route] = [];
            map[route].push(i);
        }
    }
    return map;
}