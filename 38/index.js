// /**
//  * https://bit.ly/3he01PG
//  */
(function () {
  function View(element) {
    this.element = element;
    console.log('view element', this.element);
  }
  View.prototype = {
    init: function () {
      console.log('view init', this.element);
    },
    emit: function (eventName, data) {
      emit(this.element, eventName, data);
      return this;
    }
  };

  function CaseView() {
    View.call(this, '#case-view');
  }
  CaseView.prototype = Object.create(View.prototype);
  CaseView.prototype.constructor = CaseView;

  CaseView.prototype = {
    init: function () {
      View.prototype.init.call(this); // 부모의 함수 실행
      console.log('case view init...');
    }
  };

  function SizeView() {
    View.call(this, '#case-view');
  }
  SizeView.prototype = Object.create(View.prototype);
  SizeView.prototype.constructor = SizeView;

  SizeView.prototype.init = function () {
    View.prototype.init.call(this); // 부모의 함수 실행
    console.log('size view init...');
  };

  function Store() {}
  Store.prototype = {
    init: function () {
      console.log('store init');
    }
  };

  function Controller(store, views) {
    this.store = store;
    this.caseView = views.caseView;
    this.sizeView = views.sizeView;
  }
  Controller.prototype = {
    init: function () {},
    render: function () {}
  };

  function main() {
    var store = new Store();
    var views = {
      caseView: new CaseView(),
      sizeView: new SizeView()
    };

    new Controller(store, views);
  }
  document.addEventListener('DOMContentLoaded', main);
  // 상속할 Human
  var Human = function (name) {
    this.name = name;
  };
  Human.prototype = {
    eat: function (food) {
      console.log('부모 메소드', this.name + ' eat ', food);
    },
    work: function () {
      console.log('work');
    }
  };

  var Worker = function (name) {
    Human.call(this, name);
  };
  // Object.create로 프로토타입을 copy
  Worker.prototype = Object.create(Human.prototype);
  // 생성자는 달라야하니 Woker 함수로 교체
  Worker.prototype.constructor = Worker;

  Worker.prototype.working = function () {
    console.log(this.name + ' is working');
  };

  var lee = new Worker('lee');
  lee.eat('pizza');
  console.log(lee);
  lee.working();
})();

// 상속받을 Worker
