$(document).ready(function() {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'https://www.soundjay.com/appliances/sounds/vacuum-cleaner-1.mp3');

  audioElement.addEventListener('ended', function() {
    this.play();
  }, false);

  $('#play').click(function() {
    if (audioElement.paused == false) {
      audioElement.pause();

    } else {
      audioElement.play();

    }
  });

});
