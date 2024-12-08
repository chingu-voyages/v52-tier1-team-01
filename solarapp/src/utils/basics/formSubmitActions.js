// Function to handle the schedule form submission
export function handleScheduleFormSubmit() {
  // Get the form element by class
  const scheduleForm = document.querySelector('.form-wrapper');

  if (scheduleForm) {
    // Remove any existing event listeners to avoid multiple submissions
    scheduleForm.removeEventListener('submit', handleFormSubmission);

    // Add the event listener to handle form submission
    scheduleForm.addEventListener('submit', handleFormSubmission);
  }

  // Event handler for form submission
  function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission and reload

    // Get the values from the form inputs directly by their IDs
    const name = document.querySelector('#input-name').value;
    const email = document.querySelector('#input-email').value;
    const phone = document.querySelector('#input-phone-num').value;
    const address1 = document.querySelector('#input-address1').value;
    const address2 = document.querySelector('#input-address2').value;
    const zipCode = document.querySelector('#input-zip-code').value;
    const date = document.querySelector('#input-date').value;
    const time = document.querySelector('#input-time').value;

    // Create the message string
    let formDetails = "Appointment Details:\n";
    formDetails += `Full Name: ${name}\n`;
    formDetails += `Email: ${email}\n`;
    formDetails += `Phone Number: ${phone}\n`;
    formDetails += `Address Line 1: ${address1}\n`;
    formDetails += `Address Line 2: ${address2}\n`;
    formDetails += `Zip Code: ${zipCode}\n`;
    formDetails += `Date: ${date}\n`;
    formDetails += `Time: ${time}\n`;

    // Optionally, display the form details (for debugging or user information)
    alert(formDetails);

    // Disable all form inputs
    const inputs = scheduleForm.querySelectorAll('input');
    inputs.forEach(input => {
      input.disabled = true;
    });

    // Optionally, disable the submit button to prevent multiple submissions
    const submitButton = scheduleForm.querySelector('.button-submit');
    if (submitButton) {
      submitButton.disabled = true;
    }

    // Find the .form-success-info element that is a sibling to the form
    const successInfo = scheduleForm.nextElementSibling;

    // If a sibling element with the class .form-success-info is found, show it
    if (successInfo && successInfo.classList.contains('form-success-info')) {
      successInfo.classList.add('open'); // Add 'open' class to make it visible
    }
  }
}
