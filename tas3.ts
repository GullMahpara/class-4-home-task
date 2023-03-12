// /*3- Task: Create a Function to Determine the Discount Amount for a Product
// Breakdown:
// · Create a function that takes a product price and a discount percentage as input and calculates
//  the discount amount for the product using the formula:
//   discount amount = product price * (discount percentage / 100).

// · If the discount percentage is greater than or equal to 50%, the function should return 
// an error message indicating that the discount percentage is invalid.

// · Display the original price, discount percentage, discount amount, and final price of the
//  product to the user as output.

// · Test the function with different product prices and discount percentages.
// */

// //· Create a function that takes a product price and a discount percentage as input and calculates
//  //the discount amount for the product using the formula:
//  //discount amount = product price * (discount percentage / 100).

// var Prompt=require("prompt-sync")({sigint:true});

// function Discount_amount(price1:number,discount_persent1:number)//function define
// {
// console.log("------CALCULATE THE DISCOUNT AMOUNT------");

// console.log("Product origial price:"+price1+" Rs.");
// console.log("Discount percentage:"+discount_persent1+"%");

// //If the discount percentage is greater than or equal to 50%, the function should return 
// //an error message indicating that the discount percentage is invalid.
// if(discount_percentage>100||discount_percentage<0)
// {
//     console.log("OUT Of RANGE percentage.");
    
// }
// else if(discount_percentage>=50)
// {
// console.log("Invalid discount percentage.");

// }
// else if(discount_percentage<50){

// let discount_rupee=product_price*(discount_percentage/100);
// console.log("Discount amount:"+discount_rupee+"Rs.");

// let final_amount:number=price1-discount_rupee;
// console.log("Final amount:"+final_amount);

// }
// }
// let product_price=Prompt("Enter the product total price:");//take price as input
// console.log("Total price:"+product_price+"Rs.");

// let discount_percentage=Prompt("Enter the product discount percentage:");//take discount percentage as input
// console.log("Discount percentage:"+discount_percentage+"%");

// Discount_amount(product_price,discount_percentage);//function call

var Prompt=require("prompt-sync")({sigint:true});

function Discount_amount(price1:number,discount_persent1:number)//function define
{
    console.log("------CALCULATE THE DISCOUNT AMOUNT------");

    console.log("Product original price:"+price1+" Rs.");
    console.log("Discount percentage:"+discount_persent1+"%");

    //If the discount percentage is greater than or equal to 50%, the function should return 
    //an error message indicating that the discount percentage is invalid.
    if(discount_persent1>=50)
    {
        console.log("Invalid discount percentage.");
    }
    else
    {
        let discount_rupee=price1*(discount_persent1/100);
        console.log("Discount amount:"+discount_rupee+" Rs.");

        let final_amount:number=price1-discount_rupee;
        console.log("Final amount:"+final_amount+" Rs.");
    }
}

let product_price=Prompt("Enter the product total price:");//take price as input
console.log("Total price:"+product_price+" Rs.");

let discount_percentage=Prompt("Enter the product discount percentage:");//take discount percentage as input
console.log("Discount percentage:"+discount_percentage+"%");

Discount_amount(Number(product_price),Number(discount_percentage));//function call


