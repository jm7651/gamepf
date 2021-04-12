$(function(){
  $('.slide').slick({
      infinite: true,
      arrows:false,//화살표
      dots:true,//인디케이터
      autoplay:true,//자동재생
      fade:true,//페이드인 효과
      autoplaySpeed:7000,//재생시간
      pauseOnHover:false,//호버시 멈춤 해제
      pauseOnFocus:false 
      
  });
});