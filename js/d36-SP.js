// JavaScript
document.addEventListener('DOMContentLoaded', function() {
  var thumbnails = document.querySelectorAll('.d36-works img, .sakuji-works img');
  
  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
      // Remove fullscreen class from other images
      thumbnails.forEach(function(otherThumbnail) {
        if (otherThumbnail !== thumbnail) {
          otherThumbnail.classList.remove('fullscreen');
        }
      });

      // Toggle fullscreen class on clicked image
      thumbnail.classList.toggle('fullscreen');

      // Scroll to the clicked image only if it is in fullscreen mode
      if (thumbnail.classList.contains('fullscreen')) {
        thumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest'});
      }
    });
  });
});
