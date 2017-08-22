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
         data.tags.forEach(function(element) {
           $('.searchList').append('<li class="blogList"><a href="/'  +data.path + '"></a><h3>'+ data.title +'</h3><p>#'+ element.name +'</p></li>');
         }, this);
      }
    })
  }.bind(this),
    error: function(xhr, status, err) {
      console.log('/content.json', status, err.toString());
    }.bind(this)
})

