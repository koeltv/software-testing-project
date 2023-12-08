import chai from "chai"
import ceil from "../src/ceil.js";

const expect = chai.expect

describe("ceil", () => {
    it("ceil handle undefined", () => {
        expect(ceil(undefined)).to.deep.equal(NaN)
    });
    it("ceil to integer", () => {
        expect(ceil(4.006)).to.equal(5)
    });
    it("ceil to two decimal places", () => {
        expect(ceil(6.004, 2)).to.equal(6.01)
    });
    it("ceil to to tens", () => {
        expect(ceil(6004, -1)).to.equal(6010)
    });
})