function setup() {
  // Creating Canvas size
  createCanvas(950, 940);

  // Set the background color
  background(0);
  var button = createButton("reset");
   button.size(70,70);
  button.mousePressed(setup);
  // Calling to random() function with
  // parameter array of some elements
  let A = random([1], [70]);
  let B = random([1], [70]);
  let C = random([1], [70]);
  let D = random([1], [70]);
  let E = random([1], [70]);
  let F = random([1], [25]);
  let G = random([1], [25]);

  // Set the size of text
  textSize(25);

  // Set the text color
  fill(color("green"));

  // Getting random number
 text("1Random " + A, 50, 30);
  text("2Random " + B, 50, 130);
  text("3Random " + C, 50, 230);
  text("4Random " + D, 50, 330);
  text("5Random " + E, 50, 430);
  text("6Random " + F, 50, 530)
}
