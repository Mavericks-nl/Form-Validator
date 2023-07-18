const cB = document.getElementById("logo");
const mIa = document.querySelector(".a");
const mIb = document.querySelector(".b");
const mId = document.querySelector(".d");
const mIe = document.querySelector(".e");
const mIf = document.querySelector(".f");

// function to check the first character of the card number and determine what cad it is

function b() {
  let x = document.getElementById("ph");
  let y = x.value.charAt(0);

  if (y == 4) {
    let imgV = document.createElement("img");
    imgV.src = "visa.png";
    imgV.classList.add("active");
    cB.appendChild(imgV);
    if (y == "") {
      cB.removeChild(imgV);
    }
  }
  if (y == 3) {
    let imgA = document.createElement("img");
    imgA.src = "amex.png";
    imgA.classList.add("active");
    cB.appendChild(imgA);
  }
  if (y == 5) {
    let imgM = document.createElement("img");
    imgM.src = "master.png";
    imgM.classList.add("active");
    cB.appendChild(imgM);
  }
  if (y == 6) {
    let imgD = document.createElement("img");
    imgD.src = "discover.png";
    imgD.classList.add("active");
    cB.appendChild(imgD);
  }
}

// function to set limit on number of inputs
mIa.addEventListener("input", () => {
  if (mIa.value.length > 16) {
    mIa.value = mIa.value.slice(0, 16);
  }
});
mIb.addEventListener("input", () => {
  if (mIb.value.length > 3) {
    mIb.value = mIb.value.slice(0, 3);
  }
});

mId.addEventListener("input", () => {
  if (mId.value > 31) {
    alert("Input Correct Date");
  }
});
mIe.addEventListener("input", () => {
  if (mIe.value > 12 || mIe.value.length > 2) {
    alert("Input Correct Month");
    mIe.value = mIe.value.slice(0, 2);
  }
});
mIf.addEventListener("input", () => {
  if (mIf.value.length > 4) {
    mIf.value = mIf.value.slice(0, 4);
  }
});
