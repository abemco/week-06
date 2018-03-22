document.addEventListener('DOMContentLoaded', function () {
	q = "finger guns"; // search query
	
	request = new XMLHttpRequest;
	request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);
	
	request.onload = function() {
		if (request.status >= 200 && request.status < 400){
			data = JSON.parse(request.responseText).data.image_url;
			console.log(data);
			document.getElementById("giphyme").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
		} else {
			console.log('reached giphy, but API returned an error');
		 }
	};

	request.onerror = function() {
		console.log('connection error');
	};

	request.send();
});

    $("button").on("click", function() {
      var person = $(this).attr("data-person");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(personImage);

            $("#gifs-appear-here").prepend(gifDiv);           

          }
        });
    });

    // function runQuery(queryURL) {
    //   $.ajax({url: queryURL, method: "GET"})
    //   .done(function(queryURL) {
    //     console.log(queryURL);
    //   })
      
    // }

    $('#searchBtn').on('click', function() {
      runQuery("https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=dc6zaTOxFJmzC&limit=10");
      
      return false;
    })

    // Function to start GIF sill and click to make move and click back to make still

    // $(".gif").on("click", function() {
    //     var state = $(this).attr("data-state");

    //         if (state === "still") {
    //         $(this).attr("src", $(this).attr("data-animate"));
    //         $(this).attr("data-state", "animate");
    //     } else {
    //         $(this).attr("src", $(this).attr("data-still"));
    //         $(this).attr("data-state", "still");
    //     }
    // });