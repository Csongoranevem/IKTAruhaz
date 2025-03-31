let termekek = [
    oraArany =          {image: "../TermekKartyak/goldenWatch.jpg",
                        name: "Watch (gold)",
                        price: 450, 
                        gender: "M",
                        type: "accessories",
                        onSale: false},
    
    nyaklancEzust =     {image: "../TermekKartyak/silverNecklace.jpg", 
                        name: "Silver necklace", 
                        price: 79, 
                        gender: "U", 
                        type: "accessories", 
                        onSale: true},

    vastagKarkotoArany ={image: "../TermekKartyak/goldenBraceletThick.jpg", 
                        name: "Golden Bracelet", 
                        price: 219, 
                        gender: "W", 
                        type: "accessories", 
                        onSale: false},

    vekonyKarkotoArany ={image: "../TermekKartyak/goldenBraceletThin.jpg", 
                        name: "Golden Bracelet thin version ", 
                        price: 179, 
                        gender: "W",
                        type: "accessories", 
                        onSale: false},

    gyemantGyuru =      {image: "../TermekKartyak/diamondRing.jpg", 
                        name: "Diamond ring", 
                        price: 349, 
                        gender: "W", 
                        type: "accessories", 
                        onSale: false},


    ezustFulbe =        {image: "../TermekKartyak/silverEarring.jpg", 
                        name: "Silver earring", 
                        price: 80, 
                        gender: "W", 
                        type: "accessories", 
                        onSale: true},

    aranynapszemcsi =   {image: "../TermekKartyak/goldenSunglasses.jpg", 
                        name: "Golden sunglasses (Unisex)", 
                        price: 180, 
                        gender: "U", 
                        type: "accessories",
                        onSale: false},

    CollarTshirt =      {image: "../TermekKartyak/collarshirt.jpg", 
                        name: "Collar T-shirt", 
                        price: 20, 
                        gender: "M",
                        type: "casual",
                        onSale: false},

    GentsTshirt =       {image: "../TermekKartyak/gentsTshirt.jpg", 
                        name: "Gents T-shirt", 
                        price: 30, 
                        gender: "M",
                        type: "casual",
                        onSale: true},

    Ladieshat =         {image: "../TermekKartyak/sapkasarga.jpg", 
                        name: "Ladies Hat", 
                        price: 50, 
                        gender: "W",
                        type: "casual",
                        onSale: false},

    LeatherJacket =     {image: "../TermekKartyak/LeatherJacket.jpg", 
                        name: "Leather Jacket", 
                        price: 49, 
                        gender: "M",
                        type: "clothing",
                        onSale: true},

    BlueTshirt =        {image: "../TermekKartyak/BlueT-shirt.jpg", 
                        name: "Blue T-shirt", 
                        price: 50, 
                        gender: "W",
                        type: "casual",
                        onSale: false},

    PrintedTops =       {image: "../TermekKartyak/PrintedTops.jpg", 
                        name: "Printed Tops", 
                        price: 75, 
                        gender: "W",
                        type: "casual",
                        onSale: false},

    WhiteTshirt  =      {image: "../TermekKartyak/feherPoloLatina.jpg", 
                        name: "Loose T-shirt (White)", 
                        price: 60, 
                        gender: "W",
                        type: "casual",
                        onSale: false},
    WhitePJacket  =      {image: "../TermekKartyak/WhitePJacket.jpg", 
                        name: "Winter jacket (White)", 
                        price: 80, 
                        gender: "W",
                        type: "clothing",
                        onSale: false},

    WhiteThinJacket  =      {image: "../TermekKartyak/WhiteThinJacket.jpg", 
                        name: "White coat", 
                        price: 110, 
                        gender: "W",
                        type: "clothing",
                        onSale: true},

    patternedSocks =    {image: "../TermekKartyak/patternedSocks.jpg", 
                        name: "Patterned Socks", 
                        price: 10, 
                        gender: "U",
                        type: "accessories",
                        onSale: false},

    TrumpSocks   =      {image: "../TermekKartyak/TrumpSocks.jpg", 
                        name: "Make socks great again", 
                        price: 9430,
                        gender: "M",
                        type: "accessories",
                        onSale: false},

    blueSocks   =       {image: "../TermekKartyak/blueSocks.jpg", 
                        name: "Dark Blue socks", 
                        price: 20,
                        gender: "U",
                        type: "accessories",
                        onSale: false},
    DarkBlueJacket =    {image: "../TermekKartyak/DarkBlueJacketMen.jpg", 
                        name: "Dark Blue Jacket", 
                        price: 100,
                        gender: "M",
                        type: "clothing",
                        onSale: false},
    WhiteJacket =       {image: "../TermekKartyak/WhiteJacketMen.jpg", 
                        name: "White Jacket", 
                        price: 100,
                        gender: "M",
                        type: "clothing",
                        onSale: false},
    BlackJeansMen =     {image: "../TermekKartyak/BlackJeans.jpg", 
                        name: "Black jeans", 
                        price: 100,
                        gender: "M",
                        type: "clothing",
                        onSale: true},


    
    
                    
    
]

