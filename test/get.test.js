import chai from "chai"
import get from "../src/get.js";

const expect = chai.expect

describe('get ', () => {
    it(' return the value at the specified path in an object', () => {
        const object = { a: { b: { c: 3 } } };
        const path = 'a.b.c';
        const expectedResult = 3;
    
        const actualResult = get(object, path);
    
        expect(actualResult).to.equal(expectedResult);
      });
    
      it('handle nested objects with array paths', () => {
        const object = { a: [{ b: { c: 3 } }] };
        const path = ['a', 0, 'b', 'c'];
        const expectedResult = 3;
    
        const actualResult = get(object, path);
    
        expect(actualResult).to.equal(expectedResult);
      });
      it('handle null or undefined objects', () => {
        const nullObject = null;
        const undefinedObject = undefined;
        const path = 'a.b.c';
        const defaultValue = 'default value';
    
        const nullResult = get(nullObject, path, defaultValue);
        const undefinedResult = get(undefinedObject, path, defaultValue);
    
        expect(nullResult).to.equal(defaultValue);
        expect(undefinedResult).to.equal(defaultValue);
      });
    

});