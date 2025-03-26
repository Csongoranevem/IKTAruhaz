let Blogok = [
    UjAjanlatok = {
        id: 1,
        title: "Új ajánlatok!",
        date: "2025.01.22",
        img: "../Blog képek/aaaaaaa2.jpg",
        description: "Ha valami különlegeset keresel, amit sehol máshol nem találsz, látogass el hozzánk! Itt minden termék egyedi és személyre szabott, legyen szó varázslatos könyvekről, ritka kincsekről vagy egy-egy mesebeli kiegészítőről. Minden sarkon új meglepetés vár, és garantáltan találkozhatsz olyan tárgyakkal, amelyek megváltoztatják a napodat. Gyere el és engedd, hogy a fantáziád szárnyaljon!",
        rating: 3.4,
        trending: 81
    },
    Webshop = {
        id: 2,
        title: "WEBSHOP",
        date: "2024.12.08",
        img: "../Blog képek/webshop.png",
        description: "Kedves Vásárlóink.\nÖrömmel értesítünk benneteket, hogy végre elindítottuk az új webshopunkat! Mostantól még könnyebben és kényelmesebben vásárolhattok kedvenc termékeinkből, mindössze néhány kattintással, akár otthonról, akár úton! 😊",
        rating: 4.6,
        trending: 55,
    },
    KAkcio = {
        id: 3,
        title: "Hatalmas Karácsonyi Akciók!",
        date: "2024.11.11",
        img: "../Blog képek/aaa3.jfif",
        description: "Kedves Vásárlóink!\nAz év legvarázslatosabb időszaka elérkezett, és mi szeretnénk segíteni abban, hogy az ünnepi készülődés még különlegesebb legyen! 🌟 A Csudajó Áruház webshopjában most indulnak a Karácsonyi Akcióink, ahol fantasztikus kedvezményekkel várunk Titeket!",
        rating: 4.6,
        trending: 12,
    },
    Ujdonsag = {
        id: 4,
        title: "Újdonságok",
        date: "2024.10.04",
        img: "../Blog képek/ruha5.jpg",
        description: "Kedves Vásárlóink!\nItt mindent megtalálsz, amire szükséged van, hogy egyszerűbbé tedd a vásárlást és friss híreket kapj legújabb termékeinkről. Akár divat, technológia, otthoni kiegészítők, vagy ajándékötletek – nálunk biztosan rátalálsz a tökéletes darabra. Ne hagyd ki heti akcióinkat és különleges ajánlatainkat sem! Tarts velünk és fedezd fel a legújabb trendeket, hogy mindig egy lépéssel előrébb járhass a vásárlásban.",
        rating: 2.3,
        trending: 83,
    },
    TorzsVasarlo = {
        id: 5,
        title: "Törzsvásárlói kedvezmény",
        date: "2024.10.04",
        img: "../Blog képek/ruha6.jpg",
        description: "Kedves Vásárlóink!\nHa már törzsvásárlónk vagy, akkor jó híreink vannak számodra! Mostantól még nagyobb kedvezményekkel kedveskedünk neked, hogy még többet spórolhass a kedvenc termékeid vásárlásakor. Minden egyes vásárlással gyűjtött pontjaidat felhasználhatod, ráadásul exkluzív akcióink és VIP ajánlataink is elérhetők számodra. ",
        rating: 3.8,
        trending: 42,
    },
    KandA = {
        id: 6,
        title: "Kuponok és akciók",
        date: "2019.03.22",
        img: "../Blog képek/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg",
        description: "Webáruházunkban mindig fontosnak tartjuk, hogy a legjobb ajánlatokat kínáljuk vásárlóinknak! Nézd meg legújabb kuponjainkat és akcióinkat, hogy még többet spórolhass a legnépszerűbb termékeken. Ne hagyd ki a szezonális leárazásokat, vagy a különleges kedvezményeket, amelyek csak korlátozott ideig érhetők el! Iratkozz fel hírlevelünkre, és mindig elsőként értesülhetsz a legújabb kuponkódokkal",
        rating: 5,
        trending: 68
    },
    Sapis = {
        id: 7,
        title: "Bábúk ilyen sapkával rajtuk",
        date: "2021.08.11",
        img: "../Blog képek/ruha3.jpg",
        description: "Örömmel értesítünk, hogy legújabb sapkáink már elérhetők webáruházunkban! Különleges, trendi dizájnok és prémium minőség vár rád – legyen szó sportos, klasszikus vagy éppen egyedi stílusról, nálunk mindenki megtalálja a tökéletes darabot. Ne hagyd ki az új kollekciót, és frissítsd a tavaszi/nyári ruhatáradat egy stílusos sapkával! Vásárolj most, és élvezd az új dizájnok kényelmét és egyediségét!",
        rating: 4.9,
        trending: 77
    },
    Koltozes = {
        id: 8,
        title: "Elköltöztünk!",
        date: "2021.07.02",
        img: "../Blog képek/ruha4.jpg",
        description: "Örömmel értesítünk, hogy webáruházunk mostantól új, még gyorsabb és felhasználóbarátabb platformon érhető el! A költözés célja, hogy még jobb vásárlási élményt nyújthassunk nektek. Az új oldalunkon gyorsabban navigálhattok, könnyebben találhatjátok meg kedvenc termékeiteket, és az új designnak köszönhetően még egyszerűbbé válik a vásárlás. Ne aggódj, minden eddigi rendelésed és fiókadat megőriztük! Látogass el új weboldalunkra, és fedezd fel a frissített dizájnt és kényelmesebb vásárlást!",
        rating: 4.8,
        trending: 2
    },
    LimitaltR = {
        id: 9,
        title: "Limitált ruhák",
        date: "2020.10.28",
        img: "../Blog képek/ruha7.jpg",
        description: "Exkluzív ajánlat! Webáruházunkban most elérhetők a legkülönlegesebb, limitált kiadású ruhadarabok, amelyek soha többé nem kerülnek vissza a készletre! Csak pár darab áll rendelkezésre, és amikor elérik a készlet végét, vége – nincs több esély a beszerzésükre. Ha szeretnél igazán egyedi darabokat, amelyek nem találhatók meg bárhol, most van itt az idő! Ne maradj le, vásárolj most, és tedd egyedivé a ruhatáradat!",
        rating: 4.7,
        trending: 50,
    },
    UjNadragok = {
        id: 10,
        title: "Új nadrágok!",
        date: "2019.09.09",
        img: "../Blog képek/ruha8.jpg",
        description: "Friss, trendi és kényelmes – megérkeztek a legújabb nadrágjaink! A tavaszi és nyári szezonra tervezett modellek között biztosan megtalálod a tökéletes darabot, legyen szó sportos, elegáns vagy éppen laza hétköznapi stílusról. A prémium anyagok és a modern szabás minden mozdulatot kényelmessé tesznek, miközben a legújabb divatot képviselik. Ne hagyd ki az új kollekciót, és frissítsd a gardróbodat a legújabb nadrágokkal! Vásárolj most, és légy mindig stílusos!",
        rating: 4.5,
        trending: 98,
    },
    {
        id: 11,
        title: "Tavaszi Akciók!",
        date: "2025.03.01",
        img: "../Blog képek/ruha5.jpg", // Meglévő kép újrahasznosítva
        description: "Itt a tavasz, és mi nem hagyjuk ki! Fedezd fel a legújabb tavaszi akcióinkat, és frissítsd fel a gardróbodat a szezon legújabb darabjaival! Akár sportos, akár elegáns, nálunk biztosan megtalálod a tökéletes ruhákat és kiegészítőket.",
        rating: 4.2,
        trending: 45,
    },

    {
        id: 12,
        title: "Új Tech Kütyük!",
        date: "2025.02.15",
        img: "../Blog képek/ruha6.jpg", // Meglévő kép újrahasznosítva
        description: "A legújabb technológiai kütyük most már elérhetőek webáruházunkban! Frissítsd a mindennapjaidat okos eszközökkel, legyen szó telefonokról, okosórákról vagy kiegészítőkről. Ne hagyd ki a legújabb újdonságokat!",
        rating: 4.8,
        trending: 62,
    },

    {
        id: 13,
        title: "Tavaszi Újdonságok!",
        date: "2025.03.10",
        img: "../Blog képek/ruha7.jpg", // Meglévő kép újrahasznosítva
        description: "Itt vannak a tavaszi újdonságok! Nézd meg a legújabb termékeinket, amelyek frissítik a tavaszi ruhatáradat! Különleges anyagok, trendi dizájnok és prémium minőség jellemzi az új kollekciót.",
        rating: 4.5,
        trending: 56,
    },

    {
        id: 14,
        title: "Tavaszi Meglepetés Ajánlatok",
        date: "2025.03.18",
        img: "../Blog képek/aaaaaaa2.jpg", // Meglévő kép újrahasznosítva
        description: "Ne hagyd ki a tavaszi meglepetéseinket! Különleges ajánlatok, akciók és kuponok várnak rád. Vásárolj most és spórolj a legnépszerűbb termékeinkkel! Legyél te az első, aki megtudja az új kedvezményeket.",
        rating: 4.3,
        trending: 39,
    },

    {
        id: 15,
        title: "Tavaszi Kiegészítők",
        date: "2025.03.22",
        img: "../Blog képek/ruha8.jpg", // Meglévő kép újrahasznosítva
        description: "A tavaszi szezonhoz elérkeztek a legújabb kiegészítőink! Válaszd ki a tökéletes tavaszi táskát, napszemüveget, vagy egyéb divatos kiegészítőket, hogy stílusos legyél a friss tavaszi napokon.",
        rating: 4.7,
        trending: 72,
    },
    {
        id: 16,
        title: "Tavaszi Kiegészítők Új Kollekciója",
        date: "2025.03.25",
        img: "../Blog képek/ruha3.jpg", // Meglévő kép újrahasznosítva
        description: "Ne hagyd ki az új tavaszi kiegészítőinket! Táskáink, ékszereink és egyéb divatos kiegészítőink a legújabb trendeknek megfelelően érkeztek. Tökéletesen illeszkednek a tavaszi stílushoz, és garantáltan feldobják a megjelenésedet.",
        rating: 4.6,
        trending: 81,
    },

    {
        id: 17,
        title: "Exkluzív Őszi Kollekciók",
        date: "2024.09.15",
        img: "../Blog képek/ruha4.jpg", // Meglévő kép újrahasznosítva
        description: "Ne hagyd ki az őszi kollekciónkat! Új ruhák, cipők és kiegészítők érkeztek, amelyek tökéletesek a hűvösebb napokra. Kényelmes és stílusos darabokat találhatsz, amelyek segítenek a hűvösebb időben is divatosnak maradni.",
        rating: 4.4,
        trending: 58,
    },

    {
        id: 18,
        title: "Újdonságok a Webshopunkban!",
        date: "2025.02.05",
        img: "../Blog képek/webshop.png", // Meglévő kép újrahasznosítva
        description: "Webshopunk új termékekkel bővült! Böngéssz az új kedvezményes ajánlatok között, és szerezd meg a legújabb termékeket a legjobb árakon. A webáruházunkban most minden könnyebben elérhető, mint valaha!",
        rating: 4.7,
        trending: 90,
    },

    {
        id: 19,
        title: "Tavaszi Divat",
        date: "2025.04.01",
        img: "../Blog képek/ruha6.jpg", // Meglévő kép újrahasznosítva
        description: "A tavaszi divat idén egyedülálló stílust képvisel. Fedezd fel az új szezon legjobb darabjait, a friss színek és divatos szabások mindenkit elvarázsolnak. Vásárolj most, és frissítsd fel a tavaszi gardróbodat!",
        rating: 4.8,
        trending: 65,
    },

    {
        id: 20,
        title: "Szezonális Akciók",
        date: "2025.03.30",
        img: "../Blog képek/ruha7.jpg", // Meglévő kép újrahasznosítva
        description: "Ne hagyd ki szezonális akcióinkat! Csak most, korlátozott ideig fantasztikus kedvezményekkel vásárolhatsz a legnépszerűbb termékeinkből. Vásárolj most, és szerezd meg a legjobb ajánlatokat!",
        rating: 4.9,
        trending: 72,
    }
]

