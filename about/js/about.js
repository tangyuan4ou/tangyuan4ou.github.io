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
    $('.searchBtn').css({'background':'#161823', 'color': '#ffffff'});

    setTimeout(function(){
      $('.draw').css('fill', 'rgb(233, 241, 246)');
      $('.content').css('background', 'rgb(233, 241, 246)');
    }, 4000);


    
})();