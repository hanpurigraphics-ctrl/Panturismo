const destinations = [

{
id:1,
name:"Pantukan Water World",
category:"Resort",
location:"Kingking, Pantukan",
description:"A family-friendly beach resort with swimming pools and cottages perfect for weekend getaways.",
facebook:"https://facebook.com/",
image: "images/PantukanWaterWorld.jpg"
},

{
id:2,
name:"Magnaga Waters",
category:"Resort",
location:"Magnaga, Pantukan",
description:"A relaxing beach destination known for its clear waters and peaceful atmosphere.",
facebook:"https://facebook.com/",
image:"images/MagnagaWaters.jpg"
},

{
id:3,
name:"Pantukan Pickleball Court",
category:"Pickleball",
location:"Poblacion, Pantukan",
description:"A community pickleball court open for beginners and experienced players.",
facebook:"https://facebook.com/",
image:"https://images.unsplash.com/photo-1546519638-68e109498ffc"
},

{
id:4,
name:"Forest Adventure",
category:"Adventure",
location:"Kingking, Pantukan",
description:"Enjoy hiking, nature trails, and outdoor adventures surrounded by lush greenery.",
facebook:"https://facebook.com/",
image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
},

{
id:5,
name:"Mountain View Park",
category:"Park",
location:"Poblacion, Pantukan",
description:"A scenic park offering beautiful mountain views and a relaxing environment.",
facebook:"https://facebook.com/",
image:"https://images.unsplash.com/photo-1472396961693-142e6e269027"
},

{
id:6,
name:"Seafood Diner",
category:"Restaurant",
location:"Magnaga, Pantukan",
description:"Fresh seafood served daily with a relaxing seaside dining experience.",
facebook:"https://facebook.com/",
image:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
}

];

// ----------------------------

const container = document.getElementById("cardsContainer");

const modal = document.getElementById("destinationModal");

const modalImage = document.getElementById("modalImage");
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

container.innerHTML+=`

<div class="card" data-id="${place.id}">

<img src="${place.image}" alt="${place.name}">

<div class="info">

<span class="badge">${place.category}</span>

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

modalImage.src = place.image;
modalTitle.textContent = place.name;
modalCategory.textContent = place.category;
modalDescription.textContent = place.description;
modalAddress.textContent = place.location;
modalFacebook.href = place.facebook;

modal.style.display="flex";

document.body.style.overflow="hidden";

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

category==="all" ||

place.category===category;

return matchesSearch && matchesCategory;

});

displayCards(filtered);

}

search.addEventListener("keyup",filterPlaces);

filter.addEventListener("change",filterPlaces);