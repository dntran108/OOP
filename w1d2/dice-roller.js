
var rollTimes = process.argv[2];
function diceRoller(num) {
  let output = [];
  var dice = 0;
  for (var i = 0; i < num;i++)
  {
    dice = Math.floor(Math.random()*6) + 1;
    output.push(dice);
  }
  console.log("Rolled " + num + " dice: " + output.join());
}

diceRoller(rollTimes);

