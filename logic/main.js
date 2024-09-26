// Script for smooth scrolling and navigation highlighting
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Highlight the current section on scroll
    window.addEventListener('scroll', function () {
        let fromTop = window.scrollY;

        navLinks.forEach(link => {
            let section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });

    // Form validation and message display
    const form = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual form submission

        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (validateEmail(email) && message) {
            formResponse.textContent = "Thank you for your message!";
            form.reset();
        } else {
            formResponse.textContent = "Please provide a valid email and message.";
            formResponse.style.color = 'red';
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }           
});

