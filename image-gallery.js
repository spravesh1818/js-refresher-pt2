// Array of image URLs

// let currentImageIndex = 0;
// const currentImageElement = document.getElementById("current-image");
// const imageContainer = document.getElementById("image-container");

// // Function to update the displayed image with fade effect
// function updateImage() {
//   imageContainer.style.opacity = 0;
//   setTimeout(() => {
//     currentImageElement.src = imageUrls[currentImageIndex];
//     imageContainer.style.opacity = 1;
//   }, 500);
// }

// // Function to show the previous image
// function previousImage() {
//   currentImageIndex =
//     (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
//   updateImage();
// }

// // Function to show the next image
// function nextImage() {
//   currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
//   updateImage();
// }

// // Initial image update
// updateImage();

const imageUrls = [
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/400x301",
  "https://via.placeholder.com/400x302",
  // Add more image URLs as needed
];
let selectedIndex = 0;
let img = document.getElementById("current-image");
img.src = imageUrls[selectedIndex];
function next() {
  if (selectedIndex < imageUrls.length - 1) {
    selectedIndex += 1;
    img.src = imageUrls[selectedIndex];
  }
}

function previous() {
  if (selectedIndex > 0) {
    selectedIndex -= 1;
    img.src = imageUrls[selectedIndex];
  }
}
