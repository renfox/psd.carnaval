function gettingAndsetHeight (elem, elem2) {
let hElem = document.querySelector(elem).scrollHeight;
document.querySelector(elem2).style.top = hElem + 10 + 'px';
};
document.addEventListener("DOMContentLoaded", gettingAndsetHeight('.bg-fashion', '.suggestions'));