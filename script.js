// Get grid
const gridContainer = document.getElementById("grid");

// Get grid variables
const root = document.documentElement;
const rootStyles = getComputedStyle(root);
const gridW = parseInt(rootStyles.getPropertyValue('--grid-w'));
const gridH = parseInt(rootStyles.getPropertyValue('--grid-h'));

// Create grid items
for (let i = 1; i <= gridH; i++) {
   for (let j = 1; j <= gridW; j++) {
      // Create initial div elements
      const gridItem = document.createElement("div");
      const gridItemTop = document.createElement("div");
      const gridItemSide = document.createElement("div");

      // Set class
      gridItem.classList.add("grid-item");
      gridItemTop.classList.add("top-box");
      gridItemSide.classList.add("side-box");

      // Set a background colour to the cells
      let r = (15 / (gridH * gridW / 28)) * i * j;
      let g = (10 / (gridH * gridW / 28)) * i * j;
      let b = (30 / (gridH * gridW / 28)) * i * j;
      let shade = 10; 
      gridItem.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      gridItem.style.zIndex = -i+j;
      gridItemTop.style.backgroundColor = `rgb(${r - shade}, ${g - shade}, ${b - shade})`;
      gridItemSide.style.backgroundColor = `rgb(${r + shade}, ${g + shade}, ${b + shade})`;


      // Add event listeners to the grid item
      gridItem.addEventListener('touchstart', function(e) {
         e.preventDefault();
         if (e.target.classList.contains('grid-item')) {
            let out = parseFloat(rootStyles.getPropertyValue('--out'));
            e.target.style.transform = `translate(-${out}%, ${out}%)`;
         }
      });

      gridItem.addEventListener('touchmove', function(e) {
         e.preventDefault();
         if (e.target.classList.contains('grid-item')) {
            let out = parseFloat(rootStyles.getPropertyValue('--out'));
            e.target.style.transform = `translate(-${out}%, ${out}%)`;
         }
      });

      gridItem.addEventListener('touchend', function(e) {
         e.preventDefault();
         if (e.target.classList.contains('grid-item')) {
            e.target.style.transform = '';
         }
      });
      
       

      // Assign to parent
      gridItem.appendChild(gridItemTop);
      gridItem.appendChild(gridItemSide);
      gridContainer.appendChild(gridItem);
   }
}