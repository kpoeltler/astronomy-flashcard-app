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
    $("#card").html(
      apodPicture.attr("src", state.cardArr[state.current].hdurl)
    );
  };

  $("#card").click(function() {
    if (
      $("#card")
        .children()
        .is("p")
    ) {
      let apodPicture = $("<img>");
      apodPicture.attr("src", state.cardArr[state.current].hdurl);
      apodPicture.attr("id", "db-picture");
      
      $("#card").html(apodPicture);
    } else {
      let apodExplanation = $("<p>");
      $("#card").html(
        apodExplanation.text(state.cardArr[state.current].explanation)
      )
      let userExplanation = $("<p>");
        $("#card").append(
          userExplanation.text(state.cardArr[state.current].user_desc) 
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
  const increment = num => +1;

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
