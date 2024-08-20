const input = document.querySelector("input");
const inputArrow = document.querySelector(".input_arrow");

input.addEventListener("mouseenter", () => {
  inputArrow.style.fill = "#4c5fd5";
});
input.addEventListener("mouseleave", () => {
  inputArrow.style.fill = "#000";
});

/**************************************************/

const searchIcon = document.getElementById("search");
const searchInput = document.getElementById("s_in");
const exitBnt = document.getElementById("exit_input");

searchIcon.addEventListener("click", () => {
  searchInput.style.visibility = "visible";
});
exitBnt.addEventListener("click", () => {
  searchInput.style.visibility = "hidden";
});

// Toggle btn

const toggleBtn = document.getElementById("toggle");
const overlayMenu = document.querySelector(".overlay_nav_menu");
const mobileHeader = document.querySelector(".mobile_navbar_header");
const sId1 = document.getElementById("id_1");
const sId2 = document.getElementById("id_2");
const sId3 = document.getElementById("id_3");

// Initial state
let isToggled = false;

// Event listener for the toggle button
toggleBtn.addEventListener("click", () => {
  if (isToggled) {
    // Reverse actions
    sId2.style.opacity = "1"; // Assuming the initial opacity is 1
    sId1.classList.remove("rotate");
    sId3.classList.remove("rotateOp");
    mobileHeader.style.backgroundColor = ""; // Assuming the initial color
    overlayMenu.classList.remove("show");
  } else {
    // Apply actions
    sId2.style.opacity = "0";
    sId1.classList.toggle("rotate");
    sId3.classList.toggle("rotateOp");
    mobileHeader.style.backgroundColor = "#191a1b";
    overlayMenu.classList.toggle("show");
  }

  // Toggle the state
  isToggled = !isToggled;
});

/**
 * Author rights
 */

document.addEventListener("DOMContentLoaded", authorRight);

function authorRight() {
  const user = document.querySelector(".user");
  const popupInfo = document.querySelector(".popup_info");
  const exitGreting = document.getElementById("exit");

  let Hellouser = prompt("Hello, let's meet, What's your name?");
  alert(`Nice to meet you ${Hellouser}, my name is mohsine`);
  user.textContent = Hellouser;
  popupInfo.style.opacity = "1";

  exitGreting.addEventListener("click", () => {
    popupInfo.style.display = "none";
  });
}
