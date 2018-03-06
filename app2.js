//iffy library
const animation = function () {
    const toggle 
}

class MenuScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;
  }

  show() {
    this.containerElement.classList.remove('inactive');
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("menuDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  
  //API call
  var url = "https://api.nasa.gov/planetary/apod?api_key=VBmmkpWMV3eWpklLC1tsXUmUiiej1unTpiihHq8n";
  
  $.ajax({
    url: url,
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
  }
  });
  
  class FlashcardScreen {
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
    