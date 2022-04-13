function toggleNav() {
    if (navIconContainer.classList.contains('collapsed')) {
        navIconContainer.classList.remove('collapsed');
    } else {
    navIconContainer.classList.add('collapsed');
    }
}

const carouselOne = document.getElementById('carouselOne');
const carouselTwo = document.getElementById('carouselTwo');
const carouselThree = document.getElementById('carouselThree');
const carouselFour = document.getElementById('carouselFour');
