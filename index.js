// Code your solution in this file!
const returnFirstTwoDrivers = drivers => drivers.slice(0, 2)


const returnLastTwoDrivers = drivers => drivers.slice(2, 4)
    

    const  selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

    const createFareMultiplier = function(multiplier) {
        return function(fare) {
            return fare * multiplier
        }
    }
    //const createFareMultiplier = (a, b) => a * b

    const fareDoubler = (a, b) => a * 2;

    const fareTripler = (a, b) => a * 3;

    const selectDifferentDrivers = function(drivers, selectingFunction) {
        return selectingFunction(drivers);
      };