'use strict';
//스크롤 반응하는 네비게이션 만들기
document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector('#navbar');
  const navbarHeight =navbar.getBoundingClientRect().height;
  document.addEventListener('scroll',() =>{
  if(window.scrollY > navbarHeight){
    navbar.classList.add('navbar--dark')
  }
  else{
    navbar.classList.remove('navbar--dark')
  }
  });

  //핸들 스크롤링

  const navbarMenu = document.querySelector('.navbar__menu');
   navbarMenu.addEventListener('click',(event) =>{
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
      return
    }
  scrollIntoView(link);
  });
  const movieBtn = document.querySelector('.moviebutton');
movieBtn.addEventListener('click',(event) =>{
  const target = event.target;
  const link = target.dataset.link;
  if(link == null){
    return
  }
scrollIntoView(link);
});
})

  
function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
};


//네비 액티브
// $(function(){
//   var sBtn = $('.navbar__menu > li');    //  ul > li 이를 sBtn으로 칭한다. (클릭이벤트는 li에 적용 된다.)
//   sBtn.click(function(){   // sBtn에 속해 있는  a 찾아 클릭 하면.
//    sBtn.removeClass("active");     // sBtn 속에 (active) 클래스를 삭제 한다.
//    $(this).addClass("active"); // 클릭한 a에 (active)클래스를 넣는다.
//   })
//  });
function scrollDisable(){
	$('body').addClass('scr_hidden').on('scroll touchmove mousewheel', function(e){
		e.preventDefault();
	});
}
function scrollAble(){
	$('body').removeClass('scr_hidden').off('scroll touchmove mousewheel');
}




const toggleBtn = document.querySelector(".navbar__toggle");
const navWall = document.querySelector('.nav_wall');
const modal = document.querySelector(".navbar__menu")
// const body = document.querySelector('body');
// let scrollPosition = 0;
toggleBtn.addEventListener('click',function(){
  toggleBtn.classList.toggle('open');
  modal.classList.toggle('active');
  navWall.classList.toggle('active');
  // if(toggleBtn.classList.contains('open')){
  //   scrollPosition = window.pageYOffset;
  //   body.style.overflow = 'hidden';
  //   body.style.position = 'fixed';
  //   body.style.top = `-${scrollPosition}px`;
  //   body.style.width = '100%';
  // }else{
  //   body.style.removeProperty('overflow');
  // body.style.removeProperty('position');
  // body.style.removeProperty('top');
  // body.style.removeProperty('width');
  // window.scrollTo(0, scrollPosition);

  // }
});
navWall.addEventListener('click',function(){
  this.classList.remove('active')
  toggleBtn.classList.remove('open');
  modal.classList.remove('active');
  // body.style.removeProperty('overflow');
  // body.style.removeProperty('position');
  // body.style.removeProperty('top');
  // body.style.removeProperty('width');
  // window.scrollTo(0, scrollPosition);
});