let BalBlogok = []
let JobbBlogok = []

let csillagok = document.getElementById("BlogRateCsillagokDiv")
let bloggomb = document.getElementById("BlogRateGomb").addEventListener('mouseover',() => {
    csillagok.style.display = "block";
})
let bloggomb2 = document.getElementById("BlogRateGomb").addEventListener('mouseout',() => {
    csillagok.style.display = "none";
})

let blogratediv = document.getElementById("BlogRateCsillagokDiv").addEventListener('mouseover',()=>{
    csillagok.style.display = "block"
})
let blogratediv2 = document.getElementById("BlogRateCsillagokDiv").addEventListener('mouseout',()=>{
    csillagok.style.display = "none"
})



let BlogRateCsillag1 = document.getElementById("BlogCsillag1")
let BlogRateCsillag2 = document.getElementById("BlogCsillag2")
let BlogRateCsillag3 = document.getElementById("BlogCsillag3")
let BlogRateCsillag4 = document.getElementById("BlogCsillag4")
let BlogRateCsillag5 = document.getElementById("BlogCsillag5")
let BlogCsillagKepTomb = [BlogRateCsillag1,BlogRateCsillag2,BlogRateCsillag3,BlogRateCsillag4,BlogRateCsillag5]

BlogRateCsillag1.addEventListener('mouseover',()=>{
    for(let i = 0; i < BlogCsillagKepTomb.length; i++){
        BlogCsillagKepTomb[i].src="../Blog képek/star-602148_1280.png"
    }
    BlogRateCsillag1.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag2.style.transform = "translate(0px,0px)"
    BlogRateCsillag2.style.transform = "rotate(0deg)"
    BlogRateCsillag3.style.transform = "translate(0px,0px)"
    BlogRateCsillag3.style.transform = "rotate(0deg)"
    BlogRateCsillag4.style.transform = "translate(0px,0px)"
    BlogRateCsillag4.style.transform = "rotate(0deg)"
    BlogRateCsillag5.style.transform = "translate(0px,0px)"
    BlogRateCsillag5.style.transform = "rotate(0deg)"
    BlogRateCsillag1.style.transform = "translate(0px,-3px)"
    BlogRateCsillag1.style.transform = "rotate(11deg)"
})
BlogRateCsillag2.addEventListener('mouseover',()=>{
    for(let i = 0; i < BlogCsillagKepTomb.length; i++){
        BlogCsillagKepTomb[i].src="../Blog képek/star-602148_1280.png"
    }
    BlogRateCsillag1.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag1.style.transform = "translate(0px,0px)"
    BlogRateCsillag1.style.transform = "rotate(0deg)"
    BlogRateCsillag3.style.transform = "translate(0px,0px)"
    BlogRateCsillag3.style.transform = "rotate(0deg)"
    BlogRateCsillag4.style.transform = "translate(0px,0px)"
    BlogRateCsillag4.style.transform = "rotate(0deg)"
    BlogRateCsillag5.style.transform = "translate(0px,0px)"
    BlogRateCsillag5.style.transform = "rotate(0deg)"
    BlogRateCsillag2.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag2.style.transform = "translate(0px,-2px)"
    BlogRateCsillag2.style.transform = "rotate(11deg)"

})
BlogRateCsillag3.addEventListener('mouseover',()=>{
    for(let i = 0; i < BlogCsillagKepTomb.length; i++){
        BlogCsillagKepTomb[i].src="../Blog képek/star-602148_1280.png"
    }
    BlogRateCsillag1.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag1.style.transform = "translate(0px,0px)"
    BlogRateCsillag1.style.transform = "rotate(0deg)"
    BlogRateCsillag2.style.transform = "translate(0px,0px)"
    BlogRateCsillag2.style.transform = "rotate(0deg)"
    BlogRateCsillag4.style.transform = "translate(0px,0px)"
    BlogRateCsillag4.style.transform = "rotate(0deg)"
    BlogRateCsillag5.style.transform = "translate(0px,0px)"
    BlogRateCsillag5.style.transform = "rotate(0deg)"
    BlogRateCsillag2.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag3.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag3.style.transform = "translate(0px,-2px)"
    BlogRateCsillag3.style.transform = "rotate(11deg)"

})
BlogRateCsillag4.addEventListener('mouseover',()=>{
    for(let i = 0; i < BlogCsillagKepTomb.length; i++){
        BlogCsillagKepTomb[i].src="../Blog képek/star-602148_1280.png"
    }
    BlogRateCsillag1.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag1.style.transform = "translate(0px,0px)"
    BlogRateCsillag1.style.transform = "rotate(0deg)"
    BlogRateCsillag2.style.transform = "translate(0px,0px)"
    BlogRateCsillag2.style.transform = "rotate(0deg)"
    BlogRateCsillag3.style.transform = "translate(0px,0px)"
    BlogRateCsillag3.style.transform = "rotate(0deg)"
    BlogRateCsillag5.style.transform = "translate(0px,0px)"
    BlogRateCsillag5.style.transform = "rotate(0deg)"
    BlogRateCsillag2.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag3.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag4.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag4.style.transform = "translate(0px,-2px)"
    BlogRateCsillag4.style.transform = "rotate(11deg)"

})
BlogRateCsillag5.addEventListener('mouseover',()=>{
    for(let i = 0; i < BlogCsillagKepTomb.length; i++){
        BlogCsillagKepTomb[i].src="../Blog képek/star-602148_1280.png"
    }
    BlogRateCsillag1.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag1.style.transform = "translate(0px,0px)"
    BlogRateCsillag1.style.transform = "rotate(0deg)"
    BlogRateCsillag2.style.transform = "translate(0px,0px)"
    BlogRateCsillag2.style.transform = "rotate(0deg)"
    BlogRateCsillag3.style.transform = "translate(0px,0px)"
    BlogRateCsillag3.style.transform = "rotate(0deg)"
    BlogRateCsillag4.style.transform = "translate(0px,0px)"
    BlogRateCsillag4.style.transform = "rotate(0deg)"
    BlogRateCsillag2.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag3.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag4.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag5.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag5.style.transform = "translate(0px,-2px)"
    BlogRateCsillag5.style.transform = "rotate(11deg)"

})

