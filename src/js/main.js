import './slider';


(function() {
    let item = document.querySelectorAll('.nav__item');
    let itemMobile = document.querySelectorAll('.navMobileList__item');

    for (let i=0;i<item.length; i++) {
        item[i].classList.remove('nav__item--active');
        if (item[i].href.match(/(\w)+\.html$/)[0] === document.baseURI.match(/(\w)+\.html$/)[0]) {
            item[i].classList.add('nav__item--active');
        }
        if(document.baseURI.match((/(\w+)\/(\w+\.html)$/))[1] === 'direction') {
             document.querySelector('.dropdown').classList.add('nav__item--active');
        }
    }
    for (let i=0;i<itemMobile.length; i++) {
        itemMobile[i].classList.remove('navMobileList__item--active');
        if (itemMobile[i].href.match(/(\w)+\.html$/)[0] === document.baseURI.match(/(\w)+\.html$/)[0]) {
            itemMobile[i].classList.add('navMobileList__item--active');
        }
    }


    let btnMobile = document.querySelector('.header__mobileBtn');
    let mobileList = document.querySelector('.navMobileList');
    let bntMobileClose = document.querySelector('.navMobile__btn');

    btnMobile.addEventListener('click', function () {
        this.classList.add('hidden');
        mobileList.classList.remove('hidden')

        bntMobileClose.addEventListener('click', function () {
            btnMobile.classList.remove('hidden');
            mobileList.classList.add('hidden')
        })
    });


})()