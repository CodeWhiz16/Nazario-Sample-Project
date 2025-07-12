
  // For dropdown menus
  // document.querySelectorAll('.dropdown > a').forEach(function(dropLink) {
  //   dropLink.addEventListener('click', function(e) {
  //     e.preventDefault();
  //     const dropdownMenu = this.nextElementSibling;
  //     dropdownMenu.classList.toggle('show');
  //   });
  // });

  // // Close dropdowns when clicking outside
  // document.addEventListener('click', function(e) )
  //   document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
  //     if (!menu.parentElement.contains(e.target)) {
  //       menu.classList.remove('show');
  //     }
  //   });


  
  
  
  
  // Slider Functionality
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slider-dot');
        const prevArrow = document.querySelector('.prev');
        const nextArrow = document.querySelector('.next');
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        function startAutoSlide() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        // Initialize slider
        showSlide(0);
        startAutoSlide();

        // Event Listeners
        nextArrow.addEventListener('click', () => {
            clearInterval(slideInterval);
            nextSlide();
            startAutoSlide();
        });

        prevArrow.addEventListener('click', () => {
            clearInterval(slideInterval);
            prevSlide();
            startAutoSlide();
        });

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                clearInterval(slideInterval);
                const slideIndex = parseInt(dot.getAttribute('data-index'));
                showSlide(slideIndex);
                startAutoSlide();
            });
        });

        // // Pause on hover
        const slider = document.querySelector('.hero-slider');
        slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
        slider.addEventListener('mouseleave', startAutoSlide);

        // Add gold color to Tailwind config
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'custom-gold': '#c4b582',
                    }
                }
            }
        }






       //-----------responsive nav-bar-----------------------------------

// Hamburger toggle for mobile nav
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('nav-show');
    });
  }
});


 // ---------------- Hamburger Toggle for Mobile ----------------
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

// Toggle show/hide mobile nav
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("nav-show");
});

// Close nav on link click (mobile UX)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('nav-show')) {
      navMenu.classList.remove('nav-show');
    }
  });
});

// Handle dropdown opening on mobile
const dropdownLinks = document.querySelectorAll('.dropdown > a');
dropdownLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      link.parentElement.classList.toggle('open');
    }
  });
});




    // ------------------- sign up page ------------------------------


  const accountIcon = document.querySelector('.account-wrapper');
  const authModal = document.getElementById('authModal');
  const closeAuthModal = document.getElementById('closeAuthModal');
  const loginSection = document.getElementById('loginSection');
  const signupSection = document.getElementById('signupSection');
  const showSignup = document.getElementById('showSignup');
  const showLogin = document.getElementById('showLogin');

  // Show modal
  function showAuthModal() {
    authModal.style.display = 'flex';
    showLoginForm();
  }

  // Hide modal
  function hideAuthModal() {
    authModal.style.display = 'none';
  }

  // Show Login
  function showLoginForm() {
    loginSection.classList.add('active');
    signupSection.classList.remove('active');
  }

  // Show Sign Up
  function showSignupForm() {
    signupSection.classList.add('active');
    loginSection.classList.remove('active');
  }

  // Event Listeners
  accountIcon.addEventListener('click', showAuthModal);
  closeAuthModal.addEventListener('click', hideAuthModal);

  window.addEventListener('click', (e) => {
    if (e.target === authModal) {
      hideAuthModal();
    }
  });

  showSignup.addEventListener('click', (e) => {
    e.preventDefault();
    showSignupForm();
  });

  showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    showLoginForm();
  });

  // Auto-popup after delay on first load
  window.addEventListener('load', () => {
    setTimeout(() => {
      showAuthModal();
    }, 3000);
  });

  // Handle form submissions (Demo only)
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Logged in successfully! (Demo)');
    hideAuthModal();
  });

  document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Account created successfully! (Demo)');
    hideAuthModal();
  });


//-----------------------glass category--------------------

  document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.glasses-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 1;

    function updateSlides() {
      slides.forEach((slide, index) => {
        slide.classList.remove('active', 'side', 'hidden');
        if (index === currentIndex) {
          slide.classList.add('active');
        } else if (index === currentIndex - 1 || index === currentIndex + 1) {
          slide.classList.add('side');
        } else {
          slide.classList.add('hidden');
        }
      });
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlides();
    }

    function showPrev() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlides();
    }

    // Add click to center any slide
    slides.forEach((slide, index) => {
      slide.addEventListener('click', () => {
        currentIndex = index;
        updateSlides();
      });
    });

    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    // Auto-slide
    let auto = setInterval(showNext, 3000);

    // Pause on hover
    // document.querySelector('.glasses-carousel-container').addEventListener('mouseenter', () => {
    //   clearInterval(auto);
    // });

    // document.querySelector('.glasses-carousel-container').addEventListener('mouseleave', () => {
    //   auto = setInterval(showNext, 3000);
    // });

    // Initial call
    updateSlides();
  });


//------------------new fild-----------------------------------/

document.addEventListener('DOMContentLoaded', function() {
  const section = document.getElementById('eyewearCategories');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section.classList.add('animate');
      } else {
        section.classList.remove('animate');
      }
    });
  }, {
    threshold: 0.2
  });

  observer.observe(section);
});






  //------------------filter section-------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.filter-toggle').forEach(button => {
      button.addEventListener('click', () => {
        const item = button.parentElement;
        const currentlyOpen = document.querySelector('.filter-item.open');
        if (currentlyOpen && currentlyOpen !== item) {
          currentlyOpen.classList.remove('open');
        }
        item.classList.toggle('open');
      });
    });

    const resetBtn = document.querySelector('.reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        document.querySelectorAll('.filter-item').forEach(item => {
          item.classList.remove('open');
          item.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        });
      });
    }
  });



// -------------------add to cart count-----------------------------
document.addEventListener('DOMContentLoaded', function() {
  let cartCount = 0;
  let heartCount = 0;

  const cartBadge = document.querySelector('.cart-count');
  const heartBadge = document.querySelector('.heart-count');

  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const wishlistButtons = document.querySelectorAll('.wishlist-btn');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      cartCount++;
      cartBadge.textContent = cartCount;
    });
  });

  wishlistButtons.forEach(button => {
    button.addEventListener('click', () => {
      heartCount++;
      heartBadge.textContent = heartCount;
    });
  });
});



  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartCountEl = document.querySelector('.cart-count');
  const cartButton = document.querySelector('.cart-wrapper');
  const cartModal = document.getElementById('cartModal');
  const closeCart = document.getElementById('closeCart');
  const cartItemsList = document.getElementById('cartItems');

  let cartItems = [];

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.product-card');
      const title = card.querySelector('.product-title').innerText;
      const price = card.querySelector('.product-price').innerText;
      const image = card.querySelector('img').getAttribute('src');

      // show items in cart
      cartItems.push({ title, price, image });
      updateCartCount();
    });
  });

  function updateCartCount() {
    cartCountEl.textContent = cartItems.length;
  }

  cartButton.addEventListener('click', () => {
    renderCartItems();
    cartModal.style.display = 'flex';
  });

  closeCart.addEventListener('click', () => {
    cartModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
      cartModal.style.display = 'none';
    }
  });

  function renderCartItems() {
    cartItemsList.innerHTML = '';
    if (cartItems.length === 0) {
      cartItemsList.innerHTML = '<li>Your cart is empty.</li>';
      return;
    }

    cartItems.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        <img src="${item.image}" alt="">
        <span>${item.title} - ${item.price}</span>
      `;
      cartItemsList.appendChild(li);
    });
  }
