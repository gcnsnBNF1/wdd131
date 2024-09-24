// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the last modified date and time
    var lastModified = new Date(document.lastModified);
    
    // Format the date and time
    var day = ("0" + lastModified.getDate()).slice(-2);
    var month = ("0" + (lastModified.getMonth() + 1)).slice(-2);
    var year = lastModified.getFullYear();
    var hours = ("0" + lastModified.getHours()).slice(-2);
    var minutes = ("0" + lastModified.getMinutes()).slice(-2);
    var seconds = ("0" + lastModified.getSeconds()).slice(-2);
    
    var formattedDate = "Last Modified: " + month + "/" + day + "/" + year + " " + hours + ":" + minutes + ":" + seconds;
    
    // Display it inside the span element
    document.getElementById("currentyear").innerHTML = formattedDate;
});