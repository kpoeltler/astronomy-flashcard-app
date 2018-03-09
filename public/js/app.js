$(document).ready(function() {
  let state = {
    cardArr:[{}],
    current: 0
  };

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
//=====================TUES==================================
  // Issue 37 hdurl property of the cardArr[currentCard] is rendered to the page as an image
  $.get( "api/all", function( data ) {
    console.log("get data", data );
  });

  
  
  //button shows and hides description of picture
  
  // $("#hide").click(function() {
  //   $("p").hide();
  // });
  // $("#show").click(function() {
  //   $("p").show();
  // });



//=====================WEDNESDAY=====================================

//**upDateArr***
const updateCardArr= (arr1, data) => {
  let newArr = [];
  arr1.forEach(e => newArr.push({ ...e }));
  if (!data.isArray) {
    newArr.push(data);
  } else {
    data.forEach(e => newArr.push({ ...e }));
  };
  return newArr;
}

//***resetArr*** 
const resetArr =() => [];

//***removeSubject** 
const removeSubject = (arr, subject) => arr.filter(e =>e.subject !== subject);

//***decrement** 
const decrement = num => num - 1;

//**increment** 
const increment = num => + 1;

//**resetCount**
const resetCount = () => 0;



//**Thursday** 
 



//**render function that appends pictures */
// const dbPicture = (e) => {
//   e.preventDefault ();
//   let picture = $('whatever sue has ')
//   db.ref().push ({ 
//     msg:input });
//   }

//   $('editButton'). on('click', updateUserInput);

//   db.reg().on('child_added', function (data) {
//     $('#card).append('<img> + data.val().msg + '</img>');
//   });







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
  
