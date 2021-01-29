const URL = location.origin; // root domain

// redirects
$("#go-p0").on("click", e => {
    window.location.assign(`${URL}/pages/p0.html`);
});

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
