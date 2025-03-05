function KepKlikkTeszt(){
    alert("Haiii")
}

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
})
BlogRateCsillag2.addEventListener('mouseover',()=>{
    for(let i = 0; i < BlogCsillagKepTomb.length; i++){
        BlogCsillagKepTomb[i].src="../Blog képek/star-602148_1280.png"
    }
    BlogRateCsillag1.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag2.src="../Blog képek/CsillagNarancs.png"
})
BlogRateCsillag3.addEventListener('mouseover',()=>{
    for(let i = 0; i < BlogCsillagKepTomb.length; i++){
        BlogCsillagKepTomb[i].src="../Blog képek/star-602148_1280.png"
    }
    BlogRateCsillag1.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag2.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag3.src="../Blog képek/CsillagNarancs.png"
})
BlogRateCsillag4.addEventListener('mouseover',()=>{
    for(let i = 0; i < BlogCsillagKepTomb.length; i++){
        BlogCsillagKepTomb[i].src="../Blog képek/star-602148_1280.png"
    }
    BlogRateCsillag1.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag2.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag3.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag4.src="../Blog képek/CsillagNarancs.png"
})
BlogRateCsillag5.addEventListener('mouseover',()=>{
    for(let i = 0; i < BlogCsillagKepTomb.length; i++){
        BlogCsillagKepTomb[i].src="../Blog képek/star-602148_1280.png"
    }
    BlogRateCsillag1.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag2.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag3.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag4.src="../Blog képek/CsillagNarancs.png"
    BlogRateCsillag5.src="../Blog képek/CsillagNarancs.png"
})


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


let Blogok = [
    UjAjanlatok = {
        title: "Új ajánlatok!",
        date: "2025.01.22",
        img: "../Blog képek/aaaaaaa2.jpg",
        description: "Ha valami különlegeset keresel, amit sehol máshol nem találsz, látogass el hozzánk! Itt minden termék egyedi és személyre szabott, legyen szó varázslatos könyvekről, ritka kincsekről vagy egy-egy mesebeli kiegészítőről. Minden sarkon új meglepetés vár, és garantáltan találkozhatsz olyan tárgyakkal, amelyek megváltoztatják a napodat. Gyere el és engedd, hogy a fantáziád szárnyaljon!",
        rating: 3.4,
    },
    Webshop = {
        title: "WEBSHOP",
        date: "2024.12.08",
        img: "../Blog képek/webshop.png",
        description: "Kedves Vásárlóink.\nÖrömmel értesítünk benneteket, hogy végre elindítottuk az új webshopunkat! Mostantól még könnyebben és kényelmesebben vásárolhattok kedvenc termékeinkből, mindössze néhány kattintással, akár otthonról, akár úton! 😊",
        rating: 4.6,
    },
    KAkcio = {
        title: "Hatalmas Karácsonyi Akciók!",
        date: "2024.11.11",
        img: "../Blog képek/aaa3.jfif",
        description: "Kedves Vásárlóink!\nAz év legvarázslatosabb időszaka elérkezett, és mi szeretnénk segíteni abban, hogy az ünnepi készülődés még különlegesebb legyen! 🌟 A Csudajó Áruház webshopjában most indulnak a Karácsonyi Akcióink, ahol fantasztikus kedvezményekkel várunk Titeket!",
        rating: 4.6,
    },
    Ujdonsag = {
        title: "Újdonságok",
        date: "2024.10.04",
        img: "../Blog képek/ruha5.jpg",
        description: "Kedves Vásárlóink!\nItt mindent megtalálsz, amire szükséged van, hogy egyszerűbbé tedd a vásárlást és friss híreket kapj legújabb termékeinkről. Akár divat, technológia, otthoni kiegészítők, vagy ajándékötletek – nálunk biztosan rátalálsz a tökéletes darabra. Ne hagyd ki heti akcióinkat és különleges ajánlatainkat sem! Tarts velünk és fedezd fel a legújabb trendeket, hogy mindig egy lépéssel előrébb járhass a vásárlásban.",
        rating: 2.3
    },
    TorzsVasarlo = {
        title: "Törzsvásárlói kedvezmény",
        date: "2024.10.04",
        img: "../Blog képek/ruha6.jpg",
        description: "Kedves Vásárlóink!\nHa már törzsvásárlónk vagy, akkor jó híreink vannak számodra! Mostantól még nagyobb kedvezményekkel kedveskedünk neked, hogy még többet spórolhass a kedvenc termékeid vásárlásakor. Minden egyes vásárlással gyűjtött pontjaidat felhasználhatod, ráadásul exkluzív akcióink és VIP ajánlataink is elérhetők számodra. ",
        rating: 3.8,
    },
    KandA = {
        title: "Kuponok és akciók",
        date: "2019.03.22",
        img: "../Blog képek/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg",
        description: "",
        rating: 5
    },
    Sapis = {
        title: "Bábúk ilyen sapkával rajtuk",
        date: "2021.08.11",
        img: "../Blog képek/ruha3.jpg",
        description: "",
        rating: 4.9,
    },
    Koltozes = {
        title: "Elköltöztünk!",
        date: "2021.07.02",
        img: "../Blog képek/ruha4.jpg",
        description: "",
        rating: 4.8,
    },
    LimitaltR = {
        title: "Limitált ruhák",
        date: "2020.10.28",
        img: "../Blog képek/ruha7.jpg",
        description: "",
        rating: 4.7,
    },
    UjNadragok = {
        title: "Új nadrágok!",
        date: "2019.09.09",
        img: "../Blog képek/ruha8.jpg",
        description: "",
        rating: 4.5
    }
]

let Kereso = document.getElementById("BlogSearchBarId")

function BlogKereses(){
    alert("A")
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
    }
    
}