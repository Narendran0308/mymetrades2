
// ✨ NAVBAR ACTIVE LINK HIGHLIGHTING ON SCROLL
window.addEventListener("scroll", function () {
    const timeline = document.querySelector(".timeline");
    const progress = document.querySelector(".progress");

    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    let progressHeight = ((windowHeight - rect.top) / rect.height) * 100;

    if (progressHeight < 0) progressHeight = 0;
    if (progressHeight > 100) progressHeight = 100;

    progress.style.height = progressHeight + "%";

    // Update active navbar link on scroll
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 150; // Offset for navbar
    let activeLink = null;

    // Get all nav links
    const navLinks = document.querySelectorAll(".nav-links a:not(.join-btn)");
    
    // Reset all active classes
    navLinks.forEach(link => {
        link.classList.remove("active");
    });

    // Check each section
    const sections = [
        { id: "benefits", href: "#benefits" },
        { id: "process", href: "#process" },
        { id: "pricing", href: "#pricing" },
        { id: "testimonials", href: "#testimonials" },
        { id: "faq", href: "#faq" },
        { id: "contact-section", href: "#contact-section" }
    ];

    for (let section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
            const elementTop = element.offsetTop;
            const elementBottom = elementTop + element.offsetHeight;

            if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                activeLink = document.querySelector(`.nav-links a[href="${section.href}"]`);
                break;
            }
        }
    }

    // If no section is active, highlight Home (when at top)
    if (!activeLink && scrollPosition < 500) {
        activeLink = document.querySelector('.nav-links a[href="#"]');
    }

    // Apply active class
    if (activeLink) {
        activeLink.classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded", function () {
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

    // Add scroll-fade class to all cards and sections
    const cardsAndSections = document.querySelectorAll(".card, .card1, .benefits-section, .process-section, .testimonials-section, .faq-section");
    cardsAndSections.forEach(el => {
        el.classList.add("scroll-fade");
        observer.observe(el);
    });

    // Update active nav link on page load
    updateActiveNavLink();

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






    
