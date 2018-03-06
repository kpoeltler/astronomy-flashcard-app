$(document).ready(function () {
// You may need to do things such as:
// - Changing the constructor parameters
// - Changing the code in the constructor
// - Adding methods
// - Adding additional fields

// class App {
//   constructor() {
//     const menuElement = document.querySelector('#menu');
//     this.menu = new MenuScreen(menuElement);

//     const mainElement = document.querySelector('#main');
//     this.flashcards = new FlashcardScreen(mainElement);

//     const resultElement = document.querySelector('#results');
//     this.results = new ResultsScreen(resultElement);

    
//   }
// }

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
  });