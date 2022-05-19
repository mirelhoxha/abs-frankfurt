$(function() {
    var sidebar = $('.sidebar');
    $('body').on('click', 'button.mobile-menu', function() {
        sidebar.addClass('sidebar-open');
    });
    $('body').on('click', 'button.close-drawer', function() {
        sidebar.removeClass('sidebar-open');
    });
});