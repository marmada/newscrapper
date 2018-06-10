$(document).on("click", "#scrape", function() {
  console.log("test1");

  $.ajax({
    method: "GET",
    url: "/scrape"
  }).done(function(scrape) {
    console.log(scrape);
    $.ajax({
      method: "GET",
      url: "/articles"
    }).done(function(data) {
      console.log("test3");
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var article = '<li  class="collection-item avatar" data-id=' + data[i]._id + '><img src='+ data[i].image + 
        'alt="photo" class="circle">  <span class="title">' + data[i].title + '</span><br><p>'+ data[i].details + 
        '</p><a  href="'+ data[i].link + 'class="secondary-content"><i class="material-icons">grade</i></a></li>'
       
 
        console.log(article);
        $("#article-feed").append(article);
      }
    })
  })
});

// Grab the articles as a json
$.getJSON("/articles", function(data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    // Display the apropos information on the page
    $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
  }
});

