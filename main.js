document.addEventListener("DOMContentLoaded", (()=>{

    const scoops = document.getElementById("scoops");
    const cone = document.getElementById("cone");
    const cup = document.getElementById("cup");

    const toppings = document.getElementById("toppings");

    const sprinkles = document.getElementById("sprinkles");
    const whippedCream = document.getElementById("whippedCream");
    const hotFudge = document.getElementById("hotFudge");
    const cherry = document.getElementById("cherry");

    const output = document.getElementById("output");

    const price = document.getElementById("price");
    const tax = document.getElementById("tax");
    const total = document.getElementById("total")

    function updateToppings(){
        toppings.style.display = cup.checked ? 'block' : 'none';
    }

    cone.addEventListener("change", updateToppings);
    cup.addEventListener("change", updateToppings)
    
    output.addEventListener ("click",()=>{
        const iceCreamResults = calculate(
            Number(scoops.value),
            cup.checked,
            sprinkles.checked,
            whippedCream.checked,
            hotFudge.checked,
            cherry.checked,
        )

        price.innerHTML = dollars(results.price);
        tax.innerHTML = dollars(results.tax);
        total.innerHTML = dollars(results.total);

    });//end click

}));//end Loaded