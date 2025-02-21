$(document).ready(function () {
  AOS.init({ once: true });
  $(".sidenav").sidenav();
  $(".materialboxed").materialbox();
  $(".scrollspy").scrollSpy();

  function getDate() {
    `use strict`;
    let year = new Date().getFullYear();
    console.log(year);
    document.getElementById(
      "footer"
    ).textContent = `© ${year} JULIUSKARL LIMITED ALL RIGHTS RESERVED`;
  }
  getDate();

  // Navbar hide
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos || prevScrollpos <= 0) {
      document.getElementById("navbar").style.top = "0";
      document.getElementById("navbar").style.background =
        "rgba(26, 26, 26, 0.9)";
      if (currentScrollPos <= 250)
        document.getElementById("navbar").style.background =
          "rgba(26, 26, 26, 0.0)";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };

  // About functions
  function blink() {
    setInterval(function () {
      {
        document.getElementById("blink").style.visibility == "hidden"
          ? (document.getElementById("blink").style.visibility = "visible")
          : (document.getElementById("blink").style.visibility = "hidden");
      }
    }, 500);
  }
  blink();

  // Typewriter
  function typeWriterContainer() {
    var i = 0;
    const txt = "I build apps.";
    const speed = 80;
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
  }

  function typeWriterDelay() {
    setTimeout(typeWriterContainer, 1800);
  }

  typeWriterDelay();
  if (
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // Vanta
    VANTA.NET({
      el: "#landing",
      mouseControls: true,
      touchControls: false,
      minHeight: 150.0,
      minWidth: 150.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x1e403c,
      backgroundColor: 0x242424,
      points: 20.0,
      maxDistance: 30.0,
      spacing: 20.0,
      showDots: false,
    });
  }
});
