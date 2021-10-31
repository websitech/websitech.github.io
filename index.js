window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 180 ||
    document.documentElement.scrollTop > 180
  ) {
    document.getElementById("navbar-color").style.background =
      "rgba(0, 0, 0, 0.89)";
  } else {
    document.getElementById("navbar-color").style.background =
      "rgba(0, 0, 0, 0.31)";
  }
}
