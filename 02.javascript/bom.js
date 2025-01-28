// Accessing window properties
console.log(window.innerWidth);  // Window width
console.log(window.innerHeight); // Window height

// Opening a new window
const newWindow = window.open("https://www.example.com", "_blank", "width=600,height=400");

// Closing the window after 3 seconds
setTimeout(() => {
    newWindow.close();
}, 3000);



// Checking the browser name and version
console.log(navigator.appName);  // Browser name
console.log(navigator.appVersion);  // Browser version

// Checking if the user is using mobile
if (navigator.userAgent.includes("Mobi")) {
    console.log("You are using a mobile device!");
} else {
    console.log("You are using a desktop device!");
}



console.log(location.href);  // Current URL

// Change the URL (navigate to another page)
function redirectToGoogle() {
    location.href = "https://www.google.com";
}

// Reload the page
function reloadPage() {
    location.reload();
}

// Get protocol, hostname, pathname etc.
console.log(location.protocol);  // e.g. "https:"
console.log(location.hostname);   // e.g. "www.example.com"
console.log(location.pathname);   // e.g. "/path/to/page"
