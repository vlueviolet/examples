const home = (() => {
  return {
    init: function () {
      this.setElements();
      this.initLayout();
      this.playAnimation();
    },
    setElements: function () {
      this.item1 = document.querySelector('.item1');
      this.item2 = document.querySelector('.item2');
      this.item3 = document.querySelector('.item3');
      this.item4 = document.querySelector('.item4');
      this.item5 = document.querySelector('.item5');
      this.item6 = document.querySelector('.item6');
      this.item7 = document.querySelector('.item7');
      this.item8 = document.querySelector('.item8');
    },
    initLayout: function () {
      this.timeline = gsap.timeline();
    },
    setPosition: function () {},
    playAnimation: function () {
      this.timeline
        .to(this.item1, {
          x: 400,
          ease: Power3.easeOuteaseOut,
          duration: 0.5,
          onComplete: this.handleCompleteImage,
          onCompleteParams: [this.item1]
        })
        .to(this.item2, {
          y: -1140,
          ease: Power3.easeOuteaseOut,
          duration: 0.5,
          onComplete: this.handleCompleteImage,
          onCompleteParams: [this.item2]
        })
        .to(this.item3, {
          x: -400,
          ease: Power3.easeOuteaseOut,
          duration: 0.5,
          onComplete: this.handleCompleteImage,
          onCompleteParams: [this.item3]
        })
        .to(this.item4, {
          x: 400,
          ease: Power3.easeOuteaseOut,
          duration: 0.5,
          onComplete: this.handleCompleteImage,
          onCompleteParams: [this.item4]
        })
        .to(this.item5, {
          x: '-50%',
          left: 'calc(50% - 150px)',
          ease: Power3.easeOuteaseOut,
          duration: 0.5,
          onComplete: this.handleCompleteImage,
          onCompleteParams: [this.item5]
        })
        .to(this.item6, {
          x: -400,
          ease: Power3.easeOuteaseOut,
          duration: 0.5,
          onComplete: this.handleCompleteImage,
          onCompleteParams: [this.item6]
        })
        .to(this.item7, {
          y: -100,
          ease: Power3.easeOuteaseOut,
          duration: 0.5,
          onComplete: this.handleCompleteImage,
          onCompleteParams: [this.item7]
        })
        .to(this.item8, {
          x: '50%',
          right: 'calc(50% - 150px)',
          ease: Power3.easeOuteaseOut,
          duration: 0.5,
          onComplete: this.handleCompleteImage,
          onCompleteParams: [this.item8]
        });
    },
    handleCompleteImage: function (...param) {
      const shadow = param[0].querySelector('.item__shadow');
      const toLeft = shadow.classList.contains('item__shadow--to-left');
      const toBottom = shadow.classList.contains('item__shadow--to-bottom');
      const toRight = shadow.classList.contains('item__shadow--to-right');
      if (toLeft || toRight) {
        console.log(111);
        gsap.to(shadow, {
          width: 0,
          duration: 1,
          ease: Power3.easeOuteaseOut
        });
      } else {
        console.log(333);
        gsap.to(shadow, {
          height: 0,
          duration: 1,
          ease: Power3.easeOuteaseOut
        });
      }
    },
    handleCompleteShadow: function () {}
  };
})();

home.init();
