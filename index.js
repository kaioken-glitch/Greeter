//this function caters for the dropdown of the services list and rotates the svg icon when clicked
document.addEventListener("DOMContentLoaded", () => {
    const travelDiv = document.querySelector(".travelDiv");
    const headerDiv = document.querySelector(".headerDiv");
    const servicesList = document.querySelector(".servicesList");
    const svg = headerDiv.querySelector("svg");

    headerDiv.addEventListener("click", () => {
        const isExpanded = servicesList.style.height === "auto";
        if (isExpanded) {
            servicesList.style.height = "0";
            svg.style.transform = "rotate(0deg)";
            travelDiv.style.height = `${headerDiv.offsetHeight}px`;
        } else {
            servicesList.style.height = "auto";
            svg.style.transform = "rotate(180deg)";
            travelDiv.style.height = `${headerDiv.offsetHeight + servicesList.scrollHeight}px`;
        }
    });

    // Set the initial height
    travelDiv.style.height = `${headerDiv.offsetHeight}px`;
});


//this
const API_KEY = 'fddaf5a818268d99e88b5c836fbba450'; // Replace with your valid API Key
const weatherDiv = document.querySelector(".weatherDiv");
const headerWDiv = document.querySelector(".headerWDiv");
const weatherDetails = document.querySelector(".weatherDetails");
const locationName = document.getElementById("locationName");
const weatherDescription = document.getElementById("weatherDescription");
const temperature = document.getElementById("temperature");
const weatherIconSvg = document.getElementById("weatherIconSvg");

