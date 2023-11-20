import chai from "chai"
import add from "../src/add.js";

const expect = chai.expect

describe("Sum", () => {
    it("adds positive integer number to positive integer number (adding prices prices)", () => {
        expect(add(3, 6)).to.equal(9)
    });
    it("adds positive float number to positive integer number (adding prices prices)", () => {
        expect(add(3.56, 6)).to.equal(9.56)
    });
    it("adds positive float number to positive float number (adding prices prices)", () => {
        expect(add(3.56, 6.1)).to.equal(9.66)
    });
    it("adds positive integer number to negative integer number (degrease prices)", () => {
        expect(add(6, -3)).to.equal(3)
    });
    it("adds positive integer number to negative float number (degrease prices)", () => {
        expect(add(6, -3.56)).to.equal(2.44)
    });

    it("adds positive float number to negative integer number (degrease prices)", () => {
        expect(add(6.56, -3)).to.equal(3.56)
    });
    it("adds positive float number to negative float number (degrease prices)", () => {
        expect(add(6.56, -3.1)).to.equal(3.46)
    });
   
})