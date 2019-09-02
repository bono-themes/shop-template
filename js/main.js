
$(function(){
    
    $("a[data-filter-color]").each(function(){
        $(this).css('background', $(this).data('filter-color'));
    });
    
    $("[data-cover]").each(function(){
        $(this).css('background-image', 'url("' + $(this).data('cover') + '")');
    });
});