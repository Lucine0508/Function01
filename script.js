document.querySelector('.button-text a').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'tv.html';
  });

  const button = document.querySelector('.button-text a');
  const audio = document.getElementById('myAudio');
  
  button.addEventListener('click', () => {
    audio.currentTime = 0;
    audio.play();
  });