function CsillagRateF(Pont){
    for(let i = 0; i < BlogCsillagKepTomb.length; i++){
        BlogCsillagKepTomb[i].src="../Blog képek/star-602148_1280.png"
        BlogCsillagKepTomb[i].style.transform = "translate(0px,0px)"
        BlogCsillagKepTomb[i].style.transform = "rotate(0deg)"
    }
    document.getElementById("BlogRateCsillagokDiv").style.display = "none"
    if(Pont >= 3){
        document.getElementById("RateUziJo").style.display = "block"
        setTimeout(()=>{document.getElementById("RateUziJo").style.display = "none"},1000)
    }
    else{
        document.getElementById("RateUziRossz").style.display = "block"
        setTimeout(()=>{document.getElementById("RateUziRossz").style.display = "none"},1000)
    }
}

let shareIcon = document.getElementById("BlogShareDiv")
let blogSgomb = document.getElementById("BlogShareGomb").addEventListener('mouseover',() => {
    BlogShareDiv.style.display = "flex"
})
let blogSgomb2 = document.getElementById("BlogShareGomb").addEventListener('mouseout',() => {
    BlogShareDiv.style.display = "none"
})
let blogSdib = document.getElementById("BlogShareDiv").addEventListener('mouseover',() => {
    BlogShareDiv.style.display = "flex"
})
let blogSdiv2 = document.getElementById("BlogShareDiv").addEventListener('mouseout',() => {
    BlogShareDiv.style.display = "none"
})

