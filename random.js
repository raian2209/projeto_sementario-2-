

const select = document.getElementById("randoms")
const select1 = document.getElementById("randoms1")
const select2 = document.getElementById("randoms2")
const select3 = document.getElementById("randoms3")
const select4 = document.getElementById("randoms4")

const value = 6

// codigo antigo
//const descricao = {
//    "1": "lentilha",
//    "2": "arroz",
//    "3": "GraoDeBico",
//    "4": "milhoSementes",
//    "5": "trigo",
//    "6" : "a",
//    "7" : "b",
//    "8" : "c",
//    "9" : "d",
//    "10" : "e",
//    "11" : "f",
//    "12" : "g",
//    "13" : "h",
//    "14" : "i",

//};

const descricao = {
    "1": "informação/5.svg",
    "2": "informação/4.svg",
    "3": "informação/3.svg",
    "4": "informação/6.svg",
    "5": "informação/2.svg",
}

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}


function generateRandomNumber(seed) {
    const x = Math.sin(seed) * 10000;
    return (x - Math.floor(x)) * value; // Multiply by 5 for the modulo operation
}

 // Get elements
 const generateButton = document.getElementById("generateButton");

 function hasZero(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            return true; // Array contains a zero
        }
    }
    return false; // Array does not contain a zero
}

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

        while(hasDuplicates(x) || hasZero(x)){
            for (i = 0; i < x.length; i++) {
                seed++; // Increment the seed for a different random number
                const random = generateRandomNumber(seed);
                const randomInteger = Math.floor(random); // Convert the random number to an integer
                 x[i] = randomInteger; // Display the random number
              }   
        }

        z0 = select.classList;
        ar = Array.from(z0);
        tamanho = ar.length
        
        if(Boolean(ar[tamanho -1])){
            select.classList.remove(`${ar[tamanho-1]}`)
            select.classList.remove(`${ar[tamanho-2]}`)
        }

        z1 = select1.classList;
        ar1 = Array.from(z1);
        if(Boolean(ar1[tamanho -1])){
            select1.classList.remove(`${ar1[tamanho -1]}`)
            select1.classList.remove(`${ar[tamanho-2]}`)
        }
                
        z2 = select2.classList;
        ar = Array.from(z2);
        if(Boolean(ar[tamanho -1])){
            select2.classList.remove(`${ar[tamanho -1]}`)
            select2.classList.remove(`${ar[tamanho-2]}`)
        }

        z3 = select3.classList;
        ar = Array.from(z3);
        if(Boolean(ar[tamanho -1])){
            select3.classList.remove(`${ar[tamanho -1]}`)
            select3.classList.remove(`${ar[tamanho-2]}`)
        }

        z4 = select4.classList;
        ar = Array.from(z4);
        if(Boolean(ar[tamanho -1])){
            select4.classList.remove(`${ar[tamanho -1]}`)
            select4.classList.remove(`${ar[tamanho-2]}`)
        }

       // x = replaceRepeatedNumbers(x)
        

        
         // Check if the selected option value exists in the imageMap
        var d = descricao[x[0]];
        var d1 = descricao[x[1]];
        var d2 = descricao[x[2]];
        var d3 = descricao[x[3]];
        var d4 = descricao[x[4]];

        
// codigo antigo
//        select.innerText = d;  
//        select1.innerText = d1;  
//       select2.innerText = d2;  
//        select3.innerText = d3;  
//        select4.innerText = d4;  

// codigo novo
        select.src = descricao[x[0]];
        select1.src = descricao[x[1]];
        select2.src = descricao[x[2]];
        select3.src = descricao[x[3]];
        select4.src = descricao[x[4]];

        select.classList.add(`${x[0]}`);
        select1.classList.add(`${x[1]}`);
        select2.classList.add(`${x[2]}`);
        select3.classList.add(`${x[3]}`);
        select4.classList.add(`${x[4]}`);

        select.classList.add(`img1`);
        select1.classList.add(`img1`);
        select2.classList.add(`img1`);
        select3.classList.add(`img1`);
        select4.classList.add(`img1`);


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