
//$(document).ready(function(){
//
//    $("#LGform").submit(function(e) {
//        if ( $("#name").val() == ' ' || $("#password").val() == ' ' ) {         
//            alert("Please, introduse yourself with an ID and password!");
//        }
//        e.preventDefault();
//    });
//    
//    $("#submit2").submit(function(e) {
//       window.location.replace("PersonalEmployeePage.html");
//       e.preventDefault();
//   }); 
//   
//});


$('form').submit(function (e) {

    // Get the Login Name value and trim it
    var name = $.trim($('#name').val());
    var pass = $.trim($('#password').val());

    // Check if empty of not
    if (name === ''  &  pass === '') {
        alert('Please, introduse yourself with an ID and password!');
        return false;
    } else if (name === ''){
        alert('ID number is required!');
    } else if (pass === '') {
        alert('Password is required!');
    } else {
        window.location.replace("PersonalAccountPage.html");
        e.preventDefault();
    }
});
    



