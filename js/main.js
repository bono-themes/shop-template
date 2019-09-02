
$(function(){
    
    $("a[data-filter-color]").each(function(){
        $(this).css('background', $(this).data('filter-color'));
    });
    
});