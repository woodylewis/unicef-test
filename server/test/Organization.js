
let Organization = require("../models/Organization");
let chai = require("chai");
let chaiHttp = require("chai-http");
let app = require("../app");
chai.should();

chai.use(chaiHttp);

describe("Organizations", () => {
  beforeEach((done) => {
    Organization.deleteMany({}, (err) => {
      done();
    });
  });
  describe("/GET organization", () => {
    it("it should GET all the organizations", (done) => {
      chai
        .request(app)
        .get("/api/organizations")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("/POST organization", () => {
    it("it should new POST a organization", (done) => {
      let organization = {
        title: "This is the first organization",
        body: "This is a organization post",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      };
      chai
        .request(app)
        .post("/api/organizations")
        .send(organization)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
  describe("/GET/:id organization", () => {
    it("it should GET a organization by the id", (done) => {
      let organization = new Organization({
        title: "This is the first organization",
        body: "This is a organization post",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      });
      organization.save((err, organization) => {
        chai
          .request(app)
          .get("/api/organizations/" + organization.id)
          .send(organization)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/PUT/:id organization", () => {
    it("it should UPDATE a organization given the id", (done) => {
      let organization = new Organization({
        title: "This is the first organization",
        body: "This is a organization post",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      });
      organization.save((err, organization) => {
        console.log(organization.id);
        chai
          .request(app)
          .put("/api/organizations/" + organization.id)
          .send({
            title: "The first organization was updated",
            body: "This is a organization post",
            image:
              "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/DELETE/:id organization", () => {
    it("it should DELETE a organization given the id", (done) => {
      let organization = new Organization({
        title: "This is the first organization",
        body: "This is a organization post",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      });
      organization.save((err, organization) => {
        chai
          .request(app)
          .delete("/api/organizations/" + organization.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
});
