document.querySelector(".control-buttons span").onclick = function () {
  let yourName = prompt("What is your Name?");

  if (yourName == null || yourName == "") {
    document.querySelector(".name span").innerHTML = "Unknown";
  } else {
    document.querySelector(".name span").innerHTML = yourName;
  }
    document.querySelector(".control-buttons").remove();
};

let duration = 1000;

let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);

console.log(blocks.length)

let orderRange = [...Array(blocks.length).keys()]

//console.log(orderRange)
shuffle(orderRange)
//console.log(orderRange)

// add order css property to game Blocks
blocks.forEach((block, index) => {

  block.style.order = orderRange[index]

  // Add Click Event
  block.addEventListener('click', function(){

    // Trigger The Flip Block function
    flipBlock(block)

  })

})

// Flip Block Function
function flipBlock(selectedBlock){

  // Add class is-flipped
  selectedBlock.classList.add("is-flipped")

  // Collect all Flipped Cards
  let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

  // If there is tow selcted Blocks
  if(allFlippedBlocks.length === 2){

    //console.log("Two flipped blocks selcted")

    // Stop Clicking Function

    // Check Matched Block Function
  }

}

// Shuffle function
function shuffle(array){
  // Settings Vars
  let current = array.length,
                temp,
                random;

while(current > 0){
    // get Random Number
    random = Math.floor(Math.random() * current);

    // Decrease Length By One
    current--;

    // [1] Save Current Element in Stash
    temp = array[current];

    // [2] Current Element = Random Element
    array[current] = array[random];

    // [3] Random Element = Get Element from Stash
    array[random] = temp;
    
  }

  return array;

}

/*
  [1] Save Current Element in Stash
  [2] Current Element = Random Element
  [3] Random Element = Get Element from Stash
*/