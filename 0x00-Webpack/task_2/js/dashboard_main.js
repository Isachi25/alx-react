import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css'; // Import the CSS file

// Add elements to the body
$('body').prepend('<div id="logo"></div>'); // Add the logo div
$('body').append("<p>Holberton Dashboard</p>");
$('body').append("<p>Dashboard data for the students</p>");
$('body').append("<button>Click here to get started</button>");
$('body').append("<p id='count'></p>");
$('body').append("<p>Copyright - Holberton School</p>");

let count = 0;

function updateCounter() {
  count++;
  $('#count').html(`${count} clicks on the button`);
  if (count === 500) {
    alert('You have reached 500 clicks!');
  }
}

// Use lodash debounce to prevent spamming
$('button').on('click', _.debounce(function () {
  updateCounter();
}, 300));

