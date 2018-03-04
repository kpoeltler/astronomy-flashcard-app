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

expect(new Map([['a', 1], ['b', 2]])).to.have.all.keys('a', 'b');
expect(new Set(['a', 'b'])).to.have.all.keys('a', 'b');

expect({a: 1, b: 2}).to.be.an('object').that.has.all.keys('a', 'b');

// Target set deeply (but not strictly) has key `{a: 1}`
expect(new Set([{a: 1}])).to.have.all.deep.keys([{a: 1}]);
expect(new Set([{a: 1}])).to.not.have.all.keys([{a: 1}]);