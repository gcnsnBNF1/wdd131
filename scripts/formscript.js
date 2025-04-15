
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const selectElement = document.getElementById("productList");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
});

document.querySelector(".webform").addEventListener("submit", function(event) {
    event.preventDefault();

    const selectedProductId = document.getElementById("productList").value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const reviewText = document.getElementById("textBox").value;
    const reviewerName = document.getElementById("fullNameInput").value;

    let reviewName;
    if (reviewerName)
    {
        reviewName = reviewerName;
    }
    else
    {
        reviewName = "Anonymous";
    }

    const review = {
        productId: selectedProductId,
        rating: rating,
        text: reviewText,
        name: reviewName
    };

    const existingReviews = localStorage.getItem("reviews");
    let reviews;
    if (existingReviews) {
        reviews = JSON.parse(existingReviews);
    }
    else
    {
        reviews = [];
    }

    reviews.push(review);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    let reviewCount = localStorage.getItem("reviewCount");
    if (reviewCount)
    {
        reviewCount = parseInt(reviewCount) + 1;
    }
    else
    {
        reviewCount = 1;
    }

    localStorage.setItem("reviewCount", reviewCount);
    alert(`Your review has been submitted. Thank you. Total reviews submitted: ${reviewCount}`);
    // windows.location.href("review.html");
});