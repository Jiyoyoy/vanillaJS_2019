import "./styles.css";

const bgColor = document.querySelector("body");
const colors = ["lightgray", "skyblue", "lightpink", "#FFF4A3"];

function windowResize() {
  const windowSize = window.innerWidth;
  if (windowSize < 700) {
    bgColor.style.backgroundColor = colors[0];
  } else if (windowSize < 1000) {
    bgColor.style.backgroundColor = colors[1];
  } else {
    bgColor.style.backgroundColor = colors[2];
  }
}

window.onresize = windowResize;
