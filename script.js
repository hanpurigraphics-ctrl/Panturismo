/* =========================================
   PANTURISMO DATA
========================================= */

const destinations = [

    {
        id: 6,
        name: "Leonora's Café and Resto",
        category: ["Restaurant", "Coffee Shop"],
        location: "Poblacion, Kingking, Pantukan, Davao de Oro",
        description:
            "Leonora's Café and Resto is a charming dining destination in Pantukan that blends vintage-inspired architecture with a warm and inviting atmosphere. Surrounded by lush gardens and classic Filipino design, it offers a cozy setting perfect for family gatherings, casual meetups, and relaxing meals.",
        facebook: "https://facebook.com/",
        images: [
            "images/LCR0.jpg",
            "images/LCR1.jpg",
            "images/LCR2.jpg",
            "images/LCR3.jpg"
        ]
    },

    {
        id: 1,
        name: "Pantukan Water World",
        category: ["Resort", "Pickleball", "Accommodation"],
        location: "Kingking, Pantukan",
        description:
            "A family-friendly beach resort with swimming pools and cottages perfect for weekend getaways.",
        facebook: "https://www.facebook.com/pantukanwa",
        images: [
            "images/PantukanWaterWorld.jpg",
            "images/PWW1.jpg",
            "images/PWW2.jpg",
            "images/PWW3.jpg"
        ]
    },

    {
        id: 2,
        name: "Magnaga Waters",
        category: ["Resort", "Pickleball", "Accommodation"],
        location: "Magnaga, Pantukan, Davao de Oro",
        description:
            "A relaxing beach destination known for its clear waters and peaceful atmosphere.",
        facebook: "https://facebook.com/",
        images: [
            "images/MagnagaWaters.jpg",
            "images/MW1.jpg",
            "images/MW2.jpg",
            "images/MW3.jpg"
        ]
    },

    {
        id: 3,
        name: "ASF Pickle Ball Court",
        category: ["Pickleball"],
        location: "Townsite, Kingking, Pantukan, Davao de Oro",
        description:
            "A pickleball court open for beginners and experienced players.",
        facebook: "https://facebook.com/",
        images: [
            "images/ASFPickle.jpg"
        ]
    },

    {
        id: 4,
        name: "Peak Dakey",
        category: ["Adventure"],
        location: "Sitio Tapis, Tambongon, Pantukan, Davao de Oro",
        description:
            "Peak Dakey is a scenic hiking destination located in Sitio Tapis, Brgy. Tambongon, Pantukan, Davao de Oro. Known for its breathtaking mountain views, cool fresh air, and peaceful natural surroundings, it offers an unforgettable trekking experience for both beginners and seasoned hikers.",
        facebook: "https://www.facebook.com/profile.php?id=61589189564990",
        images: [
            "images/DK1.jpg",
            "images/dk4.jpg",
            "images/Dk2.jpg",
            "images/dk5.jpg"
        ]
    },

    {
        id: 7,
        name: "PCCC HOSTEL & TRAINING CENTER",
        category: ["Accommodation"],
        location: "Nat'l Highway, Kingking, Pantukan",
        description:
            "PCCMPC Hostel & Training Center offers comfortable accommodation and a convenient venue for seminars, workshops, training programs, and cooperative activities.",
        facebook: "https://www.facebook.com/pccmpchostel",
        images: [
            "images/Hostel1.jpg",
            "images/Hostel4.png"
        ]
    },

    {
        id: 8,
        name: "Braytside Bakery & Cafe",
        category: ["Restaurant", "Coffee Shop"],
        location: "Poblacion, Kingking, Pantukan, Davao de Oro",
        description:
            "Braytside Bakery & Coffee is a cozy local spot offering freshly baked treats, delicious coffee, and a welcoming atmosphere. Perfect for a quick snack, coffee break, or relaxing time with family and friends.",
        facebook: "https://www.facebook.com/braytsidecafe",
        images: [
            "images/Braytside0.webp",
            "images/Braytside1.webp",
            "images/Braytside2.webp",
            "images/Braytside3.webp"
        ]
    },

    {
        id: 9,
        name: "Diskanso Café & Car Care",
        category: ["Coffee Shop"],
        location: "Mendoza, Kingking, Pantukan, Davao de Oro",
        description:
            "Diskanso Café & Car Care is a local coffee spot where visitors can enjoy drinks and a relaxed atmosphere.",
        facebook: "https://www.facebook.com/profile.php?id=61570451530106",
        images: [
            "images/DSKNS1.jpg",
            "images/DSKNS2.jpg",
            "images/DSKNS3.jpg",
            "images/DSKNS4.jpg"
        ]
    },

    {
        id: 10,
        name: "Winners Fit Camp",
        category: ["GYM"],
        location: "Mendoza, Kingking, Pantukan, Davao de Oro",
        description:
            "Winners Fit Camp is a local fitness destination for people looking to stay active and work toward their fitness goals.",
        facebook: "https://www.facebook.com/profile.php?id=61570451530106",
        images: [
            "images/WF0.jpg",
            "images/WF01.jpg",
            "images/WF02.jpg",
            "images/WF1.jpg",
            "images/WF2.jpg",
            "images/WF3.jpg"
        ]
    }
    ,

    {
        id: 11,
        name: "Kapechino's",
        category: ["Coffee Shop"],
        location: "Port Road Townsite, Kingking Pantukan Davao de oro(beside Port Inn)",
        description:
            "Winners Fit Camp is a local fitness destination for people looking to stay active and work toward their fitness goals.",
        facebook: "https://www.facebook.com/kapechinos/",
        images: [
            "images/Kapechino1.jpg",
            "images/Kapechino2.jpg",
            "images/Kapechino3.jpg",
            "images/Kapechino4.jpg",
        ]
    }

    

];


