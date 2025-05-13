let termekek = [
    oraArany =          {image: "../TermekKartyak/goldenWatch.jpg",
                        name: "Watch (gold)",
                        price: 450, 
                        gender: "M",
                        type: "accessories",
                        onSale: false,
                        leiras: "Az időt a luxus jegyében! Arany óra, amely minden alkalomhoz illik. Legyen szó egy elegáns vacsoráról vagy egy fontos üzleti találkozóról, ez az óra mindig kiemelkedő kiegészítője lesz a megjelenésednek"
                        },
    
    nyaklancEzust =     {image: "../TermekKartyak/silverNecklace.jpg", 
                        name: "Silver necklace", 
                        price: 79, 
                        gender: "U", 
                        type: "accessories", 
                        onSale: true,
                        leiras: "Egy elegáns nyaklánc, amely mindenkit elvarázsol! A rugalmas méret lehetővé teszi, hogy mindenki a saját stílusához igazíthassa. Tökéletes választás ajándéknak vagy akár saját használatra, hogy kitűnj a tömegből."
                        },

    vastagKarkotoArany ={image: "../TermekKartyak/goldenBraceletThick.jpg", 
                        name: "Golden Bracelet", 
                        price: 219, 
                        gender: "W", 
                        type: "accessories", 
                        onSale: false,
                        leiras: "Ez az elegáns, 18 karátos aranyból készült karperec kiemeli stílusodat. A vastag kialakítás eleganciát és fényt hoz a mindennapokba, miközben a legjobb minőségű arany biztosítja, hogy hosszú távon is megőrzi ragyogását."
                        },

    vekonyKarkotoArany ={image: "../TermekKartyak/goldenBraceletThin.jpg", 
                        name: "Golden Bracelet thin version ", 
                        price: 179, 
                        gender: "W",
                        type: "accessories", 
                        onSale: false,
                        leiras: "Ha nem szereted a vastag karkötőket, ez a vékony változat a tökéletes választás! Diszkrét, mégis elegáns, és minden női csuklón jól mutat. Arany színű, finoman csillogó dizájnja bármilyen outfithez passzol."
                        },

    gyemantGyuru =      {image: "../TermekKartyak/diamondRing.jpg", 
                        name: "Diamond ring", 
                        price: 349, 
                        gender: "W", 
                        type: "accessories", 
                        onSale: false,
                        leiras: "Egy valódi gyémánt gyűrű, amely tökéletes választás bármilyen különleges alkalomra. A csillogó kő és a kifinomult dizájn egyedivé teszi ezt a darabot. Ajándékba, eljegyzéshez vagy csak egyszerűen, hogy megajándékozd magad!"
                        },

    ezustFulbe =        {image: "../TermekKartyak/silverEarring.jpg", 
                        name: "Silver earring", 
                        price: 80, 
                        gender: "W", 
                        type: "accessories", 
                        onSale: true,
                        leiras: "Egy klasszikus, finom ezüst fülbevaló, ami tökéletes választás a hétköznapokra és a különleges eseményekre egyaránt. A letisztult dizájn bármilyen stílushoz illik, legyen szó formális vagy laza megjelenésről."
                        },

    aranynapszemcsi =   {image: "../TermekKartyak/goldenSunglasses.jpg", 
                        name: "Golden sunglasses (Unisex)", 
                        price: 180, 
                        gender: "U", 
                        type: "accessories",
                        onSale: false,
                        leiras: "A napsütéses napok elengedhetetlen kelléke! Ez a divatos, arany színű napszemüveg mindenki számára tökéletes választás, aki szeretne egy kis eleganciát csempészni a mindennapjaiba, miközben megvédi a szemet a napfénytől."},

    CollarTshirt =      {image: "../TermekKartyak/collarshirt.jpg", 
                        name: "Collar T-shirt", 
                        price: 20, 
                        gender: "M",
                        type: "casual",
                        onSale: false,
                        leiras: "Egy egyszerű, de stílusos póló gallérral, amely tökéletes alapdarabja lesz a férfi ruhatáradnak. Kényelmes, laza viselet, amelyet akár sportos, akár casual megjelenéshez is viselhetsz."},

    GentsTshirt =       {image: "../TermekKartyak/gentsTshirt.jpg", 
                        name: "Gents T-shirt", 
                        price: 30, 
                        gender: "M",
                        type: "casual",
                        onSale: true,
                        leiras: "Egy kényelmes, laza férfi póló, amely minden alkalomra megfelelő. A sima dizájn és a kényelmes anyag biztosítja, hogy egész nap jól érezd magad benne. Kiváló választás mindennapi viselethez."},

    Ladieshat =         {image: "../TermekKartyak/sapkasarga.jpg", 
                        name: "Ladies Hat", 
                        price: 50, 
                        gender: "W",
                        type: "casual",
                        onSale: false,
                        leiras: "Egy elegáns női kalap, amely nemcsak a napsütés ellen véd, hanem stílust is ad viselőjének. Tökéletes kiegészítő a nyári napokra, strandoláshoz vagy akár városi sétákhoz."},

    LeatherJacket =     {image: "../TermekKartyak/LeatherJacket.jpg", 
                        name: "Leather Jacket", 
                        price: 49, 
                        gender: "M",
                        type: "clothing",
                        onSale: true,
                        leiras: "A bőrkabát igazi klasszikus, amely mindig trendi. Kényelmes, ugyanakkor elegáns megjelenést biztosít, miközben remekül védi a hidegtől. Tökéletes választás az őszi vagy tavaszi hónapokban."},

    BlueTshirt =        {image: "../TermekKartyak/BlueT-shirt.jpg", 
                        name: "Blue T-shirt", 
                        price: 50, 
                        gender: "W",
                        type: "casual",
                        onSale: false,
                        leiras: "Egy egyszerű, mégis figyelemfelkeltő kék színű női póló, amely alapdarabja minden ruhatárnak. Kényelmes, laza szabású, amely mindennapi viselethez ideális."},

    PrintedTops =       {image: "../TermekKartyak/PrintedTops.jpg", 
                        name: "Printed Tops", 
                        price: 75, 
                        gender: "W",
                        type: "casual",
                        onSale: false,
                        leiras: "Egy színes, nyomtatott női felső, amely feldobja a napjaidat. A mintás dizájn friss és fiatalos hangulatot kölcsönöz, így egyedi megjelenést biztosít minden alkalomra."},

    WhiteTshirt  =      {image: "../TermekKartyak/feherPoloLatina.jpg", 
                        name: "Loose T-shirt (White)", 
                        price: 60, 
                        gender: "W",
                        type: "casual",
                        onSale: false,
                        leiras: "Egy laza szabású, fehér póló, amely tökéletes választás a kényelmes mindennapokhoz. Letisztult, minimalista dizájnja lehetővé teszi, hogy könnyedén kombinálhass más darabokkal."},

    WhitePJacket  =      {image: "../TermekKartyak/WhitePJacket.jpg", 
                        name: "Winter jacket (White)", 
                        price: 80, 
                        gender: "W",
                        type: "clothing",
                        onSale: false,
                        leiras: "Egy elegáns fehér télikabát, amely nemcsak a hideg ellen véd, hanem stílusos megjelenést is biztosít a téli hónapokban. A könnyű, mégis meleg anyag kiváló választás a hideg időben."},

    WhiteThinJacket  =      {image: "../TermekKartyak/WhiteThinJacket.jpg", 
                        name: "White coat", 
                        price: 110, 
                        gender: "W",
                        type: "clothing",
                        onSale: true,
                        leiras: "Egy elegáns, fehér télikabát, amely kiemeli a nőies vonásokat. Tökéletes kiegészítő a téli hónapokban, miközben meleg és kényelmes viseletet biztosít."},

    patternedSocks =    {image: "../TermekKartyak/patternedSocks.jpg", 
                        name: "Patterned Socks", 
                        price: 10, 
                        gender: "U",
                        type: "accessories",
                        onSale: false,
                        leiras: "Színes és mintás zoknik, amelyek minden napodat vidámabbá teszik. Kényelmes anyagból készültek, és tökéletesek mindennapi viseletre."},

    TrumpSocks   =      {image: "../TermekKartyak/TrumpSocks.jpg", 
                        name: "Make socks great again", 
                        price: 9430,
                        gender: "M",
                        type: "accessories",
                        onSale: false,
                        leiras: "A legkülönlegesebb zoknik, amelyek egyedülálló stílust hoznak! A dizájn szórakoztató és figyelemfelkeltő, garantáltan beszédtémát adnak. A nagy ár egy különleges darabot takar, amit mindenki észre fog venni."},

    blueSocks   =       {image: "../TermekKartyak/blueSocks.jpg", 
                        name: "Dark Blue socks", 
                        price: 20,
                        gender: "U",
                        type: "accessories",
                        onSale: false,
                        leiras: "Kényelmes, sötétkék zoknik, amelyek remekül passzolnak mindennapi ruhadarabjaidhoz. Klasszikus és praktikus választás, ami minden alkalomra ideális."},

    DarkBlueJacket =    {image: "../TermekKartyak/DarkBlueJacketMen.jpg", 
                        name: "Dark Blue Jacket", 
                        price: 100,
                        gender: "M",
                        type: "clothing",
                        onSale: false,
                        leiras: "Egy elegáns sötétkék férfi kabát, amely stílust és kényelmet biztosít. A hagyományos szabás modern részletekkel ötvöződik, így ideális választás hűvösebb időben."},

    WhiteJacket =       {image: "../TermekKartyak/WhiteJacketMen.jpg", 
                        name: "White Jacket", 
                        price: 100,
                        gender: "M",
                        type: "clothing",
                        onSale: false,
                        leiras: "Egy tiszta, fehér férfi kabát, amely könnyedén kombinálható különböző színekhez. A letisztult dizájn és a kényelmes anyag tökéletes választás a tavaszi és őszi hónapokhoz."},

    BlackJeansMen =     {image: "../TermekKartyak/BlackJeans.jpg", 
                        name: "Black jeans", 
                        price: 100,
                        gender: "M",
                        type: "clothing",
                        onSale: true,
                        leiras: "A klasszikus fekete farmer, amely minden férfi gardróbjának alapdarabja. Kényelmes, jól illeszkedő szabás, amely bármilyen alkalomra megfelelő."},


    
    
                    
    
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
    let imagebackup = termek.image
    if (tipus == "casual" || tipus=="clothing" || tipus == "all") {
        termek.gender=null
    }

    if (tipus == "all") {
        termek.image = termek.image.substr(1)
    }
    //console.log(tipus)
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
    
        let szemIC = document.createElement('div');
        szemIC.className = "szemikon";
        szemIC.id="szemDiv"

        ///console.log(termek)
    
        let szemIMG = document.createElement('img')

        if (tipus == "all") {
            szivIMG.src = "./TermekKartyak/sziv.png"
            szemIMG.src = "./TermekKartyak/szem.png"
        }
        else
        {
            szivIMG.src = "../TermekKartyak/sziv.png"
            szemIMG.src = "../TermekKartyak/szem.png"

        }

        let add_to_cart = document.createElement('a');
        add_to_cart.className = "add-to-cart";
        add_to_cart.innerHTML="Add to cart"
        add_to_cart.href = "#";
add_to_cart.addEventListener("click", function(e) {
    e.preventDefault();
    kosarhozAd(termek);
});
    
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

        szemIC.addEventListener('click', () => {
            Popup(termek);
        });
    
        termek.gender = genderBackup
        termek.image = imagebackup
        
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


function Popup(termekAdatok) {

    //console.log(termekAdatok.name)

    //ez itt egy ellenőrzés
    const existingPopup = document.getElementById('popUpMain');
    if (existingPopup) {
        existingPopup.remove();
    }

    let popUpMain = document.createElement('div')
    popUpMain.className = "modal"
    popUpMain.id = "popUpMain"

    let popUpCont = document.createElement('div')
    popUpCont.className = "modal-content"
    let popUpIMG = document.createElement('img')
    popUpIMG.className = "modal-img"


    let popUpClose = document.createElement('div')
    popUpClose.className = "close"
    popUpClose.innerHTML = "X"



    popUpCont.innerHTML = `<h2>${termekAdatok.name}</h2><p class="price">Price: $${termekAdatok.price}</p><p class="popUpLeiras">${termekAdatok.leiras}</p>`; 
    if (oldalTipus == "all") {
        popUpIMG.src = termekAdatok.image.substr(1)
    }
    else{
        popUpIMG.src = termekAdatok.image
    }

    popUpMain.appendChild(popUpClose)
    popUpMain.appendChild(popUpIMG)
    popUpMain.appendChild(popUpCont)

    document.body.appendChild(popUpMain);

    popUpClose.addEventListener('click', () => {
        ClosePopUp()});  

    document.getElementById('popUpMain').style.display = "flex";
}

function ClosePopUp() {
    document.getElementById('popUpMain').style.display = 'none'
}

let kosar = [];

// Kosár ikon esemény
document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.getElementById('cart-icon');
    const cartPreview = document.getElementById('cart-preview');

    cartIcon.addEventListener('click', () => {
        cartPreview.classList.toggle('visible');
        renderCartPreview();
    });
});

// Kosárhoz adás funkció
function kosarhozAd(termek) {
    let megvane = kosar.find(item => item.name === termek.name);
    if (megvane) {
        megvane.qty += 1;
    } else {
        kosar.push({...termek, qty: 1});
    }
    document.getElementById("cart-count").textContent = kosar.reduce((acc, item) => acc + item.qty, 0);
}

// Kosár megjelenítés
function renderCartPreview() {
    const cartPreview = document.getElementById('cart-preview');
    cartPreview.innerHTML = kosar.length === 0 ? "<p>A kosár üres.</p>" : "";
    
    kosar.forEach(item => {
        const p = document.createElement("p");
        p.textContent = `${item.name} x${item.qty} – $${item.price}`;
        cartPreview.appendChild(p);
    });
}
