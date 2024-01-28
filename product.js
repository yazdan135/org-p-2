// init Isotope
var $grid = $('.item-detail').isotope({
    // options
  });
  // filter items on button click
  $('.item-menu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });


  
  $(document).ready(function(){


    $('.all-item').hide()
    $('.btn-1').click(function(){
    $('.all-item').toggle()
    });
  
  });