'use strict'
$.ajax({
  url: '/content.json',
  dataType: 'json',
  success: function(data) {
    $('.search').keyup(function(){
      var seach = document.getElementById("search")
      $('.blogList').remove();
      console.log(data)
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
        $('.searchList').append('<li class="blogList"></li>')
        $('.blogList').append('<a href="/'  +data.path + '"></a>');
         $('.blogList').append('<h3>'+ data.title +'</h3>');
         data.tags.forEach(function(element) {
           $('.blogList').append('<p>#'+ element.name +'</p>');
         }, this);
         
      }
    })
  }.bind(this),
    error: function(xhr, status, err) {
      console.log('/content.json', status, err.toString());
    }.bind(this)
})

