(function(){

  setTimeout(function() {
    $('.T').addClass('tAnim');
    $('.R').addClass('rAnim');
    $('.B').addClass('bAnim');
    $('.L').addClass('lAnim');
    
  },1000)
  setTimeout(function() {
    $('.swap').children().removeClass('tAnim').removeClass('rAnim').removeClass('bAnim').removeClass('lAnim');
    $('.content').removeClass('contentAnimOn').addClass('contentAnimDown').css('background-color', '#e9f1f6');
  },2000)

  $('.content').mouseenter(function() {
  var that = $(this);
  that.parent().children().eq(0).addClass('tAnim');
  that.parent().children().eq(1).addClass('rAnim');
  that.parent().children().eq(2).addClass('bAnim');
  that.parent().children().eq(3).addClass('lAnim');
  setTimeout(function() {
    $('.swap').children().removeClass('tAnim').removeClass('rAnim').removeClass('bAnim').removeClass('lAnim');
    that.removeClass('contentAnimDown').addClass('contentAnimOn').css('background-color', '#161823');
  },1000);

  
  
})
$('.content').mouseleave(function() {
  var that = $(this);
    that.parent().children().eq(0).addClass('tAnim');
    that.parent().children().eq(1).addClass('rAnim');
    that.parent().children().eq(2).addClass('bAnim');
    that.parent().children().eq(3).addClass('lAnim');
  setTimeout(function() {
    $('.swap').children().removeClass('tAnim').removeClass('rAnim').removeClass('bAnim').removeClass('lAnim');
    that.removeClass('contentAnimOn').addClass('contentAnimDown').css('background-color', '#e9f1f6');
  },1000)
  
}) 
})();
 