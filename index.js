// For navbar color
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 180 ||
//     document.documentElement.scrollTop > 180
//   ) {
//     document.getElementById("navbar-color").style.background =
//       "rgba(0, 0, 0, 0.89)";
//   } else {
//     document.getElementById("navbar-color").style.background =
//       "rgba(0, 0, 0, 0.31)";
//   }
// }

if (window.innerWidth < 500) {
  console.log("less");
  document.getElementById("illustration").style.display = "none";
} else {
  document.getElementById("illustration").style.display = "block";
}
