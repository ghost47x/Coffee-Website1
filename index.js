// index.js

document.getElementById('cart-icon').addEventListener('click', function() {
    var cartContainer = document.getElementById('cart-items-container');
    if (cartContainer.style.display === 'none' || cartContainer.style.display === '') {
        cartContainer.style.display = 'block';
    } else {
        cartContainer.style.display = 'none';
    }
});

document.getElementById('search-icon').addEventListener('click', function() {
    var searchForm = document.getElementById('search-form');
    if (searchForm.style.transform === 'scaleY(1)') {
        searchForm.style.transform = 'scaleY(0)';
    } else {
        searchForm.style.transform = 'scaleY(1)';
    }
});

document.getElementById('menu-icon').addEventListener('click', function() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
});

// Scroll to the menu section
document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });

// Get the button
// Get the button
let mybutton = document.getElementById("backToTop");

// Show/hide button on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scroll to top when button is clicked
mybutton.addEventListener("click", function() {
  // Smooth scrolling
  window.scrollTo({top: 0, behavior: 'smooth'}); 

  // Or instant scrolling
  // document.body.scrollTop = 0; 
  // document.documentElement.scrollTop = 0; 
});
// Smooth Scrolling and Active Link
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default jump
  
      const targetId = this.getAttribute('href'); // Get the target section's ID
      const targetSection = document.querySelector(targetId);
  
      // Remove active class from all links
      document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
      // Add active class to the clicked link
      this.classList.add('active');
  
      // Use Intersection Observer API for smooth scrolling and section reveal
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          targetSection.classList.add('active'); // Reveal the section
          observer.unobserve(targetSection);
        }
      }, { threshold: 0.5 }); // Trigger at 50% visibility
  
      observer.observe(targetSection);
  
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
// Smooth Scrolling and Active Link
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default jump
  
      const targetId = this.getAttribute('href'); // Get the target section's ID
      const targetSection = document.querySelector(targetId);
  
      // Remove active class from all links
      document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
      // Add active class to the clicked link
      this.classList.add('active');
  
      // Use Intersection Observer API for smooth scrolling and section reveal
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          targetSection.classList.add('active'); // Reveal the section
          observer.unobserve(targetSection);
        }
      }, { threshold: 0.5 }); // Trigger at 50% visibility
  
      observer.observe(targetSection);
  
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  

