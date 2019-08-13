$(function() {
	//------------magnificPopup
	$('.open-popup').magnificPopup({
		type:'inline',
		mainClass: 'mfp-forms'
	});	

//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form.pop-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо, наш специалист свяжется с Вами в ближайшее время! ");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$.magnificPopup.close();
			}, 1000);
		});
		return false;
	});
  // // Look for .hamburger
  // var hamburger = document.querySelector(".hamburger");
  // // On click
  // hamburger.addEventListener("click", function() {
  //   // Toggle class "is-active"
  //   hamburger.classList.toggle("is-active");
  //   // Do something else, like open/close menu
  // });

// выпадающее меню
$(".hamburger").click(function(){
	$(this).toggleClass("is-active");
	$("#menu").stop().slideToggle();
	return false;
});
$("#menu li a, header").click(function(){
	if($(".hamburger").hasClass("is-active")){
		$("#menu").stop().slideToggle();
		$(".hamburger").removeClass("is-active");
	}else{};
	return false;
});  
// //
$("#thematic_platform ul li").hover(function(){
	$("#thematic_platform ul li").removeClass("active").eq($(this).index()).addClass("active").fadeIn();
	$("#thematic_platform .infografica .item").removeClass("active").eq($(this).index()).addClass("active").fadeIn()
},
function(){
	$("#thematic_platform ul li").removeClass("active");
	$("#thematic_platform .infografica .item").removeClass("active");
});
$("#thematic_platform .infografica .item").hover(function(){
	$("#thematic_platform .infografica .item").removeClass("active").eq($(this).index()).addClass("active").fadeIn();
	$("#thematic_platform ul li").removeClass("active").eq($(this).index()).addClass("active").fadeIn()
},
function(){
	$("#thematic_platform .infografica .item").removeClass("active");
	$("#thematic_platform ul li").removeClass("active");
});
// --------------   
// --------------
	  $('.scroll').click( function(){ // ловим клик по ссылке
			var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	      if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
	  }
	    return false; // выключаем стандартное действие
	  }); 


//-------- tabs
$("#about .tab_item").not(":first").hide();
$("#about .tabs_wrapper .tab").click(function() {
	$("#about .tabs_wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$("#about .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
//-------- tabs experts 
$("#experts .tab_item").not(":first").hide();
$("#experts .tabs_wrapper .tab").click(function() {
	$("#experts .tabs_wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$("#experts .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$("#menu li:nth-child(4) a").click(function() {
	$("#experts .tabs_wrapper .tab").removeClass("active").eq(1).addClass("active");
	$("#experts .tab_item").hide().eq(1).fadeIn();
});	
//-------- tabs chronicle 
$("#chronicle .tab_item").not(":first").hide();
initialize_owl();
$("#chronicle .tabs_wrapper .tab").click(function() {
	$("#chronicle .tabs_wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$("#chronicle .tab_item .carousel-chronicle").removeClass("active_owl").trigger('destroy.owl.carousel');
	$("#chronicle .tab_item").hide().eq($(this).index()).fadeIn();
	$("#chronicle .tab_item").eq($(this).index()).children(".carousel-chronicle").addClass("active_owl");
	initialize_owl();
	$('#chronicle .active_owl .owl-nav').width($('#chronicle .active_owl .owl-item').width());
}).eq(0).addClass("active");

function initialize_owl() {
	$(".carousel-chronicle").owlCarousel({
		center: true,
		items:1,
		loop:true,
		nav:true,
		autoplay: true,
		autoplayTimeout: 8500,
		navSpeed: 700,		
		video:true,
		smartSpeed: 800,		
		margin:60,
		videoWidth: false,
		merge:true,
		dots: false,
		videoHeight: false,
		autoplayHoverPause: true,
		responsive:{
			320:{
				mergeFit:true
			},
			481:{
				items:1,
				mergeFit:true
			},		    			
			769:{
				items:1
			},			
			993:{
				items:3
			},
			1201:{
				items:3
			},			    
		},	
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	});
};
	//--------------- corusel
	$('.carousel-entrepreneurs,.carousel-non-profit-sector,.carousel-mmedia,.carousel-authorities,.carousel-investors').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		items: 1,
		margin: 5,
		autoplay: true,
		autoplayTimeout: 4000,
		navSpeed: 700,
		autoplayHoverPause: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	});
	//--------------- corusel experts
	$('.carousel-federal_experts,.carousel-regional_experts,.carousel-moderators').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		items: 1,
		margin: 5,
		autoplay: true,
		autoplayTimeout: 4000,
		navSpeed: 700,
		autoplayHoverPause: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	});	
		//--------------- corusel partners
		$('.carousel-partners').owlCarousel({
			loop: true,
			nav: true,
			smartSpeed: 700,
			items: 1,
			margin: 5,
			autoplay: true,
			autoplayTimeout: 4000,
			navSpeed: 700,
			autoplayHoverPause: false,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
		});
		//--------------- corusel info_partners
		$('.carousel-info_partners').owlCarousel({
			loop: true,
			nav: true,
			smartSpeed: 800,
			items: 1,
			margin: 5,
			autoplay: true,
			autoplayTimeout: 4500,
			navSpeed: 700,
			autoplayHoverPause: false,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
		});		

// animate
var wow = new WOW(
{
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       0,          // distance to the element when triggering the animation (default is 0)
	    mobile:       false,       // trigger animations on mobile devices (default is true)
	    live:         true,       // act on asynchronously loaded content (default is true)
	    callback:     function(box) {
	      // the callback is fired every time an animation is started
	      // the argument that is passed in is the DOM node being animated
	    },
	    scrollContainer: null // optional scroll container selector, otherwise use window
	  }
	  );
wow.init();
	// 
	// resize Window
	function onResize() {
		$('#chronicle .owl-nav').width($('#chronicle .owl-item').width());
		$('#chronicle .active_owl .owl-nav').width($('#chronicle .active_owl .owl-item').width());
		$('#menu').width($('body').width());
		$('.height-container .height').matchHeight();
	}onResize();
	window.onresize = function() {
		onResize();
		initMap();
	};
	window.onload = function() {
		// $('.height-container .height').matchHeight();
		initMap();
	};
});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});