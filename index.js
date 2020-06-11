$(document).ready(function() {
    AOS.init({once: true});
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy();

    // Navbar hide
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }

    // Vanta
    VANTA.NET({
        el: "#landing",
        mouseControls: true,
        touchControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x2a2a2a,
        backgroundColor: 0x1a1a1a,
        points: 8.00,
        maxDistance: 28.00,
        spacing: 18.00,
        showDots: false
      })
})
