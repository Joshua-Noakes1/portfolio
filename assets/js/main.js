// wait for window to be loaded
document.addEventListener("DOMContentLoaded", function () {
    VANTA.FOG({
        el: '#vanta-bg',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00
    });
});

// Load Google Analytics after page load to improve performance
const gtagScript = document.createElement('script');
gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-2GML90396C';
gtagScript.async = true;
document.head.appendChild(gtagScript);

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-2GML90396C');
