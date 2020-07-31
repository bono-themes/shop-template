
$(function(){
    
    $("a[data-filter-color]").each(function(){
        $(this).css('background', $(this).data('filter-color'));
    });

    $("[data-cover]").each(function(){
        $(this).css('background-image', 'url("' + $(this).data('cover') + '")');
    });

    // Basket-dropdown handler
    (function(){
        var basketDropdownSelector = ".cart-dropdown"; // Default selector we're gonna use
        var $dropdown = $(basketDropdownSelector); // Reference to current dropdown

        // Additional check to inform users if they missed
        if ($dropdown.length == 0) {
            console.log('Could not find drodown element for the basket. Aborting handler.');
            return false;
        }

        // Click on basket button to open inner dropdown
        $("[data-button='cart-dropdown-opener']").click(function(event){
            event.preventDefault(); // We don't want default hash click to occur

            // Show / hide depending on the state
            $dropdown.css('opacity', $dropdown.css('opacity') == 0 ? 1 : 0);
        });

        // Click outside of basket
        $(document).on('click', function(event){
            var $target = $(event.target);

            if (!$target.closest(basketDropdownSelector).length && $(basketDropdownSelector).css("opacity") == 1) {
                $(basketDropdownSelector).css("opacity", 0)
            }        
        });
    })(document, $);
    
});