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

// Function to filter and sort items
function filterItems() {

  const filteredItems = items.filter(item => {
    if (currentFilter === 'Gadgets') {
      return item.category === 'Gadgets';
    } else if (currentFilter === 'Clothes') {
      return item.category === 'Clothes';
    }
    return true; // Return all items if no filter is selected
  });

  // Sort items based on the current sort order
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
      <img src="images/merchandise-${item.name}.png" alt="${item.name}">
      <div class="slide-content">
        <a href="detail-${item.name}.html">${item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a>
        <div class="slide-shop-and-price">
          <div class="slide-shop-and-wish shop-shop-and-wish">
            <img src="images/nav-shopping-cart.svg" alt="cart">
            <img src="images/heart-green.png" alt="heart">
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

// Initial rendering of items
filterItems();
