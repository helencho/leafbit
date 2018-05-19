import document from "document";
import { display } from "display";

// Add zero in front of numbers < 10
export const zeroPad = (i) => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// Update steps 
let tree = document.getElementById("tree");

export const updateSteps = (progress) => {
  if (display.on) {
    switch (true) {
      case progress < 33:
        tree.href = "../resources/assets/healthy_growing.png";
        break;
      case progress < 66:
        tree.href = "../resources/assets/after_2_weeks.png";
        break;
      case progress < 99:
        tree.href = "../resources/assets/variation_1@4x.png";
        break;
      case progress >= 100:
        tree.href = "../resources/assets/variation_2@4x.png";
        break;
      default:
        tree.href = "../resources/assets/healthy_growing.png";
        break;
    }
  }
}