const selectElement = document.getElementById("mySelect");
const selectedImage = document.getElementById("selectedImage");

const imageMap = {
    1: "vidro",
    2: "latex",
    3: "redondo",
    4: "tinta",
    5: "cadarço",
};


function generateRandomNumber(seed) {
    const x = Math.sin(seed) * 10000;
    return (x - Math.floor(x)) * 5; // Multiply by 5 for the modulo operation
}

 // Get elements
 const generateButton = document.getElementById("generateButton");


      // Initialize a seed (you can use any number as the initial seed)
      let seed = Date.now();

      // Add a click event listener to the button
      generateButton.addEventListener("click", function () {
          seed++; // Increment the seed for a different random number
          const random = generateRandomNumber(seed);
          const randomInteger = Math.floor(random); // Convert the random number to an integer
          randomNumberElement.textContent = randomInteger; // Display the random number
      });