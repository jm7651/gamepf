// 'use strict';
// //글자애니메이션 splitting 데모사이트 그대로 작성 따라하기
// // $(function(){
// //   Splitting();
// // });
// //스크롤 반응하는 네비게이션 만들기
// const navbar = document.querySelector('#navbar');
// const navbarHeight =navbar.getBoundingClientRect().height;
// document.addEventListener('scroll',() =>{
// if(window.scrollY > navbarHeight){
//   navbar.classList.add('navbar--dark')
// }
// else{
//   navbar.classList.remove('navbar--dark')
// }
// });

// //핸들 스크롤링
// const navbarMenu = document.querySelector('.navbar__menu');
// navbarMenu.addEventListener('click',(event) =>{
//   const target = event.target;
//   const link = target.dataset.link;
//   if(link == null){
//     return
//   }
// scrollIntoView(link);
// });


// // const homeContactBtn = document.querySelector('.home__contact');
// // homeContactBtn.addEventListener('click',() =>{
// //   scrollIntoView('#work');
// // });

// //컨텍트버튼

// // const homeContactBtn = document.querySelector('.home__contact');
// // homeContactBtn.addEventListener('click',() =>{
// //   scrollIntoView('#contact')
// // });

// //스크롤에 따라 바뀌는 것
// // const home = document.querySelector('#div1');
// // const homeHeight = home.getBoundingClientRect().height;
// // const homeHeightFinal = homeHeight - 300;
// // const about = document.querySelector('#about');
// // const aboutHeight = about.getBoundingClientRect().height;
// // const aboutHeightFinal = aboutHeight + homeHeightFinal + 1500;
// // document.addEventListener('scroll', () =>{
// //   home.style.opacity = 1 - window.scrollY / homeHeightFinal;
//   // about.style.opacity = 1 - window.scrollY / aboutHeightFinal;
// // });
// //네비 액티브
// $(function(){
//   var sBtn = $('.navbar__menu > li');    //  ul > li 이를 sBtn으로 칭한다. (클릭이벤트는 li에 적용 된다.)
//   sBtn.click(function(){   // sBtn에 속해 있는  a 찾아 클릭 하면.
//    sBtn.removeClass("active");     // sBtn 속에 (active) 클래스를 삭제 한다.
//    $(this).addClass("active"); // 클릭한 a에 (active)클래스를 넣는다.
//   })
//  });

//  //탭버튼 액티브
//  $(function(){
//   var tabBtn = $('.category__btn');    //  ul > li 이를 sBtn으로 칭한다. (클릭이벤트는 li에 적용 된다.)
//   tabBtn.click(function(){   // sBtn에 속해 있는  a 찾아 클릭 하면.
//    tabBtn.removeClass("active");     // sBtn 속에 (active) 클래스를 삭제 한다.
//    $(this).addClass("active"); // 클릭한 a에 (active)클래스를 넣는다.
//   })
//  });
// //팝업
// $(document).ready(function(){
//   $(".popupVideo a").click(function() {
//       $(".video-popup").addClass("reveal");
//       $(".video-popup .video-wrapper").remove();
//       $(".video-popup").append("<div class='video-wrapper'><iframe width='560' height='315' src='https://youtube.com/embed/" + $(this).data("video") + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
//     });
//     $(".video-popup-closer").click(function() {
//       $(".video-popup .video-wrapper").remove();
//       $(".video-popup").removeClass("reveal");
//     });
// });


// //개구리 애니메이션
// //  $(window).scroll(function() {
  
// // 	if($(this).scrollTop() > 500) {
// // 		$('.flog_mask img').css('top','5px');
// // 	}
// // 	else {
// // 		$('.flog_mask img').css('top','500px');
// // 	}
// // });

// $(document).ready(function(){
//   $(".project").filter("[data-type=ui]").addClass('visible');
// });

// //프로젝트
// // const workBtnContainer = document.querySelector('.work__categories');
// // const projectContainer = document.querySelector('.work__projects');
// // const projects = document.querySelectorAll('.project');
// // workBtnContainer.addEventListener('click', (e) => {
// //   const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
// //   if(filter == null){
// //     return;
// //   }
// //   projectContainer.classList.add('ani-out');
// //   setTimeout(() =>{
// //   projects.forEach((project) => {
// //     console.log(project.dataset.type);
// //     if (filter === '*' || filter === project.dataset.type) {
// //       project.classList.add('visible');
// //     } else {
// //       project.classList.remove('visible');
// //     }
// //   });
// //   projectContainer.classList.remove('ani-out');
// // }, 200);
// // });


