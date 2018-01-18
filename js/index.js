$("document").ready(function() {
  $("#search-btn").on("click", function() {
    
    var searchTerm = $("#search-form").val();
    var wikiApi =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      searchTerm +
      "&format=json&callback=?";
    
    $.getJSON(wikiApi, function(link) {
      $("#link").innerHTML == " ";

      for (var i = 0; i < link[1].length; i++) {
        $("#link").append(
          "<tr><td>" +
            link[1][i] +
            "</td><td><a href=" +
            link[2][i] +
            " target=_blank>Go</a></td></tr>"
        );
      }
    });
  });
});
