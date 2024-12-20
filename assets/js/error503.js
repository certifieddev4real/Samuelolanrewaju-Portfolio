document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById('intro-video');
    const videoContainer = document.getElementById('video-container');
    const mainContent = document.getElementById('main-content');
  
    // Trigger flash effect after the video ends
    video.addEventListener('ended', function () {
        // Flash Effect: Turn the background to white
        videoContainer.style.transition = "background-color 0.1s";
        videoContainer.style.backgroundColor = "white";  // Flash color
  
        // Transition to the main content after a brief moment
        setTimeout(function() {
            videoContainer.style.display = "none";  // Hide the video container
            mainContent.style.display = "block";  // Show the main content
        }, 500);  // Wait half a second to allow the flash effect to be seen
    });
  });