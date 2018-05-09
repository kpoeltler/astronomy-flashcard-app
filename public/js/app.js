$(document).ready(function() {
  let state = {
    cardArr: [],
    current: 0,
    subject: [],
    currentSubject: -1
  };

  $(document).ready(function(){
    $("#logo-fade").animate({opacity: '1', display: 'block'}, 3000);
    $("#logo-fade").animate({opacity: '0', display: 'none', position: 'relative'}, 3000, 
        function () {
          $(this).css('z-index', -10)
        }
    );
  });

  /**
   * Renders a picture and paragraph onto index.html
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
        ) 
    {
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
        $("#card").append(
            "<button id='edit-btn' data-toggle='modal' data-target='#myModal'> <i class='material-icons'>&#xe254;</i> </button>"
        );  
    }
    
  });

  //=====================================================================
  $.get("api/all", function(data) {
    state.cardArr = updateArr(state.cardArr, data);
    console.log(state.cardArr);
    render();
  });

  /**
   * Updates the flashcard array
   * @param {Array} arr1 - This is an array object
   * @param {String} data - This is data from the db
   * @return {[{}]}  - a new array that has all the pushed objects
   */
  const updateArr = (arr1, data) => {
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
   * Decrementer Number
   * @param {num} num - Any number to be decremented
   * @return {num}  - the num param decremented by one
   */
  const decrement = num => num - 1;

  /**
   * Incrementer Number
   * @param {num} num - Any number to be incremented
   * @return {num}  - the num param incremented by one
   */
  const increment = num => num + 1;

  /**
   * Resets the counter
   * @return - zero
   */
  const resetCount = () => 0;


  /** 
   * Event Listens on specific Buttons
   * Next and Previous
  */
  $("#nextbtn").on("click", function() {
    if(state.current != state.cardArr[0].length -1){
    state.current = increment(state.current);
    }
    render();
  });

  $("#prebtn").on("click", function() {
    console.log("cardlength", state);
    if(state.current != 0){
    state.current = decrement(state.current);
    }
    render();
  });

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
  var userCommentObj = {
    id: state.cardArr[0][state.current].id,
    user_desc: $("#user-comment").val().trim()
}

    addUserComment(userCommentObj);
});

/**
 * @function 
 * @param {string} userComment - comment user enter
 * Send user comment
 * Get specific (current card ID)
 * Send (current card ID) and Comment via Ajax
 * ID will be matched with db card row 
 * Then Comment added into column user_desc
 */
var addUserComment = function (comment) {  



  var queryURL = "api/description/" + comment.id;

  $.ajax({
      type: 'PUT',
      url: queryURL,
      data: comment,
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

});

/**
* Add API Call to database
* @function
* Get API Info every 24 hours
* Set all to empty string - Just incase any field is empty
* Send via Ajax
*/
var addAPIDaily = function (theResult) {  

  // Set to empty string incase any are missing
  var copyright = "";
  var date = "";
  var explanation = "";
  var hdurl = "";
  var media_type = "";
  var service_version = "";
  var title = "";
  var url = "";

  // Constructing a full card object from the api call to database
  var addAPIDailyObj = {
      copyright: copyright,
      date: date,
      explanation: explanation,
      hdurl: hdurl,
      media_type: media_type,
      service_version: service_version,
      title: title,
      url: url,
  };

  // Match API with Column Names
  // The key1 or key2 is the key
  // addAPIDailyObj[key1] is the value
  // theResult[key2] is the value
  Object.keys(addAPIDailyObj).forEach(function(key1) {
      Object.keys(theResult).forEach(function(key2) {
          if( key1 === key2 ) {
              addAPIDailyObj[key1] = theResult[key2];
          }
      });
  }); 

  var queryURL = "/api/insert-card";

  $.ajax({
      type: 'POST',
      url: queryURL,
      data: addAPIDailyObj,
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

/**
* Get API Call via Ajax every 24 hours - Using the setInterval
* @function
*/
var getAPI = function() {
  let apod = "https://api.nasa.gov/planetary/apod?api_key=VBmmkpWMV3eWpklLC1tsXUmUiiej1unTpiihHq8n";
  let success = $.ajax({
      url: apod,
      method: "GET",
      success: function(result) {
          addAPIDaily(result);
      },
      error: function(result) {
          console.log("error");
          console.log(result);
      }
  })
};

/**
* Timer to invoke API call every 24 hours - Invoke addAPIDaily();
* 1 day = 86,400,000 ms
*/
setInterval(function() {
  var getApiCall = "https://api.nasa.gov/planetary/apod?api_key=VBmmkpWMV3eWpklLC1tsXUmUiiej1unTpiihHq8n";
  getAPI();
}, 86400000); // Every 24hrs
//}, 5000);


/**
* Checkboxes append to the page
* @function
* @param
*/
var checksTogether = function(subcheckboxCode){
  var subcheckbox = subcheckboxCode;
  $('#subject-group').append(subcheckbox);
};

/**
* GET cards of all subjects
* @function
*/
var getAllSubjects = function() {

  var queryURL = "/api/subjectsall";
  
  let allSubArr;
  let subcheckbox;

  let success = $.ajax({
      url: queryURL,
      method: "GET",
      success: function(result) {
          for (var i = 0; i < result.length; i++)  {
                  allSubArr = result[i].subject;
                  subcheckbox = "<input type='checkbox' class='subject-Check' id='" + allSubArr + "'> <span class='check-name'>" +
                  allSubArr + "<span>"
                  checksTogether(subcheckbox);
          }
      },
      error: function(result) {
      }
  });
};

getAllSubjects();

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

let apod = "https://api.nasa.gov/planetary/apod?api_key=VBmmkpWMV3eWpklLC1tsXUmUiiej1unTpiihHq8n";

let success = $.ajax({
  url: apod,
  method: "GET",
  success: function(result){
  if("copyright" in result) {
    $("#copyright").text("Image Credits: " + result.copyright);
  }
  else {
    $("#copyright").text("Image Credits: " + "Public Domain");
  }
}
})


