import chai from "chai"
import filter from "../src/filter.js";

const expect = chai.expect

describe('filter', () => {
    it('filter active', () => {
        const tmp_array = [
               { 'user': 'barney', 'active': true },
               { 'user': 'fred',   'active': false } ];
        const expected_values = [{ 'user': 'barney', 'active': true }];

        const tmp_values = filter(tmp_array,({ active }) => active);
    
        expect(tmp_values).to.eql(expected_values);
    });
    it('filter with always true predicate should return the same array', () => {
        const array= [
               { 'user': 'barney', 'active': true },
               { 'user': 'fred',   'active': false },
        ];
        const predicate = (value, index, tmp_array) => true;
    
        expect(filter(array, predicate)).to.deep.equal(array);
    });
    it('filter empty should return empty array', () => {
        const tmp_array = [];
        const predicate = (value, index, tmp_array) => true;
    
        expect(filter(tmp_array,predicate)).to.deep.equal([]);
    });
    it('filter null should return empty array', () => {
        const tmp_array = null;
        const predicate = (value, index, tmp_array) => true;

        expect(filter(tmp_array,predicate)).to.deep.equal([]);
    });
});