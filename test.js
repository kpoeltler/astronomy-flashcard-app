//describe
//what are you testing on a high skill level annoy fxn
// describe( 'should check my api', function()  {
//it
//more description and annoy fxn
// Make a "GET" request to the API to pull raw data into your environment
// "Parse" that data from its raw form through JavaScript Object Notification (JSON) into a usable format
// Write a loop to "page" through that data and retrieve the full data set
// }
//expect will test the output
//what will this do output

//test for the iffy library

//which sql connection code do we keep what is the difference for both of them
//expect(give it a let name) take ajax function and give it a let name

var expect = require("chai").expect;

(chaiParam = require("chai-param")),
  (expect = chai.expect),
  (should = chai.should()),
  (param = chaiParam.param);

chai.use(chaiParam);

function updateCardArr(arr1, data) {
  let newArr = [];
  arr1.forEach(e => newArr.push(e));
  if (!data.isArray) {
    newArr.push(data);
  } else {
    data.forEach(e => newArr.push(e));
  }
}

function updateCardArr(arr1, data) {
  param(arr1, "arr1", data, "data");
  expect(arr1).param("arr1", "data").to.array.and.object;
}

describe("updateCardArr", function(arr1, data) {
  param("checks to see if arr1, data are arrays").to.deep.equal([
    { hdurl: "planet" },
    {},
    { hdurl: "supernovas" }
  ]);
});

it("output an array with all obj from both arrays when passed 2 arrays of emp", function() {
  expect(updateCardArr([{}, {}], [{ hdurl: "supernovas" }])).to.equal([
    {},
    {},
    { hdurl: "supernovas" }
  ]);
});

it("output an array with all obj from both arrays when passed 2 arrays", function() {
  expect(
    updateCardArr(
      [{ hdurl: "planet" }, {}, { hurl: "stars" }],
      ["supernovas", "moons"]
    )
  ).to.deep.equal(
    { hdurl: "planet" },
    {},
    ["supernovas", "moons"],
    ["supernovas", "moons"]
  );
});

it("output an array with all obj from both arrays when passed an empty array and none empty", function() {
  expect(updateCardArr([], [{ hdurl: "supernovas" }])).to.deep.equal([
    { hdurl: "supernovas" }
  ]);
});

// describe('hooks', function() {

//   before(function() {
//     // runs before all tests in this block
//   });

//   after(function() {
//     // runs after all tests in this block
//   });

//   beforeEach(function() {
//     // runs before each test in this block
//   });

//   afterEach(function() {
//     // runs after each test in this block
//   });

//   // test cases
// });

// var expect = require("chai").expect;
// var disemvowel = require("../disemvowel");

// describe("Disemvowel", function() {
//   it("should multiply properly when passed numbers", function() {
//     expect(disemvowel('this is lowercase")).to.equal("ths s lwcs");
//   })

// //======================================
// // Array
// // .push()
// // should append a value ‣
// // should return the length ‣
// // with many arguments
// // should add the values ‣
// // .unshift()
// // should prepend a value ‣
// // should return the length ‣
// // with many arguments
// // should add the values ‣
// // .pop()
// // should remove and return the last value ‣
// // .shift()
// // should remove and return the first value
//=================================================================================
// expect('foo').to.be.a('string'); //do I need to use foo or the function name
// expect(['o','e','a', 'i', 'u']).to.be.an('array').that.includes(2); //what does the number 2 mean
// expect('foo').to.be.a('string');

// expect(new Map([['a', 1], ['b', 2]])).to.have.all.keys('a', 'b');
// expect(new Set(['a', 'b'])).to.have.all.keys('a', 'b');

// expect({a: 1, b: 2}).to.be.an('object').that.has.all.keys('a', 'b');

// Target set deeply (but not strictly) has key `{a: 1}`
// expect(new Set([{a: 1}])).to.have.all.deep.keys([{a: 1}]);
// expect(new Set([{a: 1}])).to.not.have.all.keys([{a: 1}]);
