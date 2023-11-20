import chai from "chai"
import divide from "../src/divide.js";

const expect = chai.expect

describe('divide ', () => {
    it("devide two positive integer numbers ", () => {
            expect(divide(6, 2)).to.equal(3)
    });
    /**  May be cuppons are not the best usage for division :D so we have to find how it should be usable in cupons, may be half price....
    it("devide two positive float numbers ", () => {
            expect(divide(4.5, 1.5)).to.equal(3)
    });
    it("devide with negative dividends (floats numbers)", () => {
        expect(divide(-4.5, 1.5)).to.equal(-3)
    });
    it("devide with negative divisor (floats numbers) ", () => {
        expect(divide(4.5, -1.5)).to.equal(-3)
    });
    it("devide by zero ", () => {
        expect(divide(6, 0)).to.throw('Cannot divide by zero')
    });
*/

});