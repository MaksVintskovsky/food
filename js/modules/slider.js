function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter,wrapper, field}) {
    let offset = 0;
	let slideIndex = 1;

    const slides = document.querySelectorAll(slide),
          slider = document.querySelector(container),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          total = document.querySelector(totalCounter),
          current = document.querySelector(currentCounter),
          slidesWrapper = document.querySelector(wrapper),
          width = window.getComputedStyle(slidesWrapper).width,
          slidesField = document.querySelector(field);

    function addNull() {
        if (slideIndex < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }
    function addActiveDot() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    }
	if (slides.length < 10) {
		total.textContent = `0${slides.length}`;
	} else {
		total.textContent = slides.length;
	}
    addNull()
	slidesField.style.width = 100 * slides.length + "%";
	slidesField.style.display = "flex";
	slidesField.style.transition = "0.5s all";
	slidesWrapper.style.overflow = "hidden";

	slides.forEach((slide) => {
		slide.style.width = width;
	});
    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots = [];
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);
    
    for(let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot')
        if(i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot)
        dots.push(dot);
    }

	next.addEventListener("click", () => {
		if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += +width.slice(0, width.length - 2);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == slides.length) {
			slideIndex = 1;
		} else {
			slideIndex++;
		}

		addNull();
        addActiveDot();
	});

	prev.addEventListener("click", () => {
		if (offset == 0) {
			offset = +width.slice(0, width.length - 2) * (slides.length - 1);
		} else {
			offset -= +width.slice(0, width.length - 2);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == 1) {
			slideIndex = slides.length;
		} else {
			slideIndex--;
		}

		addNull();
        addActiveDot();
	});
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = +width.slice(0, width.length - 2) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;
            addNull();
            addActiveDot();
        });
    });

    // function showSlides(n) {
    //     if(n > slides.length) {
    //         slideIndex = 1
    //     }
    //     if(n < 1) {
    //         slideIndex = slides.length
    //     }
    //     slides.forEach(slide => {
    //         slide.classList.add('hide')
    //     });
    //     slides[slideIndex-1].classList.remove('hide')

    //     if (slideIndex < 10) {
    //         current.textContent =  `0${slideIndex}`;
    //     } else  {
    //         current.textContent =  slideIndex;
    //     }
    // }
    // function plusSlide(m) {
    //     showSlides(slideIndex += m)
    // }
    // next.addEventListener('click', () => {
    //     plusSlide(1);
    // });
    // prev.addEventListener('click', () => {
    //     plusSlide(-1);
    // });

    // showSlides(slideIndex)
}

export default slider;