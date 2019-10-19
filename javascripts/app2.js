// Grid
var grid = new Array(10);

for (let i = 0; i < grid.length; i++) {
  grid[i] = new Array(10);
}

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    grid[i][j] = null;
  }
}

// Position of rovers and obstacles
grid[0][0]  = "R";
grid[9][0]  = "R";

grid[0][1]  = "O";
grid[0][4]  = "O";
grid[0][7]  = "O";
grid[1][1]  = "O";
grid[1][5]  = "O";
grid[2][2]  = "O";
grid[2][8]  = "O";
grid[2][9]  = "O";
grid[3][0]  = "O";


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

function stopForward(rover) {
  switch (rover.direction) {
    case "N":
        if (rover.y <= 0) {
          console.log("Don't leave the grid!");
        } else if (grid[rover.y-1][rover.x] === "O") {
          console.log("WARNING! Obstacle!");
        } else if (grid[rover.y-1][rover.x] === "R") {
          console.log("ALERT! Another rover is in that position!");
        }
      break;
    case "E":
          if (rover.x >= 9) {
            console.log("Don't leave the grid!");
          } else if (grid[rover.y][rover.x+1] === "O") {
            console.log("WARNING! Obstacle!");
          } else if (grid[rover.y][rover.x+1] === "R") {
            console.log("ALERT! Another rover is in that position!");
          }
      break;
    case "S":
          if (rover.y >= 9) {
            console.log("Don't leave the grid!");
          } else if (grid[rover.y+1][rover.x] === "O") {
            console.log("WARNING! Obstacle!");
          } else if (grid[rover.y+1][rover.x] === "R") {
            console.log("ALERT! Another rover is in that position!");
          }
      break;
    case "W":
          if (rover.x <= 0) {
            console.log("Don't leave the grid!");
          } else if (grid[rover.y][rover.x-1] === "O") {
            console.log("WARNING! Obstacle!");
          } else if (grid[rover.y][rover.x-1] === "R") {
            console.log("ALERT! Another rover is in that position!");
          }
      break;
  }
}

function stopBackward(rover) {
  switch (rover.direction) {
    case "S":
      if (rover.y <= 0) {
        console.log("Don't leave the grid!");
      } else if (grid[rover.y-1][rover.x] === "O") {
        console.log("WARNING! Obstacle!");
      } else if (grid[rover.y-1][rover.x] === "R") {
        console.log("ALERT! Another rover is in that position!");
      }
      break;
    case "W":
      if (rover.x >= 9) {
        console.log("Don't leave the grid!");
      } else if (grid[rover.y][rover.x+1] === "O") {
        console.log("WARNING! Obstacle!");
      } else if (grid[rover.y][rover.x+1] === "R") {
        console.log("ALERT! Another rover is in that position!");
      }
      break;
    case "N":
      if (rover.y >= 9) {
        console.log("Don't leave the grid!");
      } else if (grid[rover.y+1][rover.x] === "O") {
        console.log("WARNING! Obstacle!");
      } else if (grid[rover.y+1][rover.x] === "R") {
        console.log("ALERT! Another rover is in that position!");
      }
      break;
    case "E":
      if (rover.x <= 0) {
        console.log("Don't leave the grid!");
      } else if (grid[rover.y][rover.x-1] === "O") {
        console.log("WARNING! Obstacle!");
      } else if (grid[rover.y][rover.x-1] === "R") {
        console.log("ALERT! Another rover is in that position!");
      }
      break;
  }
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
        stopForward(rover);
      }
      break;
    case "E":
        if (rover.x < 9 && grid[rover.y][rover.x+1] === null) {
          grid[rover.y][rover.x] = null;
          rover.x += 1;
          newPosition(rover);
        } else {
          stopForward(rover);
        }
      break;
    case "S":
        if (rover.y < 9 && grid[rover.y+1][rover.x] === null) {
          grid[rover.y][rover.x] = null;
          rover.y += 1;
          newPosition(rover);
        } else {
          stopForward(rover);
        }
      break;
    case "W":
        if (rover.x > 0 && grid[rover.y][rover.x-1] === null) {
          grid[rover.y][rover.x] = null;
          rover.x -= 1;
          newPosition(rover);
        } else {
          stopForward(rover);
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
        stopBackward(rover);
      }
      break;
    case "W":
      if (rover.x < 9 && grid[rover.y][rover.x+1] === null) {
        grid[rover.y][rover.x] = null;
        rover.x += 1;
        newPosition(rover);
      } else {
        stopBackward(rover);
      }
    break;
    case "N":
      if (rover.y < 9 && grid[rover.y+1][rover.x] === null) {
        grid[rover.y][rover.x] = null;
        rover.y += 1;
        newPosition(rover);
      } else {
        stopBackward(rover);
      }
    break;
    case "E":
      if (rover.x > 0 && grid[rover.y][rover.x-1] === null) {
        grid[rover.y][rover.x] = null;
        rover.x -= 1;
        newPosition(rover);
      } else {
        stopBackward(rover);
      }
    break;
  }
  console.log(rover.x + "," + rover.y)
}

function checkCommands(commands) {
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
}

function moveRover(rover, commands) {
  checkCommands(commands);
  
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