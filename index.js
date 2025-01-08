
function openBurgerMenu() {
  const overlayDiv = document.getElementById("close-burger-menu");
  overlayDiv.style.width = "100%";
}

function closeBurgerMenu() {
  //Close popout menu once X is clicked
  const overlayDiv = document.getElementById("close-burger-menu");
  overlayDiv.style.width = "0";
}