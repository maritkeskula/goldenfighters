// dropdown open and close
function openNav() {
document.getElementById("phoneNav").style.width = "100%";
}
function closeNav() {
document.getElementById("phoneNav").style.width = "0%";
}

// filter and sort
const filters = document.querySelectorAll('.filter-btn');
const sortButtons = document.querySelectorAll('.sort-btn');
const shopContent = document.querySelector('.shop-content-container');
const items = [
  { name: 'mouse', category: 'Gadgets', price: 80 },
  { name: 'headphones', category: 'Gadgets', price: 180 },
  { name: 'shirt', category: 'Clothes', price: 50 },
  { name: 'beanie', category: 'Clothes', price: 40 },
  { name: 'controller', category: 'Gadgets', price: 200 },
  { name: 'keyboard', category: 'Gadgets', price: 90 }
];

let currentFilter = 'All';
let currentSort = 'None';

function filterItems() {
  const filteredItems = items.filter(item => {
    if (currentFilter === 'Gadgets') {
      return item.category === 'Gadgets';
    } else if (currentFilter === 'Clothes') {
      return item.category === 'Clothes';
    }
    return true; // Return all items if no filter is selected
  });

  filteredItems.sort((a, b) => {
    if (currentSort === 'Lowest price') {
      return a.price - b.price;
    } else if (currentSort === 'Highest price') {
      return b.price - a.price;
    }
    return 0;
  });

  const itemHTML = filteredItems.map(item => `
    <div class="merchandise-item">
      <img src="images/merchandise-${item.name}.png" alt="">
      <div class="slide-content">
        <a href="detail-${item.name}.html">${item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a>
        <div class="slide-shop-and-price">
          <div class="slide-shop-and-wish shop-shop-and-wish">
            <img src="images/nav-shopping-cart.svg" alt="">
            <img src="images/heart-green.png" alt="">
          </div>
          <p>Price <em>$${item.price}</em></p>
        </div>
      </div>
    </div>
  `).join('');

  shopContent.innerHTML = itemHTML;
}

filters.forEach(filter => {
  filter.addEventListener('click', e => {
    currentFilter = e.target.dataset.filter;
    filterItems();
  });
});

sortButtons.forEach(sort => {
  sort.addEventListener('click', e => {
    currentSort = e.target.dataset.sort;
    filterItems();
  });
});

// Initial rendering
filterItems();


// toggle see more/see less
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-button');
  const hiddenContent = document.getElementById('hidden-content');

  toggleButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default anchor behavior

    if (toggleButton.getAttribute('data-state') === 'less') {
      hiddenContent.style.display = 'inline';
      toggleButton.setAttribute('data-state', 'more');
      toggleButton.textContent = 'See Less';
    } else {
      hiddenContent.style.display = 'none';
      toggleButton.setAttribute('data-state', 'less');
      toggleButton.textContent = 'See More';
    }
  });
});


// carousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
