$(document).ready(function() {
	//Меню бургер
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.content').click(function(event) {
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock');
	});
	//Всплывающее окно фотографий
	$('.work__item').magnificPopup({
		type : 'image',
		gallery : {
			enabled : true
		},
		removeDelay: 300,
		mainClass: 'mfp-fade'
	});
	//Слайдеры
	$('.testimonials-slider').slick({
		arrows:false,
		dots:true,
		adaptiveHeight:false,
		slidesToShow:1,
		slidesToScroll:1,
		speed:1000,
		easing: 'ease',
		infinite:true,
		initialSlide:0,
		autoplay:false,
		autoplaySpeed:2000,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:false,
		draggable:true,
		swipe:true,
		touchThreshold:10,
		touchMove:false,
		waitForAnimate:false,
		centerMode:false,
	});
	$('.clients-slider').slick({
		arrows:false,
		dots:true,
		adaptiveHeight:false,
		slidesToShow:4,
		slidesToScroll:1,
		speed:1000,
		easing: 'ease',
		infinite:true,
		initialSlide:0,
		autoplay:false,
		autoplaySpeed:2000,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:false,
		draggable:true,
		swipe:true,
		touchThreshold:10,
		touchMove:false,
		waitForAnimate:false,
		centerMode:false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow:3
				}
			},{
				breakpoint: 425,
				settings: {
					slidesToShow:2
				}
			},{
				breakpoint: 320,
				settings: {
					slidesToShow:1
				}
			}
		],
	});
});

//Плавный переход до блока
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener("click", function(event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}

//Анимация
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0){
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(){
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add('_active');
			}else{
				if(!animItem.classList.contains('_anim-no-hide'))
				animItem.classList.remove('_active');
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	animOnScroll();
}