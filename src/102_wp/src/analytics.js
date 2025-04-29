function makeAnalytics() {
    let counter = 0;

    const handler = function() {
        counter++;
    }

    document.addEventListener('click', handler);

    return {
        remove() {
            document.removeEventListener('click', handler);
            let a = 34;
        },
        getClicks() {
            return counter;
        }
    }
}

window.analytics = makeAnalytics();


