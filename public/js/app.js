$(document).ready(function() {
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

  var url =
    "https://api.nasa.gov/planetary/apod?api_key=VBmmkpWMV3eWpklLC1tsXUmUiiej1unTpiihHq8n";

  /* @param [{string}] arr1 
  @param {Object} || Array[{Object}] data 
*/
  $.ajax({
    url: url,
    method: "GET",
    success: function(result) {
      if ("copyright" in result) {
        $("#copyright").text("Image Credits: " + result.copyright);
      } else {
        $("#copyright").text("Image Credits: " + "Public Domain");
      }

      if (result.media_type == "video") {
        $("#apod_img_id").css("display", "none");
        $("#apod_vid_id").attr("src", result.url);
      } else {
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

  // Issue 37 hdurl property of the cardArr[currentCard] is rendered to the page as an image
  // $.get( "ajax/index.html", function( data ) {
  //   $( ".result" ).html( data );
  //   alert( "Load was performed." );
  // });

  //shows and hides description of picture
  $(document).ready(function(){
  $("#hide").click(function() {
    $("p").hide();
  });
  $("#show").click(function() {
    $("p").show();
  });
})

  // $("#flip").click(function(){
  //     $("#panel").slideDown("slow");
  // });

  //   $(document).ready(function(){
  //     $("#apod_img_id").click(function(){
  //         $("#apod_explaination").slideDown("slow");
  //     });
  // });

  // function updateCardArr (arr1, data) {
  //   let newArr = [];
  //   arr1.forEach(e => newArr.push (e));
  //   if (!data.isArray) {
  //       newArr.push(data);
  //   }else {
  //     data.forEach(e => newArr.push (e));
  // }
  // }

  // let state = {
  //   cardArr:[{}],
  //   current: 0
  // }

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
