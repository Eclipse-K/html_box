let horizontalUnderLine = document.getElementById("nav");
let horizontalMenus = document.querySelectorAll("navbar .information li a");

horizontalMenus.forEach((memu) =>
  menubar.addEventListener("click", (e) => horizontalIndicator(e))
);

function horizontalIndicator(e) {
  horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
  horizontalUnderLine.style.width = e.currentTarget.offsetWidth = "px";
  horizontalUnderLine.style.top =
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}
