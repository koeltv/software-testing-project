import chai from "chai"
import add from "../src/add.js";

const expect = chai.expect

describe("add", () => {
    it("should return default when parameters are undefined", () => {
        expect(add(undefined, undefined)).to.equal(0)
    });
    it("adds positive integer number to positive integer number", () => {
        expect(add(3, 6)).to.equal(9)
    });
    it("adds positive float number to positive integer number", () => {
        expect(add(3.56, 6)).to.approximately(9.56, 0.001)
    });
    it("adds positive float number to positive float number", () => {
        expect(add(3.56, 6.1)).to.approximately(9.66, 0.001)
    });
    it("adds positive integer number to negative integer number", () => {
        expect(add(6, -3)).to.equal(3)
    });
    it("adds positive integer number to negative float number", () => {
        expect(add(6, -3.56)).to.approximately(2.44, 0.001)
    });
    it("adds positive float number to negative integer number", () => {
        expect(add(6.56, -3)).to.approximately(3.56, 0.001)
    });
    it("adds positive float number to negative float number", () => {
        expect(add(6.56, -3.1)).to.approximately(3.46, 0.001)
    });
})