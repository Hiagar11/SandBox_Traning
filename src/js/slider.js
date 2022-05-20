(function () {
    let slide = document.querySelector('.slider__items') || null;

    if (slide === null) {
        return
    } else {
        let slides = slide.querySelectorAll('.slider__item');
        let btnLeft = document.querySelector('.slider__control.prev');
        let btnRight = document.querySelector('.slider__control.next');

        let arrElem = [];
        let arrText = ['Поездки <b>каждый</b> день', '<b>много</b> машин в штате', '<b>опытные</b> водители', '<b>более</b> пяти лет работы'];
        let arrClass = ['first', 'second', 'third', 'fourth'];

        let step = 0;
        let offset = 0;

        for (let i = 0; i < slides.length; i++) {
            arrElem[i] = slides[i].querySelector('img').src;
            slides[i].remove();
        }

        function draw(step, direction='null') {
            let div = document.createElement('div');
            div.innerHTML = `
<picture class="slider__img">
 <source srcset="../src/imges/mCar${step+1}.jpg" media="(max-width: 768px)">
<img decoding="async" class="${arrClass[step]}" src="${arrElem[step]}">
</picture>

                         <div class="slider__text"><span>${arrText[step]}</span></div>`;
            div.classList.add('slider__item');
            if (direction === 'left') {
                div.style.transform = `translate(${-slide.offsetWidth}px)`;
            }
            if (direction === 'right') {
                div.style.transform = `translate(${slide.offsetWidth}px)`;
            }
            slide.appendChild(div);
        }

        draw(0);

        btnLeft.addEventListener('click', left);
        btnRight.addEventListener('click', right);

        function left() {
            btnLeft.removeEventListener('click', left);
            btnRight.removeEventListener('click', right);

            step--
            if (step < 0) {
                step = arrElem.length - 1;
            }
            draw(step, 'left');

            let slides2 = slide.querySelectorAll('.slider__item');
            for (let i = 0; i < slides2.length; i++) {
                slides2[i].style.transform = `translate(${-(i*slide.offsetWidth - slide.offsetWidth)}px)`;
            }
            setTimeout(function () {
                slides2[0].remove();

                btnLeft.addEventListener('click', left);
                btnRight.addEventListener('click', right);
            },1000);


        }

        function right() {
            btnLeft.removeEventListener('click', left);
            btnRight.removeEventListener('click', right);


            step++
            if (step >= arrElem.length) {
                step = 0;
            }
            draw(step, 'right');

            let slides = slide.querySelectorAll('.slider__item');
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.transform = `translate(${(i*slide.offsetWidth - slide.offsetWidth)}px)`;
            }
            setTimeout(function () {
                slides[0].remove();

                btnLeft.addEventListener('click', left);
                btnRight.addEventListener('click', right);
            },1000);


        }

        setInterval(function () {
            right();
        },7000)
    }


})()