// Weather icons mapping
const weatherIcons = {
    "01d": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
                <path d="M24 4a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm0 36a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm18-18a1 1 0 0 1 1 1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-36 0a1 1 0 0 1 1 1H5a1 1 0 0 1 0-2h2a1 1 0 0 1 1-1zm25.95-12.95a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 8.464a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 8.464a1 1 0 0 1-1.414 1.414L11.636 8.464a1 1 0 0 1 0-1.414zm17.9 25.9a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 36.364a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 36.364a1 1 0 0 1-1.414 1.414L11.636 36.364a1 1 0 0 1 0-1.414zM24 8a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"/>
            </svg>`, // Clear sky (day)
    "01n": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
                <path d="M24 4a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm0 36a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm18-18a1 1 0 0 1 1 1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-36 0a1 1 0 0 1 1 1H5a1 1 0 0 1 0-2h2a1 1 0 0 1 1-1zm25.95-12.95a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 8.464a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 8.464a1 1 0 0 1-1.414 1.414L11.636 8.464a1 1 0 0 1 0-1.414zm17.9 25.9a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 36.364a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 36.364a1 1 0 0 1-1.414 1.414L11.636 36.364a1 1 0 0 1 0-1.414zM24 8a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"/>
            </svg>`, // Clear sky (night)
    "02d": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
                <path d="M24 4a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm0 36a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm18-18a1 1 0 0 1 1 1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-36 0a1 1 0 0 1 1 1H5a1 1 0 0 1 0-2h2a1 1 0 0 1 1-1zm25.95-12.95a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 8.464a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 8.464a1 1 0 0 1-1.414 1.414L11.636 8.464a1 1 0 0 1 0-1.414zm17.9 25.9a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 36.364a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 36.364a1 1 0 0 1-1.414 1.414L11.636 36.364a1 1 0 0 1 0-1.414zM24 8a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"/>
                <path d="M24 8a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"/>
            </svg>`, // Few clouds (day)
    "02n": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
                <path d="M24 4a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm0 36a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm18-18a1 1 0 0 1 1 1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-36 0a1 1 0 0 1 1 1H5a1 1 0 0 1 0-2h2a1 1 0 0 1 1-1zm25.95-12.95a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 8.464a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 8.464a1 1 0 0 1-1.414 1.414L11.636 8.464a1 1 0 0 1 0-1.414zm17.9 25.9a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 36.364a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 36.364a1 1 0 0 1-1.414 1.414L11.636 36.364a1 1 0 0 1 0-1.414zM24 8a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"/>
                <path d="M21.707 15.293a1 1 0 0 1-1.414 0 7.978 7.978 0 0 1-1.293-8.707 1 1 0 0 1 1.707-.707 9.978 9.978 0 0 0 1.293 10.707 1 1 0 0 1-1.293 1.707z"/>
            </svg>`, // Few clouds (night)
    "03d": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
                <path d="M24 4a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm0 36a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm18-18a1 1 0 0 1 1 1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-36 0a1 1 0 0 1 1 1H5a1 1 0 0 1 0-2h2a1 1 0 0 1 1-1zm25.95-12.95a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 8.464a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 8.464a1 1 0 0 1-1.414 1.414L11.636 8.464a1 1 0 0 1 0-1.414zm17.9 25.9a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 36.364a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 36.364a1 1 0 0 1-1.414 1.414L11.636 36.364a1 1 0 0 1 0-1.414zM24 8a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"/>
                <path d="M24 8a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"/>
            </svg>`, // Scattered clouds
    "03n": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
                <path d="M24 4a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm0 36a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm18-18a1 1 0 0 1 1 1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-36 0a1 1 0 0 1 1 1H5a1 1 0 0 1 0-2h2a1 1 0 0 1 1-1zm25.95-12.95a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 8.464a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 8.464a1 1 0 0 1-1.414 1.414L11.636 8.464a1 1 0 0 1 0-1.414zm17.9 25.9a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 36.364a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 36.364a1 1 0 0 1-1.414 1.414L11.636 36.364a1 1 0 0 1 0-1.414zM24 8a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"/>
                <path d="M24 8a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"/>
            </svg>`, // Scattered clouds (night)
    "04d": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                <ellipse cx="12" cy="12" rx="8" ry="5" fill="darkgray" />
                <ellipse cx="12" cy="12" rx="6" ry="4" fill="gray" />
            </svg>`,
    "01d": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
                <path d="M24 4a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm0 36a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm18-18a1 1 0 0 1 1 1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-36 0a1 1 0 0 1 1 1H5a1 1 0 0 1 0-2h2a1 1 0 0 1 1-1zm25.95-12.95a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 8.464a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 8.464a1 1 0 0 1-1.414 1.414L11.636 8.464a1 1 0 0 1 0-1.414zm17.9 25.9a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 36.364a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 36.364a1 1 0 0 1-1.414 1.414L11.636 36.364a1 1 0 0 1 0-1.414zM24 8a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"/>
            </svg>`, // Clear sky (day)
    "01n": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
                <path d="M24 4a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm0 36a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm18-18a1 1 0 0 1 1 1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-36 0a1 1 0 0 1 1 1H5a1 1 0 0 1 0-2h2a1 1 0 0 1 1-1zm25.95-12.95a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 8.464a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 8.464a1 1 0 0 1-1.414 1.414L11.636 8.464a1 1 0 0 1 0-1.414zm17.9 25.9a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 36.364a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 36.364a1 1 0 0 1-1.414 1.414L11.636 36.364a1 1 0 0 1 0-1.414zM24 8a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"/>
            </svg>`, // Clear sky (night)
    "02d": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
                <path d="M24 4a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm0 36a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm18-18a1 1 0 0 1 1 1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-36 0a1 1 0 0 1 1 1H5a1 1 0 0 1 0-2h2a1 1 0 0 1 1-1zm25.95-12.95a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 8.464a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 8.464a1 1 0 0 1-1.414 1.414L11.636 8.464a1 1 0 0 1 0-1.414zm17.9 25.9a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 36.364a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 36.364a1 1 0 0 1-1.414 1.414L11.636 36.364a1 1 0 0 1 0-1.414zM24 8a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"/>
                <path d="M24 8a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"/>
            </svg>`, // Few clouds (day)
    "02n": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
                <path d="M24 4a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm0 36a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm18-18a1 1 0 0 1 1 1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-36 0a1 1 0 0 1 1 1H5a1 1 0 0 1 0-2h2a1 1 0 0 1 1-1zm25.95-12.95a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 8.464a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 8.464a1 1 0 0 1-1.414 1.414L11.636 8.464a1 1 0 0 1 0-1.414zm17.9 25.9a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 36.364a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 36.364a1 1 0 0 1-1.414 1.414L11.636 36.364a1 1 0 0 1 0-1.414zM24 8a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"/>
                <path d="M21.707 15.293a1 1 0 0 1-1.414 0 7.978 7.978 0 0 1-1.293-8.707 1 1 0 0 1 1.707-.707 9.978 9.978 0 0 0 1.293 10.707 1 1 0 0 1-1.293 1.707z"/>
            </svg>`, // Few clouds (night)
    "03d": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
                <path d="M24 4a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm0 36a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm18-18a1 1 0 0 1 1 1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-36 0a1 1 0 0 1 1 1H5a1 1 0 0 1 0-2h2a1 1 0 0 1 1-1zm25.95-12.95a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 8.464a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 8.464a1 1 0 0 1-1.414 1.414L11.636 8.464a1 1 0 0 1 0-1.414zm17.9 25.9a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 36.364a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 36.364a1 1 0 0 1-1.414 1.414L11.636 36.364a1 1 0 0 1 0-1.414zM24 8a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"/>
                <path d="M24 8a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"/>
            </svg>`, // Scattered clouds
    "03n": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                <ellipse cx="12" cy="12" rx="8" ry="5" fill="gray" />
            </svg>`, // Scattered clouds (night)
    "04d": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                <ellipse cx="12" cy="12" rx="8" ry="5" fill="darkgray" />
                <ellipse cx="12" cy="12" rx="6" ry="4" fill="gray" />
            </svg>`, // Broken clouds (day)
    "04n": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                <ellipse cx="12" cy="12" rx="8" ry="5" fill="darkgray" />
                <ellipse cx="12" cy="12" rx="6" ry="4" fill="gray" />
            </svg>`, // Broken clouds (night)
    "09d": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                <ellipse cx="12" cy="12" rx="8" ry="5" fill="gray" />
                <line x1="8" y1="16" x2="8" y2="20" stroke="blue" stroke-width="2"/>
                <line x1="12" y1="16" x2="12" y2="20" stroke="blue" stroke-width="2"/>
                <line x1="16" y1="16" x2="16" y2="20" stroke="blue" stroke-width="2"/>
            </svg>`, // Shower rain (day)
    "09n": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                <ellipse cx="12" cy="12" rx="8" ry="5" fill="gray" />
                <line x1="8" y1="16" x2="8" y2="20" stroke="blue" stroke-width="2"/>
                <line x1="12" y1="16" x2="12" y2="20" stroke="blue" stroke-width="2"/>
                <line x1="16" y1="16" x2="16" y2="20" stroke="blue" stroke-width="2"/>
            </svg>`, // Shower rain (night)
    "10d": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                <ellipse cx="12" cy="12" rx="8" ry="5" fill="gray" />
                <line x1="8" y1="16" x2="8" y2="20" stroke="blue" stroke-width="2"/>
                <line x1="12" y1="16" x2="12" y2="20" stroke="blue" stroke-width="2"/>
                <line x1="16" y1="16" x2="16" y2="20" stroke="blue" stroke-width="2"/>
                <circle cx="10" cy="10" r="4" fill="yellow" />
            </svg>`, // Rain (day)
    "10n": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                <ellipse cx="12" cy="12" rx="8" ry="5" fill="gray" />
                <line x1="8" y1="16" x2="8" y2="20" stroke="blue" stroke-width="2"/>
                <line x1="12" y1="16" x2="12" y2="20" stroke="blue" stroke-width="2"/>
                <line x1="16" y1="16" x2="16" y2="20" stroke="blue" stroke-width="2"/>
                <circle cx="15" cy="9" r="3" fill="darkgray" />
            </svg>`, // Rain (night)
    "11d": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                <ellipse cx="12" cy="12" rx="8" ry="5" fill="gray" />
                <line x1="8" y1="16" x2="8" y2="20" stroke="blue" stroke-width="2"/>
                <line x1="12" y1="16" x2="12" y2="20" stroke="blue" stroke-width="2"/>
                <line x1="16" y1="16" x2="16" y2="20" stroke="blue" stroke-width="2"/>
                <line x1="10" y1="14" x2="14" y2="18" stroke="yellow" stroke-width="2"/>
                <line x1="14" y1="14" x2="10" y2="18" stroke="yellow" stroke-width="2"/>
            </svg>`, // Thunderstorm (day)
    "11n": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                <ellipse cx="12" cy="12" rx="8" ry="5" fill="gray" />
                <line x1="8" y1="16" x2="8" y2="20" stroke="blue" stroke-width="2"/>
                <line x1="12" y1="16" x2="12" y2="20" stroke="blue" stroke-width="2"/>
                <line x1="16" y1="16" x2="16" y2="20" stroke="blue" stroke-width="2"/>
                <line x1="10" y1="14" x2="14" y2="18" stroke="yellow" stroke-width="2"/>
                <line x1="14" y1="14" x2="10" y2="18" stroke="yellow" stroke-width="2"/>
            </svg>`, // Thunderstorm (night)
    "13d": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                <ellipse cx="12" cy="12" rx="8" ry="5" fill="gray" />
                <circle cx="10" cy="10" r="4" fill="lightblue" />
                <line x1="8" y1="16" x2="8" y2="20" stroke="lightblue" stroke-width="2"/>
                <line x1="12" y1="16" x2="12" y2="20" stroke="lightblue" stroke-width="2"/>
                <line x1="16" y1="16" x2="16" y2="20" stroke="lightblue" stroke-width="2"/>
            </svg>`, // Snow (day)
    "13n": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                <ellipse cx="12" cy="12" rx="8" ry="5" fill="gray" />
                <circle cx="10" cy="10" r="4" fill="lightblue" />
                <line x1="8" y1="16" x2="8" y2="20" stroke="lightblue" stroke-width="2"/>
                <line x1="12" y1="16" x2="12" y2="20" stroke="lightblue" stroke-width="2"/>
                <line x1="16" y1="16" x2="16" y2="20" stroke="lightblue" stroke-width="2"/>
            </svg>`, // Snow (night)
    "50d": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                <ellipse cx="12" cy="12" rx="8" ry="5" fill="gray" />
                <line x1="4" y1="12" x2="20" y2="12" stroke="gray" stroke-width="2"/>
                <line x1="4" y1="14" x2="20" y2="14" stroke="gray" stroke-width="2"/>
                <line x1="4" y1="16" x2="20" y2="16" stroke="gray" stroke-width="2"/>
            </svg>`, // Mist (day)
    "50n": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                <ellipse cx="12" cy="12" rx="8" ry="5" fill="gray" />
                <line x1="4" y1="12" x2="20" y2="12" stroke="gray" stroke-width="2"/>
                <line x1="4" y1="14" x2="20" y2="14" stroke="gray" stroke-width="2"/>
                <line x1="4" y1="16" x2="20" y2="16" stroke="gray" stroke-width="2"/>
            </svg>` // Mist (night)
};

// Function to fetch SVG for the given icon code
function getWeatherIconSvg(iconCode) {
    return weatherIcons[iconCode] || `<svg><text x="0" y="15">No Icon</text></svg>`;
}

// Function to fetch weather data
async function fetchWeather() {
    try {
        // Get user's location
        const position = await getUserLocation();

        // Fetch weather data from API
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${API_KEY}`
        );

        if (!response.ok) {
            throw new Error(`API Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        // Update weather details
        const { name, weather, main } = data;

        locationName.textContent = name || "Unknown Location";
        weatherDescription.textContent = weather[0]?.description || "No description";
        temperature.textContent = `${Math.round(main?.temp || 0)}°C`;

        // Update weather icon with SVG
        const iconCode = weather[0]?.icon; // Get icon code from API
        weatherIconSvg.innerHTML = getWeatherIconSvg(iconCode);

    } catch (error) {
        console.error("Error fetching weather data:", error);
        locationName.textContent = "Location unavailable";
        weatherDescription.textContent = "Unable to fetch weather data.";
        temperature.textContent = "--°C";
        weatherIconSvg.innerHTML = `<svg><text x="0" y="15">Error</text></svg>`;
    }
}

// Function to get user location
function getUserLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        } else {
            reject(new Error("Geolocation not supported"));
        }
    });
}

// Toggle dropdown functionality
headerWDiv.addEventListener("click", () => {
    const isExpanded = weatherDetails.style.height === "auto";

    if (isExpanded) {
        weatherDetails.style.height = "0";
        weatherDetails.style.overflow = "hidden";
        weatherDiv.style.height = `${headerWDiv.offsetHeight}px`;
        headerWDiv.querySelector("svg").style.transform = "rotate(0deg)";
    } else {
        weatherDetails.style.height = "auto";
        weatherDetails.style.overflow = "visible";
        weatherDiv.style.height = `${headerWDiv.offsetHeight + weatherDetails.scrollHeight}px`;
        headerWDiv.querySelector("svg").style.transform = "rotate(180deg)";
    }
});

// Initialize weatherDiv and fetch weather data
document.addEventListener("DOMContentLoaded", () => {
    weatherDiv.style.height = `${headerWDiv.offsetHeight}px`;
    fetchWeather();
});


// Dummy data for search
const dummyData = [
    { category: "History", items: ["Visited Paris", "Watched a Movie", "Dinner with Friends", "Went Hiking", "Attended a Wedding", "Visited Museum", "Went to a Concert", "Had a Picnic", "Visited Grandparents", "Went Fishing"] },
    { category: "Bookings", items: ["Hotel in NYC", "Flight to Tokyo", "Concert Tickets", "Train to Berlin", "Bus to London", "Cruise to Bahamas", "Hotel in Paris", "Flight to Sydney", "Concert in LA", "Train to Rome"] },
    { 
        category: "Itinerary", 
        items: [
            { bookingName: "Rome", itineraryNumber: "ITN-001" },
            { bookingName: "Vatican", itineraryNumber: "ITN-002" },
            { bookingName: "Relax at Beach", itineraryNumber: "ITN-003" },
            { bookingName: "City Tour", itineraryNumber: "ITN-004" },
            { bookingName: "Mountain Hike", itineraryNumber: "ITN-005" },
            { bookingName: "Museum Visit", itineraryNumber: "ITN-006" },
            { bookingName: "Wine Tasting", itineraryNumber: "ITN-007" },
            { bookingName: "Boat Ride", itineraryNumber: "ITN-008" },
            { bookingName: "Safari", itineraryNumber: "ITN-009" },
            { bookingName: "Desert Tour", itineraryNumber: "ITN-010" }
        ]
    },
    { category: "Activities", items: ["Skydiving", "Scuba Diving", "Mountain Biking", "Rock Climbing", "Paragliding", "Surfing", "Skiing", "Snowboarding", "Kayaking", "Canoeing"] },
    { category: "Restaurants", items: ["Italian Bistro", "Sushi Bar", "Steakhouse", "Vegan Cafe", "Seafood Restaurant", "Mexican Grill", "French Bakery", "Chinese Takeout", "Indian Cuisine", "Thai Restaurant"] },
    { category: "Shopping", items: ["Mall Visit", "Grocery Shopping", "Clothes Shopping", "Electronics Store", "Bookstore", "Furniture Store", "Toy Store", "Jewelry Store", "Shoe Store", "Gift Shop"] },
    { category: "Events", items: ["Music Festival", "Art Exhibition", "Food Fair", "Tech Conference", "Book Signing", "Charity Run", "Fashion Show", "Film Premiere", "Theater Play", "Comedy Show"] },
    { category: "Fitness", items: ["Gym Workout", "Yoga Class", "Pilates Session", "Running", "Cycling", "Swimming", "Boxing", "CrossFit", "Zumba", "Dance Class"] },
    { category: "Education", items: ["Math Class", "Science Workshop", "History Lecture", "Art Class", "Music Lesson", "Language Course", "Coding Bootcamp", "Cooking Class", "Photography Workshop", "Writing Seminar"] },
    { category: "Travel", items: ["Road Trip", "Weekend Getaway", "Beach Vacation", "Mountain Retreat", "City Break", "Cruise", "Safari Adventure", "Cultural Tour", "Backpacking", "Luxury Resort"] }
];


// Function to perform search
function performSearch() {
    const queryInput = document.getElementById("queryInput").value.trim();
    const searchResults = document.getElementById("searchResults");

    // Clear previous results
    searchResults.innerHTML = "";

    if (!queryInput) {
        searchResults.innerHTML = "<div class='no-results'>Please enter a search query.</div>";
        searchResults.classList.remove("hidden");
        return;
    }

    let hasResults = false;

    // Filter and display results by category
    dummyData.forEach(category => {
        let matchingItems;

        // Special handling for Itinerary category
        if (category.category === "Itinerary") {
            matchingItems = category.items.filter(item =>
                item.bookingName.toLowerCase().includes(queryInput.toLowerCase())
            );
        } else {
            matchingItems = category.items.filter(item =>
                item.toLowerCase().includes(queryInput.toLowerCase())
            );
        }

        if (matchingItems.length > 0) {
            hasResults = true;

            // Add category title
            const categoryTitle = document.createElement("div");
            categoryTitle.textContent = category.category;
            categoryTitle.classList.add("category-title");
            searchResults.appendChild(categoryTitle);

            // Add matching items
            matchingItems.forEach(item => {
                const resultItem = document.createElement("div");

                // Format results for Itinerary category
                if (category.category === "Itinerary") {
                    resultItem.innerHTML = `
                        <span class="booking-name">${item.bookingName}</span>
                        <span class="itinerary-number">${item.itineraryNumber}</span>
                    `;
                } else {
                    resultItem.textContent = item;
                }

                resultItem.classList.add("result-item");
                searchResults.appendChild(resultItem);
            });
        }
    });

    if (!hasResults) {
        searchResults.innerHTML = "<div class='no-results'>No results found.</div>";
    }

    searchResults.classList.remove("hidden");
}


// Event listener for the search button (optionList div)
document.querySelector(".optionList").addEventListener("click" , performSearch);

// Event listener to hide results when clicking outside
document.addEventListener("click", (event) => {
    const searchResults = document.getElementById("searchResults");
    const inputDiv = document.querySelector(".inputDiv");

    if (!inputDiv.contains(event.target)) {
        searchResults.classList.add("hidden");
    }
});

// Initialize results div hidden state
document.addEventListener("DOMContentLoaded", () => {
    const searchResults = document.getElementById("searchResults");
    searchResults.classList.add("hidden");
});

//this function is to toggle the display of the dashboardLink Div
// Select all divs in the mainBar
const mainBarDivs = document.querySelectorAll('.mainBar > div');

// Function to display a specific div and hide others
function showDiv(targetClass) {
    mainBarDivs.forEach(div => {
        if (div.classList.contains(targetClass)) {
            div.style.display = 'block'; // Show the selected div
        } else {
            div.style.display = 'none'; // Hide all other divs
        }
    });
}

// Add event listener for the dashboardLink
document.getElementById('dashboardLink').addEventListener('click', () => {
    showDiv('dashboardLink'); // Show the dashboard div when clicked
});

// Add event listeners to the list items in the services list
document.querySelectorAll('.servicesList li').forEach(li => {
    li.addEventListener('click', () => {
        const targetClass = li.getAttribute('data-target'); // Get target div class
        showDiv(targetClass);
    });
});

// Initially, hide all except the dashboardLink
showDiv('dashboardLink'); // Ensure dashboardLink is visible initially


// Function to create bookingInfo div
function createBookingInfo(bookingType, progress) {
    const bookingInfo = document.createElement('div');
    bookingInfo.className = 'bookingInfo';

    const infoImage = document.createElement('div');
    infoImage.className = 'infoImage';
    infoImage.innerHTML = getBookingSVG(bookingType);
    bookingInfo.appendChild(infoImage);

    const infoDetails = document.createElement('div');
    infoDetails.className = 'infoDetails';

    const navWay = document.createElement('div');
    navWay.className = 'navWay';
    navWay.innerHTML = `
        <h5>Continue Booking</h5>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z"/>
        </svg>
    `;
    infoDetails.appendChild(navWay);

    const progressBar = document.createElement('div');
    progressBar.className = 'progressBar';
    progressBar.innerHTML = `
        <div class="progressIndicator" style="width: ${progress}%;">
            <p>${progress}%</p>
        </div>
    `;
    infoDetails.appendChild(progressBar);

    bookingInfo.appendChild(infoDetails);

    return bookingInfo;
}

// Function to get SVG based on booking type
function getBookingSVG(bookingType) {
    switch (bookingType) {
        case 'flight':
            return `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="17px" height="17px" fill="currentColor">
                    <path d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"/>
                </svg>
            `;
        case 'car':
            return `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="17px" height="17px" fill="currentColor">
                    <path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/> 
                </svg>            
            `;
        case 'hotel':
            return `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="17px" height="17px" fill="currentColor">
                    <path d="M0 32C0 14.3 14.3 0 32 0L480 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-176 0 0-48c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 48L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32L32 64C14.3 64 0 49.7 0 32zm96 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8l144 0z"/>
                </svg> 
            `;
        case 'tour':
            return `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="17px" height="17px" fill="currentColor">
                    <path d="M128 32l32 0c17.7 0 32 14.3 32 32l0 32L96 96l0-32c0-17.7 14.3-32 32-32zm64 96l0 320c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32l0-59.1c0-34.6 9.4-68.6 27.2-98.3C40.9 267.8 49.7 242.4 53 216L60.5 156c2-16 15.6-28 31.8-28l99.8 0zm227.8 0c16.1 0 29.8 12 31.8 28L459 216c3.3 26.4 12.1 51.8 25.8 74.6c17.8 29.7 27.2 63.7 27.2 98.3l0 59.1c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-320 99.8 0zM320 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 32-96 0 0-32zm-32 64l0 160-64 0 0-160 64 0z"/>
                </svg>
            `;
        default:
            return '';
    }
}

// Example usage
const bookings = [
    { type: 'flight', progress: 10 },
    { type: 'car', progress: 50 },
    { type: 'hotel', progress: 75 },
    { type: 'tour', progress: 30 },
    // Add more bookings as needed
];

updateBookingList(bookings);

// Function to update booking list
function updateBookingList(bookings) {
    const bookingList = document.querySelector('.bookingList');
    bookingList.innerHTML = ''; // Clear existing content

    if (bookings.length === 0) {
        const noBookingsMessage = document.createElement('p');
        noBookingsMessage.textContent = 'Nothing to See here';
        bookingList.appendChild(noBookingsMessage);
    } else {
        bookings.forEach(booking => {
            const bookingInfo = createBookingInfo(booking.type, booking.progress);
            bookingList.appendChild(bookingInfo);
        });
    }
}

updateBookingList(bookings);


// Function to display trips
function displayTrips(trips) {
    const tripsView = document.querySelector('.tripsView');

    // Clear any existing trip cards
    tripsView.innerHTML = '';

    trips.forEach(trip => {
        // Create tripCard div
        const tripCard = document.createElement('div');
        tripCard.classList.add('tripCard');

        // Create tripImage div
        const tripImage = document.createElement('div');
        tripImage.classList.add('tripImage');
        const img = document.createElement('img');
        img.src = trip.imageUrl;
        img.alt = trip.title;
        tripImage.appendChild(img);

        // Create trip title
        const tripTitle = document.createElement('h4');
        tripTitle.textContent = trip.title;

        // Create tripButton div
        const tripButton = document.createElement('div');
        tripButton.classList.add('tripButton');
        const buttonText = document.createElement('h5');
        buttonText.textContent = 'View Details';
        const buttonIcon = document.createElement('div');
        buttonIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z"/>
            </svg>
        `;
        tripButton.appendChild(buttonText);
        tripButton.appendChild(buttonIcon);

        // Append all elements to tripCard
        tripCard.appendChild(tripImage);
        tripCard.appendChild(tripTitle);
        tripCard.appendChild(tripButton);

        // Append tripCard to tripsView
        tripsView.appendChild(tripCard);
    });
}

