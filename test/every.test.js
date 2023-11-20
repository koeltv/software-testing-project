import chai from "chai"
import every from "../src/every.js";

const expect = chai.expect

describe('every ', () => {
    it("every true empty array", () => {
            expect(every([], true)).to.be.true
    });

    


});