// scroll nav

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("nav-scrolled", window.scrollY > 0);
});

// scroll button

$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();
  if (scroll > 350) {
    $(".go_top").addClass("back_top");
  } else {
    $(".go_top").removeClass("back_top");
  }
});
$(".go_top").on("click", function () {
  $(window).scrollTop(0);
});