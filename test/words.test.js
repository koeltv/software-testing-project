import chai from "chai"
import words from "../src/words.js";
import asciiWords from "../src/words.js";

const expect = chai.expect

describe('words ', () => {


    it('Check if it create array from string with withspaces ', () => {

        const tmp_values = asciiWords('This string has whitespaces');
        const expected_values = ['This', 'string', 'has', 'whitespaces'];
    
        expect(tmp_values).to.deep.equal(expected_values);
    });

    it('Check if it create array from string with multiple withspaces ', () => {

        const tmp_values = asciiWords('This    string has   whitespaces');
        const expected_values = ['This', 'string', 'has', 'whitespaces'];
    
        expect(tmp_values).to.deep.equal(expected_values);
    });
    it('Check if it create arrray that contain only words (no special chars) ', () => {

        const tmp_values = asciiWords('This @string has %)() whitespaces');
        const expected_values = ['This', 'string', 'has', 'whitespaces'];
    
        expect(tmp_values).to.deep.equal(expected_values);
    });
    it('Confirm that it return array', () => {

        const tmp_values = words('fred, barney, & pebbles');
        const expected_values = ['fred', 'barney', '&', 'pebbles'];
    
        expect(expected_values).to.be.an('array')
    });

    it('return  words ( when filter for searching engine) ', () => {

        const tmp_values = words('fred, barney, & pebbles');
        const expected_values = ['fred', 'barney', 'pebbles'];
    
        expect(tmp_values).to.eql(expected_values);
    });

    it('return words an also characters specified by RegEx ( when filter for searching engine) ', () => {

        const tmp_values = words('fred, barney, & pebbles', /[^, ]+/g);
        const expected_values = ['fred', 'barney', '&', 'pebbles'];
    
        expect(tmp_values).to.eql(expected_values);
    });
    it('empty string - no values entered in to search engine ', () => {

        const tmp_values = words('');
        const expected_values = [];
    
        expect(tmp_values).to.eql(expected_values);
    });



});