let termekek = [
    CollarTShirt ={image: "../TermekKartyak/niggercollarshirt.jpg", name: "Collar T-shirt", price: 45, onSale: true},
    LadiesHat =   {image: "../TermekKartyak/sapkasarga.jpg", name: "Ladies Hat", price: 17, onSale: true}
]



let kartyak = document.createElement('div');
kartyak.className = "kartyak";

let column = document.createElement('div');
column.className = "column";

let card = document.createElement('div');
card.className = "card";

let card_container = document.createElement('div');
card_container.className = "card-container";

let kartyakep = document.createElement('img');
kartyakep.className = "kartyakep";
kartyakep.src = "path_to_image.jpg";
kartyakep.alt = "Product Image";

let ikonok = document.createElement('div');
ikonok.className = "ikonok";

let szivIC = document.createElement('i');
szivIC.className = "icon-heart";

let szemIC = document.createElement('i');
szemIC.className = "icon-eye";

let add_to_cart = document.createElement('button');
add_to_cart.className = "add-to-cart";
add_to_cart.innerText = "Add to Cart";

let alja = document.createElement('div');
alja.className = "alja";

let nev = document.createElement('h4');
nev.className = "nev";
nev.innerText = "Product Name";

let price = document.createElement('span');
price.className = "price";
price.innerText = "$99.99";

ikonok.appendChild(szivIC);
ikonok.appendChild(szemIC);

alja.appendChild(nev);
alja.appendChild(price);

card_container.appendChild(kartyakep);
card_container.appendChild(ikonok);
card_container.appendChild(alja);
card_container.appendChild(add_to_cart);

card.appendChild(card_container);
column.appendChild(card);
kartyak.appendChild(column);

document.body.appendChild(kartyak);
