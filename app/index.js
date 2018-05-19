import clock from "clock";
import { goals, today } from "user-activity";
import { display } from "display";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// DISPLAY CLOCK
// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myLabel = document.getElementById("time");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  myLabel.text = `${hours}:${mins}`;
}


// DISPLAY TREE 
// Define goal. This would come from the seed user chose 
const goalSteps = goals.steps || 0;
const localSteps = today.local.steps || 0;
const progress = (localSteps / goalSteps) * 100;

// Update step progress 
// util.updateSteps(progress);
display.onchange = () => {
  if(display.on) {
    console.log('ON');
    util.updateSteps(progress);
  }
}
util.updateSteps(progress);
