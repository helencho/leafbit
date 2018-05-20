import clock from 'clock';
import { display } from 'display';
import document from 'document';
import { preferences } from 'user-settings';
import * as util from '../common/utils';
import { goals, today } from 'user-activity';

// DISPLAY CLOCK
// Update the clock every minute
clock.granularity = 'minutes';

// Get a handle on the <text> element
const myLabel = document.getElementById('time');
const tree = document.getElementById('tree');
// Update the <text> element every tick with the current time
clock.ontick = evt => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === '12h') {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  myLabel.text = `${hours}:${mins}`;
};

// DISPLAY TREE
// Define goal. This would come from the seed user chose

// Update step progress
// util.updateSteps(progress);

let animationStage = 1;
let treeImage;

setInterval(() => {
  if (animationStage > 0) {
    if (animationStage === 1) {
      animationStage = 2;
    } else if (animationStage === 2) {
      animationStage = 3;
    } else if (animationStage === 3) {
      animationStage = 1;
    }
    treeImage = '../resources/assets/plant/plant_' + animationStage + '.png';
    tree.href = treeImage;
  }
}, 400);

display.onchange = () => {
  if (display.on) {
    const goalSteps = goals.steps || 0;
    const localSteps = today.adjusted.steps || 0;
    const progress = localSteps / goalSteps * 100;
    console.log(progress);
    if (progress >= 100) {
      animationStage = 0;
      tree.href = '../resources/assets/after_2_weeks.png';
    } else {
      animationStage = 1;
    }
    util.updateSteps(progress);
  }
};
const progress = localSteps / goalSteps * 100;
const goalSteps = goals.steps || 0;
const localSteps = today.adjusted.steps || 0;
util.updateSteps(progress);
