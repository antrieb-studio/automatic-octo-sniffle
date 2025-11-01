jQuery(document).ready(function () {
    jQuery('.logo-slider').slick({
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 5,
        adaptiveHeight: true,
        arrows: false,
        autoplay: true,
        centerMode: true,
        centerPadding: '60px',
        centeredSlides: true,
        autoplaySpeed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    centerPadding: '40px'
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '30px'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '20px'
                }
            }
        ]
    });
});

// review slider
jQuery(document).ready(function () {
    jQuery('.testimonial-slider').slick({
        centerMode: true,
        centerPadding: '25%',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        focusOnSelect: true,
        infinite: true,

        // 👇 Custom Font Awesome Arrows
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: '15%',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '10%',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '0',
                    slidesToShow: 1
                }
            }
        ]
    });
});




// accordion js
const accordionItems = document.querySelectorAll('.accordion-item');
const stepImage = document.getElementById('stepImage');

accordionItems.forEach(item => {
    const header = item.querySelector('.bg-btn');
    header.addEventListener('click', () => {
        document.querySelector('.accordion-item.active')?.classList.remove('active');
        item.classList.add('active');
        stepImage.style.opacity = 0;
        setTimeout(() => {
            stepImage.src = item.getAttribute('data-image');
            stepImage.style.opacity = 1;
        }, 300);
    });
});

// pricing js
const toggleButtons = document.querySelectorAll('.toggle-btn');
const monthlyPrices = document.querySelectorAll('.monthly-price');
const annualPrices = document.querySelectorAll('.annual-price');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        toggleButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const billing = button.dataset.billing;

        if (billing === 'monthly') {
            monthlyPrices.forEach(price => price.style.display = 'inline');
            annualPrices.forEach(price => price.style.display = 'none');
        } else {
            monthlyPrices.forEach(price => price.style.display = 'none');
            annualPrices.forEach(price => price.style.display = 'inline');
        }
    });
});
