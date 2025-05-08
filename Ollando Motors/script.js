document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');

            // Toggle hamburger animation
            const bars = mobileMenuToggle.querySelectorAll('.bar');
            if (mobileMenuToggle.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu && navMenu.classList.contains('active') &&
            !navMenu.contains(event.target) &&
            !mobileMenuToggle.contains(event.target)) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');

            // Reset hamburger
            const bars = mobileMenuToggle.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // Hero Slider
    const slides = document.querySelectorAll('.hero-slider .slide');
    const indicators = document.querySelectorAll('.slide-indicators .indicator');
    const prevSlideBtn = document.querySelector('.prev-slide');
    const nextSlideBtn = document.querySelector('.next-slide');

    if (slides.length > 0) {
        let currentSlide = 0;
        let slideInterval = setInterval(nextSlide, 5000);

        function nextSlide() {
            goToSlide((currentSlide + 1) % slides.length);
        }

        function prevSlide() {
            goToSlide((currentSlide - 1 + slides.length) % slides.length);
        }

        function goToSlide(n) {
            slides[currentSlide].classList.remove('active');
            indicators[currentSlide].classList.remove('active');
            currentSlide = n;
            slides[currentSlide].classList.add('active');
            indicators[currentSlide].classList.add('active');
        }

        // Event listeners for slider controls
        if (prevSlideBtn) {
            prevSlideBtn.addEventListener('click', function() {
                clearInterval(slideInterval);
                prevSlide();
                slideInterval = setInterval(nextSlide, 5000);
            });
        }

        if (nextSlideBtn) {
            nextSlideBtn.addEventListener('click', function() {
                clearInterval(slideInterval);
                nextSlide();
                slideInterval = setInterval(nextSlide, 5000);
            });
        }

        // Event listeners for indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', function() {
                clearInterval(slideInterval);
                goToSlide(index);
                slideInterval = setInterval(nextSlide, 5000);
            });
        });

        // Pause slider on hover
        const heroSlider = document.querySelector('.hero-slider');
        if (heroSlider) {
            heroSlider.addEventListener('mouseenter', function() {
                clearInterval(slideInterval);
            });

            heroSlider.addEventListener('mouseleave', function() {
                slideInterval = setInterval(nextSlide, 5000);
            });
        }
    }

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialIndicators = document.querySelectorAll('.testimonial-indicators .indicator');
    const prevTestimonialBtn = document.querySelector('.prev-testimonial');
    const nextTestimonialBtn = document.querySelector('.next-testimonial');

    if (testimonials.length > 0) {
        let currentTestimonial = 0;
        let testimonialInterval = setInterval(nextTestimonial, 6000);

        function nextTestimonial() {
            goToTestimonial((currentTestimonial + 1) % testimonials.length);
        }

        function prevTestimonial() {
            goToTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
        }

        function goToTestimonial(n) {
            testimonials[currentTestimonial].classList.remove('active');
            testimonialIndicators[currentTestimonial].classList.remove('active');
            currentTestimonial = n;
            testimonials[currentTestimonial].classList.add('active');
            testimonialIndicators[currentTestimonial].classList.add('active');
        }

        // Event listeners for testimonial controls
        if (prevTestimonialBtn) {
            prevTestimonialBtn.addEventListener('click', function() {
                clearInterval(testimonialInterval);
                prevTestimonial();
                testimonialInterval = setInterval(nextTestimonial, 6000);
            });
        }

        if (nextTestimonialBtn) {
            nextTestimonialBtn.addEventListener('click', function() {
                clearInterval(testimonialInterval);
                nextTestimonial();
                testimonialInterval = setInterval(nextTestimonial, 6000);
            });
        }

        // Event listeners for testimonial indicators
        testimonialIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', function() {
                clearInterval(testimonialInterval);
                goToTestimonial(index);
                testimonialInterval = setInterval(nextTestimonial, 6000);
            });
        });
    }

    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const formMessage = document.querySelector('.form-message');

            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.style.color = '#e74c3c';
                return;
            }

            // Simulate form submission
            formMessage.textContent = 'Thank you for subscribing!';
            formMessage.style.color = '#2ecc71';
            newsletterForm.reset();

            // In a real application, you would send this data to your server
            console.log('Subscription email:', email);
        });
    }

    // Scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    document.body.appendChild(scrollTopBtn);

    // Apply styles to the button
    scrollTopBtn.style.position = 'fixed';
    scrollTopBtn.style.bottom = '20px';
    scrollTopBtn.style.right = '20px';
    scrollTopBtn.style.width = '40px';
    scrollTopBtn.style.height = '40px';
    scrollTopBtn.style.borderRadius = '50%';
    scrollTopBtn.style.backgroundColor = 'var(--primary-color)';
    scrollTopBtn.style.color = '#fff';
    scrollTopBtn.style.border = 'none';
    scrollTopBtn.style.cursor = 'pointer';
    scrollTopBtn.style.display = 'flex';
    scrollTopBtn.style.alignItems = 'center';
    scrollTopBtn.style.justifyContent = 'center';
    scrollTopBtn.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    scrollTopBtn.style.opacity = '0';
    scrollTopBtn.style.visibility = 'hidden';
    scrollTopBtn.style.transition = 'all 0.3s ease';
    scrollTopBtn.style.zIndex = '999';

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });

    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .car-card, .rental-card, .feature');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial styles for animation
    const elementsToAnimate = document.querySelectorAll('.service-card, .car-card, .rental-card, .feature');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Run animation on initial load
    animateOnScroll();
});