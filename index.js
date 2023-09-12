const vtxnavNav = document.querySelector(".nav-menu");
document.querySelector(".nav").onclick = () => {
  vtxnavNav.classList.toggle("active");
};
const menu = document.querySelector(".nav");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !vtxnavNav.contains(e.target)) {
    vtxnavNav.classList.remove("active");
  }
});
