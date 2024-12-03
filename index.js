
function openBurgerMenu() {

  //code changing burger button to close X button
  // const img = document.getElementById("burger-menu-image");
  // const imageSrc = img.getAttribute("src");

  // if(imageSrc === "close.png") {
  //   document.getElementById("burger-menu-image").src = "menu.png"

  // } else {
  //   document.getElementById("burger-menu-image").src = "close.png"

  // }

  //Show the popout menu once the burger menu is clicked
  const overlayDiv = document.getElementById("close-burger-menu");
  overlayDiv.style.width = "100%";



}

function closeBurgerMenu() {
  //Close popout menu once X is clicked
  const overlayDiv = document.getElementById("close-burger-menu");
  overlayDiv.style.width = "0";


  
}