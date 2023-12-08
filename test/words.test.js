import chai from "chai"
import words from "../src/words.js";
import asciiWords from "../src/words.js";

const expect = chai.expect

describe('words', () => {
    it('check if it create array from string with spaces', () => {
        const tmp_values = asciiWords('This string has whitespaces');
        const expected_values = ['This', 'string', 'has', 'whitespaces'];
    
        expect(tmp_values).to.deep.equal(expected_values);
    });
    it('check if it create array from string with multiple with spaces', () => {
        const tmp_values = asciiWords('This    string has   whitespaces');
        const expected_values = ['This', 'string', 'has', 'whitespaces'];
    
        expect(tmp_values).to.deep.equal(expected_values);
    });
    it('check if it create array that contain only words (no special chars)', () => {
        const tmp_values = asciiWords('This @string has %)() whitespaces');
        const expected_values = ['This', 'string', 'has', 'whitespaces'];
    
        expect(tmp_values).to.deep.equal(expected_values);
    });
    it('confirm that it return array', () => {
        const tmp_values = words('fred, barney, & pebbles');
    
        expect(tmp_values).to.be.an('array')
    });
    it('return words', () => {
        const tmp_values = words('fred, barney, & pebbles');
        const expected_values = ['fred', 'barney', 'pebbles'];
    
        expect(tmp_values).to.deep.equal(expected_values);
    });
    it('return words and also characters specified by RegEx', () => {
        const tmp_values = words('fred, barney, & pebbles', /[^, ]+/g);
        const expected_values = ['fred', 'barney', '&', 'pebbles'];
    
        expect(tmp_values).to.deep.equal(expected_values);
    });
    it('empty string', () => {
        const tmp_values = words('');
        const expected_values = [];
    
        expect(tmp_values).to.deep.equal(expected_values);
    });
    it('no match should return empty array', () => {
        const tmp_values = words('this is a sentence', /,/);
        const expected_values = [];

        expect(tmp_values).to.deep.equal(expected_values);
    });
});