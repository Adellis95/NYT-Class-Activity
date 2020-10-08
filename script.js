// console.log("Hello World");
$(document).ready(function () {
  $(".btnOne").on("click", function () {
    var searchTerm = $("#basic-url");
    var maxArticles = $(".options");
    var startYear = $("#startYear");
    var endYear = $("#endYear");
    var beginDate = startYear + "0101";
    var endDate = endYear + "0101";
    var apiKey = "tmeXAA27W&GyeOWk21o1JdMJRtswA1LW";
    baseURL =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
      searchTerm +
      "&api-key=" +
      apiKey;
    var dateParms;

    if (startYear != null && endYear != null) {
      dateParms = "&begin_date=" + beginDate + "&end_date=" + endDate;
      queryURL = baseURL + dateParms;
    } else {
      queryURL = baseURL;
    }
    if (searchTerm != null) {
      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (res) {
        console.log(response);
        for (i = 0; i < maxArticles; i++) {
          console.log(res.response.docs[i]);
          var articleTitle;
          var articleAuthor;
          var articleNbr = i + 1;
          console.log(articleNbr + "." + res.response.docs[i].headline.main);
        }
      });
    }
  });
  //   $(".btnOne").on("click", function () {
  //     //   console.log("Clicked me");
  //     var userInput1 = $("#basic-url").val();
  //     var userInput2 = $(".options").val();
  //     var userInput3 = $("#startYear").val();
  //     var userInput4 = $("#endYear").val();

  //     console.log(userInput1);
  //     console.log(userInput2);
  //     console.log(userInput3);
  //     console.log(userInput4);
  //   });
  $(".btnTwo").on("click", function () {
    console.log("clicked");

    $("#basic-url").val("");
    $(".options").val("");
    $("#startYear").val("");
    $("#endYear").val("");
  });
});
