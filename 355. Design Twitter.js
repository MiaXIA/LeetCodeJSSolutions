// Design a simplified version of Twitter where users can post tweets, follow/unfollow another user and is able to see the 10 most recent tweets in the user's news feed. Your design should support the following methods:
// postTweet(userId, tweetId): Compose a new tweet.
// getNewsFeed(userId): Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
// follow(followerId, followeeId): Follower follows a followee.
// unfollow(followerId, followeeId): Follower unfollows a followee.

// Example:
// Twitter twitter = new Twitter();
// // User 1 posts a new tweet (id = 5).
// twitter.postTweet(1, 5);
// // User 1's news feed should return a list with 1 tweet id -> [5].
// twitter.getNewsFeed(1);
// // User 1 follows user 2.
// twitter.follow(1, 2);
// // User 2 posts a new tweet (id = 6).
// twitter.postTweet(2, 6);
// // User 1's news feed should return a list with 2 tweet ids -> [6, 5].
// // Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
// twitter.getNewsFeed(1);
// // User 1 unfollows user 2.
// twitter.unfollow(1, 2);
// // User 1's news feed should return a list with 1 tweet id -> [5],
// // since user 1 is no longer following user 2.
// twitter.getNewsFeed(1);

/**
 * Initialize your data structure here.
 */
var Twitter = function() {
    this.feed = {};
    this.now = 0;
    this.times = {};
    this.tweets = {};
    this.following = {};
    this.followers = {};
};

Twitter.prototype.initializeUser = function(userId) {
    if (this.feed[userId] !== undefined) {
        return; // Already initialized.
    }
    this.feed[userId] = [];
    this.tweets[userId] = [];
    this.following[userId] = new Set();
    this.followers[userId] = new Set();
}

Twitter.prototype.addToFeed = function(userId, tweetId) {
    this.initializeUser(userId);
    this.feed[userId].unshift(tweetId);
    if (this.feed[userId].length > 10) {
        this.feed[userId].pop();
    }
}

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.initializeUser(userId);
    this.times[tweetId] = this.now;
    this.now += 1;
    this.tweets[userId].push(tweetId);
    this.addToFeed(userId, tweetId);
    for (follower of this.followers[userId]) {
        this.addToFeed(follower, tweetId);
    }
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    this.initializeUser(userId);
    return this.feed[userId];
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    this.initializeUser(followerId);
    this.initializeUser(followeeId);
    if (followerId === followeeId || this.following[followerId].has(followeeId)) {
        return; // 1. Can't follow myself. 2. Already following.
    }
    this.following[followerId].add(followeeId);
    this.followers[followeeId].add(followerId);
    
    // Update feed.
    let pastFeed = this.feed[followerId].slice();
    let pastFeedIndex = 0;
    let followeeIndex = 0;
    for (let i = 0; i < 10; i += 1) {
        const item1 = pastFeed[pastFeedIndex];
        const item2 = this.tweets[followeeId][this.tweets[followeeId].length - 1 - followeeIndex];
        if (item1 === undefined && item2 === undefined) {
            break; // There'll never be more tweets when following someone (tweets can't be deleted).
        } else if (item1 === undefined) {
            this.feed[followerId][i] = item2;
            followeeIndex += 1;
        } else if (item2 === undefined) {
            this.feed[followerId][i] = item1;
            pastFeedIndex += 1;
        } else {
            // The one with the highest time goes first.
            if (this.times[item1] > this.times[item2]) {
                this.feed[followerId][i] = item1;
                pastFeedIndex += 1;
            } else {
                this.feed[followerId][i] = item2;
                followeeIndex += 1;
            }
        }
    }
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    this.initializeUser(followerId);
    this.initializeUser(followeeId);
    if (!this.following[followerId].has(followeeId)) {
        return; // Already NOT following.
    }
    this.following[followerId].delete(followeeId);
    this.followers[followeeId].delete(followerId);
    
    // Update feed.
    let peopleArr = [followerId, ...this.following[followerId]];
    let peopleTweetIndexes = Array(peopleArr.length).fill(0);
    let newFeed = [];
    for (let i = 0; i < 10; i += 1) {
        let newest;
        let newestIndex;
        // Get the newest feed item out of all his following (and him).
        for (let j = 0; j < peopleArr.length; j += 1) {
            const person = peopleArr[j];
            const item = this.tweets[person][this.tweets[person].length - 1 - peopleTweetIndexes[j]];
            if (item === undefined) {
                continue;
            }
            const tweetTime = this.times[item];
            if (newest === undefined || tweetTime > newest) {
                newest = item;
                newestIndex = j;
            }
        }
        // Fill in next feed item with newest one.
        if (newest === undefined) {
            delete this.feed[followerId][i];
        } else {
            newFeed.push(newest);
            peopleTweetIndexes[newestIndex] += 1;
        }
    }
    this.feed[followerId] = newFeed;
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = Object.create(Twitter).createNew()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */