var showing_mailbag = true;

$(document).ready(function() {
  $(".toggle-mailbag-link").click(function(event) {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);

    showing_mailbag = !(showing_mailbag);
    $(".toggle-mailbag-link").text(showing_mailbag ? "Show only plot-relevant posts" : "Show all posts");
    $(".post-tagged-mailbag").toggle(showing_mailbag);
  });
});