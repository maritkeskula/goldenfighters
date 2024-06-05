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

function filterItems(filter, sort) {
  const filteredItems = items.filter(item => {
    if (filter === 'Gadgets') {
      return item.category === 'Gadgets';
    } else if (filter === 'Clothes') {
      return item.category === 'Clothes';
    }
    return true; // Return all items if no filter is selected
  });

  filteredItems.sort((a, b) => {
    if (sort === 'Lowest price') {
      return a.price - b.price;
    } else if (sort === 'Highest price') {
      return b.price - a.price;
    }
  });

  const itemHTML = filteredItems.map(item => `
    <div class="merchandise-item">
      <img src="images/merchandise-${item.name}.png" alt="">
      <div class="slide-content">
        <a href="#detail-${item.name}.html">${item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a>
        <div class="slide-shop-and-price">
          <div class="slide-shop-and-wish shop-shop-and-wish">
            <!-- Add your shopping cart and wishlist icons here -->
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
    const filterText = e.target.dataset.filter;
    const sortText = sortButtons[0].dataset.sort; // Get current sort value
    filterItems(filterText, sortText);
  });
});

sortButtons.forEach(sort => {
  sort.addEventListener('click', e => {
    const sortText = e.target.dataset.sort;
    const filterText = filters[0].dataset.filter; // Get current filter value
    filterItems(filterText, sortText);
  });
});

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
