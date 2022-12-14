let productName= prompt ("Enter product");
let priceProduct= Number(prompt ("Enter the price"));
let qty = Number(prompt ("Enter de quantity"));

console.log(productName,priceProduct,qty);

let total=0;
function addCart(total){
    total=qty*priceProduct;
    console.log(total);
    return total; 
}

function calculateTaxes(){
    subtotal=addCart(total);
    let totalTax= subtotal*1.11;

    document.getElementById("receipt").innerHTML=
    `
    <h2> RECEIPT </h2>
    <p>Product = ${productName}</p>
    <p>Price = ${priceProduct}</p>
    <p>Quantity = ${qty}</p>
    <p>Subtotal = ${subtotal}</p>
    <p>Total = ${totalTax}</p>
    `
}
calculateTaxes()