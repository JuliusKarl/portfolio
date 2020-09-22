$(document).ready(function() {
    AOS.init({once: true});
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy();

    // Navbar hide
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos || prevScrollpos <= 0) {
            document.getElementById("navbar").style.top = "0";
            document.getElementById("navbar").style.background = "rgba(26, 26, 26, 0.9)";
            if (currentScrollPos <= 250) document.getElementById("navbar").style.background = "rgba(26, 26, 26, 0.0)";
        }
        else {document.getElementById("navbar").style.top = "-100px";}
        prevScrollpos = currentScrollPos;
    }

    // About functions
    function blink() {
        setInterval(function() {
            { document.getElementById("blink").style.visibility == "hidden" ?
            document.getElementById("blink").style.visibility = "visible" : 
            document.getElementById("blink").style.visibility = "hidden" }}, 500)}
    blink();

    // Typewriter
    function typeWriterContainer() {
        var i = 0;
        const txt = 'I build software.';
        const speed = 80;
        function typeWriter() {
            if (i < txt.length) {
                document.getElementById("title").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);}}
        typeWriter();
    }   

    function typeWriterDelay() {
        setTimeout(typeWriterContainer, 1800);}

    typeWriterDelay();

    // Vanta
    VANTA.NET({
        el: "#landing",
        mouseControls: true,
        touchControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x1e403c,
        backgroundColor: 0x1a1a1a,
        points: 14.00,
        maxDistance: 28.00,
        spacing: 18.00,
        showDots: false
      })
})
