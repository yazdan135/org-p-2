// init Isotope
var $grid = $('.item-1-detail').isotope({
    // options
  });
  // filter items on button click
  $('.item-1-menu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });




  $(document).ready(function(){
// init Isotope
var $grid = $('.item-2-detail').isotope({
    // options
  });
  // filter items on button click
  $('.item-2-menu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });


  });

  $(document).ready(function(){
  // init Isotope
var $grid = $('.item-3-detail').isotope({
  // options
});
// filter items on button click
$('.item-3-menu').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

});



$(document).ready(function(){
  // init Isotope
var $grid = $('.item-4-detail').isotope({
  // options
});
// filter items on button click
$('.item-4-menu').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

});