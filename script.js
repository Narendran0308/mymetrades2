
window.addEventListener("scroll", function () {
    const timeline = document.querySelector(".timeline");
    const progress = document.querySelector(".progress");

    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    let progressHeight = ((windowHeight - rect.top) / rect.height) * 100;

    if (progressHeight < 0) progressHeight = 0;
    if (progressHeight > 100) progressHeight = 100;

    progress.style.height = progressHeight + "%";
});

// ✨ SCROLL FADE-IN ANIMATION WITH INTERSECTION OBSERVER
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// ✨ NAVBAR ACTIVE LINK HIGHLIGHTING ON SCROLL
const navObserverOptions = {
    threshold: 0.5
};

const navObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        const id = entry.target.id;
        const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);
        
        if (entry.isIntersecting) {
            // Remove active class from all nav links
            document.querySelectorAll(".nav-links a").forEach(link => {
                link.classList.remove("active");
            });
            // Add active class to current section's link
            if (navLink) {
                navLink.classList.add("active");
            }
        }
    });
}, navObserverOptions);

document.addEventListener("DOMContentLoaded", function () {
    // Add scroll-fade class to all cards and sections
    const cardsAndSections = document.querySelectorAll(".card, .card1, .benefits-section, .process-section, .testimonials-section, .faq-section");
    cardsAndSections.forEach(el => {
        el.classList.add("scroll-fade");
        observer.observe(el);
    });

    // Observe sections for navbar highlighting
    const sections = document.querySelectorAll("#benefits, #process, #pricing, #testimonials, #faq, #contact-section");
    sections.forEach(section => {
        navObserver.observe(section);
    });

    // FAQ section
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item) => {
        item.addEventListener("toggle", () => {
            if (item.open) {
                faqItems.forEach((otherItem) => {
                    if (otherItem !== item) {
                        otherItem.open = false;
                    }
                });
            }
        });
    });

    // Mobile menu functionality
    const menuBtn = document.getElementById("menu-toggle");
    const closeBtn = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenu) {
        // Close menu when clicking nav links
        const navLinks = mobileMenu.querySelectorAll("a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.remove("active");
            });
        });

        // Open menu
        if (menuBtn) {
            menuBtn.addEventListener("click", () => {
                mobileMenu.classList.add("active");
            });
        }

        // Close menu
        if (closeBtn) {
            closeBtn.addEventListener("click", () => {
                mobileMenu.classList.remove("active");
            });
        }

        // Reset when resizing to desktop
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                mobileMenu.classList.remove("active");
            }
        });
    }
});






    
