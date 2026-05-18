
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

   //faq section 

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


   
document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menu-toggle");
    const closeBtn = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");

        // Close menu when clicking nav links
    const navLinks = mobileMenu.querySelectorAll("a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });
    });

    // Open menu
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.add("active");
    });

    // Close menu
    closeBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

    // 🔥 FIX: Reset when resizing to desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            mobileMenu.classList.remove("active");
        }
    });

});






    
