$("document").ready(function() {
  $("#search-btn").on("click", function() {
    var term = $("#search-form").val();

    var api =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      term +
      "&format=json&callback=?";
    $.getJSON(api, function(wiki) {
      $("#result").empty();

      for (var i = 0; i < wiki[1].length; i++) {
        $("#result").append(
          "<tr><td>" +
            wiki[1][i] +
            "</td><td><a href=" +
            wiki[3][i] +
            " target=_blank>Wikipedia Link</a></td></tr>"
        );
      }
    });
  });
});