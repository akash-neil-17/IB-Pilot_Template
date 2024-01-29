$(document).ready(function(){
    $('.floatingMobile').hide();
    $('input[type="radio"]').change(function(){
        if($(this).val()==='option2'){
            $('.floatingMobile').show();
            $('.floatingEmail').hide();
        }
        else{
            $('.floatingEmail').show();
            $('.floatingMobile').hide();
        }
    });
    $('#main').hide();
    // Attach a change event handler to the checkbox
    $('#virtualKeyboard').change(function() {
        displayKeyboard();
      });

      // Attach a click event handler to the input field
      $('#floatingPassword').click(function() {
        displayKeyboard();
      });

      // Function to update keyboard visibility based on checkbox and input field state
      function displayKeyboard() {
        // Check if the checkbox is checked and input field is clicked
        if ($('#virtualKeyboard').prop('checked') & $('#floatingPassword').is(':focus')) {
          // Show the div
          $('#main').show();
        } else {
          // Hide the div
          $('#main').hide();
        }
    };
    // Hide the keyboard when clicking outside the password field
    // $(document).click(function(event) {
    //     if (!$(event.target).closest('#floatingPassword').length) {
    //       $('#main').hide();
    //     }
    // });
});
// Password Visibility
$('#passwordReveal').on('click',function(){
    const type = $('#floatingPassword').attr('type') === 'password' ? 'text' : 'password';
    $('#floatingPassword').attr('type', type);
    if(type === 'password'){
        $('.icon').removeClass("fa-regular fa-eye");
        $('.icon').addClass("fa-regular fa-eye-slash");
    }
    else if (type === 'text'){
        $('.icon').removeClass("fa-regular fa-eye-slash");
        $('.icon').addClass("fa-regular fa-eye");
    }
});


    
