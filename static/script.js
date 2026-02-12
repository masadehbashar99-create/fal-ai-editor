// Static script.js

// Function to get the current date and time in UTC format
function getCurrentDateTimeUTC() {
    const now = new Date();
    return now.toISOString().replace('T', ' ').substring(0, 19);
}

// Example usage
console.log(getCurrentDateTimeUTC());