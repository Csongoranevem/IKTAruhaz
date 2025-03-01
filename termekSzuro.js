let termekek = [
    oraArany =      {image: "../TermekKartyak/goldenWatch.jpg",
                        name: "Watch (gold)",
                        price: 450, 
                        gender: "M",
                        type: "accessories",
                        onSale: false},
    
    nyaklancEzust = {image: "../TermekKartyak/silverNecklace.jpg", 
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

    gyemantGyuru =  {image: "../TermekKartyak/diamondRing.jpg", 
                        name: "Diamond ring", 
                        price: 349, 
                        gender: "W", 
                        type: "accessories", 
                        onSale: false},


    ezustFulbe =    {image: "../TermekKartyak/silverEarring.jpg", 
                        name: "Silver earring", 
                        price: 79, 
                        gender: "W", 
                        type: "accessories", 
                        onSale: true},

    aranynapszemcsi ={image: "../TermekKartyak/goldenSunglasses.jpg", 
                        name: "Golden sunglasses (Unisex)", 
                        price: 189, 
                        gender: "U", 
                        type: "accessories",
                        onSale: false},

    CollarTshirt =   {image: "../TermekKartyak/collarshirt.jpg", 
                        name: "Collar T-shirt", 
                        price: 19, 
                        gender: "M",
                        type: "casual",
                        onSale: false},
    GentsTshirt =   {image: "../TermekKartyak/gentsTshirt.jpg", 
                        name: "Gents T-shirt", 
                        price: 29, 
                        gender: "M",
                        type: "casual",
                        onSale: true}
    
                    
    
]

//globális változók
let main = document.querySelector(".row")
let oldalTipus = document.querySelector(".oldalType").innerHTML

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
    if (tipus == "casual" || tipus=="clothing") {
        termek.gender=null
        console.log(tipus)
    }
    if (tipus == termek.type || gender == termek.gender || termek.gender=="U") {
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
    
        price.innerHTML="$"+price.innerHTML
    
        //console.log(termek.name)
    
        termek.gender = genderBackup
        return kartyak
    }

    return false;
}

    
    




