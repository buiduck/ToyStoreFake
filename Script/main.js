// const menuToggle = document.querySelector(".header-toggle");
// const menuHeader = document.querySelector(".header-menu");
// const expandClass = "is-expand";
// menuToggle.addEventListener("click", function () {
//     menuHeader.classList.add(expandClass);
// });
// window.addEventListener("click", function (e) {
//     if (!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")) {
//         menuHeader.classList.remove(expandClass);
//     }
// });

// $(document).ready(function () {
//     $('.quote-container').slick(
//         {
//             prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//             nextArrow: "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//             responsive: [
//                 {
//                     breakpoint: 767,
//                     settings: {
//                         arrows: false
//                     }
//                 }
//                 // You can unslick at a given breakpoint now by adding:
//                 // settings: "unslick"
//                 // instead of a settings object
//             ]

//         }
//     )
// });

$(document).ready(function () {
    $('.slider-list').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"

    });
});

window.addEventListener('scroll', () => {
    const myBtn = document.getElementById('myBtn');
    if (window.scrollY > 20) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
});

function topFunction() {
    const scrollDuration = 300;
    const scrollHeight = window.scrollY;
    const scrollStep = Math.PI / (scrollDuration / 15);
    const cosParameter = scrollHeight / 2;
    let scrollCount = 0;
    let scrollMargin;
    const scrollInterval = setInterval(() => {
        if (window.scrollY != 0) {
            scrollCount += 1;
            scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
            window.scrollTo(0, (scrollHeight - scrollMargin));
        } else clearInterval(scrollInterval);
    }, 15);
}


