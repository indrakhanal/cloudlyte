document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('sendEmail');
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    
        // Attach a submit event listener
        form.addEventListener('submit', function (event) {
            // Prevent the default form submission behavior
            event.preventDefault();
            let thisForm = this;
            thisForm.querySelector('.loading').classList.add('d-block');
            thisForm.querySelector('.error-message').classList.remove('d-block');
            thisForm.querySelector('.sent-message').classList.remove('d-block');
            document.getElementById("sumbitBtn").disabled = true;

    
            // Create a FormData object from the form
            const formData = new FormData(form);
    
            // Convert FormData to a JSON object (optional)
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            // Send the data using AJAX
            fetch('send_email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                },
                body: JSON.stringify(formObject),
            })
            .then(response => response.json())
            .then(data => {
                console.log(data, "checking there ")
                
                thisForm.querySelector('.sent-message').classList.add('d-block');
                thisForm.querySelector('.loading').classList.remove('d-block');
                document.getElementById("sumbitBtn").disabled = false;
                thisForm.reset(); 

                setTimeout(() => {
                    thisForm.querySelector('.sent-message').classList.remove('d-block'); // Hide the message
                }, 5000);
            })
            .catch(error => {
                thisForm.querySelector('.loading').classList.remove('d-block');
                thisForm.querySelector('.error-message').innerHTML = error;
                thisForm.querySelector('.error-message').classList.add('d-block');
            });
        });
});

