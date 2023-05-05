//window.onload

document.addEventListener("DOMContentLoaded", () => {
    const scoops = document.getElementById("scoops");
    const container = document.getElementById("container"); //YES


    const sprinkles = document.getElementById("sprinkles");
    const whippedCream = document.getElementById("whippedCream");
    const hotFudge = document.getElementById("hotFudge");
    const cherry = document.getElementById("cherry");
    const output = document.getElementById("output");

    estimate.addEventListener("click",()=>{
        const iceCreamResults = getIceCreamData(
            Number(scoops.value),
            container.checked,
            sprinkles.checked,
            whippedCream.checked,
            hotFudge.checked,
            cherry.checked,
        )
        output.innerHTML = getTextResults(iceCreamResults);
    });//end estimate click

});//end DOM Content Loaded