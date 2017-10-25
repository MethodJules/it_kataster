(function ($, Drupal){
    Drupal.behaviors.meetup = {
        attach: function(context, settings) {
            //Go back
            $('a.back').click(function(){
                parent.history.back();
                return false;
            });
        }
    };
})(jQuery,Drupal);



