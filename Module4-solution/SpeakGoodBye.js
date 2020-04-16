(function(){
  var byeSpeaker={};
  byeSpeaker.speak = function speak(name) {
    var speakWord = "Good Bye";
    console.log(speakWord + " " + name);
  }
  window.byeSpeaker = byeSpeaker;
})(window);
