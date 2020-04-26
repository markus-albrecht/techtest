const expect = require('chai').expect;
const wordLength = require('../src/wordLength');

let longestWordResult = wordLength.findLongestWord("Longest word in the sentence")
let shortestWordResult = wordLength.findShortestWord("Shortest word in the sentence")

describe('Word length test', () => {
    describe('findLongestWord', () => {
        it('findLongestWord returns the longest word and its length', () => {
        expect(longestWordResult).to.eql(['sentence', 8])
        });

        it('findLongestWord returns an array', () => {
            expect(longestWordResult).to.be.a('array')
            });
    });
    describe('findShortestWord', () => {
        it('findShortestWord should return the shortest word', () => {
        expect(shortestWordResult).to.eql(['in', 2])
        });

        it('findShortestWord returns an array', () => {
            expect(shortestWordResult).to.be.a('array')
            });
    });
});