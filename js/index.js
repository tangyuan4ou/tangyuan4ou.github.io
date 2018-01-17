(function() {
  /*
    获取页面宽高度
  */
  var height = window.innerHeight,
    width = window.innerWidth;

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
    首页menu
  */
  $('.menuContainer').css('height', height>500 ? height : 500);
  $('.list').css('line-height', (height>500 ? height : 500) + 'px').first().css('margin-left', width/12);

  window.onresize = function() {
    height = window.innerHeight;
    width = window.innerWidth;

    $('.menuContainer').css('height', height>500 ? height : 500);
    $('.list').css('line-height', (height>500 ? height : 500) + 'px').first().css('margin-left', width/12);
  }

  //单击a跳转前执行动画
//   $('.list > a').click(function(){
//     var this_ = $(this).parent();
//     this_.siblings().animate({
//       opacity: 0
//     }, 1000,function(){
//       this_.animate({
//         opacity: 0,
//         left: '-=20'
//       },1500,function(){
//         $('.menuBg').animate({
//           opacity: 0
//         },1000,function(){
//           window.location.href = this_.children().attr("href");
//         });
//       });
//     });
//     return false;
//   });
  

  /*
    菜单呼入和呼出
  */
  $('.menu-toggle').toggle(
    function() {
      $('.menu-section').addClass('on').children().children().eq(2).addClass('on');
      $('.searchContainer').addClass('searchDown');

      $('.name').css('display', 'none');
      $('.menuContainer').removeClass('menuDown').addClass('menuContainer2');

      $('.menu').removeClass("fadeInDown").addClass("fadeInUp");
      setTimeout(function(){
        $('.list').addClass('listHover');
      },2000);
    },
    function() {
      $('.menu-section').removeClass('on').children().children().eq(2).removeClass('on');

      $('.menu').removeClass("fadeInUp").addClass("fadeInDown");
      setTimeout(function(){
        $('.list').removeClass('listHover');
        $('.menuContainer').removeClass('menuContainer2').removeClass('menuDown');
        $('.name').css('display', 'block');
        $('.searchContainer').removeClass('searchDown');
      },2500);
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