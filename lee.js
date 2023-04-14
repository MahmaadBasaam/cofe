let le1 = document.querySelector(".le1");
le1.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

}
let le2 = document.querySelector(".le2");
le2.onclick = function () {
    window.scrollTo({
        top: 1038.75,
        behavior: "smooth"
    })

}
let le3 = document.querySelector(".le3");
le3.onclick = function () {
    window.scrollTo({
        top: 2008.75,
        behavior: "smooth"
    })

}
let typed = new Typed(".type", {
    strings:
        [" Special?", " Evening?"],
    typeSpeed: 120,
    backSpeed: 110,
    loop: true


})
let le4 = document.querySelector(".le4");
le4.onclick = function () {
    window.scrollTo({
        top: 3110,
        behavior: "smooth"
    })

}
console.log(scrollY)