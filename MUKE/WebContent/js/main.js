$(document).ready(function(){var mySwiper=new Swiper(".swiper-container",{direction:"horizontal",loop:true,pagination:".swiper-pagination",paginationClickable:true,nextButton:".swiper-button-next",prevButton:".swiper-button-prev",effect:"fade",autoplay:5000,grabCursor:true,hashnav:true,});$(".swiper-container").mouseenter(function(event){$("#prev").fadeIn("100");$("#next").fadeIn("100")});$(".swiper-container").mouseleave(function(event){$("#prev").fadeOut("100");$("#next").fadeOut("100")});$(".mk").mouseover(function(event){$(".mobile-img").stop().animate({"opacity":"0","margin-bottom":"-30px"},"50");$(".mobile-mk").stop().animate({"opacity":"1","margin-bottom":"60px"},"50")});$(".mk").mouseout(function(event){$(".mobile-img").stop().animate({"opacity":"1","margin-bottom":"0px"},"50");$(".mobile-mk").stop().animate({"opacity":"0","margin-bottom":"30px"},"50")});if(!(/msie [6|7|8|9]/i.test(navigator.userAgent))){new WOW().init()}});