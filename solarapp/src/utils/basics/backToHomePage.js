// backToHomePage.js
export function backToHomePage() {
    // Add a listener to the "Back to Homepage" button
    const backToHomeButton = document.querySelector('.controller-linker button');
    
    if (backToHomeButton) {
      backToHomeButton.addEventListener('click', () => {
        // Reload the page to the homepage
        window.location.href = '/'; // This will redirect to the homepage
        // Alternatively, you can use `window.location.reload()` to reload the current page
        // window.location.reload();
      });
    }
  }
  