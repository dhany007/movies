/* eslint-disable  */
const chai = require("chai");
const chaiHTTP = require("chai-http");
const app = require("../app");

// assertion style should;
chai.should();
chai.use(chaiHTTP);

describe("Movies API", () => {
  // Test GET Search Movie
  describe("GET /search", () => {
    // No Router
    it("It should Return no Endpoint", async () => {
      const result = await chai.request(app).get("/searchs");
      result.should.have.status(400)
    });

    // query 'apikey' is required
    it("Query params 'apikey' is Required", async () => {
      const result = await chai.request(app).get("/search").query({s: 'Batman'});
      result.should.have.status(400)
    });

    // query 's' for search is required
    it("Query params 's' is Required", async () => {
      const result = await chai.request(app).get("/search").query({apikey: 'd69ab5e0'});
      result.should.have.status(400)
    });

    // api key must be valid
    it("API key must be valid", async () => {
      const result = await chai.request(app).get("/search").query({apikey: '69ab5e0'});
      result.should.have.status(400)
    });
    
    // api key valid and s 
    it("Return search Movie", async () => {
      const result = await chai.request(app).get("/search").query({apikey: 'd69ab5e0', s: 'Batman'});
      result.should.have.status(200)
    });
    
  });

  // Test GET Detail Movie
  describe("GET /detail", () => {
    // No Router
    it("It should Return no Endpoint", async () => {
      const result = await chai.request(app).get("/detailes");
      result.should.have.status(400)
    });

    // query 'apikey' is required
    it("Query params 'apikey' is Required", async () => {
      const result = await chai.request(app).get("/detail").query({t: 'Batman Begins'});
      result.should.have.status(400)
    });

    // query 't' or 'i' for detail is required
    it("Query params 't' or 'i' is Required", async () => {
      const result = await chai.request(app).get("/detail").query({apikey: 'd69ab5e0'});
      result.should.have.status(400)
    });

    // api key must be valid
    it("API key must be valid", async () => {
      const result = await chai.request(app).get("/detail").query({apikey: '69ab5e0'});
      result.should.have.status(400)
    });
    
    // api key valid and 't' or 'i' for detail is required
    it("Return detail Movie", async () => {
      const result = await chai.request(app).get("/detail").query({apikey: 'd69ab5e0', t: 'Batman Begins'});
      result.should.have.status(200)
    });
  });
});
