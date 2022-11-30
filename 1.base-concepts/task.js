"use strict";

function solveEquation(a, b, c) {
  let arr;

  let d = b**2-4*a*c;

  if (d<0) {
    arr = [];
  }
  
  if (d === 0) {
     arr = [-b/(2*a)];
  }

  if(d>0) {
    arr = [
      (-b + Math.sqrt(d) )/(2*a),
      (-b - Math.sqrt(d) )/(2*a)
    ]; 
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  // let P;
  // let S;

  function getMessage(nameProperety, properety) {
    return `Параметр "${nameProperety}" содержит неправильное значение "${properety}"`;
  } 

  if(Number.isInteger(percent) == false) {
     return getMessage("Процентная ставка", percent);
  }
  
  if(Number.isInteger(contribution) == false) {
     return getMessage("Начальный взнос", contribution);
  }

  if(Number.isInteger(amount) == false) {
     return getMessage("Общая стоимость", amount);
  }

  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();

  let differenceYears = date.getFullYear() - currentYear;
  let countMonth = differenceYears * 12 - currentMonth + date.getMonth();
  
  let S = amount - contribution;
  
  let P = percent/12/100;
  let mounthPayment = S * (P + (P / (((1 + P)**countMonth) - 1)));
  
  totalAmount = countMonth* mounthPayment; 
  

  console.log(Number(totalAmount.toFixed(2)));
  return +(totalAmount.toFixed(2));
}
