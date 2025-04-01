const state = [];
//true->p1->x
//false->p0->0
let current_player = true;

const startGame = () => {
  fillState();
  initiateGame();
};

const initiateGame = () => {
  document.querySelector("#reset").addEventListener("click", () => {
    resetGame();
  });

  [...document.getElementsByTagName("p")].forEach((each) =>
    each.addEventListener("click", (event) => {
      const element = event.target;
      const position = event.target.id.split("_")[1];
      const move_result = makeMove(position);
      if (move_result) {
        element.innerText = state[position];
      }
      const result = checkWinner();
      if (result === 0) {
        alert("Player 2 (O) wins!");
        resetGame();
      } else if (result === 1) {
        alert("Player 1 (X) wins!");
        resetGame();
      } else if (result === 2) {
        alert("It's a draw!");
        resetGame();
      }
    })
  );
};

const fillState = () => {
  for (let i = 0; i < 9; i++) {
    state[i] = "";
  }
};

const makeMove = (position) => {
  if (state[position] != "") {
    alert("make another move");
    return false;
  }
  state[position] = current_player ? "X" : "O";
  alert(
    `player p${current_player ? 1 : 2} made move ${
      current_player ? "X" : "O"
    } in position ${position}`
  );
  current_player = !current_player;
  return true;
};

//has 4 states, 0->p0 won, 1->p1 won, -1->currently in progress, 2->draw
const checkWinner = () => {
  // rows
  for (let i = 0; i < 9; i += 3) {
    if (
      state[i] !== "" &&
      state[i] === state[i + 1] &&
      state[i] === state[i + 2]
    ) {
      return state[i] === "O" ? 0 : 1;
    }
  }
  // columns
  for (let i = 0; i < 3; i++) {
    if (
      state[i] !== "" &&
      state[i] === state[i + 3] &&
      state[i] === state[i + 6]
    ) {
      return state[i] === "O" ? 0 : 1;
    }
  }
  // diagonals
  if (state[0] !== "" && state[0] === state[4] && state[0] === state[8]) {
    return state[0] === "O" ? 0 : 1;
  }
  if (state[2] !== "" && state[2] === state[4] && state[2] === state[6]) {
    return state[2] === "O" ? 0 : 1;
  }
  if (state.every((s) => s !== "")) return 2;
  return -1;
};

const resetGame = () => {
  fillState();
  current_player = true;
  //change all inner texts of all elements back to their ids
  [...document.getElementsByTagName("p")].forEach((each, idx) => {
    each.innerText = idx;
  });
  alert("game reset");
};

startGame();
