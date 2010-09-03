// application.js

$(document).ready(function($) {
  twttr.anywhere(function(twitter) {
    twitter.hovercards({ expanded: true });
  });
});

$(document).ready(function($) {
  twttr.anywhere(function (T) {
    T('#followme').followButton("weirdo513");
  });
});
