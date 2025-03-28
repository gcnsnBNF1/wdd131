const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const img = entry.target;
        if (entry.isIntersecting) {
            img.src = img.getAttribute('data-src');
            img.style.animation = "fadeIn 1s ease-in forwards";
        } else {
            img.style.animation = "fadeOut 1s ease-out forwards";
        }
    });
});

document.querySelectorAll('.lazy').forEach(img => {
    observer.observe(img);
});