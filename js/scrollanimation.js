(function () {
  var controller = new ScrollMagic.Controller();
  var tween1 = TweenMax.to('.main_banner', 0.5, {
    opacity: "1"
    //background-color 같이 '-'가 들어갈경우에는 낙타 표기법으로 써준다 (backgroundColor)
  });
  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#div3",
    triggerHook: 0.7, //0~1 ,
    offset: 0,
    duration: "30%",
  })
    .setTween(tween1) // 애니메이션 등록
    .addTo(controller) // 컨트롤러 등록
    .addIndicators({   // 트리거 인디케이터 이름지정 및 등록
      name: "첫번째"
    });
  var tween2 = TweenMax.to('.dragon > img', 0.5, {
    x: "-60%", //transform: translateX 의 줄임말
    scale: "1.2",
    rotation: 10,
    //background-color 같이 '-'가 들어갈경우에는 낙타 표기법으로 써준다 (backgroundColor)
  });
  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#div2",
    triggerHook: 0.7, //0~1 ,
    offset: 0,
    duration: "70%",
  })

    .setTween(tween2) // 애니메이션 등록
    .addTo(controller) // 컨트롤러 등록
    .addIndicators({   // 트리거 인디케이터 이름지정 및 등록
      name: "두번째"
    });
  var tween3 = TweenMax.to('.mainvisual03 > img', 0.5, {
    x: "40%", //transform: translateX 의 줄임말
    scale: "1",
    //background-color 같이 '-'가 들어갈경우에는 낙타 표기법으로 써준다 (backgroundColor)
  });
  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#div2",
    triggerHook: 0.5, //0~1 ,
    offset: 0,
    duration: "70%",
  })

    .setTween(tween3) // 애니메이션 등록
    .addTo(controller) // 컨트롤러 등록
    .addIndicators({   // 트리거 인디케이터 이름지정 및 등록
      name: "세번째"
    });
  var tween4 = TweenMax.to('.explosion > img', 0.5, {
    //transform: translateX 의 줄임말
    scale: "1.8",
    opacity: "1"
    //background-color 같이 '-'가 들어갈경우에는 낙타 표기법으로 써준다 (backgroundColor)
  });
  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#div2",
    triggerHook: 0.5, //0~1 ,
    offset: 200,
    duration: "40%",
  })

    .setTween(tween4) // 애니메이션 등록
    .addTo(controller) // 컨트롤러 등록
    .addIndicators({   // 트리거 인디케이터 이름지정 및 등록
      name: "네번째"
    });
}())