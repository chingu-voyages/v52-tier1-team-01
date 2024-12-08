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
  
      // Show the alert with the form details
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
    }
}
