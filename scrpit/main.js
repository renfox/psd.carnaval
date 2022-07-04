function gettingAndsetHeight (elem, elem2) {
    let hElem = document.querySelector(elem).scrollHeight;
    document.querySelector(elem2).style.top = hElem + 10 + 'px';
    };
    gettingAndsetHeight('.bg-fashion', '.suggestions');

function addimg (elem, elem2, elem3) {
    let promoBlock = document.querySelectorAll(elem);
    for (let i; i > elem; i++) {
        elem.style.backgroundimg = elem2, elem3;
    };
}
addimg('.benefits__promo-block', '../src/promo-block.png', '../src/promo-block2.png');