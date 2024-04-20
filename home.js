// $(document).ready(function () {
//     $(window).scroll(function () {
//       if ($(this).scrollTop() &gt; 50) {
//         $("header").addClass("sticky");
//       } else {
//         $("header").removeClass("sticky");
//       }
//     });
  
//     function newDate() {
//       return new Date().getFullYear();
//     }
//     document.onload = document.getElementById("autodate").innerHTML = +newDate();
//   });


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });
  
    function newDate() {
        return new Date().getFullYear();
    }
    
    // Accessing autodate element inside the ready function
    $("#autodate").text(newDate());
});
