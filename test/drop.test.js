import chai from "chai"
import drop from "../src/drop.js";

const expect = chai.expect

describe('drop ', () => {
    it('No drop', () => {
        const tmp_array = [1, 2, 3];
        const n_drop = 0;
        const expected_values = [1, 2, 3];

        const tmp_values = drop(tmp_array, n_drop);
    
        expect(tmp_values).to.eql(expected_values);
    });

    it('drop default ', () => {
        const tmp_array = [1, 2, 3];
        
        const expected_values = [2, 3];

        const tmp_values = drop(tmp_array);
    
        expect(tmp_values).to.eql(expected_values);
    });
    it('drop more values', () => {
        const tmp_array = [1, 2, 3];
        const n_drop = 2;
        const expected_values = [3];

        const tmp_values = drop(tmp_array, n_drop);
    
        expect(tmp_values).to.eql(expected_values);
    });
    it('handle negative value', () => {
        const tmp_array = [1, 2, 3];
        const n_drop = -2;
        const expected_values = [1, 2, 3];

        const tmp_values = drop(tmp_array, n_drop);
    
        expect(tmp_values).to.eql(expected_values);
    });
    it('drop more that exist ', () => {
        const tmp_array = [1, 2, 3];
        const n_drop = 5;
        const expected_values = [];

        const tmp_values = drop(tmp_array, n_drop);
    
        expect(tmp_values).to.eql(expected_values);
    });

    it('drop more that exist ', () => {
        const tmp_array = [];
        const n_drop = 2;
        const expected_values = [];

        const tmp_values = drop(tmp_array, n_drop);
    
        expect(tmp_values).to.eql(expected_values);
    });

    it('should handle null or undefined arrays', () => {
        const nullArray = null;
        const undefinedArray = undefined;
    
        const nullResult = drop(nullArray, 1);
        const undefinedResult = drop(undefinedArray, 1);
    
        expect(nullResult).to.deep.equal([]);
        expect(undefinedResult).to.deep.equal([]);
      });

});