/* =========================================
   DOM
========================================= */

const container =
    document.getElementById("cardsContainer");

const featuredContainer =
    document.getElementById("featuredContainer");

const resultCount =
    document.getElementById("resultCount");

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const searchBtn =
    document.getElementById("searchBtn");

const modal =
    document.getElementById("destinationModal");

const modalMainImage =
    document.getElementById("modalMainImage");

const thumbnailContainer =
    document.getElementById("thumbnailContainer");

const modalTitle =
    document.getElementById("modalTitle");

const modalCategory =
    document.getElementById("modalCategory");

const modalDescription =
    document.getElementById("modalDescription");

const modalAddress =
    document.getElementById("modalAddress");

const modalFacebook =
    document.getElementById("modalFacebook");

const closeBtn =
    document.getElementById("closeModal");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");


/* =========================================
   HELPERS
========================================= */

function getCategories(place) {

    return Array.isArray(place.category)
        ? place.category
        : [place.category];

}


function getCoverImage(place) {

    return place.images?.[0] || "";

}


function matchesCategory(place, category) {

    if (category === "all") {
        return true;
    }

    return getCategories(place).includes(category);

}


/* =========================================
   CARD HTML
========================================= */

function createCard(place, featured = false) {

    const image = getCoverImage(place);
    const categories = getCategories(place);

    return `
        <article
            class="${featured ? "featured-card" : "destination-card"}"
            data-id="${place.id}"
            tabindex="0"
            role="button"
            aria-label="View ${place.name}"
        >

            <div class="card-image">

                <img
                    src="${image}"
                    alt="${place.name}"
                    loading="lazy"
                    decoding="async"
                >

                <span class="card-category">
                    ${categories[0]}
                </span>

            </div>

            <div class="card-content">

                <h3>${place.name}</h3>

                <p class="card-location">
                    <span>⌖</span>
                    ${place.location}
                </p>

                <span class="card-link">
                    Explore →
                </span>

            </div>

        </article>
    `;
}


/* =========================================
   RENDER FEATURED
========================================= */

function displayFeatured() {

    const featured = destinations.slice(0, 5);

    featuredContainer.innerHTML =
        featured.map(place => createCard(place, true)).join("");

}


/* =========================================
   RENDER ALL
========================================= */

function displayCards(list) {

    resultCount.textContent =
        `${list.length} ${list.length === 1 ? "place" : "places"}`;

    if (!list.length) {

        container.innerHTML = `
            <div class="no-results">
                <div>⌕</div>
                <h3>No destinations found</h3>
                <p>
                    Try another destination or category.
                </p>
            </div>
        `;

        return;
    }

    container.innerHTML =
        list.map(place => createCard(place)).join("");

}


/* =========================================
   SEARCH + FILTER
========================================= */

function filterPlaces() {

    const text =
        searchInput.value
            .trim()
            .toLowerCase();

    const category =
        categoryFilter.value;

    const filtered =
        destinations.filter(place => {

            const searchableText = [
                place.name,
                place.location,
                place.description,
                ...getCategories(place)
            ]
                .join(" ")
                .toLowerCase();

            const matchesSearch =
                !text ||
                searchableText.includes(text);

            return (
                matchesSearch &&
                matchesCategory(place, category)
            );

        });

    displayCards(filtered);

}


