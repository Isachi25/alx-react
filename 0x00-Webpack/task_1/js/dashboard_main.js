import $ from 'jquery';
import _ from 'lodash';

function updateCounter() {
    let count = 0;
    $('body').append(`<p>Holberton Dashboard</p>`);
    $('body').append(`<p>Dashboard data for the students</p>`);
    $('body').append(`<p>Copyright - Holberton School</p>`);

    const debounceUpdate = _.debounce(() => {
        count += 1;
        console.log(count);
    }, 500);
    
    $(window).on('scroll', debounceUpdate);
}

updateCounter();

