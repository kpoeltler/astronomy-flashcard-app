$(document).ready(function() {
  let state = {
    cardArr: [],
    current: 0
  };




  /**
   * renders a picture and paragraph onto index.html
   * @return - appends a picture and paragraph to index.html
   */
  const render = () => {
    let apodPicture = $("<img>");
    apodPicture.attr("id", "db-picture");
    console.log("current",  state.current);
    apodPicture.attr("src", state.cardArr[0][state.current].hdurl);
    $("#card").html(apodPicture);
  };


  $("#card").click(function() {
    if (
      $("#card")
        .children()
        .is("p")
    ) {
      let apodPicture = $("<img>");
      apodPicture.attr("src", state.cardArr[0][state.current].hdurl);
      apodPicture.attr("id", "db-picture");
      
      $("#card").html(apodPicture);
    } else {
      let apodExplanation = $("<p>");
      $("#card").html(
        apodExplanation.text(state.cardArr[0][state.current].explanation)
      )
      let userExplanation = $("<p>");
        $("#card").append(
          userExplanation.text(state.cardArr[0][state.current].user_desc) 
      )
    }
    
      $("#card").append(
        "<button data-toggle='modal' data-target='#myModal'> <i class='material-icons'>&#xe254;</i> </button>"
      );   
    
  });


  //=====================================================================
  $.get("api/all", function(data) {
    state.cardArr = updateCardArr(state.cardArr, data);
    console.log(state.cardArr);
    render();
  });

  /**
   * Updates the flashcard array
   * @param {Array} arr1 - This is an array object
   * @param {String} data - This is data from the db
   * @return {[{}]}  - a new array that has all the pushed objects
   */
  const updateCardArr = (arr1, data) => {
    let newArr = [];
    arr1.forEach(e => newArr.push({ ...e }));
    if (!data.isArray) {
      newArr.push(data);
    } else {
      data.forEach(e => newArr.push({ ...e }));
    }
    return newArr;
  };

  /**
   * resets  empty array
   * @return {num}  - the num param incremented by one
   */
  const resetArr = () => [];

  /**
   * Removes an element from an object inside an array
   * @param {Array} arr - This array
   * @param {string} subject - This any number to be incremented
   * @return {num}  - the num param incremented by one
   */
  const removeSubject = (arr, subject) =>
    arr.filter(e => e.subject !== subject);

  /**
   * A simple decrementer
   * @param {num} num - This any number to be decremented
   * @return {num}  - the num param decremented by one
   */
  const decrement = num => num - 1; //**increment**

  /**
   * A simple incrementer
   * @param {num} num - This any number to be incremented
   * @return {num}  - the num param incremented by one
   */
  const increment = num => num + 1;

  /**
   * Resets the counter
   * @return - zero
   */
  const resetCount = () => 0;

  $("#nextbtn").on("click", function() {
    state.current = increment(state.current);
    render();
  });

  $("#backbtn").on("click", function() {
    state.current = decrement(state.current);
    render();
  });


/**
 * Get the current card id
 * TO DO
 */
//*** This needs to be the id coming from the current card
var currentCardID = 1; 


/**
 * Event listener on button #add-comment-btn
 * When #add-comment-btn is clicked
 * Get content entered from #user-comment input
 * Invoke function addUserComment passing the 
 * content from input field
 */
$("#add-comment-btn").on( "click", function(event) {
  event.preventDefault();

  // get value from #user-comment 
  var userComment = $("#user-comment").val().trim();
  if(userComment !== "") {
      // Invoke function
      addUserComment(userComment);
  }
});













/**
 * @function 
 * @param {string} userComment - comment user enter
 *
 * Send user comment
 * Get specific (current card ID)
 * Send (current card ID) and Comment via Ajax
 *
 * ID will be matched with db card row 
 * Then Comment added into column user_desc
 */
var addUserComment = function (comment) {  

  // Constructing a card object to hand to the database
  // column user_desc to be added
  var userCommentObj = {
      id: currentCardID,
      user_desc: comment,
  };

  var queryURL = "api/description/" + currentCardID;

  $.ajax({
      type: 'PUT',
      url: queryURL,
      data: userCommentObj,
      success: function(data){
          console.log("success");
          console.log(data);
      },
      error: function(data){
          console.log("error");
          console.log(data);
      }
  });
};


  //**Stanford flashcard **/
  //class FlashcardScreen {
  //   constructor(containerElement) {
  //     this.containerElement = containerElement;
  //   }
  //   show() {
  //     this.containerElement.classList.remove('inactive');
  //     const flashcardContainer = document.querySelector('#flashcard-container');
  //     const card = new Flashcard(flashcardContainer, 'word', 'definition');
  //   }
  //   hide() {
  //     this.containerElement.classList.add('inactive');
  //   }
});

//*****User's added description input **** */
// const updateUserInput = (e) => {
//   e.preventDefault ();
//   let input = $('message').val().trim();
//   db.ref().push ({
//     msg:input });
//   }

//   $('editButton'). on('click', updateUserInput);

//   db.reg().on('child_added', function (data) {
//     $('#userEdit).append('<p> + data.val().msg + '</p>');
//   });

// var url =
//   "https://api.nasa.gov/planetary/apod?api_key=VBmmkpWMV3eWpklLC1tsXUmUiiej1unTpiihHq8n";

// $.ajax({
//   url: url,
//   method: "GET",
//   success: function(result) {
//     if ("copyright" in result) {
//       $("#copyright").text("Image Credits: " + result.copyright);
//     } else {
//       $("#copyright").text("Image Credits: " + "Public Domain");
//     }

//     if (result.media_type == "video") {
//       $("#apod_img_id").css("display", "none");
//       $("#apod_vid_id").attr("src", result.url);
//     } else {
//       $("#apod_vid_id").css("display", "none");
//       $("#apod_img_id").attr("src", result.url);
//     }
//     $("#reqObject").text(url);
//     $("#returnObject").text(JSON.stringify(result, null, 4));
//     $("#apod_explaination").text(result.explanation);
//     $("#apod_title").text(result.title);
//     console.log("response", JSON.stringify(result, null, 4));
//   }
// });

//button shows and hides description of picture

// $("#hide").click(function() {
//   $("p").hide();
// });
// $("#show").click(function() {
//   $("p").show();
// });
