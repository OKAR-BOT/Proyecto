document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form validation for the enrollment form
    const enrollmentForm = document.getElementById('enrollment-form');
    if (enrollmentForm) {
        enrollmentForm.addEventListener('submit', function(e) {
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            if (!nameInput.value || !emailInput.value) {
                e.preventDefault();
                alert('Please fill in all fields.');
            }
        });
    }

    // Dynamic content loading for course info
    const courseInfoButton = document.getElementById('load-course-info');
    if (courseInfoButton) {
        courseInfoButton.addEventListener('click', function() {
            fetch('components/course-info.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('course-info-container').innerHTML = data;
                })
                .catch(error => console.error('Error loading course info:', error));
        });
    }
});