/* =========================================
   EVENT DELEGATION
========================================= */

function handleCardClick(event) {

    const card =
        event.target.closest("[data-id]");

    if (!card) return;

    const id =
        Number(card.dataset.id);

    openModal(id);

}


featuredContainer.addEventListener(
    "click",
    handleCardClick
);

container.addEventListener(
    "click",
    handleCardClick
);


featuredContainer.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Enter" &&
            event.key !== " "
        ) {
            return;
        }

        const card =
            event.target.closest("[data-id]");

        if (!card) return;

        event.preventDefault();

        openModal(Number(card.dataset.id));

    }
);


container.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Enter" &&
            event.key !== " "
        ) {
            return;
        }

        const card =
            event.target.closest("[data-id]");

        if (!card) return;

        event.preventDefault();

        openModal(Number(card.dataset.id));

    }
);


/* =========================================
   CATEGORY BUTTONS
========================================= */

const categoryButtons =
    document.querySelectorAll(".category-card");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category =
            button.dataset.category;

        // If clicking the currently active category,
        // return to all places
        if (
            button.classList.contains("active") &&
            category !== "all"
        ) {
            categoryFilter.value = "all";

            categoryButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            document
                .querySelector('[data-category="all"]')
                .classList.add("active");

            filterPlaces();

            return;
        }

        // Remove active state from all
        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Activate selected category
        button.classList.add("active");

        // Update dropdown too
        categoryFilter.value = category;

        // Apply filter
        filterPlaces();

        // Scroll to destinations
        document
            .getElementById("allDestinations")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* =========================================
   SEARCH EVENTS
========================================= */

searchInput.addEventListener(
    "input",
    filterPlaces
);

categoryFilter.addEventListener(
    "change",
    filterPlaces
);

searchBtn.addEventListener(
    "click",
    () => {

        filterPlaces();

        document
            .getElementById("allDestinations")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =========================================
   MODAL
========================================= */

let galleryImages = [];
let currentImage = 0;


function openModal(id) {

    const place =
        destinations.find(
            item => item.id === id
        );

    if (!place) return;

    galleryImages =
        place.images || [];

    currentImage = 0;

    modalTitle.textContent =
        place.name;

    modalCategory.textContent =
        getCategories(place).join(" • ");

    modalDescription.textContent =
        place.description;

    modalAddress.textContent =
        place.location;

    modalFacebook.href =
        place.facebook || "#";

    updateGallery();

    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

}


function closeModal() {

    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


closeBtn.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {
            closeModal();
        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {
            closeModal();
        }

    }
);


/* =========================================
   GALLERY
========================================= */

function updateGallery() {

    if (!galleryImages.length) {
        return;
    }

    const image =
        galleryImages[currentImage];

    modalMainImage.src = image;

    modalMainImage.alt =
        `Destination image ${currentImage + 1}`;

    thumbnailContainer.innerHTML =
        galleryImages
            .map((src, index) => `
                <button
                    class="thumbnail ${index === currentImage ? "active" : ""}"
                    data-index="${index}"
                    aria-label="View image ${index + 1}"
                >
                    <img
                        src="${src}"
                        alt=""
                        loading="lazy"
                        decoding="async"
                    >
                </button>
            `)
            .join("");

}


thumbnailContainer.addEventListener(
    "click",
    event => {

        const thumbnail =
            event.target.closest(".thumbnail");

        if (!thumbnail) return;

        currentImage =
            Number(thumbnail.dataset.index);

        updateGallery();

    }
);


prevBtn.addEventListener(
    "click",
    () => {

        currentImage =
            currentImage === 0
                ? galleryImages.length - 1
                : currentImage - 1;

        updateGallery();

    }
);


nextBtn.addEventListener(
    "click",
    () => {

        currentImage =
            currentImage === galleryImages.length - 1
                ? 0
                : currentImage + 1;

        updateGallery();

    }
);


/* =========================================
   HEADER EFFECT
========================================= */

const header =
    document.getElementById("siteHeader");


window.addEventListener(
    "scroll",
    () => {

        header.classList.toggle(
            "scrolled",
            window.scrollY > 20
        );

    },
    { passive: true }
);


/* =========================================
   INITIAL LOAD
========================================= */

displayFeatured();
displayCards(destinations);