// // 탭
// $(document).ready(function(){

//   $('ul.tabs li').click(function(){
//       var tab_id = $(this).attr('data-tab');
  
//       $('ul.tabs li').removeClass('active');
//       $('.work__projects').removeClass('active');
  
//       $(this).addClass('active');
//       $("#"+tab_id).addClass('active');
//   });
  
//   });




// //모달
// document.querySelectorAll(".project").forEach(element => element.addEventListener("click", () => {
//   document.querySelector(".modal__background").classList.add('open');
// $("body").css({"overflow":"hidden"});
// $("nav").css({"opacity":"0"});

// $(".modal__background").bind("touchmove", function(e) {
// 	e.preventDefault();
// });
// $(".modal").bind("touchmove", function(e) {
// 	e.stopPropagation();
// });
// }));
// document.querySelectorAll(".modal_close").forEach(element => element.addEventListener("click", () => {
//   document.querySelector(".modal__background").classList.remove('open');
//   $("body").css({"overflow":"hidden auto"});
//   $("nav").css({"opacity":"1"});
// $('.modal__background').unbind('touchmove');
// youtubeFuntion();
// }));

// // const toggleBtn = document.querySelector('.navbar__toggle');
// // const menu = document.querySelector('.navbar__menu');
// // const bodyBtn = document.querySelector('body');
// // toggleBtn.addEventListener('click', () =>{
// // toggleBtn.classList.toggle('open'); 
// // menu.classList.toggle('active');
// // });

// const toggleBtn = document.querySelector(".navbar__toggle");
// const modal = document.querySelector(".navbar__menu");
// const navHeight = document.querySelector("#navbar")
// //const close = document.getElementsByClassName("close");

// toggleBtn.addEventListener('click',() =>{
//   modal.classList.toggle('active');
//   toggleBtn.classList.toggle('open'); 
//   // modal.style.visibility = "visible";
//   // modal.style.opacity = 1;
// });
// //  = function(){
// //   modal.style.visibility = "visible";
// //   modal.style.opacity = 1;
// // }
// // close.onClick = function(){
// //   modal.style.visibility = "hidden";
// //   modal.style.opacity = 0;
// // }

// window.onclick = function(e){
//   if(e.target == modal){
//     modal.classList.remove('active');
//     toggleBtn.classList.remove('open'); 
//   }
// }

// // //스크롤 애니메이션
// // $(function(){
// //   $('.animate').scrolla({
// //   // default
// //   mobile: true, // disable animation on mobiles
// //   once: false, // only once animation play on scroll
// //   animateCssVersion: 4 // used animate.css version (3 or 4)
// //   });
// // });

// function scrollIntoView(selector){
//   const scrollTo = document.querySelector(selector);
//   scrollTo.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
// };

// //.top-visual 이미지 슬라이드
// // $(function(){
// //     $('.visual .slide').slick({
// //         arrow:true,//화살표
// //         dots:true,//인디케이터
// //         autoplay:true,//자동재생
// //         fade:true,//페이드인 효과
// //         autoplaySpeed:7000,//재생시간
// //         pauseOnHover:false,//호버시 멈춤 해제
// //         pauseOnFocus:false 
        
// //     });
// //     //두번째 슬라이드
// //         $('.slide2').slick({
// //         arrow:false,//화살표
// //         dots:true,//인디케이터
// //         autoplay:true,//자동재생
// //         infinity:true,
// //         slidesToShow: 2,
// //         slidesToScroll: 1,
// //         autoplaySpeed:6000,//재생시간
// //         pauseOnHover:true,//호버시 멈추도록
// //         pauseOnFocus:true 
        
// //     });
// //     $('.slide2 #slick-slide-control10').text("따뜻한 밥에 찌개가 먹고 싶을때");
// //     $('.slide2 #slick-slide-control11').text("최고의 조합 치킨과 맥주가 그리울 때");
// //     $('.slide2 #slick-slide-control12').text("야식대장 족발 보쌈이 생각날 때");
// //     $('.slide2 #slick-slide-control13').text("외식의 꽃 짜장면이 땡길 때");
// // });