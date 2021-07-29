// fixed navigation

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            document.getElementById("navbar_top").style.boxShadow = "2px 2px 10px grey";
            document.getElementById("navbar_top").style.marginTop = "0px";
            document.getElementById("navbar_top").style.marginLeft = "0px";

     
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';

        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            document.getElementById('navbar_top').style.boxShadow = "none";
         


            // remove padding top from body
            document.body.style.paddingTop = '0';
        }

    });
});






