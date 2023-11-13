// The data is profit or loss with corresponding month
// You're working with an array within an array
// You will use for loops (maybe while loops as well) and arrays
// The challenges is to answer the questions
// Come up with the code that gives you the answer
// You can't do simple calculations
// greatestIncrease should come out of a loop
// Question 4 highest difference
// Question 5 highest decrease
// The end result will be visible in the console

/* You need to do the calculations and store in variables.
Once you have done all mathematical calculations,
you will print the result variables in the console. */

// console.log(finances.length)
// add up all the month differences and calculate the average
// loop through the array and find highest number and lowest number + corresponding month value

// 43 changes, sum them up and divide them by 86 to get the average change
// you manipulate the i to get you the previous month
// netChange =+ currentMonth - previousMonth

const finances = [ // i++
  ['Jan-2010', 867884], // index 1
  ['Feb-2010', 984655], 
  ['Mar-2010', 322013],
  ['Apr-2010', -69417], 
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];


/* The total number of months included in the dataset.

The net total amount of Profit/Losses over the entire period.

The average of the changes in Profit/Losses over the entire period.

You will need to track what the total change in Profit/Losses are from month to month and then find the average.
(Total/(Number of months - 1))
The greatest increase in Profit/Losses (date and amount) over the entire period.

The greatest decrease in Profit/Losses (date and amount) over the entire period. */


/* Hints:

You will need to do some research on your own for this project!

Remember, in order to combine strings and variables in the console you will need to use concatenation.

How do you only print to the nearest 100th in JavaScript? */

console.log("Financial Analysis")
console.log("------------------------")

// Total Months

var totalMonths = finances.length;
console.log("Months: " + totalMonths);

// Profit Total

function addUpNumbers(finances) {
    let sum = 0;

    for (let i = 0; i < finances.length; i++) {
       for (let j = 1; j < finances[i].length; j++) {
                    sum += finances[i][j];
                  }
              }
     return sum;
           }
     let sum = addUpNumbers(finances);
     console.log("Total Profit: " + "$" + sum);

// Average Change

function calculateChangeAndAverage(arr) {
  let totalChange = 0;

  for (let i = 1; i < arr.length; i++) {
    const currentProfit = arr[i][1];
    const previousProfit = arr[i - 1][1];
    const change = currentProfit - previousProfit;
    totalChange += change;
  }

  const averageChange = (totalChange / (arr.length - 1)).toFixed(2);

  return { totalChange, averageChange };
}

const result = calculateChangeAndAverage(finances);
console.log("Average Change: " + result.averageChange);

// Greatest Increase //

function findGreatestIncrease(arr) {
  let greatestIncrease = 0;
  let greatestIncreaseMonth = '';

  for (let i = 1; i < arr.length; i++) {
    const currentProfit = arr[i][1];
    const previousProfit = arr[i - 1][1];
    const increase = currentProfit - previousProfit;

    if (increase > greatestIncrease) {
      greatestIncrease = increase;
      greatestIncreaseMonth = arr[i][0];
    }
  }

  return { month: greatestIncreaseMonth, increase: greatestIncrease };
}

const resultIncrease = findGreatestIncrease(finances);

// Concatenate into a string using template literals
const concatenatedString = `Greatest Gain in Profit: ${resultIncrease.month} (${resultIncrease.increase})`;

console.log(concatenatedString);

// Greatest Decrease //

function findGreatestDecrease(arr) {
  let greatestDecrease = 0;
  let greatestDecreaseMonth = '';

  for (let i = 1; i < arr.length; i++) {
    const currentProfit = arr[i][1];
    const previousProfit = arr[i - 1][1];
    const decrease = previousProfit - currentProfit;

    if (decrease > greatestDecrease) {
      greatestDecrease = decrease;
      greatestDecreaseMonth = arr[i][0];
    }
  }

  return { month: greatestDecreaseMonth, decrease: greatestDecrease };
}

const decreaseResult = findGreatestDecrease(finances);

// Concatenate into a string using template literals

const decreaseConcatenatedString = `Greatest Loss in Profit: ${decreaseResult.month} (-${decreaseResult.decrease})`;

console.log(decreaseConcatenatedString);

//