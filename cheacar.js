const checkButton = document.getElementById("checarButton");
const selectElementn = document.getElementById("mySelect");
const selectElementn1 = document.getElementById("mySelect1");
const selectElementn2 = document.getElementById("mySelect2");
const selectElementn3 = document.getElementById("mySelect3");
const selectElementn4 = document.getElementById("mySelect4");

const selectedImagen = document.getElementById("selectedImage");
const selectedImagen1 = document.getElementById("selectedImage1");
const selectedImagen2 = document.getElementById("selectedImage2");
const selectedImagen3 = document.getElementById("selectedImage3");
const selectedImagen4 = document.getElementById("selectedImage4");

const selectn = document.getElementById("randoms")
const selectn1 = document.getElementById("randoms1")
const selectn2 = document.getElementById("randoms2")
const selectn3 = document.getElementById("randoms3")
const selectn4 = document.getElementById("randoms4")



const descricaon = {
    "1": "vidro",
    "2": "latex",
    "3": "redondo",
    "4": "tinta",
    "5": "cadarço",
    "6" : "a",
    "7" : "b",
    "8" : "c",
    "9" : "d",
    "10" : "e",
    "11" : "f",
    "12" : "g"

};

const imageMapn = {
    "2": "imagens/boracha.png",
    "3": "imagens/football.png",
    "1": "imagens/image.png",
    "4": "imagens/pen.png",
    "5": "imagens/tenis.png",
};


const checkMapn = {
    "image1": "2",
    "image2": "3",
    "image3": "1",
    "image4": "4",
    "image5": "5",
};


checkButton.addEventListener("click", function () {

    


    z0 = selectedImage.classList;
    ar0 = Array.from(z0);
    
    z1 = selectedImage1.classList;
    ar1 = Array.from(z1);

    z2 = selectedImage2.classList;
    ar2 = Array.from(z2);

    z3 = selectedImage3.classList;
    ar3 = Array.from(z3);

    z4 = selectedImage4.classList;
    ar4 = Array.from(z4);

    r0 = select.classList;
    arr0 = Array.from(r0)

    r1 = select1.classList;
    arr1 = Array.from(r1)

    r2 = select2.classList;
    arr2 = Array.from(r2)
    
    r3 = select3.classList;
    arr3 = Array.from(r3)

    r4 = select4.classList;
    arr4 = Array.from(r4)

    console.log(ar0[1])
    console.log(arr0[0])

    console.log(ar1[1])
    console.log(arr1[0])
    console.log(ar2[1])
    console.log(arr2[0])
    console.log(ar3[1])
    console.log(arr3[0])
    console.log(ar4[1])
    console.log(arr4[0])
    

    if ( ar0[1] === arr0[0] && ar1[1] === arr1[0] && ar2[1] === arr2[0] && ar3[1] === arr3[0] && ar4[1] === arr4[0]  ) {
        document.body.style.backgroundColor = "green";
    } else {
        document.body.style.backgroundColor = "red";
    }


})