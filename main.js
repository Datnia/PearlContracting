$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});

$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
});

$(document).ready(function() {
  $(".nav ul li a").on("click", function() {
    $("nav ul li a").toggleClass("showing");
  });
});

ScrollReveal().reveal(".rev", { delay: 450 });
ScrollReveal().reveal(".wwd", { delay: 450 });
ScrollReveal().reveal(".btn", { delay: 1000 });

AOS.init();

var rellax = new Rellax(".rellax");

$(document).ready(function() {
  $(".navItem").click(function() {
    $("a.current").removeClass("current");
    $(this).addClass("current");
  });
});

$(document).scroll(function() {
  var position = $(document).scrollTop();

  $(".section").each(function(i) {
    if ($(this).position().top <= position + 200) {
      $("a.current").removeClass("current");
      $("a")
        .eq(i)
        .addClass("current");
    }
  });
});
