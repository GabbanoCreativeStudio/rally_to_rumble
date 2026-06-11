document.addEventListener("DOMContentLoaded", () => {

    const navItems = document.querySelectorAll(".nav-item, .nav-logo, .nav-trigger");
    const sections = document.querySelectorAll(".page-section");

    function switchPage(targetId) {
        sections.forEach(section => {
            section.classList.remove("active");
        });

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add("active");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        const menuLinks = document.querySelectorAll(".nav-item");
        menuLinks.forEach(link => {
            if (link.getAttribute("data-target") === targetId) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const target = item.getAttribute("data-target");
            if (target) {
                switchPage(target);
            }
        });
    });
});