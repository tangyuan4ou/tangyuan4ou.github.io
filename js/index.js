/*
  获取页面高度并设置首页bg高
*/
var height = window.innerHeight;
var width = window.innerWidth;
$('.indexBg').css('height', height );
$('.title').css('line-height', height + 'px');

/*
  首页canvas
*/
(function() {

  var  largeHeight, canvas, ctx, cirles, target, animateHeader = true;

  canvas = document.getElementById('bgCanvas');
  canvas.width = width;
  canvas.height = height;
  ctx = canvas.getContext('2d');

  //创建粒子
  cirles = [];
  for (var x=0; x<width*0.5; x++) {
    var c = new Circle();
    cirles.push(c);
  }
  animate();
  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (var i in cirles) {
      cirles[i].draw();
    }
    requestAnimationFrame(animate);
  }

  function Circle() {
    var _this = this;
    (function(){
      _this.pos = {};
      init();
    })();

    function init() {
      _this.pos.x = Math.random() * width;
      _this.pos.y = height + Math.random()*100;
      _this.alpha = 0.1 + Math.random()*0.3;
      _this.scale = 0.1 + Math.random()*0.3;
      _this.velocity = Math.random();
    }
    
    this.draw = function() {
      if(_this.alpha <= 0) {
        init();
      }
      _this.pos.y -= _this.velocity;
      _this.alpha -= 0.0005;
      ctx.beginPath();
      ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2*Math.PI, false);
      ctx.fillStyle = 'rgba(255,255,255' + _this.alpha + ')';
      ctx.fill();
    };
  }
  
  /*
    首页menu
  */
  var newWidth = width+150;
  $('.menuContainer').css('height', height);
  $('.menuBg').css('height', height);
  $('.menu').css('height', height);
  $('.list').css('width', newWidth/4);
  $('.list').css('height', height);
  $('.list').css('line-height', height + 'px');

  // $('.about').css('left', -500);
  // $('.img').css('left', -500);
  // $('.blog').css('left', -500);
  // $('.contact').css('left', -500);

  $('.about').css('left', 0);
  $('.img').css('left', newWidth-newWidth/4*3);
  $('.blog').css('left', newWidth-newWidth/4*2);
  $('.contact').css('left', newWidth-newWidth/4);

  $(".menu-toggle").on('click', function() {
    $(this).toggleClass("on");
    $('.menu-section').toggleClass("on");
    $('.menuContainer').toggleClass("menuContainer2");
    $('.contact').toggleClass("fadeInUp");
    setTimeout(function(){
      $('.blog').toggleClass("fadeInUp");
    },500);
    setTimeout(function(){
      $('.img').toggleClass("fadeInUp");
    },1000);
    setTimeout(function(){
      $('.about').toggleClass("fadeInUp");
    },1500);

    

    // $('li:eq(0)').toggleClass("about");
    // $('li:eq(0)').toggleClass("about-out");
  });

})();