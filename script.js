let condition = true;

function forwards() {
    anime({
        targets: '.menu-small',
        translateX: ['-130%', '-30%'],
        backgroundColor: ['white', 'black'],
        color: 'white',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });

    anime({
        targets: '.menu_small_icon',
        rotate: 90,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.stick',
        rotate: 180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.btn-port',
        opacity: 0,
        loop: false,
        easing: 'easeOutQuad'
    })
    anime({
        targets: '.btn-cont',
        opacity: 0,
        loop: false,
        easing: 'easeOutQuad'
    })
    condition = false

}

function backwards() {
    anime({
        targets: '.menu-small',
        translateX: ['-30%', '-130%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.menu_small_icon',
        rotate: 0,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.stick',
        rotate: 0,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = true;
    anime({
        targets: '.btn-port',
        opacity: 1,
        loop: false,
        easing: 'easeOutQuad'
    })
    anime({
        targets: '.btn-cont',
        opacity: 1,
        loop: false,
        easing: 'easeOutQuad'
    })
}

$('.menu_small_icon').on('click', function () {
    if (condition) {
        forwards();
    } else {
        backwards();
    }
});

let start = 0;
let end = 0;
$('.container').on('touchstart', function (event) {
    start = event.originalEvent.touches[0].pageX;
});
$('.container').on('touchend', function (event) {
    end = event.originalEvent.changedTouches[0].pageX;
    if (end - start >= 100 && condition) {
        forwards();
    } else if (start - end >= 100 && !condition) {
        backwards();
    }
});

let links = document.querySelectorAll('.scroll');
let targetID;
links.forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault();
        targetID = element.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})

// SLIDER

$(document).ready(function () {
    $('.slider').bxSlider({
        infiniteLoop: false,
        hideControlOnEnd: true,
    });
});