(function(){
  /*
      调整archive页nav样式
  */
  //菜单按钮
  $('.menu-section').css('position', 'absolute');
  $('.name').text('tangyuan').css('color', '#ffffff');
  $('.navBtn').css('background-color', '#ffffff');

  //search
  $('.search').css({'background':'#161823', 'color': '#ffffff', 'border-color':'#ffffff'});
  $('.searchBtn').css({'background':'none', 'color': '#ffffff'});

  //svg动画，文章背景填充颜色
  setTimeout(function(){
    $('.draw').css('fill', 'rgb(233, 241, 246)');
    $('.content').css('opacity', 1);
  }, 4000);

  //根据浏览器滚动加载文字
  var height = window.innerHeight - 150;
  $(window).scroll(function(){
    var wst = $(window).scrollTop();
    //p动画
    for (var j in arr) {
      if ( parseInt(arr[j].offset().top)-height < wst ){
        arr[j].addClass('pAnimate');
      }
    }
    //img动画
    if (parseInt($('.headerImg').offset().top)-650 < wst) {
      $('.headerImg').addClass('imgAnimate');
    }
  })

    
})();