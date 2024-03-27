"use strict";
function createCar(manufacturer, modelName, ...options) {
    const car = {
        manufacturer,
        modelName,
    };
    for (const option of options) {
        Object.assign(car, option);
    }
    return car;
}
const carInfo = createCar("Audi", "Carolla GLI", { colour: "Black", year: 2022, features: ["Navigation", "23-inch wheel design"] });
console.log(carInfo);
