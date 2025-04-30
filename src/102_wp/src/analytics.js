import * as $ from 'jquery';

function makeAnalytics() {
    let counter = 0;

    const handler = function() {
        counter++;
    }

    // document.addEventListener('click', handler);
    $('body').on('click', handler);

    return {
        remove() {
            // document.removeEventListener('click', handler);
            $('body').off('click', handler);
            let a = 34;
        },
        getClicks() {
            return counter;
        }
    }
}

window.analytics = makeAnalytics();