function ShareF(){
    BlogShareDiv.style.display = "none"
    document.getElementById("ShareUzi").style.display = "block"
    setTimeout(() => {document.getElementById("ShareUzi").style.display = "none"}, 1500)
}

function CommentBar(){
    document.getElementById("CommentFulDiv").style.display = "block"
    document.getElementById("CommentUzi").style.display = "none"
    document.getElementById("uzenet").value = ""
}

function CommentBarDis(){
    document.getElementById("CommentUzi").style.display = "block"
    document.getElementById("CommentFulDiv").style.display = "none"
    setTimeout(() => {document.getElementById("CommentUzi").style.display = "none"}, 1500)
}

function BlogSClickF(){
    document.getElementById("BlogShareDiv").style.display = "flex"
}
function BlogRClickF(){
    document.getElementById("BlogRateCsillagokDiv").style.display = "block"
}




let Kereso = document.getElementById("BlogSearchBarId")

function BlogKereses(){
    SortErtek = document.getElementById("BlogKeresesSelectID").value
    BlogRendezes(SortErtek)
    console.log("Valaszto--------------------------------------------------")

    for(let i = 0; i < Blogok.length; i++){
        console.log(Blogok[i])
    }
}
function BlogRendezes(Tevekenyseg){
    let KeresettBlog = document.getElementById("BlogSearchBarId").value.split("")
    console.log(KeresettBlog)
    SzortirozasBlog(Tevekenyseg)
    console.log(BalBlogok.length)
    console.log(JobbBlogok.length)
    if(KeresettBlog == ""){
    }
    else{
        document.querySelectorAll('.JobbKepDivClass').forEach(e => e.remove());
        for(let i = 0; i < Blogok.length; i++){
            for(let k = 0; k < KeresettBlog.length; i++){
                if(Blogok[i].title.toLowerCase().includes(KeresettBlog[k])){
                    JobbKeresFeltolt(i);
                    console.log(Blogok[i].rating)
                }
                else if(Blogok[i].title.toUpperCase().includes(KeresettBlog[k])){
                    JobbKeresFeltolt(i)
                    console.log(Blogok[i].rating)
                }
            }
        }
    }
}

