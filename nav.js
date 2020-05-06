$('.quoteblock1 div').on('click', function() {
  var filter = $(this).attr('data-filter')
    $('.quotes').removeClass('show')
  $(filter).addClass('show')
  $('.quote1').removeClass('scale')
  $(this).addClass('scale')

})
