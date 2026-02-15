// ******************************************************
// WELCOME TO DOM MANIPULATION
// The "DOM" (Document Object Model) is how JavaScript sees your HTML.
// It's like a tree structure of every element on your page.
// ******************************************************

// ======================================================
// SECTION 1: SELECTING AND CHANGING TEXT
// ======================================================

// 1. SELECT: We use document.getElementById() to find an element by its ID.
//    We store it in a variable (const) so we can use it later.
const textTarget = document.getElementById("text-target");
const textButton = document.getElementById("btn-change-text");

// 2. LISTEN: We add an "event listener" to the button.
//    This waits for a 'click' event, then runs the function inside.
textButton.addEventListener("click", function () {
  // 3. ACTION: Check what the current text is using .innerText
  console.log("Current text:", textTarget.innerText);

  if (textTarget.innerText === "I am the original text.") {
    // Change the text content
    textTarget.innerText = "✨ Magic! The text has changed via JavaScript!";
  } else {
    // Undo the change
    textTarget.innerText = "I am the original text.";
  }
});

// ======================================================
// SECTION 2: CHANGING STYLES
// ======================================================

const colorBox = document.getElementById("color-box");
const colorButton = document.getElementById("btn-change-color");

colorButton.addEventListener("click", function () {
  // We can access CSS properties via .style
  // Note: CSS uses dashes (background-color), JS uses camelCase (backgroundColor)

  // Let's generate a random color just for fun!
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const newColor = "#" + randomColor;

  // Apply the style
  colorBox.style.backgroundColor = newColor;
  colorBox.style.color = "white"; // Make text white so it's readable
  colorBox.style.padding = "20px"; // Make it bigger

  // Update the text inside to show the color code
  colorBox.innerText = `Background Color is now: ${newColor}`;
});

// ======================================================
// SECTION 3: READING USER INPUT
// ======================================================

const inputField = document.getElementById("input-field");
const greetButton = document.getElementById("btn-greet");
const greetingDisplay = document.getElementById("greeting-display");

greetButton.addEventListener("click", function () {
  // 1. Get the 'value' from the input field
  const userName = inputField.value;

  if (userName.trim() === "") {
    alert("Please enter a name first!");
    return; // Stop the function here
  }

  // 2. Update the display paragraph
  greetingDisplay.innerText = `Hello, ${userName}! Welcome to DOM manipulation.`;

  // 3. Make sure the display element is visible (remove the 'hidden' class)
  //    Note: .classList is how we add/remove CSS classes in JS
  greetingDisplay.classList.remove("hidden");

  // 4. Clear the input field for good user experience
  inputField.value = "";
});

// ======================================================
// SECTION 4: CREATING AND ADDING ELEMENTS
// ======================================================

const list = document.getElementById("dynamic-list");
const addButton = document.getElementById("btn-add-item");
const removeButton = document.getElementById("btn-remove-item");

let itemCount = 1; // Keeping track of how many items we have

addButton.addEventListener("click", function () {
  itemCount++; // Increment the counter

  // 1. CREATE: Create a new HTML element (it's just in memory right now)
  const newItem = document.createElement("li");

  // 2. MODIFY: Set its content
  newItem.innerText = `Item ${itemCount} (New!)`;

  // 3. APPEND: Attach it to the parent element (the <ul> list)
  //    This is the step that actually puts it on the page.
  list.appendChild(newItem);
});

removeButton.addEventListener("click", function () {
  // Check if there are any children to remove
  // list.lastElementChild gives us the last <li> in the list
  const lastItem = list.lastElementChild;

  if (lastItem) {
    // REMOVE: Delete the element from the DOM
    lastItem.remove();
    itemCount--;
  } else {
    alert("No more items to remove!");
  }
});

// ******************************************************
// TRY IT YOURSELF!
// Open the console (F12) and type `document.body.style.background = 'pink'`
// See what happens!
// ******************************************************
