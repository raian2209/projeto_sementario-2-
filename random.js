

const select = document.getElementById("randoms")
const select1 = document.getElementById("randoms1")
const select2 = document.getElementById("randoms2")
const select3 = document.getElementById("randoms3")
const select4 = document.getElementById("randoms4")

const value = 5

const descricao = {
    "0": "vidro",
    "1": "latex",
    "2": "redondo",
    "3": "tinta",
    "4": "cadarço",
    "5" : "a",
    "6" : "b",
    "7" : "c",
    "8" : "d",
    "9" : "e",
    "10" : "f",
    "11" : "g",
    "12" : "h",
    "13" : "i",
    "14" : "j",
    "15" : "l",
    "16" : "m",
    "17" : "n",
    "18" : "o",

};

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}


function generateRandomNumber(seed) {
    const x = Math.sin(seed) * 10000;
    return (x - Math.floor(x)) * value; // Multiply by 5 for the modulo operation
}

 // Get elements
 const generateButton = document.getElementById("generateButton");


      // Initialize a seed (you can use any number as the initial seed)
      let seed = Date.now();
      var x = [0,0,0,0,0]
      // Add a click event listener to the button
      generateButton.addEventListener("click", function () {
        for (i = 0; i < x.length; i++) {
          seed++; // Increment the seed for a different random number
          const random = generateRandomNumber(seed);
          const randomInteger = Math.floor(random); // Convert the random number to an integer
           x[i] = randomInteger; // Display the random number
        }   

        while(hasDuplicates(x)){
            for (i = 0; i < x.length; i++) {
                seed++; // Increment the seed for a different random number
                const random = generateRandomNumber(seed);
                const randomInteger = Math.floor(random); // Convert the random number to an integer
                 x[i] = randomInteger; // Display the random number
              }   
        }

        
       // x = replaceRepeatedNumbers(x)

        console.log(x)
        console.log(descricao)
         // Check if the selected option value exists in the imageMap
        var d = descricao[x[0]];
        var d1 = descricao[x[1]];
        var d2 = descricao[x[2]];
        var d3 = descricao[x[3]];
        var d4 = descricao[x[4]];

        select.innerText = d;  
        select1.innerText = d1;  
        select2.innerText = d2;  
        select3.innerText = d3;  
        select4.innerText = d4;  

        });

       
          

   /*   selectElement.addEventListener("click", function() {
        const selectedOption = selectElement.options[selectElement.selectedIndex];
        const selectedValue = selectedOption.value;

        // Check if the selected option value exists in the imageMap
        if (descricao.hasOwnProperty(selectedValue)) {
            const descricao = descricao[selectedValue];
            selectedImage.src = descricao;
        } else {
            // If the selected option value is not in the imageMap, clear the image
            selectedImage.src = "";
        }
    }); */