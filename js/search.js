'use strict'
$.ajax({
  url: '/content.json',
  dataType: 'json',
  success: function(data) {
    $('.search').keyup(function(){
      var seach = document.getElementById("search")
      $('.blogList').remove();
      data.posts.forEach(function(element) {
        var title_index = element.title.indexOf(seach.value);
        if (title_index > -1 && seach.value) {
          createList(element);
          return;
        }
        element.tags.forEach(function(tag) {
          var tag_index = tag.name.indexOf(seach.value);
          if (tag_index > -1 && seach.value) {
            createList(element);
          }
        }, this);
      }, this);
    })
  }.bind(this),
    error: function(xhr, status, err) {
      console.log('/content.json', status, err.toString());
    }.bind(this)
})

//添加搜索的li
function createList (data) {
  if ( data.tags.length != 0 ) {
    var span = '';
    if ( data.tags.length > 1 ) {
      span = '';
      for (var j=0; j<data.tags.length; j++) {
        span = span + '<span class="span">#' + data.tags[j].name + '</span>';
      }
      $('.searchList').append('<li class="blogList"><a href="/'  + data.path + '"></a><h3>'+ data.title +'</h3>'+ span +'</li>')
    } else {
      for (var i in data.tags) {
        span = '<span class="span">#'+ data.tags[i].name +'</span>';
        $('.searchList').append('<li class="blogList"><a href="/'  + data.path + '"></a><h3>'+ data.title +'</h3>'+ span +'</li>')
      }
    }
  } else {
    $('.searchList').append('<li class="blogList"><a href="/'  + data.path + '"></a><h3>'+ data.title +'</h3><span>#无标签</span></li>');
  }
}

