document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll("a");
    links.forEach(function(link) {
        link.setAttribute("target", "_blank");
    });
});