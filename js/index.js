/*
// GET THE REFERENCE TO DIV ELEMENT
const div = document.querySelector("div");

// CREATE A PARAGRAPH ELEMENT
// document.createElement(tag-name);
const p = document.createElement("p");

// ADD CONTENT TO PARAGRAPH ELEMENT
p.innerHTML = "Example paragraph text ...";

// APPEND PARAGRAPH TO DOM
// parentElement.appendChild(childElement)
div.appendChild(p);
*/

//REFERENCES TO ACTIVE ELEMENTS
const userInput = document.getElementById("user-input");
const button = document.getElementById("trigger-click");
const displayData = document.getElementById("display-data");
const err = document.querySelector(".error");

//THIS IS EVENT HANDLER
function addItem() {
    //DEFAULT VALUE OF ERROR PARAGRAPH
    err.textContent = null;
    //REMOVING WHITE SPACE
    userInput.value = userInput.value.trim();
    //IF USER INPUT IS NOT EMPTY
    if(userInput.value !== "") {
        //CREATE A LIST ITEM
        let listItem = document.createElement("li");
        //ASSIGNING THE VALUE OF TEXT-FIELD TO THE LIST
        listItem.textContent = userInput.value;
        //APPENDING THE NEW ELEMENT TO DOM
        displayData.appendChild(listItem);
    } else {
        err.textContent = "Please add items to the list.";
    }
}
//REGISTERING BUTTONS FOR
button.addEventListener("click", addItem );
