
const imagesSrc = [
	'./img/01.webp',
	'./img/02.webp',
	'./img/03.webp',
	'./img/04.webp',
	'./img/05.webp',
]

const carouselDOMElement = document.querySelector('.box')

for (let i = 0; i < imagesSrc.length; i++) {

	const srcImage = imagesSrc[i]

	const html = `<img class="box__item" src="${srcImage}" alt="" />`

	carouselDOMElement.innerHTML += html
	console.log(carouselDOMElement)
}

const itemDOMElements = document.querySelectorAll('.box__item')
console.log(itemDOMElements)

let currentIndex = 0
let currentSlide = itemDOMElements[currentIndex]
currentSlide.classList.add('active')
console.log(currentSlide)

const arrowUp = document.querySelector('.box .freccia-uno')
const arrowDown = document.querySelector('.box .freccia-due')

arrowDown.addEventListener('click', function () {
    console.log('click bottom');

    itemDOMElements[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + 1) 

    itemDOMElements[currentIndex].classList.add('active');
});

arrowUp.addEventListener('click', function () {
    console.log('click top');

    itemDOMElements[currentIndex].classList.remove('active');

    currentIndex = (currentIndex - 1 + itemDOMElements.length) 

    itemDOMElements[currentIndex].classList.add('active');
});