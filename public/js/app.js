$(document).ready(function () {
// You may need to do things such as:
// - Changing the constructor parameters
// - Changing the code in the constructor
// - Adding methods
// - Adding additional fields


//iffy library
// const animation = function () {
//   const toggle 
// }

// class MenuScreen {
// constructor(containerElement) {
//   this.containerElement = containerElement;
// }

// show() {
//   this.containerElement.classList.remove('inactive');
// }

// hide() {
//   this.containerElement.classList.add('inactive');
// }
// }


var url = "https://api.nasa.gov/planetary/apod?api_key=VBmmkpWMV3eWpklLC1tsXUmUiiej1unTpiihHq8n";

/* @param [{string}] arr1 
  @param {Object} || Array[{Object}] data 
*/
    $.ajax({
      url: url,
      method: "GET",
      success: function(result){
      if("copyright" in result) {
        $("#copyright").text("Image Credits: " + result.copyright);
        
      }
      else {
        $("#copyright").text("Image Credits: " + "Public Domain");
      }
    
      if(result.media_type == "video") {
        $("#apod_img_id").css("display", "none");
        $("#apod_vid_id").attr("src", result.url);
      }
      else {
        $("#apod_vid_id").css("display", "none");
        $("#apod_img_id").attr("src", result.url);
      }
      $("#reqObject").text(url);
      $("#returnObject").text(JSON.stringify(result, null, 4));
      $("#apod_explaination").text(result.explanation);
      $("#apod_title").text(result.title);
      console.log("response", JSON.stringify(result, null, 4));
    }
    
    });
 
 
// Get ...
// .done (function (data) {

// });

function updateCardArr (arr1, data) {
  let newArr = [];
  arr1.forEach(e => newArr.push (e));
  if (!data.isArray) {
      newArr.push(data);
  }else {
    data.forEach(e => newArr.push (e));
}

let state = {
  cardArr:[{}],
  current: 0
}

// index.html animation
$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#home']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})


// Add smooth scrolling to all links in navbar + footer link
$(".navbar a, footer a[href='#home']").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if 
  });
}








})








// class FlashcardScreen {
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
  // }
