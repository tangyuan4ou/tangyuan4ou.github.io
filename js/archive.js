(function(){
  //页面加载时载入样式
  setTimeout(function() {
    $('.T').addClass('tt');
    $('.R').addClass('rr');
    $('.B').addClass('bb');
    $('.L').addClass('ll');
  },1000);
  setTimeout(function() {
    $('.postBg').addClass('bg');
  },2000);
  setTimeout(function(){
    $('.content').removeClass('contentAnimOn').addClass('contentAnimDown');
  },3000);

  //鼠标指针划入目标项动画
  $('.postBg').mouseenter(function() {
    var that = $(this);
    that.parent().children().eq(0).addClass('tAnim');
    that.parent().children().eq(1).addClass('rAnim');
    that.parent().children().eq(2).addClass('bAnim');
    that.parent().children().eq(3).addClass('lAnim');
    setTimeout(function() {
      $('.swap').children().removeClass('tAnim').removeClass('rAnim').removeClass('bAnim').removeClass('lAnim');
      that.parent().children().eq(4).removeClass('contentAnimDown').addClass('contentAnimOn');
    },1000);
  })
  //鼠标指针移除目标项动画
  $('.postBg').mouseleave(function() {
    var that = $(this);
      that.parent().children().eq(0).addClass('tAnim');
      that.parent().children().eq(1).addClass('rAnim');
      that.parent().children().eq(2).addClass('bAnim');
      that.parent().children().eq(3).addClass('lAnim');
    setTimeout(function() {
      $('.swap').children().removeClass('tAnim').removeClass('rAnim').removeClass('bAnim').removeClass('lAnim');
      that.parent().children().eq(4).removeClass('contentAnimOn').addClass('contentAnimDown');
    },1000);
  });

  //tag
  var href = location.href;
  $.ajax({
    url: '/content.json',
    dataType: 'json',
    success: function(data) {
      var arr = [];
      data.posts.forEach(function(data){
        data.tags.forEach(function(tag){
          arr.push(tag.name);
          if (href.indexOf(tag.name) != -1) {
            $('.name').text('tags:' + tag.name);
          }
        })
      })
      var obj = {};
      var tagArr = [];
      for (var i=0; i<arr.length; i++) {
        if (!obj[arr[i]]) {
          obj[arr[i]] = true;
          tagArr.push(arr[i]);
        }
      }
      if (href.indexOf('tag') != -1) {
        var a = '';
        for (var i in tagArr) {
          a = a + '<li class="tags"><a href="／">'+ tagArr[i] +'</a></li>';
        }
        $('.tagContent').append(a);
      }
    }.bind(this),
    error: function(xhr, status, err) {
      console.log('/content.json', status, err.toString());
    }.bind(this)
  });
  

})();
 