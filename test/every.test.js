import chai from "chai"
import every from "../src/every.js";

const expect = chai.expect

describe('every', () => {
    it("every true on null", () => {
        expect(every(null, true)).to.be.true
    });
    it("every true empty array (if element is not in stock)", () => {
            expect(every([], true)).to.be.true
    });
    it("array with elements that don't satisfy the predicate should return false", () => {
        expect(every([true, 1, null, 'yes'], Boolean)).to.be.false
    });
    it("array with elements that satisfies the predicate should return true", () => {
        expect(every([true, 1, 'yes'], Boolean)).to.be.true
    });
});