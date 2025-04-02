// Hamburger Menu Logic
const initializeHamburgerMenu = () => {
  const hamButton = document.querySelector('#menu');
  const navigation = document.querySelector('.navigation');

  hamButton.addEventListener('click', () => {
      navigation.classList.toggle('open'); // Toggle 'open' class for navigation
      hamButton.classList.toggle('open'); // Toggle hamburger/close icon
  });
};

// Temple Data Array
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "San Antonio Texas",
        location: "San Antonio, Texas, United States",
        dedicated: "2005, May, 22",
        area: 16800,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-antonio-texas/400x250/san-antonio-temple-lds-352484-wallpaper.jpg"
    },
    {
        templeName: "Laie Hawaii",
        location: "Laie, Hawaii, United States",
        dedicated: "1919, November, 30",
        area: 42100,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-temple-772761-wallpaper.jpg"
    }
  ];

  // Lazy Loading Logic
const lazyLoadImages = () => {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          const img = entry.target;
          if (entry.isIntersecting) {
              img.src = img.getAttribute('data-src'); // Assign data-src to src
              img.style.animation = "fadeIn 1s ease-in forwards";
          }
      });
  });

  document.querySelectorAll('.lazy').forEach(img => observer.observe(img));
};

// Display Temples in Album
const displayTemples = (temples) => {
  const album = document.querySelector('.album');
  album.innerHTML = temples.map(temple => `
      <div class="temple-card">
          <div class="temple-info">
              <h3>${temple.templeName}</h3>
              <p>Location: ${temple.location}</p>
              <p>Dedicated: ${temple.dedicated}</p>
              <p>Size: ${temple.area} ft<sup>2</sup></p>
          </div>
          <div class="temple-image">
              <img class="lazy" data-src="${temple.imageUrl}" alt="${temple.templeName}">
          </div>
      </div>
  `).join("");
  lazyLoadImages(); // Trigger lazy loading
};

// Filter Logic and Title Updates
const addFilterListeners = () => {
  const albumTitle = document.getElementById("album-title");

  const updateAlbum = (filterFn, title) => {
      const filteredTemples = temples.filter(filterFn);
      displayTemples(filteredTemples);
      albumTitle.textContent = title;
  };

  // Adding event listeners for filters
  document.querySelector("#home").addEventListener("click", () => {
      updateAlbum(() => true, "Home");
  });

  document.querySelector("#old").addEventListener("click", () => {
      updateAlbum(temple => new Date(temple.dedicated.split(",")[0]).getFullYear() < 1900, "Old Temples");
  });

  document.querySelector("#new").addEventListener("click", () => {
      updateAlbum(temple => new Date(temple.dedicated.split(",")[0]).getFullYear() > 2000, "New Temples");
  });

  document.querySelector("#large").addEventListener("click", () => {
      updateAlbum(temple => temple.area > 90000, "Large Temples");
  });

  document.querySelector("#small").addEventListener("click", () => {
      updateAlbum(temple => temple.area < 10000, "Small Temples");
  });
};

// Initialize Page Logic
const initializePage = () => {
  displayTemples(temples); // Render all temples by default
  addFilterListeners(); // Add filter functionality
  initializeHamburgerMenu(); // Add hamburger menu functionality
};

// Load All Page Logic
initializePage();