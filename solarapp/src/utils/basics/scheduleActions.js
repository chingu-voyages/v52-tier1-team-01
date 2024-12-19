// Function to initialize the ScheduleFormSection (default hidden)
export function initializeScheduleFormSection() {
    const scheduleSection = document.querySelector('.schedule-form-section');
    if (scheduleSection) {
      scheduleSection.style.display = 'none'; // Hide by default
    }
  
    // Add event listeners to trigger visibility
    attachScheduleButtonListeners();
  }
  
  // Function to show the ScheduleFormSection
  function showScheduleFormSection() {
    const scheduleSection = document.querySelector('.schedule-form-section');
    if (scheduleSection) {
      scheduleSection.style.display = 'block'; // Ensure the section is displayed
    }
  }
  
  // Function to attach click event listeners to "Schedule" and "Schedule Now" buttons
  function attachScheduleButtonListeners() {
    // "Schedule" from the header
    const scheduleLink = document.querySelector('.header-nav li:nth-child(1)'); // Assuming first <li> in the nav
    // "Schedule Now" button
    const scheduleNowButton = document.querySelector('.schedule-now');
  
    if (scheduleLink) {
      scheduleLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        showScheduleFormSection();
      });
    }
  
    if (scheduleNowButton) {
      scheduleNowButton.addEventListener('click', showScheduleFormSection);
    }
  }
  