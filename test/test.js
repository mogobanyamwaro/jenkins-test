const supertest = require("supertest");
const should = require("should");

// This agent refers to PORT where program is runninng.
const server = supertest.agent("http://localhost:3000");

// UNIT test begin
describe("SAMPLE unit test", function () {
  // #1 should return home page
  it("should return home page", function (done) {
    //calling home page
    server
      .get("/")
      .expect("Content-type", /text/)
      .expect(200)
      .end(function (err, res) {
        //HTTP status should be 200
        res.status.should.equal(200);
        done();
      });
  });
});
