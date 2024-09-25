// js/header.js
import $ from 'jquery';
import '../header/header.css';

$(document).ready(function() {
  $('body').append('<div id="logo"></div>');
  $('body').append('<h1>Holberton Dashboard</h1>');
  console.log('Init header');
});
