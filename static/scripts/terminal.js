// clear prompt / setup prompt
function init_prompt(prompt) {
  // set prompt to initial input
  prompt.value = '$ ';

  // set initial autofocus
  prompt.focus();

  // now measure from initial
  prompt.setSelectionRange(2, 2);
}

// print command line text and stdout to html page
function print(prompt) {
  // create new element to store old prompt text
  let op = document.createElement('textarea');

  // set class to output, readonly, and wrap hard
  op.className = 'output';
  op.readOnly = 'readonly';
  op.wrap = 'hard';

  // set cols for old prompt
  op.cols = '80';

  // get prompt text length
  let op_in_len = prompt.value.length;

  // calculate rows for old prompt
  op.rows = Math.floor((op_in_len - 2) / 38 + 1);

  // create new text node for previous prompts text
  let op_text = document.createTextNode(prompt.value);

  // add previous prompt text to new div
  op.appendChild(op_text);

  // get parent node of prompt
  let terminal = prompt.parentNode;

  // now insert
  terminal.insertBefore(op, prompt);

  // set prompt to initial input
  init_prompt(prompt);

}

// interpret commands from prompt
function interpret() {
  // TODO
}

// func for keys
function get_input(event) {
  // check for enter to handle input and printing
  if (event.key == 'Enter') {
    // keep out annoying newline
    event.preventDefault();

    // get input
    let input = event.target;

    // print
    print(input);
  }
  else if (event.ctrlKey) {
    // check if CTRL key is being pressed for special editing
    switch (event.key) {
      case "a":
        // nullify default key action
        event.preventDefault();

        // now move cursor back to beginning of prompt
        event.target.setSelectionRange(2, 2);
        break;
      case "b":
        // nullify default key action
        event.preventDefault();

        // calculate
        let bpos = event.target.selectionStart - 1;

        // check if less than 2
        if (bpos < 2) {
          bpos = 2;
        }

        // update cursor position
        event.target.setSelectionRange(bpos, bpos);
        break;
      case "c":
        // nullify default key action
        event.preventDefault();

        break;
      case "d":
        // nullify default key action
        event.preventDefault();

        // now delete text to right of cursor position
        event.target.setRangeText('',
                                  event.target.selectionStart,
                                  event.target.selectionStart + 1,
                                  'start');
        break;
      case "e":
        // nullify default key action
        event.preventDefault();

        // get text length
        let txt_len = event.target.value.length;

        // now move cursor back to beginning of prompt
        event.target.setSelectionRange(txt_len, txt_len);
        break;
      case "f":
        // nullify default key action
        event.preventDefault();

        // calculate
        let fpos = event.target.selectionStart + 1;

        // update cursor position
        event.target.setSelectionRange(fpos, fpos);
        break;
      case "k":
        // nullify default key action
        event.preventDefault();

        // now delete text to right of cursor position
        event.target.setRangeText('',
                                  event.target.selectionStart,
                                  event.target.value.length,
                                  'start');
        break;
      case "l":
        // nullify default key action
        event.preventDefault();

        // scroll into view
        event.target.scrollIntoView({ behavior: 'auto',
                                      block: 'nearest',
                                      inline: 'start' });
        break;
      case "p":
        // nullify default key action
        event.preventDefault();

        // get history
        break;
    }
  }
  else if (event.target.selectionStart == 2) {
    // prevent certain default actions if we are at prompt chars
    switch (event.key) {
      case "Up":
      case "ArrowUp":
        // nullify default key action
        event.preventDefault();

        // now move cursor back to beginning of prompt
        event.target.setSelectionRange(2, 2);
      break;
      case "Left":
      case "ArrowLeft":
        // nullify default key action
        event.preventDefault();
        break;
      case "Right":
      case "ArrowRight":
        // nullify default key action
        event.preventDefault();
        break;
      case "Backspace":
        // nullify default key action
        event.preventDefault();
        break;
      case "Clear":
        // nullify default key action
        event.preventDefault();
        break;
      case "Delete":
        // nullify default key action
        event.preventDefault();
        break;
    }
  }
  else {
    // finally check arrow up/down
    switch (event.key) {
      case "Down":
      case "ArrowDown":
        // nullify default key action
        event.preventDefault();

        // get text length
        let endpos = event.target.value.length;

        // now move cursor back to the end of the text
        event.target.setSelectionRange(endpos, endpos);
        break;
      case "Up":
      case "ArrowUp":
        // nullify default key action
        event.preventDefault();

        // now move cursor back to beginning of prompt
        event.target.setSelectionRange(2, 2);
      break;
    }
  }
}

// get textarea element by prompt id
let prompt = document.getElementById('prompt');

// set even handler check key events and get input after "Enter"
prompt.addEventListener('keydown', get_input);

// initialize prompt
init_prompt(prompt);