//globális változók
let resultCount = 0
let main = document.querySelector(".row")
let oldalTipus = document.querySelector(".oldalType").innerHTML
let filterGomb = document.getElementById('FilterGombDiv')
let oldalGenderElement = document.querySelector(".oldalgender");
let oldalGender = oldalGenderElement ? oldalGenderElement.innerHTML : "U";

//Függvény végrehajtás és ellenőrzés
for (const termek of termekek) {
    let hozzadadott = KartyaLetrehoz(termek, oldalTipus, oldalGender)
    if (hozzadadott!=false) {
        main.appendChild(hozzadadott)
    }

}

//Függvény létrehozása
function KartyaLetrehoz(termek, tipus, gender) {
    let genderBackup = termek.gender
    if (tipus == "casual" || tipus=="clothing" || tipus == "all") {
        termek.gender=null
    }
    if (tipus=="all") {
        termek.image.slice(1)
    }
    console.log(tipus)
    if (tipus == "all" || tipus == termek.type || gender == termek.gender || termek.gender=="U") {
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
        add_to_cart.href=""
    
        let alja = document.createElement('div');
        alja.className = "alja";
    
        let nev = document.createElement('h1');
        nev.className = "nev";
    
        let price = document.createElement('p');
        price.className = "price";

        let old_price =`<s id="athuzott">${Math.floor(termek.price*1.2)}.00</s>`
    
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
            price.innerHTML+=old_price
        }
        column.appendChild(card);
        akcios.appendChild(akciosP)
        kartyak.appendChild(column);
            
        
        nev.innerHTML=termek.name
            
        kartyakep.src=termek.image
        price.innerHTML+=`$${termek.price-1}.99`
        //console.log(termek.name)
    
        termek.gender = genderBackup
        return kartyak
    }

    return false;
}

let shows = document.getElementsByClassName("kartyak")
let resultKiir = document.getElementById("result")
resultKiir.innerHTML = `Showing all ${shows.length} results`
//Slider szűrő



let minValue = 0;
let maxValue = 1000;

let MinErtekId = document.querySelector("#MinErtekId")
let MaxErtekId = document.querySelector("#MaxErtekId")

let minimum = document.querySelector(".range-slider-input-left").addEventListener( 'input', e => {
	e.target.value = Math.max(e.target.value, e.target.parentNode.childNodes[3].value - (-1));
	var value = (1000 / ( parseInt(e.target.max) - parseInt(e.target.min) )) * parseInt(e.target.value) - (100 / ( parseInt(e.target.max) - parseInt(e.target.min) )) * parseInt(e.target.min)
    MinErtekId.innerHTML = `$${value}`
    minValue=value
    filterGomb.disabled = false
});
let maximum = document.querySelector(".range-slider-input-right").addEventListener( 'input', e => {
	e.target.value = Math.max(e.target.value, e.target.parentNode.childNodes[3].value - (-1));
	var value = (1000 / ( parseInt(e.target.max) - parseInt(e.target.min) )) * parseInt(e.target.value) - (100 / ( parseInt(e.target.max) - parseInt(e.target.min) )) * parseInt(e.target.min)
    MaxErtekId.innerHTML = `$${value}`
    maxValue=value
    filterGomb.disabled = false
});

function sliderSzures() {

        resultCount = 0

       let torles=document.getElementsByClassName("kartyak")

       let szamlalo = torles.length
       for (let torol = 0; torol < szamlalo; torol++) {
        main.removeChild(torles[0])        
       }
        
       for (const termek of termekek) {
        let termekUjra = KartyaLetrehoz(termek, oldalTipus, oldalGender)
        if (termekUjra!=false && (termek.price>=minValue && termek.price<=maxValue)) {
            main.appendChild(termekUjra)
            //console.log(termek.price)
            //console.log(minValue, maxValue)
        }
    

    }
    
    filterGomb.disabled = true

    let shows = document.getElementsByClassName("kartyak")
    resultKiir.innerHTML = `Showing all ${shows.length} results`
    
    console.log("min: "+minValue, "max: "+maxValue)

    if (main.innerHTML=='') {
        let nincs = document.createElement('p')
        nincs.innerHTML="Nincs találat"
        main.appendChild(nincs)
    }

}

// Az oldal összes .card elemének összegyűjtése
const cardElements = document.querySelectorAll('.kartyak');
const container = document.querySelector('.row');
const sortSelect = document.querySelector('#default-sorting');

// Rendezési függvény

function sortCards() {
    const sortingMethod = document.querySelector('#default-sorting').value;
    const cards = Array.from(document.querySelectorAll('.kartyak'));
    
    cards.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.price').textContent.split('$').pop());
        const priceB = parseFloat(b.querySelector('.price').textContent.split('$').pop());

        if (sortingMethod === 'novekvo') {
            return priceA - priceB;
        } else if (sortingMethod === 'csokkeno') {
            return priceB - priceA;
        }
        return 0;
    });
    
    const container = document.querySelector('.row');
    cards.forEach(card => container.appendChild(card));
}

document.querySelector('#default-sorting').addEventListener('change', sortProducts);