/* Clicking on "Selection of address" a div will show up , inside of which we can enter pincode and
 other details */

let a = document.getElementById("location-content");
let b = document.getElementById("child-tester");
let c = document.body;
let testerDiv = document.getElementById("tester");
a.addEventListener("click", function () {
  b.style.display = "block";
  testerDiv.style.height = "100%";
  function divCreate() {
    b.style.display = "none";
    testerDiv.style.height = "0";
    c.removeEventListener("click", divCreate);
    console.log("moon");
  }

  setTimeout(() => {
    c.addEventListener("click", divCreate);

    b.addEventListener("mouseenter", function () {
      c.removeEventListener("click", divCreate);
      console.log("ok");
    });
    b.addEventListener("mouseleave", function () {
      c.addEventListener("click", divCreate);
      console.log("ok  ok");
    });
  }, 10);
});

let buttonApply = document.getElementById("button-tester");
buttonApply.addEventListener("click", function () {
  let pin = document.getElementById("input-tester").value;
  console.log(pin.length);
  if (pin.length > 6) {
    alert("please enter a valid pincode");
    console.log(pin.length);
  } else if (pin.length == 6) {
    document.getElementById("adress-pincode").innerHTML = pin;
    document.getElementById("hello").innerHTML = "Pincode";
  }
});
// END



// Clicking on "All" will bring the menu from the left side of the screen

let e = document.getElementsByClassName("menu")[0];
let f = document.getElementById("menu-container");
let g = document.getElementsByClassName("menu-img")[0];
let h = document.getElementById("sub-menu");

e.addEventListener("click", function () {
  h.classList.remove("reverse-anime");
  h.classList.add("animation");

  f.style.display = "block";
});
g.addEventListener("click", function () {
  h.classList.remove("animation");
  h.classList.add("reverse-anime");
  setTimeout(() => {
    f.style.display = "none";
  }, 400);
});

//END

// Section-1 Banner image Animation side to side in a loop

function secAnime() {
  let Animate = document.getElementsByClassName("sec-img")[0];
  let Animate2nd = document.getElementsByClassName("sec-img2nd")[0];
  setTimeout(() => {
    Animate.classList.remove("sec-imgFirst2");
    Animate.classList.add("sec-imgFirst");
    Animate2nd.classList.remove("sec-imgFirst2");
    Animate2nd.classList.add("sec-imgFirst");
  }, 4000);

  for (let i = 0; i <= 7; i++) {
    let timer = i + 1;
    if (i <= 6) {
      setTimeout(() => {
        console.log("bikbi");
        let move = document.getElementsByClassName("imgElem")[i];
        let move2nd = document.getElementsByClassName("imgElem2nd")[i];
        move.style.display = "block";
        move.classList.add("sec-imgFirst2");
        move2nd.style.display = "block";
        move2nd.classList.add("sec-imgFirst2");
        setTimeout(() => {
          move.classList.remove("sec-imgFirst2");
          move.classList.add("sec-imgFirst");
          move2nd.classList.remove("sec-imgFirst2");
          move2nd.classList.add("sec-imgFirst");
          setTimeout(() => {
            move.style.display = "none";
            move.classList.remove("sec-imgFirst");
            move2nd.style.display = "none";
            move2nd.classList.remove("sec-imgFirst");
          }, 500);
        }, 4000);
      }, timer * 4000);
    } else {
      setTimeout(() => {
        Animate.classList.remove("sec-imgFirst");
        Animate.classList.add("sec-imgFirst2");
        Animate2nd.classList.remove("sec-imgFirst");
        Animate2nd.classList.add("sec-imgFirst2");
      }, timer * 4000);
    }
  }
}
secAnime();
setInterval(() => {
  secAnime();
}, 32000);
// END

// Will scroll the screen from bottom to top when you click on "Back to top" button.

let sec7 = document.getElementById("section7");
function goUp() {
  document.body.scrollTop = "0";
  document.documentElement.scrollTop = "0";
}
sec7.addEventListener("click", goUp);
// END

// SECTION-4 horizontal scroll when clicked on left or right botton.
for (let z = 0; z <= 2; z++) {
  let list = document.getElementsByClassName("unorderedList")[z];
  let buttonClick1 = document.getElementsByClassName("next")[z];
  let buttonClick2 = document.getElementsByClassName("prev")[z];
  var RanInt = 1;

  buttonClick1.addEventListener("click", function () {
    if (RanInt == 1) {
      list.classList.remove("ul-slide4");
      list.classList.add("ul-slide1");
      RanInt = 2;
    } else if (RanInt == 2) {
      list.classList.remove("ul-slide1");
      list.classList.remove("ul-slide5");
      list.classList.add("ul-slide2");
      RanInt = 3;
    } else {
      list.classList.remove("ul-slide2");
      list.classList.remove("ul-slide6");
      list.classList.add("ul-slide3");
      RanInt = 4;
    }
  });

  buttonClick2.addEventListener("click", function () {
    if (RanInt == 2) {
      list.classList.remove("ul-slide1");
      list.classList.remove("ul-slide5");
      list.classList.add("ul-slide4");
      RanInt = 1;
    } else if (RanInt == 3) {
      list.classList.remove("ul-slide2");
      list.classList.remove("ul-slide6");
      list.classList.add("ul-slide5");
      RanInt = 2;
    } else if (RanInt == 4) {
      list.classList.remove("ul-slide3");
      list.classList.add("ul-slide6");
      RanInt = 3;
    }
  });
}
//END
