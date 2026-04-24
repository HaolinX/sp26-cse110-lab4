let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (let key in statistics) {

    // starts with the letter r, or if the value of that property is an odd number
    if (key.startsWith('r') || statistics[key] % 2 === 1) {
        console.log(statistics[key]);
    }
}