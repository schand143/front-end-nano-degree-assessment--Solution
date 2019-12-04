// NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. During the final minute, NASA has 6 tasks to complete:

// Orbiter transfers from ground to internal power (T-50 seconds)
// Ground launch sequencer is go for auto sequence start (T-31 seconds)
// Activate launch pad sound suppression system (T-16 seconds)
// Activate main engine hydrogen burnoff system (T-10 seconds)
// Main engine start (T-6 seconds)
// Solid rocket booster ignition and liftoff! (T-0 seconds)
// NOTE: "T-50 seconds" read as "T-minus 50 seconds".

var time = 60;

while (time >= 0) {
  if (time === 50) {
    console.log("Orbiter transfers from ground to internal power");
  } else if (time === 31) {
    console.log("Orbiter transfers from ground to internal power");
  } else if (time === 16) {
    console.log("Activate launch pad sound suppression system");
  } else if (time === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  } else if (time === 6) {
    console.log("Main engine start");
  } else if (time === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  } else {
    console.log("T-" + time + " seconds");
  }
  time = time - 1;
}
