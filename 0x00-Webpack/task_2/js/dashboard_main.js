import $ from 'jquery';
import { debounce } from 'lodash';
import '../css/main.css';

// Add HTML elements
$(document).ready(function () {
  $('body').append('<div id="logo"></div>');
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="btn">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  let count = 0;

  // Function to update counter
  function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }

  // Bind debounce function to button click
  $('#btn').on('click', debounce(updateCounter, 300));
});
