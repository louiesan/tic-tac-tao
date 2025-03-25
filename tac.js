fields = document.querySelectorAll(".field");
btn = document.getElementById("restart");
display = document.querySelector(".display");
let turn = "X";
let GameOver = false;
let biho = 0;

fields.forEach((ele) => {
  ele.innerHTML = "";
  ele.addEventListener("click", () => {
    if (!GameOver && ele.innerHTML === "") {
      biho += 1;
      ele.innerHTML = turn;
      change();
      winner();
      draw();
    }
  });
});

function winner() {
  let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  if (!GameOver) {
    for (let i = 0; i < conditions.length; i++) {
      let c0 = conditions[i][0];
      let c1 = conditions[i][1];
      let c2 = conditions[i][2];
      if (
        fields[c0].innerHTML !== "" &&
        fields[c0].innerHTML === fields[c1].innerHTML &&
        fields[c0].innerHTML === fields[c2].innerHTML
      ) {
        display.innerHTML = `${fields[c0].innerHTML} WINS`;
        GameOver = true;
        fields[c0].style.backgroundColor = "Blue";
        fields[c1].style.backgroundColor = "Blue";
        fields[c2].style.backgroundColor = "Blue";
      }
    }
  }
}

function draw() {
  if (!GameOver && biho === 9) {
    display.innerHTML = "Draw!";
    fields.forEach((e) => {
      e.style.backgroundColor = "white";
      e.style.color = "black";
    });
    GameOver = true;
  }
}

function change() {
  if (turn === "X") {
    document.querySelector(".bg").style.left = "80px";
    turn = "O";
    display.innerHTML = `${turn}'s Turn`;
  } else if (turn === "O" && !GameOver) {
    document.querySelector(".bg").style.left = "0px";
    turn = "X";
    display.innerHTML = `${turn}'s Turn`;
  }
}

btn.addEventListener("click", () => {
  biho = 0;
  GameOver = false;
  turn = "X";
  fields.forEach((e) => {
    e.innerHTML = "";
    e.style.removeProperty("background-color");
    e.style.removeProperty("color");
  });
  document.querySelector(".bg").style.left = "0px";
  display.innerHTML = `${turn}'s Turn`;
});
