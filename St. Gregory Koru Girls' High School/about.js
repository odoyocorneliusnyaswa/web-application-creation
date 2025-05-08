// About Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Achievements Tabs
    const tabBtns = document.querySelectorAll('.achievements-tabs .tab-btn');
    const tabPanes = document.querySelectorAll('.achievements-tabs .tab-pane');

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

    // Animation for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');

    if (timelineItems.length) {
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

        timelineItems.forEach(item => {
            observer.observe(item);
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