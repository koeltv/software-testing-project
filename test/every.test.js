import chai from "chai"
import every from "../src/every.js";

const expect = chai.expect

describe('every ', () => {
    it("every true empty array (if element is not in stock)", () => {
            expect(every([], true)).to.be.true
    });

    it("should be false", () => {
        expect(([true, 1, null, 'yes'], Boolean)).to.be.false
    });


});