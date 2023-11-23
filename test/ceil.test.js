import chai from "chai"
import ceil from "../src/ceil.js";

const expect = chai.expect

describe("ceil", () => {
    it("ceil price to integer", () => {
        expect(ceil(4.006)).to.equal(5)
    });
    it("ceil price to two decimal places", () => {
        expect(ceil(6.004, 2)).to.equal(6.01)
    });
    it("ceil price to to tens", () => {
        expect(ceil(6004, -1)).to.equal(6010)
    });
})