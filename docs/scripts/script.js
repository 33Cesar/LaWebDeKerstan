console.log("El archivo JavaScript se está ejecutando correctamente");

document.addEventListener('DOMContentLoaded', function() {
  const videoElement = document.getElementById('video');
  const backgroundImage = document.getElementById('backgroundImage');
  const darkButton = document.getElementById('darkButton');
  const container = document.getElementById('container');
  const body = document.body;
  let isDarkMode = false; 

  darkButton.addEventListener('click', function() {
    isDarkMode = !isDarkMode; 

    if (isDarkMode) {
      videoElement.pause();
      videoElement.style.display = 'none';
      backgroundImage.style.display = 'block';
      body.classList.add('dark-mode');
    } else {
      videoElement.style.display = 'block';
      backgroundImage.style.display = 'none';
      videoElement.play();
      body.classList.remove('dark-mode'); 
    }

    container.style.position = isDarkMode ? 'static' : 'relative'; 
    videoElement.style.position = isDarkMode ? 'static' : 'absolute'; 
    videoElement.style.top = isDarkMode ? 'auto' : '0'; 
    videoElement.style.left = isDarkMode ? 'auto' : '0'; 
    videoElement.style.width = isDarkMode ? 'auto' : '100%'; 
    videoElement.style.height = isDarkMode ? 'auto' : '100%'; 
  });

  const audio = document.getElementById('myAudio');
  const playButton = document.getElementById('playButton');
  const pauseButton = document.getElementById('pauseButton');
  const volumeUpButton = document.getElementById('volumeUpButton');
  const volumeDownButton = document.getElementById('volumeDownButton');

  playButton.addEventListener('click', () => {
    audio.play();
  });

  pauseButton.addEventListener('click', () => {
    audio.pause();
  });

  volumeUpButton.addEventListener('click', () => {
    audio.volume += 0.1;
  });

  volumeDownButton.addEventListener('click', () => {
    audio.volume -= 0.1;
  });
});
function toggleDarkMode() {
  var body = document.body;
  var textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, a");

  body.classList.toggle("dark-mode");

  textElements.forEach(function(element) {
    element.classList.toggle("dark-mode-text");
  });
}
