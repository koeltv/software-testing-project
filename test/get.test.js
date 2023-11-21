import chai from "chai"
import get from "../src/get.js";

const expect = chai.expect

describe('get ', () => {
    it('return correct value for specific path ( for searching engine and menu navigations) ', () => {
        const tmp_object = { a: [{ b: { c: 3 } }, 4] };
        const paths = ['a[0].b.c', 'a[1]'];
        const expected_values = [3, 4];

        const tmp_values = get(tmp_object, ...paths);
    
        expect(tmp_values).to.eql(expected_values);
    });

});