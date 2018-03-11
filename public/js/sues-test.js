

/**
 * Get the current card id
 * TO DO
 */
//*** This needs to be the id coming from the current card
var currentCardID = 1;


/**
 * There actualy needs to to be another table for 
 * user_desc so it saves as a thread of comments
 * not just one.
 * TO DO
 */



/**
 * Event listener on button #add-comment-btn
 * When #add-comment-btn is clicked
 * 
 * Get content entered from #user-comment input
 * 
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


/********************************************************/
/* WORKING ON */
/* TESTING - API CALL */

/**
* TODO
* Need a timer to get API call every 24 hours
* And Invoke
* addAPIDaily();
*/


/**
* WORKING ON
* Add API Call to database
* Get API Info 
* Set all to empty string - Just incase any field is empty
* Send via Ajax
*/
var addAPIDaily = function () {  

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

    console.log("addAPIDailyObj" + addAPIDailyObj)

    var queryURL = "api/insert-card";

    //$.ajax({
        //type: 'PUT',
        //url: queryURL,
        //data: addAPIDailyObj,
        //    success: function(data){
        //        console.log("success");
        //        console.log(data);
        //    },
        //    error: function(data){
        //    console.log("error");
        //    console.log(data);
        //    }
        //});
    //};

};

// TEST
addAPIDaily();      
