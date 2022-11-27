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
  let P;
  let S;

  if(Number.isInteger(percent)) {
     P = percent/100;
  }  else {
    console.log(`Параметр percent(проценнтная ставка) содержит неправильное значение ${percent}`);
  }
  
  if(Number.isInteger(contribution) === false) {
    console.log(`Параметр contribution(начальный бонус) содержит неправильное значение ${contribution}`);
  }

  if(Number.isInteger(amount) === false) {
    console.log(`Параметр amount(сумма кредита) содержит неправильное значение ${amount}`);
  }

  if(Number.isInteger(date) === false) {
    console.log(`Параметр date(срок в месяцах) содержит неправильное значение ${date}`);
  }

  
  S = amount - contribution;
  let dateInMonth = date.getMonth();
  let r = dateInMonth/12;
  let mounthPayment = S * (P + (P / (((1 + P)**dateInMonth) - 1)));
  
  //totalAmount = S*P/P;
  totalAmount = amount*r/(1-(1/(1+r))*dateInMonth);

  console.log(totalAmount.toFixed(2));
  return totalAmount.toFixed(2);
}
