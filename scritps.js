
    
    const selectElement = document.getElementById("mySelect");
    const selectedImage = document.getElementById("selectedImage");


    const selectElement1 = document.getElementById("mySelect1");
    const selectedImage1 = document.getElementById("selectedImage1");

    const selectElement2 = document.getElementById("mySelect2");
    const selectedImage2 = document.getElementById("selectedImage2");

    const selectElement3 = document.getElementById("mySelect3");
    const selectedImage3 = document.getElementById("selectedImage3");

    const selectElement4 = document.getElementById("mySelect4");
    const selectedImage4 = document.getElementById("selectedImage4");

        // Define a mapping of option values to image sources
    const imageMap = {
        "2": "imagens/arroz.png",
        "3": "imagens/GraoDeBico.png",
        "1": "imagens/lentilha.png",
        "4": "imagens/milhoSementes.png",
        "5": "imagens/trigo.png",
    };

        // Add a change event listener to the select element
    selectElement.addEventListener("change", function() {
            const selectedOption = selectElement.options[selectElement.selectedIndex];
            const selectedValue = selectedOption.value;
            console.log(selectedValue)

            z0 = selectedImage.classList;
            console.log(z0)
            ar = Array.from(z0);
            console.log(ar)
            if(Boolean(ar[1])){
            selectedImage.classList.remove(`${ar[1]}`)
        }


            // Check if the selected option value exists in the imageMap
            if (imageMap.hasOwnProperty(selectedValue)) {
                const imagePath = imageMap[selectedValue];
                selectedImage.src = imagePath;
                selectedImage.classList.add(selectedValue)
            } else {
                // If the selected option value is not in the imageMap, clear the image
                selectedImage.src = "";
            }
        });

        
            selectElement1.addEventListener("change", function() {
            const selectedOption = selectElement1.options[selectElement1.selectedIndex];
            const selectedValue = selectedOption.value;


            z0 = selectedImage1.classList;
            console.log(z0)
            ar = Array.from(z0);
            console.log(ar)
            if(Boolean(ar[1])){
            selectedImage1.classList.remove(`${ar[1]}`)
        }

            // Check if the selected option value exists in the imageMap
            if (imageMap.hasOwnProperty(selectedValue)) {
                const imagePath = imageMap[selectedValue];
                selectedImage1.src = imagePath;
                selectedImage1.classList.add(selectedValue)
            } else {
                // If the selected option value is not in the imageMap, clear the image
                selectedImage1.src = "";
            }
        });

        selectElement2.addEventListener("change", function() {
            const selectedOption = selectElement2.options[selectElement2.selectedIndex];
            const selectedValue = selectedOption.value;


            z0 = selectedImage2.classList;
            console.log(z0)
            ar = Array.from(z0);
            console.log(ar)
            if(Boolean(ar[1])){
            selectedImage2.classList.remove(`${ar[1]}`)
            }
            // Check if the selected option value exists in the imageMap
            if (imageMap.hasOwnProperty(selectedValue)) {
                const imagePath = imageMap[selectedValue];
                selectedImage2.src = imagePath;
                selectedImage2.classList.add(selectedValue)
            } else {
                // If the selected option value is not in the imageMap, clear the image
                selectedImage2.src = "";
            }
        });

        selectElement3.addEventListener("change", function() {
            const selectedOption = selectElement3.options[selectElement3.selectedIndex];
            const selectedValue = selectedOption.value;

            z0 = selectedImage3.classList;
            console.log(z0)
            ar = Array.from(z0);
            console.log(ar)
            if(Boolean(ar[1])){
            selectedImage3.classList.remove(`${ar[1]}`)
            }

            // Check if the selected option value exists in the imageMap
            if (imageMap.hasOwnProperty(selectedValue)) {
                const imagePath = imageMap[selectedValue];
                selectedImage3.src = imagePath;
                selectedImage3.classList.add(selectedValue)
            } else {
                // If the selected option value is not in the imageMap, clear the image
                selectedImage3.src = "";
            }
        });
        
        selectElement4.addEventListener("change", function() {
            const selectedOption = selectElement4.options[selectElement4.selectedIndex];
            const selectedValue = selectedOption.value;

            z0 = selectedImage4.classList;
            console.log(z0)
            ar = Array.from(z0);
            console.log(ar)
            if(Boolean(ar[1])){
            selectedImage4.classList.remove(`${ar[1]}`)
            }

            // Check if the selected option value exists in the imageMap
            if (imageMap.hasOwnProperty(selectedValue)) {
                const imagePath = imageMap[selectedValue];
                selectedImage4.src = imagePath;
                selectedImage4.classList.add(selectedValue)
            } else {
                // If the selected option value is not in the imageMap, clear the image
                selectedImage4.src = "";
            }
        });
    

