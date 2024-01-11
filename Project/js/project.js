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


    
