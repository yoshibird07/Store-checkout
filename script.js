var inputProduct = document.getElementById("barcodeProduct");
var inputQuantity = document.getElementById("quantityQuantity");
var buttonCart = document.getElementById("buttonCart");
let buttonCheckout = document.getElementById("buttonCheckout");
let cartDiv = document.getElementById ("cartDiv");
let dictionary = {
    "689145740844":{
        name:"JavaScript Textbook",
        price:34.95,
    },
    "4549292070248":{
        name: "Photo Paper",
        price: 10.99,
    },
    "092265222983":{
        partOfSpeech: "First Aid Kit",
        price: 20.99,
    },
    "X002ELVL3J":{
        name: "Box of Pencils (50ct.)",
        price: 15.99,
    },
    "860004186236":{
        name: "N95 Face Masks",
        price: 15.99,
    },
    "036000214000":{
        name: "Kleenex",
        price: 3.99,
    },
    "8809568749985":{
        name: "Hand Sanitizer",
        prices: 7.99,
    },
    "036500060480":{
        name: "Printer Paper",
        prices: 9.99,
    },
    "085014561877":{
        name: "Brush Pens",
        price: 10.99,
    },
    "X0032YGP2T":{
        name: "Multiport Adapte",
        price: 25.99,
    },
    "9780134682334":{
        name: "iOS Programming Textbook",
        price: 119.99,
    },
    "718103230759":{
        name: "Spiral Notebook",
        price: 1.99,
    },
    "888462022224":{
        Name: "iPad Mini",
        price: 599.99,
    },
}

function addToCart(){
    let barcode = inputProduct.value;
    let quantityNumber = parseInt(inputQuantity.value);

        if(dictionary.hasOwnProperty(barcode)){
        let divElement = document.createElement('div');
        divElement.classList.add ("divElement");

        let itemElement = document.createElement('p');
        itemElement.innerText=dictionary[barcode].Name;

        itemElement.classList.add ("iElement");
        let PriceElement = document.createElement('p');

        PriceElement.innerText=dictionary[barcode].price;
        PriceElement.classList.add ("prElement");

        let QuantityElement = document.createElement('p');
        QuantityElement.innerText = quantityNumber;
        QuantityElement.classList.add ("QElement");

        divElement.appendChild(itemElement);
        divElement.appendChild(priceElement);
        divElement.appendChild(QuantityElement);

    
    }
    else{
        return ("Product now found");
    }

}
buttonCart.addEventListener("click",addToCart);


