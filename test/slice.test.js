import chai from "chai"
import slice from "../src/slice.js";

const expect = chai.expect

describe('slice ', () => {
    it('return an empty array for a null or undefined array', () => {
        const nullArray = null;
        const undefinedArray = undefined;
    
        const nullResult = slice(nullArray, 0, 1);
        const undefinedResult = slice(undefinedArray, 0, 1);
    
        expect(nullResult).to.deep.equal([]);
        expect(undefinedResult).to.deep.equal([]);
      });
      it('REturn values when start is negative number', () => {
        const array = [1, 2, 3, 4, 5];
        const start = -2;
        const end = 5;
    
        const result = slice(array, start, end);
    
        expect(result).to.deep.equal([1, 2, 3, 4, 5]);
      });
      it('should return an empty array when start and end are negative', () => {
        const array = [1, 2, 3, 4, 5];
        const start = -5;
        const end = -1;
    
        const result = slice(array, start, end);
    
        expect(result).to.deep.equal([]);
      });


});