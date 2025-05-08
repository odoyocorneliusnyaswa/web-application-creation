// Academics Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Curriculum Tabs
    const tabBtns = document.querySelectorAll('.curriculum-tabs .tab-btn');
    const tabPanes = document.querySelectorAll('.curriculum .tab-pane');

    if (tabBtns.length && tabPanes.length) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons and panes
                tabBtns.forEach(b => b.classList.remove('active'));
                tabPanes.forEach(p => p.classList.remove('active'));

                // Add active class to clicked button
                this.classList.add('active');

                // Show corresponding tab pane
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }

    // Animation for department cards
    const departmentCards = document.querySelectorAll('.department-card');

    if (departmentCards.length) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        departmentCards.forEach(card => {
            observer.observe(card);
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                e.preventDefault();

                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});