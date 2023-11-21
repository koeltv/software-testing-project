import chai from "chai"
import filter from "../src/filter.js";

const expect = chai.expect

describe('filter', () => {
    it('filter active ', () => {
        const tmp_array = [
               { 'user': 'barney', 'active': true },
               { 'user': 'fred',   'active': false } ];
        const expected_values = [{ 'user': 'barney', 'active': true }];

        const tmp_values = filter(tmp_array,({ active }) => active);
    
        expect(tmp_values).to.eql(expected_values);
    });
    it('filter pasive ', () => {
        const tmp_array= [
               { 'user': 'barney', 'active': true },
               { 'user': 'fred',   'active': false } ];
        const predicate = (value, index, tmp_array) => true;
        const expected_values = [{ 'user': 'fred',   'active': false }];

        const tmp_values = filter(tmp_array, predicate);
    
        expect(tmp_values).to.eql(expected_values);
    });

    it('filter empty', () => {
        const tmp_array = [];
        const predicate = (value, index, tmp_array) => true;
        const expected_values = [];

        const tmp_values = filter(tmp_array,predicate);
    
        expect(tmp_values).to.deep.equal(expected_values);
    });

});