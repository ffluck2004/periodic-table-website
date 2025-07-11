function navigateToVisuals() {
    document.getElementById('visuals').scrollIntoView({ behavior: 'smooth' });
  }
  document.addEventListener("DOMContentLoaded", () => {
    // Select all navigation links
    const navLinks = document.querySelectorAll(".nav-link");
  
    // Add click event listener to each link
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor behavior
  
        // Get the target section from the data-section attribute
        const targetSection = event.target.getAttribute("data-section");
  
        // Hide all sections
        const sections = document.querySelectorAll(".section");
        sections.forEach((section) => {
          section.classList.remove("active");
        });
  
        // Show the target section
        const activeSection = document.getElementById(targetSection);
        if (activeSection) {
          activeSection.classList.add("active");
        }
      });
    });
  });

  // Temperature Slider Functionality
const slider = document.getElementById('temperature-slider');
const tempValue = document.getElementById('temperature-value');

slider.addEventListener('input', (e) => {
  tempValue.textContent = `${e.target.value} K`;
});

// Visual Elements Button
const visualElementsBtn = document.getElementById('visual-elements-btn');
visualElementsBtn.addEventListener('click', () => {
  alert('Visual Elements Images button clicked!');
});

// Metal Button
const metalBtn = document.getElementById('metal-btn');
metalBtn.addEventListener('click', () => {
  alert('Metal filter applied!');
});

// Non-Metal Button
const nonMetalBtn = document.getElementById('non-metal-btn');
nonMetalBtn.addEventListener('click', () => {
  alert('Non-Metal filter applied!');
});

// Clear Filters Button
const clearFiltersBtn = document.getElementById('clear-filters-btn');
clearFiltersBtn.addEventListener('click', () => {
  alert('Filters cleared!');
});



