function calculate(
        scoopCount,
        isCup,
        wantsSprinkles,
        wantsHotFudge,
        wantsWhippedCream,
        wantsCherry,
    ) {
        RATE = 0.10
        let price = 1 + (1.25 * scoopCount);
        if(isCup){
            price += wantsSprinkles ? 0.50 : 0;
            price += wantsHotFudge ? 1.25 : 0;
            price += wantsWhippedCream ? 0.25 : 0;
            price += wantsCherry ? 0.25 : 0;
    }
    const tax = price * RATE;     
    const total = price + tax;
    return { //new object
        price: price,
        tax: tax,
        total: total,
    }
}

function dollars(amount){
    return `$${amount.toFixed(2)}`;
}

//TEST
console.log(calculate(2,true,true,true,true,true));
console.log(calculate(2,false,false,false,false,false));