function SzortirozasBlog(SortHogyan){
    if(SortHogyan == "UjOPT"){
        Blogok.sort((a,b) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0))
    }
    else if (SortHogyan == "RegiOPT"){
        Blogok.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0))
    }
    else if (SortHogyan == "NepszeruOPT"){
        Blogok.sort((a, b) => b.rating - a.rating)
    }
    else if (SortHogyan =="OlvasottakOPT"){
        Blogok.sort((a,b) => b.trending - a.trending)
    }
}


let JobbDiv = document.getElementById("JobbBlogDiv")
let BalDiv = document.getElementById("BalBlogDiv")


function StartFel(){
    for (let i = 0; i < Blogok.length; i++){
        let jobbvagybal = Math.floor(Math.random()*2)
            Letrehozas(jobbvagybal,i)
    }
}

function StartFel2(){
    for(let i = 0; i < Blogok.length; i++){
        let jobbvagybal = Math.floor(Math.random()*2)
        Letrehozas2(jobbvagybal,i)
    }
}

function Letrehozas2(hol,hanyas){
    if(hol == 1){

    }
    else{
        let jobbBlogCim = document.createElement('h3');
        
        let jobbBlogDate = document.createElement('h4');

        let jobbBlogCimDiv = document.createElement('div');
        jobbBlogCimDiv.className = "JobbKicsiBal";

        let jobbBlogRMbtn = document.createElement('button');
        jobbBlogRMbtn.className = "JobbKicsiGomb"

        let jobbBlogAnchor = document.createElement('a')
        jobbBlogAnchor.setAttribute("href","blogAloldal.html")

        let jobbBlogGombDiv = document.createElement('div');
        jobbBlogGombDiv.className = "JobbKicsiJobb";

        let jobbBlogTartalomDiv = document.createElement('div');
        jobbBlogTartalomDiv.className = "JobbKicsiNagyDiv";

        let jobbBlogKep = document.createElement('img');
        jobbBlogKep.className = "JobbKepClass";

        let vonal = document.createElement('hr');

        let shh = document.createElement('p');
        shh.className = "hidden";
        shh.innerHTML = "a";

        let jobbEgesz = document.createElement('div');
        jobbEgesz.className = "JobbKepDivClass"


        jobbBlogCim.innerHTML = Blogok[hanyas].title;
        jobbBlogDate.innerHTML = Blogok[hanyas].date;
        jobbBlogKep.src = Blogok[hanyas].img;
        jobbBlogRMbtn.innerHTML = "READ MORE"

        jobbBlogAnchor.appendChild(jobbBlogRMbtn)
        jobbBlogGombDiv.appendChild(jobbBlogAnchor)

        jobbBlogCimDiv.appendChild(jobbBlogCim)
        jobbBlogCimDiv.appendChild(jobbBlogDate)

        jobbBlogTartalomDiv.appendChild(jobbBlogCimDiv)
        
        jobbBlogTartalomDiv.appendChild(jobbBlogGombDiv)

        jobbEgesz.appendChild(jobbBlogKep)
        jobbEgesz.appendChild(jobbBlogTartalomDiv)
        jobbEgesz.appendChild(vonal)
        jobbEgesz.appendChild(shh)

        let JobbEgeszDiv = document.getElementById("JobbEgeszDiv")
        JobbEgeszDiv.appendChild(jobbEgesz) 
    }
}

