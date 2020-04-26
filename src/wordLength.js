module.exports = {

    findLongestWord: (str) => {
        var longestWord = str.split(' ').reduce((longest, currentWord) => {
          return currentWord.length > longest.length ? currentWord : longest;
        }, "");
        var longestWordLength = longestWord.length
        return [longestWord,longestWordLength]
      },
    
    findShortestWord: (str) => {
        var sentence = str.split(' ');
        var shortestWord = sentence.reduce((shortest, currentWord) => {
          return currentWord.length < shortest.length ? currentWord : shortest;
        }, sentence[0]);
        var shortestWordLength = shortestWord.length
        return [shortestWord,shortestWordLength];
      }     

};

