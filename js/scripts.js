$(document).ready(function () {
    $('.zoom-in').viewportChecker({
        classToAdd: 'visible animated zoomIn',
        offset: 30
    });
    $('.fade-in-left').viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 30
    });
});
