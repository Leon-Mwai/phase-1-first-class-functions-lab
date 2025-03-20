// Code your solution in this file!
// 1. Function to return the first two drivers
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};

// 2. Function to return the last two drivers
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};

// 3. Array containing the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Higher-order function to create a fare multiplier
const createFareMultiplier = function (multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
};

// 5. Function to double the fare
const fareDoubler = createFareMultiplier(2);

// 6. Function to triple the fare
const fareTripler = createFareMultiplier(3);

// 7. Function to select different drivers based on input function
const selectDifferentDrivers = function (drivers, driverSelector) {
    return driverSelector(drivers);
};

// Example Usage:
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // ['Antonia', 'Nuru']
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // ['Amari', 'Mo']
console.log(fareDoubler(10)); // 20
console.log(fareTripler(10)); // 30
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); // ['Antonia', 'Nuru']
