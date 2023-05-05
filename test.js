function getRateData(scoops, sprinkles, whippedCream, hotFudge, cherry) {
    //OUTPUT VARIABLES
    let iceCreamCost = 0;
    let toppingsAmount = 0;
    let totalDue = 0;
    let tax = 0.03

    //LOGIC
    iceCreamCost = (2.25 + (1.25 * scoops));
    
    if(sprinkles){
        toppingsAmount += 0.50;
    }
    if(whippedCream){
        toppingsAmount += 0.25;
    }
    if(hotFudge){
        toppingsAmount += 1.25;
    }
    if(cherry){
        toppingsAmount += 0.25;
    }


    basePrice = iceCreamCost + toppingsAmount;
    taxAmount = tax * basePrice;
    totalDue = basePrice + taxAmount;

    //RETURN OBJECT WITH OUTPUT VARIABLE AS PROPERTIES
    return {
        iceCreamCost: iceCreamCost,
        toppingsAmount: toppingsAmount,
        taxAmount: taxAmount,
        totalDue: totalDue,
    }
}

//TEST 
function getTextResults(iceCreamResults){
    return `
        Base price:             $${iceCreamResults.iceCreamCost.toFixed(2)}
        Toppings:               $${iceCreamResults.toppingsAmount.toFixed(2)}
        Tax:                    $${iceCreamResults.taxAmount.toFixed(2)}
        Total Due:              $${iceCreamResults.totalDue.toFixed(2)}
     `;
}

console.log(getTextResults(getRateData( 1, true, true, true, true)));
console.log(getTextResults(getRateData( 0, false, false, false, false)));

// window.onload = ONLY GOOD FOR ONE LISTENER