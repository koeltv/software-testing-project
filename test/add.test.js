import chai from "chai"
import add from "../src/add.js";

const expect = chai.expect

describe("Sum", () => {
    it("adds positive number to positive number", () => {
        expect(add(3, 6)).to.equal(9)
    });
    it("adds negative number to positive number", () => {
        expect(add(-3, 6)).to.equal(3)
    });
    it("adds positive number to negative number", () => {
        expect(add(6, -3)).to.equal(3)
    });
    it("adds negative number to negative number", () => {
        expect(add(-6, -3)).to.equal(-9)
    });
})