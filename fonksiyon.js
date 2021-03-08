//toplama fonksiyonu
function toplamaFonk(a, b) {
    let result = a + b;
    console.log(result)
}
//cikarma fonksiyonu
function cikarmaFonk(a, b) {
    let result = a - b;
    console.log(result)
}
//caroma fonsiyonu
function carpmaFonk(a, b) {
    let result = a * b;
    console.log(result)
}

//bolme fonksiyonu
function bolmeFonl(a, b) {
    let result = a / b;
    console.log(result)
}

//fonksiyonlari export ediyoruz.
module.exports = {
    toplam: toplamaFonk,
    fark: cikarmaFonk,
    carpim: carpmaFonk,
    bolum: bolmeFonl
}
