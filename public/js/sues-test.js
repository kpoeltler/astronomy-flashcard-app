
// If helpful ?
// <p id="demo"></p>
// var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
// document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;



/**
 * COPIED OVER TO app.js
 * 
 * Get the current card id
 * TO DO
 */
//*** This needs to be the id coming from the current card
var currentCardID = 1;


/**
 * There actually needs to to be another table for 
 * user_desc so it saves as a thread of comments
 * not just one.
 * We are just adding this on to the end of the last comment
 */



/**
 * COPIED OVER TO app.js
 * 
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
 * COPIED OVER TO app.js
 * 
 * @function 
 * @param {string} userComment - comment user enter
 * Send user comment
 * Get specific (current card ID)
 * Send (current card ID) and Comment via Ajax
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


/********************************************************/
/* WORKING ON */



/**
* WORKING ON
* Add API Call to database
* @function
* Get API Info every 24 hours
* Set all to empty string - Just incase any field is empty
* Send via Ajax
*/
var addAPIDaily = function (theResult) {  

    var JsonToObj;

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

    //console.log("addAPIDailyObj" + addAPIDailyObj)

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
* Get API Call via Ajax
* @function
* Get API Info every 24 hours
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
* NOT COPIED OVER YET
* Timer to invoke API call every 24 hours
* Then Invoke addAPIDaily(); function
* to save API
* 1 day = 86,400,000 ms
*/
setInterval(function() {
    var getApiCall = "https://api.nasa.gov/planetary/apod?api_key=VBmmkpWMV3eWpklLC1tsXUmUiiej1unTpiihHq8n";
    
    getAPI();

}, 86400000); // Every 24hrs

//}, 5000);