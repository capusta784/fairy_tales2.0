const cards =
document.querySelectorAll(".story-card");

cards.forEach(card=>{

card.addEventListener(
"mouseenter",
()=>{

card.style.boxShadow=
"0 15px 35px rgba(255,180,50,.4)";

}
);

card.addEventListener(
"mouseleave",
()=>{

card.style.boxShadow=
"0 10px 25px rgba(0,0,0,.15)";

}
);

});