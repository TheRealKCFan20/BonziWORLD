var isMobileApp = false;
var isApp = false;
var isDesktop = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) == null;

var isiOS = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)/i) != null;
var urlGPlay = "https://play.google.com/store/apps/details?id=com.jojudge.bonziworld";

$(function() {
  var support = {
    AudioContext: {
      supported: typeof (
            window.AudioContext ||
            window.webkitAudioContext
          ) != "undefined",
      message: "Your browser does not support the Web Audio API."
    }
  };

  var supported = true;
  var supportKeys = Object.keys(support);
  for (var i = 0; i < supportKeys.length; i++) {
    var key = supportKeys[i];
    var obj = support[key];
    supported = supported && obj.supported;
    if (!obj.supported) 
      $("#unsupp_reasons").append(
        "<li>" + obj.message + "</li>"
      );
  }

  if (!supported) {
    $("#page_unsupp").show();
  }

  if (!isiOS) {
    $(".app_showcase").append(
      '<a class="app_android" href="' + urlGPlay + '">' +
        '<img src="./img/app/google-play-badge.png" alt="Get it on Google Play." />' +
      '</a>'
    );
  }

  if (!isDesktop) {
    $(".app_showcase").append(
      '<a class="app_chrome">' +
        '<img src="./img/app/desktop.png" alt="Open on PC for the best experience." />' +
      '</a>'
    );
  }
});
