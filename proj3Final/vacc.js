"use-strict";

const btn = document.querySelector(".btn");

const forms = document.querySelectorAll(".form-control");

console.log(forms);

//smooth scroll measurements needed

//if check eligibility already clicked don't make another iframe

let alreadyClicked = false;

btn.addEventListener("click", function () {
  let vaccHTML;
  let arr = [];
  forms.forEach((x) => arr.push(x));

  console.log(alreadyClicked);

  arr.forEach((x) => {
    console.log(x.value);

    if (x.value === "Yes") {
      vaccHTML = true;
    }
  });

  if (alreadyClicked === true && vaccHTML === true) {
    //scroll down to iframe again;
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
    return;
  }

  if (vaccHTML === true && alreadyClicked === false) {
    alreadyClicked = true;

    //console.log(alreadyClicked);

    secondSection.insertAdjacentHTML("afterend", stringOfHtml);
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  } else {
    alert("You Are Not Eligible Currently");
  }
});

const secondSection = document.querySelector(".below");

const stringOfHtml = `
<div class="container" style="padding-bottom: 10%; padding-left: 5%;">
<div class="row">
<iframe class="col-l-12 text-center offset-md-2" align="center" src="https://www.google.com/maps/d/u/0/embed?mid=1_o56fIA7IWtd1nmS6M2DCTJtkBiblCwd" width="640" height="480"></iframe>
</div>
</div>
`;
