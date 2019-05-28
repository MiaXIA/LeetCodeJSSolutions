// Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.
// Note:
// If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// All airports are represented by three capital letters (IATA code).
// You may assume all tickets form at least one valid itinerary.

// Example 1:
// Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
// Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]

// Example 2:
// Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
// Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
//              But it is larger in lexical order.

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
const dfs = (source, graph, length, path = []) => {
    if (path.length === length) return path.concat(source);
    let neighbours = graph[source] || [];
  
    for (let neighbourKey in neighbours) {
      const neighbour = neighbours[neighbourKey];
      let newList = neighbours.slice();
      newList.splice(neighbours.indexOf(neighbour), 1);
      graph[source] = newList;
      const result = dfs(neighbour, graph, length, path.concat(source));
      if (result.length) return result;
      graph[source] = newList.concat(neighbour);
    }
  
    return [];
  };
  
  const constructGraph = tickets => {
    const graph = tickets.reduce((graph, ticket) => {
      const [from, to] = ticket;
      const neighbours = graph[from] || [];
      graph[from] = neighbours.concat(to);
      return graph;
    }, {});
  
    for (let source in graph) {
      const destinations = graph[source];
      destinations.sort();
    }
    return graph;
  };
  
  const findItinerary = tickets => {
    const graph = constructGraph(tickets);
    const path = dfs("JFK", graph, tickets.length, []);
    if (path) return path;
  };