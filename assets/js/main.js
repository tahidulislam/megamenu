(function($) {
  'use strict'; 
  // place your code here

/* ============ start activation for owl carousel ============= */
  jQuery(document).ready(function($){
    $('.your-class').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        items:1,
        autoplayTimeout:6000,
        autoplaySpeed:2000,
    })
  });
/* ============ end activation for owl carousel ============= */

/* ============ start activation for wow js ============= */
  new WOW().init();
/* ============ end activation for wow js ============= */

/* ============ start activation for waypoints ============= */
  $(document).ready(function(){
    // hide your element on page load
    $('#element-to-animate').css('opacity', 0);

    // trigger animation
    $('#element-to-animate').waypoint(function() {
        $('#element-to-animate').addClass('fadeInLeft');
    }, { offset: '50%' });
  });
/* ============ end activation for waypoints ============= */

/* ============ start activation for isotope ============= */
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });

  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });

  // bind sort button click
  $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({ sortBy: sortByValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
/* ============ end activation for isotope ============= */

/*============= Magnific pop up JS ================*/
    $(document).ready(function() {
      $('.video-play').magnificPopup({type:'iframe'});
    });
/*============= Magnific pop up JS ====================*/

})(window.jQuery);  