// In English, we have a concept called root, which can be followed by some other words to form another longer word - let's call this word successor. For example, the root an, followed by other, which can form another word another.
// Now, given a dictionary consisting of many roots and a sentence. You need to replace all the successor in the sentence with the root forming it. If a successor has many roots can form it, replace it with the root with the shortest length.
// You need to output the sentence after the replacement.

// Example 1:
// Input: dict = ["cat", "bat", "rat"]
// sentence = "the cattle was rattled by the battery"
// Output: "the cat was rat by the bat"
 
// Note:
// The input will only have lower-case letters.
// 1 <= dict words number <= 1000
// 1 <= sentence words number <= 1000
// 1 <= root length <= 100
// 1 <= sentence words length <= 1000

/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
function Trie(){
    this.map = new Map();
    this.end = false;
}

Trie.prototype.insert = function(word){
    let trie = this;
    let i = 0;
    while (i < word.length){
        if (trie.map.has(word[i])){
            trie = trie.map.get(word[i]);
        }
        else{
            let temp = new Trie();
            trie.map.set(word[i],temp);
            trie = trie.map.get(word[i]);
        }
        i++;
    }
    trie.end = true;
}

Trie.prototype.hasRoot = function(word){
    let trie = this;
    let i = 0;    
    while (i < word.length){  
        if (trie.end){
            return {
                    word:word.substring(0,i),
                    found:true
                   };
        }
        if (trie.map.has(word[i])){            
            trie = trie.map.get(word[i]);            
        }
        else{
            return { found:false };
        }
        i++;
    }
    return { found:false };
}

var replaceWords = (dict, sentence) => {
    let sent = sentence.split(' ');
    let trie = new Trie();
    for (let root of dict){
        trie.insert(root);
    }
    for (let i = 0;i < sent.length; i++){
        let res = trie.hasRoot(sent[i]);
        if (res.found){
         sent[i] = res.word;
        }   
    }
    return sent.join(' ');
};