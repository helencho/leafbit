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


export const updateSteps = (progress) => {
  let tree = document.getElementById("tree");
  let progressBar = document.getElementById("progress")
  switch (true) {
    case (progress < 20):
      progressBar.href = "../resources/assets/progress_bar/progress_bar.png";
      break;
    case (progress < 40):
      progressBar.href = "../resources/assets/progress_bar/progress_bar_1.png";
      break;
    case (progress < 60):
      progressBar.href = "../resources/assets/progress_bar/progress_bar_2.png";
      break;
    case (progress < 80):
      progressBar.href = "../resources/assets/progress_bar/progress_bar_3.png";
      break;
    case (progress >= 100):
      progressBar.href = "../resources/assets/progress_bar/progress_bar_full.png";
      tree.href = "../resources/assets/after_2_weeks.png"
      break;
    default:
     progressBar.href = "../resources/assets/progress_bar/progress_bar.png";
     break;
  }
  console.log(tree.href)
}