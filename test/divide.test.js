import chai from "chai"
import divide from "../src/divide.js";

const expect = chai.expect

describe('divide ', () => {
    it("devide two positive integer numbers (coupon half price)", () => {
            expect(divide(6, 2)).to.equal(3)
    });
    it("devide two positive integer numbers( find 1% of price)", () => {
        expect(divide(6, 100)).to.equal(0.06)
    });
    /** 
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