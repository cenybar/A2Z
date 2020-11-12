// Adapted from: http://p5js.org/examples/examples/Dom_Input_and_Button.php (as shown by Daniel Shiffman on A2Z-F16 Github)

var input, button, greeting;

function setup() {

  noCanvas();

  // Make an h2 element
  greeting = createElement('h2', 'Ingrese aquí su cartel:');
  // Make a text input field
  input = createInput();
  // Make a submit button
  button = createButton('submit');

  // Here a button triggers the "tiempo vándalo"
  button.mousePressed(tiempo);

  // p5 has a function for when the user hits enter
  // Since we are using the button, it's not necessary here
  // though we could have both?
  input.changed(tiempo);

  // The input event is fired with each keyPress
  input.input(greetTyping);

}

function greetTyping() {
  // value() is the function to get the contents of the text input
  greeting.html(input.value());
}

function tiempo() {
  var name = input.value();
  let output = '';

  for(let i = 0; i < data.length; i++) {
    output = output.concat(name[i]);
    console.log(output);  
  }
  
}
