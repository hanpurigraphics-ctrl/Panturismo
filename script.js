const destinations = [

{
id:1,
name:"Pantukan Water World",
category:["Resort","Pickleball"],
location:"Kingking, Pantukan",
description:"A family-friendly beach resort with swimming pools and cottages perfect for weekend getaways.",
facebook:"https://www.facebook.com/pantukanwa",
images:[
    "images/PantukanWaterWorld.jpg",
    "images/PWW1.jpg",
    "images/PWW2.jpg",
    "images/PWW3.jpg"
]
},

{
id:2,
name:"Magnaga Waters",
category:["Resort","Pickleball"],
location:"Magnaga, Pantukan, Davao de Oro",
description:"A relaxing beach destination known for its clear waters and peaceful atmosphere.",
facebook:"https://facebook.com/",
images:[
    "images/MagnagaWaters.jpg",
    "images/MW1.jpg",
    "images/MW2.jpg",
    "images/MW3.jpg"
]
},
{
id:3,
name:"ASF Pickle Ball Court",
category:"Pickleball",
location:"Townsite,Kingking,Pantukan, Davao de Oro",
description:"A  pickleball court open for beginners and experienced players.",
facebook:"https://facebook.com/",
image:"images/ASFPickle.jpg"
},

{
id:4,
name:"Peak Dakey",
category:"Adventure",
location:"Sitio Tapis, Tambongon, Pantukan, Davao de Oro",
description:"Peak Dakey is a scenic hiking destination located in Sitio Tapis, Brgy. Tambongon, Pantukan, Davao de Oro. Known for its breathtaking mountain views, cool fresh air, and peaceful natural surroundings, it offers an unforgettable trekking experience for both beginners and seasoned hikers. Reaching the summit rewards visitors with panoramic views of the lush landscapes, making it a perfect spot for sunrise hikes, camping, photography, and reconnecting with nature.",
facebook:"https://facebook.com/",
images:[
    "images/DK1.jpeg",
    "images/dk4.jpeg",
    "images/Dk2.jpeg",
    "images/dk5.jpg"
]
},


{
id:6,
name:"Leonora's Café and Resto",
category:"Restaurant",
location:"Poblacion, Kingking, Pantukan, Davao de Oro",
description:"Leonora's Café and Resto is a charming dining destination in Pantukan that blends vintage-inspired architecture with a warm and inviting atmosphere. Surrounded by lush gardens and classic Filipino design, it offers a cozy setting perfect for family gatherings, casual meetups, and relaxing meals. Guests can enjoy delicious food, handcrafted beverages, and a peaceful ambiance that combines timeless elegance with modern comfort.",
facebook:"https://facebook.com/",
images:[
    "images/LCR0.jpg",
    "images/LCR1.jpg",
    "images/LCR2.jpg",
    "images/LCR3.jpg"
]
}

];

// ----------------------------

const container = document.getElementById("cardsContainer");

const modal = document.getElementById("destinationModal");
const modalMainImage = document.getElementById("modalMainImage");
const thumbnailContainer = document.getElementById("thumbnailContainer");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let galleryImages = [];
let currentImage = 0;
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");
const modalAddress = document.getElementById("modalAddress");
const modalFacebook = document.getElementById("modalFacebook");

const closeBtn = document.querySelector(".close");

// ----------------------------
function displayCards(list){

container.innerHTML="";

if(list.length===0){

container.innerHTML=`
<h2 style="
width:100%;
text-align:center;
color:#666;
margin-top:50px;
">
No destinations found.
</h2>
`;

return;

}

list.forEach(place=>{

const coverImage = place.images?.[0] || place.image;

container.innerHTML+=`

<div class="card" data-id="${place.id}">

<img src="${coverImage}" alt="${place.name}">

<div class="info">

<span class="badge">
    ${Array.isArray(place.category)
        ? place.category.join(" | ")
        : place.category}
</span>

<h3>${place.name}</h3>

<p class="location">
📍 ${place.location}
</p>

</div>

</div>

`;

});

// Add click event to every card
document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",()=>{

const id = Number(card.dataset.id);

openModal(id);

});

});

}

// ----------------------------

function openModal(id){

    const place = destinations.find(item=>item.id===id);

    if(!place) return;

    loadGallery(place.images || [place.image]);

    modalTitle.textContent = place.name;
    modalCategory.textContent = place.category;
    modalDescription.textContent = place.description;
    modalAddress.textContent = place.location;
    modalFacebook.href = place.facebook;

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";

}

// ----------------------------

function closeModal(){

modal.style.display="none";

document.body.style.overflow="auto";

}

closeBtn.addEventListener("click",closeModal);

// Click outside modal closes it
modal.addEventListener("click",(e)=>{

if(e.target===modal){

closeModal();

}

});

// ESC key closes modal
document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

closeModal();

}

});

// ============================
// GALLERY FUNCTIONS
// ============================

function loadGallery(images){

    galleryImages = images;
    currentImage = 0;

    updateGallery();

}

function updateGallery(){

    modalMainImage.src = galleryImages[currentImage];

    thumbnailContainer.innerHTML = "";

    galleryImages.forEach((image,index)=>{

        const img = document.createElement("img");

        img.src = image;

        if(index === currentImage){

            img.classList.add("active");

        }

        img.onclick = ()=>{

            currentImage = index;

            updateGallery();

        }

        thumbnailContainer.appendChild(img);

    });

}

prevBtn.onclick = ()=>{

    currentImage--;

    if(currentImage < 0){

        currentImage = galleryImages.length - 1;

    }

    updateGallery();

}

nextBtn.onclick = ()=>{

    currentImage++;

    if(currentImage >= galleryImages.length){

        currentImage = 0;

    }

    updateGallery();

}
// ----------------------------

displayCards(destinations);

// SEARCH

const search = document.getElementById("searchInput");

const filter = document.getElementById("categoryFilter");

function filterPlaces(){

const text = search.value.toLowerCase();

const category = filter.value;

const filtered = destinations.filter(place=>{

const matchesSearch =

place.name.toLowerCase().includes(text) ||

place.location.toLowerCase().includes(text);

const matchesCategory =
    category === "all" ||
    (
        Array.isArray(place.category)
            ? place.category.includes(category)
            : place.category === category
    );

return matchesSearch && matchesCategory;

});

displayCards(filtered);

}

search.addEventListener("keyup",filterPlaces);

filter.addEventListener("change",filterPlaces);