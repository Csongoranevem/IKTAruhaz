let termekek = [
    CollarTShirt ={image: "../TermekKartyak/niggercollarshirt.jpg", name: "Collar T-shirt", price: 45, onSale: true},
    LadiesHat =   {image: "../TermekKartyak/sapkasarga.jpg", name: "Ladies Hat", price: 17, onSale: true}
]

let main = document.querySelector(".row")



for (const termek of termekek) {
    main.appendChild(KartyaLetrehoz(termek))

}


function KartyaLetrehoz(termek) {
    let kartyak = document.createElement('div');
    kartyak.className = "kartyak";

    let column = document.createElement('div');
    column.className = "column";

    let card = document.createElement('div');
    card.className = "card";

    let card_container = document.createElement('div');
    card_container.className = "card-container";

    let kartyakep = document.createElement('img');
    kartyakep.className = "kartyaKepek";

    let ikonok = document.createElement('div');
    ikonok.className = "ikonok";

    let szivIC = document.createElement('div');
    szivIC.className = "szivikon";

    let szivIMG = document.createElement('img')
    szivIMG.src = "../TermekKartyak/sziv.png"

    let szemIC = document.createElement('div');
    szemIC.className = "szemikon";

    let szemIMG = document.createElement('img')
    szemIMG.src = "../TermekKartyak/szem.png"

    let add_to_cart = document.createElement('a');
    add_to_cart.className = "add-to-cart";
    add_to_cart.innerHTML="Add to cart"

    let alja = document.createElement('div');
    alja.className = "alja";

    let nev = document.createElement('h1');
    nev.className = "nev";

    let price = document.createElement('p');
    price.className = "price";

    let akcios = document.createElement('span')
    akcios.className= "KartyaSaleDiv"

    let akciosP = document.createElement('p')
    akciosP.className= "KartyaSaleP"
    akciosP.innerHTML="Sale!"

    szivIC.appendChild(szivIMG)
    szemIC.appendChild(szemIMG)


    ikonok.appendChild(szivIC);
    ikonok.appendChild(szemIC);

    alja.appendChild(nev);
    alja.appendChild(price);

    card_container.appendChild(kartyakep);
    card_container.appendChild(ikonok);
    card_container.appendChild(add_to_cart);
    card.appendChild(card_container);
    card.appendChild(alja);

    if (termek.onSale) {
        column.appendChild(akcios)
    }
    column.appendChild(card);
    akcios.appendChild(akciosP)
    kartyak.appendChild(column);
        
    
    nev.innerHTML=termek.name
        
    kartyakep.src=termek.image
        
    price.innerHTML=termek.price

    price.innerHTML+="$"

    //console.log(termek.name)

    return kartyak
}

    
    




