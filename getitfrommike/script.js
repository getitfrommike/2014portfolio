// Initialize elements when the page loads
window.addEventListener('DOMContentLoaded', function() {
    // Elements
    const portfolio = document.getElementById('portfolio');
    const home = document.getElementById('home');
    const mainElements = [
        document.getElementById('header-text'),
        document.getElementById('subtitle-text'),
        document.getElementById('contact-text')
    ];
    
    // Show/hide content functions
    function showContent() {
        document.body.style.backgroundImage = '';
        mainElements.forEach(function(element) {
            if (element) {
                element.style.visibility = 'visible';
            }
        });
        home.style.visibility = 'visible';
    }
    
    function hideContent() {
        document.body.style.backgroundImage = "url('images/GOODLOO.png')";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        mainElements.forEach(function(element) {
            if (element) {
                element.style.visibility = 'hidden';
            }
        });
        home.style.visibility = 'hidden';
    }
    
    // Add event listeners
    if (portfolio) {
        portfolio.addEventListener('mouseenter', hideContent);
        portfolio.addEventListener('mouseleave', showContent);
        
        // Allow default link behavior for navigation
        portfolio.addEventListener('click', function(e) {
            // Don't prevent default - let the link navigate
        });
    }
});