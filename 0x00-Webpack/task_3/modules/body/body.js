// js/body.js
import $ from 'jquery';
import _ from 'lodash';
import '../body/body.css';

$(document).ready(function() {
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');

  let count = 0;

  function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
  }

  $('button').on('click', _.debounce(updateCounter, 500));
});
