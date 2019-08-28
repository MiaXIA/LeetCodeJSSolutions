// At a lemonade stand, each lemonade costs $5. 
// Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).
// Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.
// Note that you don't have any change in hand at first.
// Return true if and only if you can provide every customer with correct change.

// Example 1:
// Input: [5,5,5,10,20]
// Output: true
// Explanation: 
// From the first 3 customers, we collect three $5 bills in order.
// From the fourth customer, we collect a $10 bill and give back a $5.
// From the fifth customer, we give a $10 bill and a $5 bill.
// Since all customers got correct change, we output true.

// Example 2:
// Input: [5,5,10]
// Output: true

// Example 3:
// Input: [10,10]
// Output: false

// Example 4:
// Input: [5,5,10,10,20]
// Output: false
// Explanation: 
// From the first two customers in order, we collect two $5 bills.
// For the next two customers in order, we collect a $10 bill and give back a $5 bill.
// For the last customer, we can't give change of $15 back because we only have two $10 bills.
// Since not every customer received correct change, the answer is false.
 
// Note:
// 0 <= bills.length <= 10000
// bills[i] will be either 5, 10, or 20.

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {    
    const COST = 5;
    const changes = {
      "20": 0,
      "10": 0,
      "5": 0
    };
    
    const payWithChange = ({remaining, bills, receivedBill}) => {
        const newChanges = Object.assign({}, changes);
        for (const bill of bills) {
            while (newChanges[bill] && bill <= remaining) {
                remaining -= bill;
                newChanges[bill]--;
            }
            if (remaining === 0) {
                bills.forEach(bill => {
                    changes[bill] = newChanges[bill];
                });
                changes[receivedBill]++;
                return true;
            }
        }
        return false;
    }

    if (!bills.length) {
        return false;
    }
    
    for (let bill of bills) {
        if (bill === COST) {
            changes[bill]++;
            continue;
        }
        const remaining = bill - COST;
        let fullyPaid = false;
        let changesArr = Object.keys(changes).sort((a, b) => b - a).slice(1);
        while (changesArr.length > 0) {
            if (payWithChange({
                remaining,
                receivedBill: bill,
                bills: changesArr.slice(0)
            })) {
                fullyPaid = true;
                break;
            }
            changesArr.shift();
        }
        if (!fullyPaid) {
            return false;
        }
    }
    return true;
};