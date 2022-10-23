(function(window){
  var byeSpeaker = new Object();
  var speakWord = "Good Bye ";
  byeSpeaker.sayBye = function (name) {
    console.log(speakWord + name);
  }
  window.byeSpeaker = byeSpeaker;
})(window);