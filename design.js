// Function to toggle the active gallery
function toggleGallery(galleryId) {
  // Hide all galleries
  const galleries = document.querySelectorAll('.gallery');
  galleries.forEach(gallery => {
    gallery.classList.remove('active');
  });

  // Show the selected gallery
  const selectedGallery = document.getElementById(galleryId);
  if (selectedGallery) {
    selectedGallery.classList.add('active');
  }
}

// Event listeners for each slide
document.querySelectorAll('.slide').forEach(slide => {
  slide.addEventListener('click', function() {
    // Get the ID of the gallery associated with the slide
    const galleryId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
    toggleGallery(galleryId); // Toggle the visibility of the corresponding gallery
  });
});