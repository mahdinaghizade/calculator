let w = document.getElementById("width");
let h = document.getElementById("height");
let c = document.getElementById("color");
let btn = document.getElementById("ok");
let d = document.getElementById("div");
let close = document.getElementById("clo");
close.addEventListener("click", function () {
  d.style.display = "none";
});
btn.addEventListener("click", function () {
  d.style.width = `${w.value}` + "px";
  d.style.height = `${h.value}` + "px";
  d.style.background = `${c.value}`;
  d.style.display = "block";
});

//////////////////callculator

let dis = document.querySelector("#display");
let star = document.querySelector("#multiplication");
let plus = document.querySelector("#total");
let mine = document.querySelector("#mines");
let dot = document.querySelector("#dote");
let backspac = document.querySelector("#backSpace");
let divi = document.querySelector("#Division");
let clean = document.querySelector("#clear");
let delet = document.querySelector("#removeall");
let mark = document.querySelector("#changemark");
let equ = document.querySelector("#equalsign");
let num = document.querySelectorAll(".number");

let isdot = false;
let mem1;
let mem2;
let operation;

clean.addEventListener("click", function () {
  dis.textContent = "0.0";
  isdot = false;
});

num.forEach(function (e) {
  e.addEventListener("click", function () {
    if (dis.textContent !== "0.0") {
      dis.textContent += e.textContent;
    } else if (e.textContent == 0) {
      dis.textContent = "0.0";
    } else {
      dis.textContent = "";
      dis.textContent += e.textContent;
    }
  });
});

backspac.addEventListener("click", function () {
  let tool = dis.textContent.length;
  if (tool > 1) {
    dis.textContent = dis.textContent.slice(0, tool - 1);
  } else {
    dis.textContent = "0.0";
    isdot = false;
  }
});

mark.addEventListener("click", function () {
  if (dis.textContent == 0 || dis.textContent == "0.0") {
  } else {
    dis.textContent *= -1;
  }
});

dot.addEventListener("click", function () {
  if (dis.textContent == 0 || dis.textContent == "0.0" || isdot == true) {
  } else {
    isdot = true;
    dis.textContent += ".";
  }
});

plus.addEventListener("click", function () {
  mem1 = dis.textContent;
  dis.textContent = "";
  operation = "+";
});

star.addEventListener("click", function () {
  mem1 = dis.textContent;
  dis.textContent = "";
  operation = "*";

});

mine.addEventListener("click", function () {
  mem1 = dis.textContent;
  dis.textContent = "";
  operation = "-";
});

divi.addEventListener("click", function () {
  mem1 = dis.textContent;
  dis.textContent = "";
  operation = "/";
});

equ.addEventListener("click", function e() {
  mem2 = dis.textContent;
  switch (operation) {
    case "+":
      dis.textContent = `${parseInt(mem1) + parseInt(mem2)}`;
      break;
    case "-":
      dis.textContent = `${mem1 - mem2}`;
      break;
    case "*":
      dis.textContent = `${mem1 * mem2}`;
      break;
    case "/":
      dis.textContent = `${mem1 / mem2}`;
      break;
  }
});

delet.addEventListener("click", function () {
  let isdot = false;
  let mem1;
  let mem2;
  let operation;
  dis.textContent = "0.0";
  console.log(isdot, mem1,mem2,operation);
})
