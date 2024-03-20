// Global variable to track the current page
var currentPage = 1;
var maxPages = 18

$(document).ready(function() {
  displayPage(currentPage); // Display the initial page
  prepNav(); // Prepare navigation buttons and event listeners

  // Function to display a page
  function displayPage(pageNumber) {
    currentPage = pageNumber;
    $('.page').hide();
    $('.page' + currentPage).fadeIn();
  }

  // Add navigation buttons to each page
  function prepNav() {
    $('.page').each(function() {
        $(this).append('<button class="prev"></button>');
        $(this).append('<button class="next"></button>');
    });

    $('.prev').click(function() {
        prevPage();
    });

    $('.next').click(function() {
        nextPage();
    });
  }

  // Event handling to go to the previous page
  function prevPage() {
    if(currentPage === 1) {
        displayPage(maxPages); // Assuming there are 5 pages, adjust if there are more or fewer pages
    } else {
        displayPage(currentPage - 1);
    }
  }

  // Event handling to go to the next page
  function nextPage() {
    if(currentPage === maxPages) { // Assuming there are 5 pages, adjust if there are more or fewer pages
        displayPage(1);
    } else {
        displayPage(currentPage + 1);
    }
  }

  $(window).resize(function() {
    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();
    var originalWidth = 1920;
    var originalHeight = 1080;
    var aspectRatio = originalWidth / originalHeight;
    var viewportAspectRatio = viewportWidth / viewportHeight;
    var scaleFactor;

    // Decide whether to scale based on width or height by comparing aspect ratios
    if (viewportAspectRatio > aspectRatio) {
        // Viewport is wider relative to the desired aspect ratio, scale based on height
        scaleFactor = viewportHeight / originalHeight;
    } else {
        // Viewport is narrower, scale based on width
        scaleFactor = viewportWidth / originalWidth;
    }

    $('.page-contents').css({
        'transform': 'scale(' + scaleFactor + ') translate(-50%, -50%)',
        'transform-origin': '0 0',
        'position': 'absolute',
        'left': '50%',
        'top': '50%',
    });
  }).trigger('resize');

});