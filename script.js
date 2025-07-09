// --- Theme Toggler Script ---
const themeToggleBtn = document.getElementById('theme-toggle');

// This function is needed to avoid a flash of the wrong theme
function applyTheme() {
    const isDark = localStorage.getItem('theme') === 'dark' || 
                   (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDark) {
        document.documentElement.classList.add('dark');
        document.getElementById('theme-toggle-dark-icon').style.display = 'block';
        document.getElementById('theme-toggle-light-icon').style.display = 'none';
    } else {
        document.documentElement.classList.remove('dark');
        document.getElementById('theme-toggle-dark-icon').style.display = 'none';
        document.getElementById('theme-toggle-light-icon').style.display = 'block';
    }
}

themeToggleBtn.addEventListener('click', function() {
    // toggle icons inside button
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    applyTheme();
});


// --- Mobile Menu Toggle ---
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
const mobileMenuLinks = mobileMenu.getElementsByTagName('a');
for (let link of mobileMenuLinks) {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
}

// Apply theme on initial load
document.addEventListener('DOMContentLoaded', applyTheme);
