(function(){
    /*
    获取页面宽高度
  */
  var height = window.innerHeight;
  var width = window.innerWidth;
  
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
})();
  /*
    首页canvas
  */

  