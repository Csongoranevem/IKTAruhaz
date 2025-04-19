//Coupon feltöltés
let main = document.querySelector(".main")

let couponok = [
    {
     cim: "Kari ari csak neked számodra!",
     couponLeiras: "Lepj meg valakit egy csodálatos ajándékkal amit minden nap magán hordhat! Ezzel a kuponnal 15% kedvezményt biztosítunk bármely termék árából a webshopon. Felhasználható 2024. december 31-ig.",
     percent: 15,
     couponimage: "../kupon_kepek/karacsony.jpg"
    },
 
    {
     cim: "Black friday!!!",
     couponLeiras: "Rengeteg ajánlattal és hatalmas akciókkal készül a webshopunk! Szerezz be most pólót, kabátot, sapkát és még sok mást akár 40% kedvezménnyel!",
     percent: 30,
     couponimage: "../kupon_kepek/feketePentek.jpg"
    },
 
    {
     cim: "Húsvéti dinom-dánom",
     couponLeiras: "Meglepetéés! kerüljön a kosárba a legjobb pólóink valamelyike és 10% kedvezményt kapsz hozzá! Ez a kupon egy póló kategóriájú termékre érvényes. Nincs megszabva árminimum. Felhasználható 2025. április 31-ig.",
     percent: 20,
     couponimage: "../kupon_kepek/husvet.jpg"
    } 
 ]
 CouponFeltolt()
 
 
 function CouponFeltolt() {
  
     couponok.forEach(e => {
        couponMain = document.createElement("div")
        couponMain.className = "couponMain"
   

         couponCim = document.createElement("h1")
         couponCim.className = "couponCim"
         couponCim.innerHTML = `${e.cim}`

         couponLeiras = document.createElement("p")
         couponLeiras.className = "couponLeiras"
         couponLeiras.innerHTML = `${e.couponLeiras}`

         couponIMGDiv = document.createElement("div")
         couponIMGDiv.className = "couponIMGDiv"
         couponIMGDiv.style.background = `url(${e.couponimage})`

         couponLearazas = document.createElement("p")
         couponLearazas.className = "couponLearazas"
         couponLearazas.innerHTML = e.percent + "%"

         couponBevaltBTN = document.createElement("button")
         couponBevaltBTN.className = "couponBTN"
         couponBevaltBTN.innerHTML = "Beváltom"

         couponszovegDiv = document.createElement("div")
         couponszovegDiv.className = "couponSzovegDiv"
 
 
         couponIMGDiv.appendChild(couponBevaltBTN)
         couponIMGDiv.appendChild(couponLearazas)
 
         couponszovegDiv.appendChild(couponCim)
         couponszovegDiv.appendChild(couponLeiras)
         couponMain.appendChild(couponszovegDiv)
         couponMain.appendChild(couponIMGDiv)

 
 
         main.appendChild(couponMain)

 
 
     });
 
 }