function JobbKeresFeltolt(keresett){
    let jobbBlogCim = document.createElement('h3');
        
        let jobbBlogDate = document.createElement('h4');

        let jobbBlogCimDiv = document.createElement('div');
        jobbBlogCimDiv.className = "JobbKicsiBal";

        let jobbBlogRMbtn = document.createElement('button');
        jobbBlogRMbtn.className = "JobbKicsiGomb"

        let jobbBlogAnchor = document.createElement('a')
        jobbBlogAnchor.setAttribute("href","blogAloldal.html")

        let jobbBlogGombDiv = document.createElement('div');
        jobbBlogGombDiv.className = "JobbKicsiJobb";

        let jobbBlogTartalomDiv = document.createElement('div');
        jobbBlogTartalomDiv.className = "JobbKicsiNagyDiv";

        let jobbBlogKep = document.createElement('img');
        jobbBlogKep.className = "JobbKepClass";

        let vonal = document.createElement('hr');

        let shh = document.createElement('p');
        shh.className = "hidden";
        shh.innerHTML = "a";

        let jobbEgesz = document.createElement('div');
        jobbEgesz.className = "JobbKepDivClass"


        jobbBlogCim.innerHTML = Blogok[keresett].title;
        jobbBlogDate.innerHTML = Blogok[keresett].date;
        jobbBlogKep.src = Blogok[keresett].img;
        jobbBlogRMbtn.innerHTML = "READ MORE"

        jobbBlogAnchor.appendChild(jobbBlogRMbtn)
        jobbBlogGombDiv.appendChild(jobbBlogAnchor)

        jobbBlogCimDiv.appendChild(jobbBlogCim)
        jobbBlogCimDiv.appendChild(jobbBlogDate)

        jobbBlogTartalomDiv.appendChild(jobbBlogCimDiv)
        
        jobbBlogTartalomDiv.appendChild(jobbBlogGombDiv)

        jobbEgesz.appendChild(jobbBlogKep)
        jobbEgesz.appendChild(jobbBlogTartalomDiv)
        jobbEgesz.appendChild(vonal)
        jobbEgesz.appendChild(shh)

        let JobbEgeszDiv = document.getElementById("JobbEgeszDiv")
        JobbEgeszDiv.appendChild(jobbEgesz)
}

