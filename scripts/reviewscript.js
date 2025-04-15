// Retrieve review counter from localStorage
const reviewCount = localStorage.getItem("reviewCount") || 0; 
document.getElementById("reviewCounter").textContent = `Total Reviews Submitted: ${reviewCount}`;

// Retrieve and display reviews
const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
const reviewSection = document.getElementById("reviewDisplay");

reviews.forEach(review => {
    const reviewDiv = document.createElement("div");
    reviewDiv.classList.add("review-item");
    reviewDiv.innerHTML = `
        <h3>${review.name}</h3>
        <p><strong>Product:</strong> ${review.productId}</p>
        <p><strong>Rating:</strong> ${review.rating}/5</p>
        <p><strong>Comments:</strong> ${review.text}</p>
    `;
    reviewSection.appendChild(reviewDiv);
});