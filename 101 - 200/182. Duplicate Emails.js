// Write a SQL query to find all duplicate emails in a table named Person.
// +----+---------+
// | Id | Email   |
// +----+---------+
// | 1  | a@b.com |
// | 2  | c@d.com |
// | 3  | a@b.com |
// +----+---------+
// For example, your query should return the following for the above table:
// +---------+
// | Email   |
// +---------+
// | a@b.com |
// +---------+

// Note: All emails are in lowercase.

// # Write your MySQL query statement below
// SELECT DISTINCT P1.Email
// FROM Person p1, Person p2
// WHERE p1.Email = p2.Email AND p1.Id != p2.Id