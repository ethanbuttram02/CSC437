// lightmode.js - Light Mode Toggle Implementation

/**
 * Custom event dispatcher for theme toggle
 * @param {string} customType - The custom event type to dispatch
 * @param {Element} targetElement - Element to dispatch the custom event on
 * @returns {Function} Event handler function
 */
function createThemeToggleHandler(customType, targetElement = document.body) {
    return function(event) {
        event.preventDefault();
        
        // Toggle the current state
        const isCurrentlyLight = targetElement.classList.contains('light-mode');
        
        const customEvent = new CustomEvent(customType, {
            detail: { isLightMode: !isCurrentlyLight },
            bubbles: true
        });
        
        targetElement.dispatchEvent(customEvent);
    };
}

/**
 * Initialize the theme toggle functionality
 */
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Ensure the toggle element exists
    if (!themeToggle) {
        console.warn('Theme toggle button not found');
        return;
    }

    // Add click event handler to the button
    themeToggle.addEventListener('click', createThemeToggleHandler('theme:toggle'));

    // Add custom event handler to body for theme toggling
    body.addEventListener('theme:toggle', function(event) {
        if (event.detail.isLightMode) {
            body.classList.add('light-mode');
            // Optional: Save preference to localStorage
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-mode');
            // Optional: Save preference to localStorage
            localStorage.setItem('theme', 'dark');
        }
    });

    // Load saved preference on page load
    loadSavedThemePreference();
}

/**
 * Load and apply saved theme preference from localStorage
 */
function loadSavedThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    } else if (savedTheme === 'dark') {
        document.body.classList.remove('light-mode');
    }
    // If no saved preference, default to dark mode (current styling)
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initThemeToggle);