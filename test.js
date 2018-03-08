
var expect = require("chai").expect;


//  const updateCardArr= (arr1, data) =>{
//   let newArr = [];
//   arr1.forEach(e => newArr.push({ ...e }));
//   if (!Array.isArray(data)) {
//     newArr.push(data);
//   } else {
//     data.forEach(e => newArr.push({ ...e }));
//   }
//   return newArr;
// }

// describe("updateCardArr",(arr1, data) => {
  
//   it("will ignore the empty array1, takes the obj combines it with the objs in array2 and the output will be an array with all objects.", () =>{
//     expect(updateCardArr([], [{ hdurl: "stars" },
//         { hdurl: "supernovas" },
//         { hdurl: "moons" }
//       ])
//     ).to.deep.equal([
//       { hdurl: "stars" },
//       { hdurl: "supernovas" },
//       { hdurl: "moons" }
//     ]);
//   });

//   it("will take the three objs in array1 and the two objs in array2 then output an array with five objects.",() => {
//     expect(
//       updateCardArr(
//         [{ hdurl: "supernovas" }, { hdurl: "moons" }, { hdurl: "earth" }],
//         [{ hdurl: "stars" }, { hdurl: "blackholes" }]
//       )
//     ).to.deep.equal([
//       { hdurl: "supernovas" },
//       { hdurl: "moons" },
//       { hdurl: "earth" },
//       { hdurl: "stars" },
//       { hdurl: "blackholes" }
//     ]);
//   });

//   it("will take array1's objs and add another object. The output will be an array with three objects. ",() => {
//     expect(
//       updateCardArr([{ hdurl: "earth" }, { hdurl: "supernovas" }], {
//         hdurl: "moons"
//       })
//     ).to.deep.equal([
//       { hdurl: "earth" },
//       { hdurl: "supernovas" },
//       { hdurl: "moons" }
//     ]);
//   });
// });

//***resetArr*** 
const resetArr = () => []; 

describe("resetArr",() =>{
   it("will reset the card array", () => expect(resetArr()).to.deep.equal([]))});



// // ***removeSubject** 
const removeSubject = (array, subject) => array.filter(e =>e.subject !== subject);

// function filterByID(item) {
//     if (isNumber(item.id) && item.id !== 0) {
//       return true;
//     } 
//     invalidEntries++;
//     return false; 
//   }
//   let arrByID = arr.filter(filterByID);
  



describe("removeSubject",function (){
    it("will remove the subject value in an array", function () { expect(removeSubject("array1", "earth")([{hdurl:"boo", subject:"earth", picture:"selfie"}])).to.deep.equal([{hdurl:"boo", picture:"selfie"}])})});

// describe("removeSubject",() =>{
//         it("will filter through an array and remove the subject passed as an argument", (arr1, earth) => expect(removeSubject(["boo", earth,"selfie"])).to.deep.equal(["boo","selfie"]))});



// describe('Array', function() {
//   it('should start empty', function() {
//     var arr = [];

//     assert.equal(arr.length, 0);
//   });
// });
// ***decrement** 
// const decrement = num => num - 1;

// describe("decrement", num) => it("will take a number and reduce it by 1"), 

// **increment** 
const increment = num => + 1;

// **resetCount**
const resetCount = () => 0;



      
   







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

function Subject(e){ 
    const removeSubject = function (arr, subject) {
arr.filter(e =>e.subject !== subject)