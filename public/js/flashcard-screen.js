

let apod = "https://api.nasa.gov/planetary/apod?api_key=VBmmkpWMV3eWpklLC1tsXUmUiiej1unTpiihHq8n";

let success = $.ajax({
  url: apod,
  method: "GET",
  success: function(result){
  if("copyright" in result) {
    $("#copyright").text("Image Credits: " + result.copyright);//research for testing
  }
  else {
    $("#copyright").text("Image Credits: " + "Public Domain");
  }
}
})

