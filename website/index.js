$(document).ready(function (e) {
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function () {
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function (e) {
        $navbar.toggleClass("toggle-left");
    })

});

function toggle_onclick($win, $navbar, width) {
    if ($win.width() <= 768) {
        $navbar.css({ left: `-${width}px` });
    } else {
        $navbar.css({ left: '0px' });
    }
}

var typed = new Typed('#typed', {
    strings: [
        'Competitive Programmer',
        'AWS and Data Science enthusiast',
        'Data Science Student'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed_2 = new Typed('#typed_2', {
    strings: [
        'Competitive Programmer',
        'AWS and Data Science enthusiast',
        'Data Science Student'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// const counter = document.querySelector(".counter-number");
// async function updateCounter() {
//     let response = await fetch(
//         "https://dy7bz54wxwgkwpjzilgjdrtvwi0rgxfl.lambda-url.ap-southeast-2.on.aws/"
//     );
//     let data = await response.json();
//     counter.innerHTML = `👀 Views: ${data}`;
// }
// updateCounter();
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://dy7bz54wxwgkwpjzilgjdrtvwi0rgxfl.lambda-url.ap-southeast-2.on.aws/"
    );
    let data = await response.json();
    console.log("Fetched data:", data);
    counter.innerHTML = `👀 Views: ${data.views}`;
}
updateCounter();

