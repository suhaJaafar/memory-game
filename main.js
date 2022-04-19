document.querySelector(".control-button span").onclick = function(){
    let yourName = prompt("whats your name?");
    if (yourName == null || yourName == "") {
        document.querySelector(".name span").innerHTML = "Unknown";
    }else{
        document.querySelector(".name span").innerHTML = yourName;
    }
    document.querySelector(".control-button").remove();
};
let duration = 1000;
let blocksContainer = document.querySelector(".memory-game-blocks");
let blocks = Array.from(blocksContainer.children);
let orderRange = [...Array(blocks.length).keys()];
shuffle(orderRange);
blocks.forEach((block, index) => {
    block.style.order = orderRange[index];


    - block.addEventListener('click', function () {
    flipBlock(block);
});
});


function flipBlock(selectedBlock) {
    selectedBlock.classList.add('is-flipped');
    let allFlippedBlock = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
    if (allFlippedBlock.length === 2) {
        stopClicking();
        checkMatch(allFlippedBlock[0], allFlippedBlock[1]);
    }
}
// else if(allFlippedBlock.length === 19){
//     console.log("finish");
// }else{
//     console.log("hi");
// }

//stopClicking func.
function stopClicking() {
    blocksContainer.classList.add('no-clicking');
    setTimeout(() => {
        blocksContainer.classList.remove('no-clicking');

    }, duration);
}
//chek matching block func.
function checkMatch(firstBlock, secondBlock) {
    let triesElement = document.querySelector('.tries span');
    if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');
        firstBlock.classList.add('is-match');
        secondBlock.classList.add('is-match');
    }else{
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
        
        setTimeout(() => {
            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
        }, duration);

    }
}

//shuffle function
function shuffle(array) {
    let current = array.length,temp ,random ;
    while(current > 0) {
        random = Math.floor(Math.random() * current);
        current--;
        temp = array[current];
        array[current] = array[random]; 
        array[random] = temp;

    }
    return array;
}