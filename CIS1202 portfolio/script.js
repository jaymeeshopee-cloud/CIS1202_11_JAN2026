/* Dark Mode Toggle Function */

// Get the HTML element
const htmlElement = document.documentElement;

// Initialize dark mode from localStorage (remembers user preference)
function initDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
        htmlElement.classList.add('dark-mode');
        updateToggleButton();
    }
}

// Toggle dark mode on/off
function toggleDarkMode() {
    // This is the key line - classList.toggle adds the class if missing, removes it if present
    htmlElement.classList.toggle('dark-mode');
    
    // Save preference to localStorage so it persists across page reloads
    const isDarkMode = htmlElement.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    
    // Update button text
    updateToggleButton();
}

// Update button text based on current mode
function updateToggleButton() {
    const toggleBtn = document.getElementById('dark-mode-toggle');
    if (toggleBtn) {
        const isDarkMode = htmlElement.classList.contains('dark-mode');
        toggleBtn.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
    }
}

// Initialize dark mode when page loads
document.addEventListener('DOMContentLoaded', initDarkMode);
