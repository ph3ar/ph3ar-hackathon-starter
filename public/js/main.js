// Before (deprecated usage)
$(document).ready(() => {
  // Example functionality: Update the text of an element with id 'welcome-message'
  $('#welcome-message').text('Welcome to the updated page!');
});

// After (recommended usage)
$(function() {
  // The same functionality after updating to the recommended usage
  $('#welcome-message').text('Welcome to the updated page!');
});
