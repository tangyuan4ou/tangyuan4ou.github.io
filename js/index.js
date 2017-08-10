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
      $('.menuContainer').removeClass('menuDown');
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
      $('.about').removeClass("fadeInUp");
      $('.about').addClass("fadeInDown");
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
        $('.menuContainer').removeClass('menuContainer2');
        $('.menuContainer').removeClass('menuDown')
        $('.name').text('Hi friend');
      },2000);
    }
  );



})();