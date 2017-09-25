const assert = require("chai").assert;
const myFile = require("./aritgeo.js");

describe("Determine the sequence of an array of numbers: ", () => {

    describe("if its an empty array", () =>{

      it(" should return 0 for an empty array", () => {
        assert.equal(myFile.aritGeo([]), 0);
      });

    });

    describe("for an arithmetic sequence", () =>{

      it("should return `Arithmetic` for [2, 4, 6, 8, 10]", () => {
        assert.equal(myFile.aritGeo([2, 4, 6, 8, 10]),'Arithmetic');
      });

      it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", () => {
        assert.equal(myFile.aritGeo([5, 11, 17, 23, 29, 35, 41]),'Arithmetic');
      });

      it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", () => {
        assert.equal(myFile.aritGeo([15, 10, 5, 0, -5, -10]),'Arithmetic');
      });

    });

    describe("Case for a geometric sequence", () => {

      it("should return `Geometric` for [2, 4, 8, 16, 32]", () => {
        assert.equal(myFile.aritGeo([2, 4, 8, 16, 32]),'Geometric');
      });

      it("should return `Geometric` for [-81, -27, -9, -3]", () => {
        assert.equal(myFile.aritGeo([-81, -27, -9, -3]),'Geometric');
      });

       it("should return `Geometric` for [-243, 81, -27, 9, −3]", () => {
        assert.equal(myFile.aritGeo([-243, 81, -27, 9]),'Geometric');
      });

    });

    describe("Case for neither arithmetic nor geometric sequence", () => {

      it("should return -1 for [1, 2, 3, 5, 8]", () => {
        assert.equal(myFile.aritGeo([1, 2, 3, 5, 8]), -1);
      });

      it("should return -1 for [1, 3, 6, 10, 15]", () => {
        assert.equal(myFile.aritGeo([1, 3, 6, 10, 15]), -1); 
      });

      it("should return -1 for [1, 8, 27, 64, 125]", () => {
        assert.equal(myFile.aritGeo([1, 8, 27, 64, 125]), -1);
      });
      
    });
  });