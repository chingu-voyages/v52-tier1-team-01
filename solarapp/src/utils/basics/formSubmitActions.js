// Import necessary modules and helpers
import supabase from '../database-integration/database-connection'; // Adjusted path


let isSubmitting = false; // Flag to track submission state
//const table_name = "appointment_details";
const TABLE_NAME = process.env.REACT_APP_TABLE_NAME;
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
  async function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission and reload
    if (isSubmitting) return; // Prevent multiple submissions

    isSubmitting = true; // Set flag to true

    try {
      // Get the values from the form inputs directly by their IDs
      const name = document.querySelector('#input-name').value;
      const email = document.querySelector('#input-email').value;
      const phone = document.querySelector('#input-phone-num').value;
      const address1 = document.querySelector('#input-address1').value;
      const address2 = document.querySelector('#input-address2').value || null; // Handle optional Address_2
      const zipCode = document.querySelector('#input-zip-code').value;
      const date = document.querySelector('#input-date').value;
      const time = document.querySelector('#input-time').value;

      // Create the appointment object
      const appointmentData = {
        name,
        email,
        phone,
        address1,
        address2,
        zip_code: zipCode,
        appointment_date: date,
        appointment_time: time,
      };

      // Insert data into the database
      const { data, error } = await supabase
        .from(TABLE_NAME)
        .insert({
          name: appointmentData.name,
          email: appointmentData.email,
          phone: appointmentData.phone,
          address_1: appointmentData.address1,
          address_2: appointmentData.address2 || null, // Handle optional address
          zipcode: appointmentData.zip_code,
          date: appointmentData.appointment_date,
          time: appointmentData.appointment_time,
        });

      if (error) {
        console.error('Error inserting data:', error);
      } else {
        console.log('Data inserted successfully:', data);

        // Fetch and log all appointments from the database
        const { data: allAppointments, error: fetchError } = await supabase
          .from(TABLE_NAME)
          .select('*');

        if (fetchError) {
          console.error('Error fetching data:', fetchError);
        } else {
          console.log('Current appointments in the database:', allAppointments);
        }

        // Disable all form inputs after successful submission
        const inputs = document.querySelectorAll('.form-wrapper input');
        inputs.forEach((input) => {
          input.disabled = true;
        });

        // Optionally, disable the submit button
        const submitButton = document.querySelector('.form-wrapper .button-submit');
        if (submitButton) {
          submitButton.disabled = true;
        }

        // Show success message
        const successInfo = document.querySelector('.form-wrapper + .form-success-info');
        if (successInfo) {
          successInfo.classList.add('open');
        }
      }
    } catch (error) {
      console.error('Error handling form submission:', error);
    }
  }
}
