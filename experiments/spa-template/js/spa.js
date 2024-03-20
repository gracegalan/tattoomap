// Global variable to track the current page
var currentPage = 1;
var maxPages = 5

$(document).ready(function() {
  displayPage(currentPage); // Display the initial page
  prepNav(); // Prepare navigation buttons and event listeners
});

function displayPage(pageNumber) {
  currentPage = pageNumber;
  $('.page').hide();
  $('.page' + currentPage).fadeIn();
}

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

function prevPage() {
  if(currentPage === 1) {
      displayPage(maxPages); // Assuming there are 5 pages, adjust if there are more or fewer pages
  } else {
      displayPage(currentPage - 1);
  }
}

function nextPage() {
  if(currentPage === maxPages) { // Assuming there are 5 pages, adjust if there are more or fewer pages
      displayPage(1);
  } else {
      displayPage(currentPage + 1);
  }
}
