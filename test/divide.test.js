import chai from "chai"
import divide from "../src/divide.js";

const expect = chai.expect

describe('divide', () => {
    it("divide two undefined should return default", () => {
        expect(divide(undefined, undefined)).to.equal(1)
    });
    it("divide two positive integer numbers", () => {
            expect(divide(6, 2)).to.equal(3)
    });
    it("divide two positive integer numbers", () => {
        expect(divide(6, 100)).to.equal(0.06)
    });
    it("divide two positive float numbers", () => {
            expect(divide(4.5, 1.5)).to.equal(3)
    });
    it("divide with negative dividends", () => {
        expect(divide(-4.5, 1.5)).to.equal(-3)
    });
    it("divide with negative divisor", () => {
        expect(divide(4.5, -1.5)).to.equal(-3)
    });
    it("divide by zero", () => {
        expect(divide(6, 0)).to.be.NaN
    });
});