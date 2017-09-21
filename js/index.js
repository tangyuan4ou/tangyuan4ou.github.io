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
  if (userAgent.indexOf('Chrome') < -1 && userAgent.indexOf('Safari') < -1 && userAgent.indexOf('Firefox') < -1) {
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

  //单击a跳转前执行动画
  $('.list > a').click(function(){
    var this_ = $(this).parent();
    this_.siblings().animate({
      opacity: 0
    }, 1000,function(){
      this_.animate({
        opacity: 0,
        left: '-=20'
      },1500,function(){
        $('.menuBg').animate({
          opacity: 0
        },1000,function(){
          window.location.href = this_.children().attr("href");
        });
      });
    });
    return false;
  });
  

  /*
    菜单呼入和呼出
  */
  $('.menu-toggle').toggle(
    function() {
      $('.menu-toggle').addClass('on');
      $('.menu-section').addClass('on');
      $('.name').css('display', 'none');
      $('.menuContainer').removeClass('menuDown');
      $('.menuContainer').addClass('menuContainer2');
      $('.searchContainer').addClass('searchDown');

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
        $('.menuContainer').removeClass('menuDown');
        $('.name').css('display', 'block');
        $('.searchContainer').removeClass('searchDown');
      },2000);
    }
  );

  /*
    呼入呼出search
  */
  $('.searchBtn').toggle(
    function() {
      $('.search').css({'width':'350px', 'right': '0px'});
    },function() {
      $('.search').css({'width':'0px', 'right': '-5px'});
      $('.blogList').remove();
    }
  );

})();