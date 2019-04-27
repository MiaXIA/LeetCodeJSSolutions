// Write a SQL query to find all numbers that appear at least three times consecutively.
// +----+-----+
// | Id | Num |
// +----+-----+
// | 1  |  1  |
// | 2  |  1  |
// | 3  |  1  |
// | 4  |  2  |
// | 5  |  1  |
// | 6  |  2  |
// | 7  |  2  |
// +----+-----+

// For example, given the above Logs table, 1 is the only number that appears consecutively for at least three times.
// +-----------------+
// | ConsecutiveNums |
// +-----------------+
// | 1               |
// +-----------------+

// # Write your MySQL query statement below
// Select Distinct a.Num "ConsecutiveNums"
// from
// Logs a,
// Logs b,
// Logs c
// where a.ID + 1 = b.ID and a.ID + 2 = c.ID and a.Num = b.Num and a.Num = c.Num;