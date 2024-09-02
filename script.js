const elements = document.querySelectorAll('.animate-on-scroll');

function animateOnScroll() {
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            element.classList.add('animate');
        }
    });
}

document.addEventListener('scroll', animateOnScroll);
