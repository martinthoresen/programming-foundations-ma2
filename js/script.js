// question 1

var pets = [
  {
    type: "cat",
    age: 5.5,
  },
  {
    type: "dog",
    age: 3.8,
  },
  {
    type: "parrot",
    age: 4.0,
  },
];

for (i = 0; i < pets.length; i++) {
  if (pets[i].age >= 4) {
    console.log(pets[i]);
  }
}

// question 2

function checkType(input) {
  var typeOfInput = typeof input;
  if (typeOfInput === "boolean") {
    console.log(input);
  } else {
    console.log("Please input a boolean value.");
  }
}

checkType(true);

// question 3

var headingButton = document.querySelector("button");

headingButton.onclick = function () {
  var subheading = document.querySelector("h2");
  subheading.style.color = "blue";
  subheading.innerHTML = "Updated subheading";
};
