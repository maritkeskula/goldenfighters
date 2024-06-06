// dropdown open and close
function openNav() {
document.getElementById("phoneNav").style.width = "100%";
}
function closeNav() {
document.getElementById("phoneNav").style.width = "0%";
}

// slider
document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer = document.querySelector('.slider');
  const images = document.querySelectorAll('.slider .slide');
  let currentImageIndex = 0;

  if (!sliderContainer) {
    console.error('Slider container not found');
    return;
  }

  function slideShow() {
    images.forEach((img, index) => {
      if (index === currentImageIndex) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });

    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
  }

  images.forEach((img) => {
    img.style.display = 'none';
  });
  slideShow();

  setInterval(slideShow, 5000);
});
