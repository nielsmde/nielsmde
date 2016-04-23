var default_menuitem;
$(function() {
  default_menuitem = $('.menuitem.active').attr('id');

  process_url_path();
});

function set_url_path(path) {
  //console.log('Setting path: ');
  //console.log(path);
  var title = document.title;
  if (path[0] != '/')
  path = '/' + path;
  if ( window.location.pathname != path)
  window.history.pushState({}, title, path);
}

function click_menuitem(item) {
  item = $(item);
  $('.menuitem').removeClass('active');
  item.addClass('active');

  $('.content').removeClass('active');
  $('#content_'+item.attr('id')).addClass('active');
  set_url_path(item.attr('id'));
}

function process_url_path() {
  // First charcter of the path is always '/'
  var path = window.location.pathname.slice(1);
  var menuitem;
  menuitem = path.split('/')[0];
  if ( $('#'+menuitem).length == 0 )
  menuitem = default_menuitem;
  click_menuitem($('#' + menuitem));
}
