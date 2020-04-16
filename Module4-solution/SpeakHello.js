(function(){
  var helloSpeaker ={};
  helloSpeaker.speak = function speak(name){
    var speakWord = "Hello";
    console.log(speakWord + " " + name);
  }
  window.helloSpeaker = helloSpeaker;
})(window);
