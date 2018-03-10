


// This would be the value coming from the [input]
var userComment = "I am testing a comment to be added"; 

 ///$.put("api/description", userComment)
 // On success, run the following code
 //.then(function() {

//console.log(result);
console.log('Got here');

   //var row = $("<div>");

 //});

var addUserComment = function () {  

    $.ajax({
            type: 'PUT',
            url: "api/description",
            data: userComment,
            //cache: false,
            //contentType: 'multipart/form-data',
            //processData: false,
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


$.get("api/all", function(data) {
    console.log(data);
});




addUserComment();