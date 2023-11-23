import chai from "chai"
import divide from "../src/divide.js";

const expect = chai.expect

describe('divide', () => {
    it("divide two positive integer numbers (coupon half price)", () => {
            expect(divide(6, 2)).to.equal(3)
    });
    it("divide two positive integer numbers( find 1% of price)", () => {
        expect(divide(6, 100)).to.equal(0.06)
    });
    it("divide two positive float numbers ", () => {
            expect(divide(4.5, 1.5)).to.equal(3)
    });
    it("divide with negative dividends (floats numbers)", () => {
        expect(divide(-4.5, 1.5)).to.equal(-3)
    });
    it("divide with negative divisor (floats numbers) ", () => {
        expect(divide(4.5, -1.5)).to.equal(-3)
    });
    it("divide by zero ", () => {
        expect(divide(6, 0)).to.be.NaN
    });
});