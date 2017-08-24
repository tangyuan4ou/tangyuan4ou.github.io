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
       if ( title_index > -1  && seach.value) {
        createList(element);
       }
        element.tags.forEach(function(tag) {
          var tag_index = tag.name.indexOf(seach.value);
          if ( tag_index > -1 && seach.value) {
            createList(element);
          }
        }, this);
      }, this);
      function createList (data) {
        if ( data.tags.length != 0 ) {
          var arr = [];
          console.log(data.tags)
          data.tags.forEach(function(element) {
            console.log(element)
            $('.searchList').append('<li class="blogList"><a href="/'  +data.path + '"></a><h3>'+ data.title +'</h3><span>'+ element.name + '</span></li>');
          }, this);
        } else {
          $('.searchList').append('<li class="blogList"><a href="/'  +data.path + '"></a><h3>'+ data.title +'</h3><span>#无标签</span></li>');
        }
      }
    })
  }.bind(this),
    error: function(xhr, status, err) {
      console.log('/content.json', status, err.toString());
    }.bind(this)
})

