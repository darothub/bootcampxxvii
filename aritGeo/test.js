const expect = require("chai").expect;
const myFile = require("./aritgeo.js");

describe("Determine the sequence of an array of numbers: ", function() {

    describe("if its an empty array", function() {

      it(" should return 0 for an empty array", function() {
        expect(myFile.aritGeo([])).equal(0);
      });

    });

    describe("for an arithmetic sequence", function() {

      it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
        expect(myFile.aritGeo([2, 4, 6, 8, 10])).equal('Arithmetic');
      });

      it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", function() {
        expect(myFile.aritGeo([5, 11, 17, 23, 29, 35, 41])).equal('Arithmetic');
      });

      it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", function() {
        expect(myFile.aritGeo([15, 10, 5, 0, -5, -10])).equal('Arithmetic');
      });

    });

    describe("Case for a geometric sequence", function() {

      it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {
        expect(myFile.aritGeo([2, 4, 8, 16, 32])).equal('Geometric');
      });

      it("should return `Geometric` for [−128, 64, −32, 16, −8]", function() {
        expect(myFile.aritGeo([-81, -27, -9, -3])).equal('Geometric');
      });

    });

    describe("Case for neither arithmetic nor geometric sequence", function() {

      it("should return -1 for [1, 2, 3, 5, 8]", function() {
        expect(myFile.aritGeo([1, 2, 3, 5, 8])).equal(-1);
      });

      it("should return -1 for [1, 3, 6, 10, 15]", function() {
        expect(myFile.aritGeo([1, 3, 6, 10, 15])).equal(-1);
      });

      it("should return -1 for [1, 8, 27, 64, 125]", function() {
        expect(myFile.aritGeo([1, 8, 27, 64, 125])).equal(-1);
      });
      
    });
  });