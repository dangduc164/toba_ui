$(document).ready(function() {
    $('.p-new__group-new__handle ul li a').click(function() {
      let ourClass = $(this).attr('class')
      $('.p-new__group-new__handle ul li').removeClass('active')
      $(this).parent().addClass('active')

      if(ourClass == 'all') {
        $('.p-new__group-new__main .row').children('div.all').show()
      }
      else {
        $('.p-new__group-new__main .row').children('div:not(.' + ourClass + ')').hide()
        $('.p-new__group-new__main .row').children('div.' + ourClass).show()
      }
      return false;
    });
  });