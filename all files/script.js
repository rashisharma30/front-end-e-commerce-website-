document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletter-form');
    const thankYouMessage = document.getElementById('thank-you-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Here you can handle form submission with AJAX or other methods
        // For now, we'll just display the thank-you message

        // Hide the form and show the thank-you message
        form.style.display = 'none';
        thankYouMessage.style.display = 'block';

        // Optionally, you can reset the form
        form.reset();
    });
});