// Example usage
const trips = [
    {
        title: 'Trip to Paris',
        imageUrl: 'https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_1:1,w_3840,g_auto/f_auto/q_auto/v1/gc-v1/paris/3%20giorni%20a%20Parigi%20Tour%20Eiffel?_a=BAVARSAP0'
    },
    {
        title: 'Trip to New York',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQocQ8ekPnu6nvgbrfzD6z3WO8cKjsl9GL2uA&s'
    }
];

displayTrips(trips);


// Function to display weather forecast

function getWeatherIcon(weather) {
    switch (weather) {
        case 'Clear':
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24"><path d="M24 4a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm0 36a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm18-18a1 1 0 0 1 1 1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-36 0a1 1 0 0 1 1 1H5a1 1 0 0 1 0-2h2a1 1 0 0 1 1-1zm25.95-12.95a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 8.464a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 8.464a1 1 0 0 1-1.414 1.414L11.636 8.464a1 1 0 0 1 0-1.414zm17.9 25.9a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 36.364a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 36.364a1 1 0 0 1-1.414 1.414L11.636 36.364a1 1 0 0 1 0-1.414zM24 8a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"/></svg>`;
        // Add more cases for different weather conditions
        default:
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24"><path d="M24 4a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm0 36a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm18-18a1 1 0 0 1 1 1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-36 0a1 1 0 0 1 1 1H5a1 1 0 0 1 0-2h2a1 1 0 0 1 1-1zm25.95-12.95a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 8.464a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 8.464a1 1 0 0 1-1.414 1.414L11.636 8.464a1 1 0 0 1 0-1.414zm17.9 25.9a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L28.95 36.364a1 1 0 0 1 0-1.414zm-17.9 0a1 1 0 0 1 1.414 0L14.464 36.364a1 1 0 0 1-1.414 1.414L11.636 36.364a1 1 0 0 1 0-1.414zM24 8a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"/></svg>`;
    }
}

async function fetchWeatherData(lat, lon) {
    const response = await fetch(`http://localhost:3000/weather?lat=${lat}&lon=${lon}`);
    if (!response.ok) {
        throw new Error('Failed to fetch weather data from backend');
    }
    return await response.json();
}

async function displayWeatherForUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            try {
                const weatherData = await fetchWeatherData(position.coords.latitude, position.coords.longitude);
                const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
                const forecast = weatherData.daily.slice(0, 5).map((day, index) => {
                    const date = new Date(day.dt * 1000);
                    return {
                        day: daysOfWeek[date.getDay()],
                        weatherIcon: getWeatherIcon(day.weather[0].main),
                        temperature: Math.round(day.temp.day)
                    };
                });
                displayWeatherForecast(forecast);
            } catch (error) {
                console.error('Error fetching weather data:', error);
                alert('Failed to fetch weather data. Please check your API key and try again.');
            }
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

displayWeatherForUserLocation();
