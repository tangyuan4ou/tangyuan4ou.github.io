(function() {
  /*
    获取页面宽高度
  */
  var height = window.innerHeight;
  var width = window.innerWidth;

  /*
    浏览器宽度小于1200
  */
  $('.error').removeClass('errorOn');
  $('.error2').removeClass('errorOn');
  if (width < 1200) {
    $('.main').remove();
    $('.error2').remove();
    $('.error').addClass('errorOn');
  }

  /*
    判断浏览器种类
  */
  var userAgent = navigator.userAgent; //获取浏览器userAgent字符串
  console.log(userAgent)
  if (userAgent.indexOf('Firefox') < -1 && userAgent.indexOf('Chrome') < -1 && userAgent.indexOf('Safari') < -1) {
    $('.main').remove();
    $('.error').remove();
    $('.error2').addClass('errorOn');
  }
    
  /*
    设置首页bg高
  */
  $('.indexBg').css('height', height );
  $('.title').css('line-height', height + 'px');

  /*
    首页canvas
  */

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
    console.log(this);
    var _this = this;
    (function(){
      _this.pos = {};
      init();
    })();

    function init() {
      _this.pos.x = Math.random() * width;
      _this.pos.y = height + Math.random()*100;
      _this.alpha = 0.8 + Math.random()*0.3;
      _this.scale = 0.1 + Math.random()*0.3;
      _this.velocity = Math.random();
    }
    
    this.draw = function() {
      if(_this.alpha <= 0.3) {
        init();
      }
      _this.pos.y -= _this.velocity;
      _this.alpha -= 0.001;
      ctx.beginPath();
      ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2*Math.PI, false);
      ctx.fillStyle = 'rgba(0,0,0,' + _this.alpha + ')';
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
  $('.list').css({'width': newWidth/4, 'height': height, 'line-height': height + 'px'});


  $('.about').css('left', 0);
  $('.img').css('left', newWidth-newWidth/4*3);
  $('.blog').css('left', newWidth-newWidth/4*2);
  $('.contact').css('left', newWidth-newWidth/4);

  /*
    菜单呼入和呼出
  */
  $('.menu-toggle').toggle(
    function() {
      $('.menu-toggle').addClass('on');
      $('.menu-section').addClass('on');
      $('.name').text('');
      $('.menuContainer').addClass('menuContainer2');
      $('.list').removeClass("fadeInDown");
      $('.contact').addClass("fadeInUp");
      setTimeout(function(){
        $('.blog').addClass("fadeInUp");
      },500);
      setTimeout(function(){
        $('.img').addClass("fadeInUp");
      },1000);
      setTimeout(function(){
        $('.about').addClass("fadeInUp");
      },1500);
    },
    function() {
      $('.menu-toggle').removeClass('on');
      $('.menu-section').removeClass('on');
      $('.about').removeClass("fadeInUp").addClass("fadeInDown");
      setTimeout(function(){
        $('.img').removeClass("fadeInUp").addClass("fadeInDown");
      },500);
      setTimeout(function(){
        $('.blog').removeClass("fadeInUp").addClass("fadeInDown");
      },1000);
      setTimeout(function(){
        $('.contact').removeClass("fadeInUp").addClass("fadeInDown");
        $('.menuContainer').addClass('menuDown');
      },1500);
      setTimeout(function(){
        $('.menuContainer').removeClass('menuContainer2', 'menuDown');
        $('.name').text('Hi friend');
      },2000);
    }
  );



})();