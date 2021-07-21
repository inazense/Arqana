jQuery(document).ready(function($) {
  "use strict";

  //Contact
  $('form.contactForm').submit(function() {
    var str = $(this).serialize();
    var action = $(this).attr('action');
    
    $.ajax({
      type: "POST",
      url: action,
      data: str,
      success: function(msg) {
        //console.log(msg.result);
        if (msg.result == 'success') {
          $("#sendmessage").addClass("show");
          $("#errormessage").removeClass("show");
          $('.contactForm').find("input, textarea").val("");
        } else {
          $("#sendmessage").removeClass("show");
          $("#errormessage").addClass("show");
          $('#errormessage').html(msg.result);
        }

      }
    });
    return false;
  });

});
