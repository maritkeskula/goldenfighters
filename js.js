// dropdown open and close
function openNav() {
document.getElementById("phoneNav").style.width = "100%";
}
function closeNav() {
document.getElementById("phoneNav").style.width = "0%";
}
// slider
const sliderContainer = document.querySelector('.slider');
const images = document.querySelectorAll('.slider .slide');
let currentImageIndex = 0;

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

sliderContainer.addEventListener('DOMContentLoaded', () => {
  images.forEach((img) => {
    img.style.display = 'none';
  });
  slideShow();
});

setInterval(slideShow, 5000);

// filter and sort
const filters = document.querySelectorAll('.filter-btn');
const sortButtons = document.querySelectorAll('.sort-btn');
const shopContent = document.querySelector('.shop-content-container');
const items = [];

items.push({ name: 'mouse', category: 'Gadgets', price: 80 });
items.push({ name: 'headphones', category: 'Gadgets', price: 180 });
items.push({ name: 'shirt', category: 'Clothes', price: 50 });
items.push({ name: 'beanie', category: 'Clothes', price: 40 });
items.push({ name: 'controller', category: 'Gadgets', price: 200 });
items.push({ name: 'keyboard', category: 'Gadgets', price: 90 });

function filterItems(filter, sort) {
  const filteredItems = items.filter((item) => {
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

  const itemHTML = filteredItems.map((item) => `
    <div class="merchandise-item">
      <img src="images/${item.name}.png" alt=""> <!-- Replace with your image URLs -->
      <div class="slide-content">
        <a href="#detail-${item.name}.html">${item.name}</a>
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

filters.forEach((filter) => {
  filter.addEventListener('click', (e) => {
    const filterText = e.target.dataset.filter;
    filterItems(filterText, sortButtons[0].dataset.sort);
  });
});

sortButtons.forEach((sort) => {
  sort.addEventListener('click', (e) => {
    const sortText = e.target.dataset.sort;
    filterItems(filters[0].dataset.filter, sortText);
  });
});

// see more/less
$('.actions .button.big').on('click', function(e){
		e.preventDefault();
		$(this).text( $(this).text() == "Continue Reading" ? "Show Less" : "Continue Reading" );
		$(this).closest('article.post').find('.hidden-content').slideToggle()
	})
