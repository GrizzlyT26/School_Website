document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50, // Offset for header
                behavior: 'smooth'
            });
        });
    });

    // Registration form submission
    document.getElementById('registration-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const role = document.getElementById('role').value;
        const name = document.getElementById('reg-name').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;

        console.log(`Registration Details:\nRole: ${role}\nName: ${name}\nEmail: ${email}\nPassword: ${password}`);

        alert('Registration successful!');

        // Simulate setting a user role for demo purposes
        localStorage.setItem('userRole', role);
    });

    // Login form submission
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        console.log(`Login Details:\nEmail: ${email}\nPassword: ${password}`);

        alert('Login successful!');

        // Simulate storing user session for demo purposes
        localStorage.setItem('userEmail', email);

        // Redirect to the appropriate profile page based on role
        redirectToProfile();
    });

    // Redirect to profile page based on role
    function redirectToProfile() {
        const role = localStorage.getItem('userRole');
        let profileUrl = '';

        if (role === 'student') {
            profileUrl = 'student-profile.html';
        } else if (role === 'parent') {
            profileUrl = 'parent-profile.html';
        } else if (role === 'teacher') {
            profileUrl = 'teacher-profile.html';
        } else if (role === 'sgb') {
            profileUrl = 'sgb-profile.html';
        }

        if (profileUrl) {
            window.location.href = profileUrl;
        }
    }

    // Load profile on page load if logged in
    if (localStorage.getItem('userEmail')) {
        redirectToProfile();
    }
});