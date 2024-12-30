
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission

    const form = event.target;
    const formData = new FormData(form);

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Thank you for contacting us! We will get back to you shortly.');
                form.reset(); // Resets the form fields
            } else {
                alert('Something went wrong, please try again later.');
            }
        })
        .catch(error => {
            alert('Error: ' + error.message);
        });
});
