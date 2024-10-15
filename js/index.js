//Bckground Change Logic
var num = Math.floor(Math.random() * 10) + 1;
document.querySelector(".body").classList.add("bg" + num);
// Game Constants & Variables

let inputDir = {
  x: 0,
  y: 0,
};
const foodSound = new Audio("sounds/eat.mp3");

const highscoresound = new Audio("sounds/high_score.mp3");

const gameOverSound = new Audio("sounds/game_over.mp3");

const moveSound = new Audio("sounds/move.mp3");

const musicSound = new Audio("sounds/music.mp3");

let speed = 5;
let score = 0;
let prevPaintTime = 0;
let snakeArray = [
  {
    x: 13,
    y: 15,
  },
];

food = {
  x: 6,
  y: 7,
};

// Game Functions
function main(currtime) {
  window.requestAnimationFrame(main);
  // console.log(ctime)
  if ((currtime - prevPaintTime) / 1000 < 1 / speed) {
    return;
  }
  prevPaintTime = currtime;
  gameEngine();
}

function Collision(SAR) {
  // If you bump into yourself
  for (let i = 1; i < snakeArray.length; i++) {
    if (SAR[i].x === SAR[0].x && SAR[i].y === SAR[0].y) {
      return true;
    }
  }
  // If you bump into the wall
  if (SAR[0].x >= 17 || SAR[0].x <= 0 || SAR[0].y >= 17 || SAR[0].y <= 0) {
    return true;
  }

  return false;
}

function gameEngine() {
  //additional logic for speed and Volume
  let volume = document.querySelector("#volume").value;
  volume /= 10;
  moveSound.volume = volume;
  musicSound.volume = volume;
  foodSound.volume = volume;
  gameOverSound.volume = volume;
  highscoresound.volume = volume;

  // Updating the snake array & Food
  if (Collision(snakeArray)) {
    gameOverSound.play();
    musicSound.pause();
    inputDir = {
      x: 0,
      y: 0,
    };

    alert("Ouch you hurt your head! Press any Key to try again...");
    snakeArray = [
      {
        x: 13,
        y: 15,
      },
    ];
    musicSound.play();
    score = 0;
    speed=5;
  }

  // Increment the score and regenerate the food
  if (snakeArray[0].y === food.y && snakeArray[0].x === food.x) {
    foodSound.play();
    score += 1;
    if (score % 5 === 4) {
      speed += 0.5;
    }
    if (score > hiscoreval) {
      hiscoreval = score;
      musicSound.pause();
      highscoresound.play();
      localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
      hiscoreBox.innerHTML = "HISCORE: " + hiscoreval;
    }
    scoreBox.innerHTML = "SCORE: " + score;
    snakeArray.unshift({
      x: snakeArray[0].x + inputDir.x,
      y: snakeArray[0].y + inputDir.y,
    });
    let a = 2;
    let b = 16;
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }

  // Moving the snake
  for (let i = snakeArray.length - 2; i >= 0; i--) {
    snakeArray[i + 1] = {
      ...snakeArray[i],
    };
  }

  snakeArray[0].x += inputDir.x;
  snakeArray[0].y += inputDir.y;

  // Display the snake
  board.innerHTML = "";
  snakeArray.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;

    if (index === 0) {
      if (inputDir.x === 1 && inputDir.y === 0) {
        snakeElement.classList.add("head1");
      } else if (inputDir.x === 0 && inputDir.y === 1) {
        snakeElement.classList.add("head2");
      } else if (inputDir.x === -1 && inputDir.y === 0) {
        snakeElement.classList.add("head3");
      } else{
      snakeElement.classList.add("head");}
    } else if (index >= snakeArray.length - 1) {
      if (inputDir.x === 1 && inputDir.y === 0) {
        snakeElement.classList.add("tail1");
      } else if (inputDir.x === 0 && inputDir.y === 1) {
        snakeElement.classList.add("tail2");
      } else if (inputDir.x === -1 && inputDir.y === 0) {
        snakeElement.classList.add("tail3");
      } else{
      snakeElement.classList.add("tail");}
    } else {
      snakeElement.classList.add("snake");
    }

    board.appendChild(snakeElement);
  });
  // Display the food
  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

// Main logic starts here
musicSound.play();
let hiscore = localStorage.getItem("hiscore");
if (hiscore === null) {
  hiscoreval = 0;
  localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
} else {
  hiscoreval = JSON.parse(hiscore);
  hiscoreBox.innerHTML = "HISCORE: " + hiscore;
}

window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {

  switch (e.key) {
    case "ArrowUp":
      moveSound.play();
      console.log("ArrowUp");
      inputDir.x = 0;
      inputDir.y = -1;
      break;

    case "ArrowDown":
      moveSound.play();
      console.log("ArrowDown");
      inputDir.x = 0;
      inputDir.y = 1;
      break;

    case "ArrowLeft":
      moveSound.play();
      console.log("ArrowLeft");
      inputDir.x = -1;
      inputDir.y = 0;
      break;

    case "ArrowRight":
      moveSound.play();
      console.log("ArrowRight");
      inputDir.x = 1;
      inputDir.y = 0;
      break;
    default:
      break;
  }
});
