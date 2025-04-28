const navBtn = document.querySelector("#menu");
const menuBar = document.querySelector(".menubar");

navBtn.addEventListener("click", () => {
  const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
  navBtn.setAttribute('aria-expanded', !isExpanded);

  if (isExpanded) {
    menuBar.classList.remove("opacity-100", "scale-100");
    menuBar.classList.add("opacity-0", "scale-95",);
  } else {
    menuBar.classList.remove("opacity-0", "scale-95",);
    menuBar.classList.add("opacity-100", "scale-100",);
  }
});
