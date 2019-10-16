//Grid
var grid = [
  ["R","O",null,null,"O",null,null,'O',null,null],
  [null,'O',null,null,null,'O',null,null,null,null],
  [null,null,'O',null,null,null,null,null,'O','O'],
  ['O',null,null,null,null,null,null,null,null,null],
  [null,null,null,null,'O','O','O',null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  ["R",null,null,null,null,null,null,null,null,null]
];


// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: ["0,0"]
};

// Curiosity Object Goes Here
// ======================
let curiosity = {
  direction: "N",
  x: 0,
  y: 9, 
  travelLog: ["0,9"]
};


// ======================
function turnLeft(rover){
  switch (rover.direction) {
    case "N": 
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "S";
      break;
  
  }
  console.log(rover.direction);
}


function turnRight(rover){

  switch (rover.direction) {
    case "N": 
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  
  }
  console.log(rover.direction);
}

function newPosition(rover) {
  rover.travelLog.push(rover.x + "," + rover.y);
  grid[rover.y][rover.x] = "R";
}

function moveForward(rover){
  switch (rover.direction) {
    case "N":
      if (rover.y > 0 && grid[rover.y-1][rover.x] === null) {
        grid[rover.y][rover.x] = null;
        rover.y -= 1;
        newPosition(rover);
      } else {
        if (rover.y <= 0) {
          console.log("Don't leave the grid!");
        } else if (grid[rover.y-1][rover.x] === "O") {
          console.log("WARNING! Obstacle!");
        } else if (grid[rover.y-1][rover.x] === "R") {
          console.log("ALERT! Another rover is in that position!");
        }
      }
      break;
    case "E":
        if (rover.x < 9 && grid[rover.y][rover.x+1] === null) {
          grid[rover.y][rover.x] = null;
          rover.x += 1;
          newPosition(rover);
        } else {
          if (rover.x >= 9) {
            console.log("Don't leave the grid!");
          } else if (grid[rover.y][rover.x+1] === "O") {
            console.log("WARNING! Obstacle!");
          } else if (grid[rover.y][rover.x+1] === "R") {
            console.log("ALERT! Another rover is in that position!");
          }
        }
      break;
    case "S":
        if (rover.y < 9 && grid[rover.y+1][rover.x] === null) {
          grid[rover.y][rover.x] = null;
          rover.y += 1;
          newPosition(rover);
        } else {
          if (rover.y >= 9) {
            console.log("Don't leave the grid!");
          } else if (grid[rover.y+1][rover.x] === "O") {
            console.log("WARNING! Obstacle!");
          } else if (grid[rover.y+1][rover.x] === "R") {
            console.log("ALERT! Another rover is in that position!");
          }
        }
      break;
    case "W":
        if (rover.x > 0 && grid[rover.y][rover.x-1] === null) {
          grid[rover.y][rover.x] = null;
          rover.x -= 1;
          newPosition(rover);
        } else {
          if (rover.x <= 0) {
            console.log("Don't leave the grid!");
          } else if (grid[rover.y][rover.x-1] === "O") {
            console.log("WARNING! Obstacle!");
          } else if (grid[rover.y][rover.x-1] === "R") {
            console.log("ALERT! Another rover is in that position!");
          }
        }
      break;
  }
  console.log(rover.x + "," + rover.y)
}

function moveBackward(rover){
  switch (rover.direction) {
    case "S":
      if (rover.y > 0 && grid[rover.y-1][rover.x] === null) {
        grid[rover.y][rover.x] = null;
        rover.y -= 1;
        newPosition(rover);
      } else {
        if (rover.y <= 0) {
          console.log("Don't leave the grid!");
        } else if (grid[rover.y-1][rover.x] === "O") {
          console.log("WARNING! Obstacle!");
        } else if (grid[rover.y-1][rover.x] === "R") {
          console.log("ALERT! Another rover is in that position!");
        }
      }
      break;
    case "W":
      if (rover.x < 9 && grid[rover.y][rover.x+1] === null) {
        grid[rover.y][rover.x] = null;
        rover.x += 1;
        newPosition(rover);
      } else {
        if (rover.x >= 9) {
          console.log("Don't leave the grid!");
        } else if (grid[rover.y][rover.x+1] === "O") {
          console.log("WARNING! Obstacle!");
        } else if (grid[rover.y][rover.x+1] === "R") {
          console.log("ALERT! Another rover is in that position!");
        }
      }
    break;
    case "N":
      if (rover.y < 9 && grid[rover.y+1][rover.x] === null) {
        grid[rover.y][rover.x] = null;
        rover.y += 1;
        newPosition(rover);
      } else {
        if (rover.y >= 9) {
          console.log("Don't leave the grid!");
        } else if (grid[rover.y+1][rover.x] === "O") {
          console.log("WARNING! Obstacle!");
        } else if (grid[rover.y+1][rover.x] === "R") {
          console.log("ALERT! Another rover is in that position!");
        }
      }
    break;
    case "E":
      if (rover.x > 0 && grid[rover.y][rover.x-1] === null) {
        grid[rover.y][rover.x] = null;
        rover.x -= 1;
        newPosition(rover);
      } else {
        if (rover.x <= 0) {
          console.log("Don't leave the grid!");
        } else if (grid[rover.y][rover.x-1] === "O") {
          console.log("WARNING! Obstacle!");
        } else if (grid[rover.y][rover.x-1] === "R") {
          console.log("ALERT! Another rover is in that position!");
        }
      }
    break;
  }
  console.log(rover.x + "," + rover.y)
}

function moveRover(rover, commands) {
  isValidCommand = false;
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === "f" || commands[i] === "b" || commands[i] === "r" || commands[i] === "l") {
      isValidCommand = true;
    } else {
      isValidCommand = false;
      console.log("Please, enter only valid commands (f,b,r or l).");
      break;
    }
  }

  if (isValidCommand) {
    for (let i = 0; i < commands.length; i++) {
      switch (commands[i]) {
        case "f":
          moveForward(rover);
          break;
        case "b":
          moveBackward(rover);
          break;
        case "r":
          turnRight(rover);
          break;
        case "l":
          turnLeft(rover);
          break;
      }
    }
  }
};