function Letrehozas(hol,hanyas){
    if(hol == 1){
        let balBlogLeiras = document.createElement('p');
        balBlogLeiras.className = "BlogP";

        let balBlogKep = document.createElement('img');
        balBlogKep.className = "BalKepClass";

        let vonal = document.createElement('hr');

        let balBlogLeirasDiv = document.createElement('div');
        balBlogLeirasDiv.className = "BalKepDivClass";

        let balBlogCimSpan = document.createElement('span');
        balBlogCimSpan.className = "BalBlogCimSpan";

        let balBlogCimP = document.createElement('p');
        balBlogCimP.className = "BalBlogCímP";

        let balBlogCimDate = document.createElement('p');
        balBlogCimDate.className = "BalBlogDatumP";

        let balBlogAnchor = document.createElement('a');
        balBlogAnchor.setAttribute("href","blogAloldal.html")


        balBlogLeiras.innerHTML = Blogok[hanyas].description
        balBlogKep.src = Blogok[hanyas].img
        balBlogCimP.innerHTML = Blogok[hanyas].title
        balBlogCimDate.innerHTML = Blogok[hanyas].date


        balBlogLeirasDiv.appendChild(balBlogKep)
        balBlogLeirasDiv.appendChild(balBlogLeiras)
        balBlogLeirasDiv.appendChild(vonal)

        balBlogCimSpan.appendChild(balBlogCimP)
        balBlogCimSpan.appendChild(balBlogCimDate)

        balBlogAnchor.appendChild(balBlogCimSpan)
        balBlogAnchor.appendChild(balBlogLeirasDiv)

        let BalEgeszDiv = document.getElementById("BalFoDiv")
        BalEgeszDiv.appendChild(balBlogAnchor)

        BalBlogok.push(Blogok[hanyas])
    }
    else{
        let jobbBlogCim = document.createElement('h3');
        
        let jobbBlogDate = document.createElement('h4');

        let jobbBlogCimDiv = document.createElement('div');
        jobbBlogCimDiv.className = "JobbKicsiBal";

        let jobbBlogRMbtn = document.createElement('button');
        jobbBlogRMbtn.className = "JobbKicsiGomb"

        let jobbBlogAnchor = document.createElement('a')
        jobbBlogAnchor.setAttribute("href","blogAloldal.html")

        let jobbBlogGombDiv = document.createElement('div');
        jobbBlogGombDiv.className = "JobbKicsiJobb";

        let jobbBlogTartalomDiv = document.createElement('div');
        jobbBlogTartalomDiv.className = "JobbKicsiNagyDiv";

        let jobbBlogKep = document.createElement('img');
        jobbBlogKep.className = "JobbKepClass";

        let vonal = document.createElement('hr');

        let shh = document.createElement('p');
        shh.className = "hidden";
        shh.innerHTML = "a";

        let jobbEgesz = document.createElement('div');
        jobbEgesz.className = "JobbKepDivClass"


        jobbBlogCim.innerHTML = Blogok[hanyas].title;
        jobbBlogDate.innerHTML = Blogok[hanyas].date;
        jobbBlogKep.src = Blogok[hanyas].img;
        jobbBlogRMbtn.innerHTML = "READ MORE"

        jobbBlogAnchor.appendChild(jobbBlogRMbtn)
        jobbBlogGombDiv.appendChild(jobbBlogAnchor)

        jobbBlogCimDiv.appendChild(jobbBlogCim)
        jobbBlogCimDiv.appendChild(jobbBlogDate)

        jobbBlogTartalomDiv.appendChild(jobbBlogCimDiv)
        
        jobbBlogTartalomDiv.appendChild(jobbBlogGombDiv)

        jobbEgesz.appendChild(jobbBlogKep)
        jobbEgesz.appendChild(jobbBlogTartalomDiv)
        jobbEgesz.appendChild(vonal)
        jobbEgesz.appendChild(shh)

        let JobbEgeszDiv = document.getElementById("JobbEgeszDiv")
        JobbEgeszDiv.appendChild(jobbEgesz)

        JobbBlogok.push(Blogok[hanyas])
    }
}




function Szures(Akcio){
    alert("Lefutott")
    switch(Akcio){
        case newest:
            alert("newest");
            break;
        case old:
            alert("old");
            break;
        case rate:
            alert("alert");
            break;
        case trending:
            alert("trending");
            break;
        default:
            alert("Semmi");
            break;
    }
    
}