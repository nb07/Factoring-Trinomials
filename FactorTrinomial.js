// *** Factoring trinomials of type ax^2 + bx + c ***
// is ax === 1 then print out equation without one in front of x.
// multiply the first and third polynomial.
// loop through multiplied polynomials and push factors into factors array.
// loop through factors and see if any combination equals secondPoly.
// print out factors (x + or - numOne)(x + or - numTwo).

  // take first polynomial
var firstPoly    = Number(prompt("what is you're first polynomial")),
  // input of add or subtract
  plusOrMinusOne = prompt("Plus or Minus"),
  // take second polynomial
  secondPoly     = Number(prompt("what is you're second polynomial")),
  // input of add or subtract
  plusOrMinusTwo = prompt("Plus or Minus"),
  // take third polynomial
  thirdPoly      = Number(prompt("what is you're third polynomial")),
  //array of factors
  arrOfF         = [];

factorTrinomialMain(firstPoly, secondPoly, thirdPoly);

function factorTrinomialMain(firstPoly, secondPoly, thirdPoly){
  
  // is firstPoly equal to one? then print without one.
  isOne(firstPoly);
  
  // if plus or minus concat with secondPoly.
  secondPoly = addPlusOrMinus(plusOrMinusOne, secondPoly);

  // if plus or minus concat with thirdPoly.
  thirdPoly = addPlusOrMinus(plusOrMinusTwo, thirdPoly);

  //take first and third polynomial, multiply, then put into new variable
  var multFirstThird = (firstPoly * thirdPoly);
  
  // factor the multiplied number and print factors, also check if sum of factors = secondPoly.
  factorTrinomial(multFirstThird, secondPoly);

  // print factors.
  if(!checkBoo){
    console.log("sorry bro, this trinomial won't factor :(");
  } else {
    console.log("The sum of the factors " + numOne + " and " + numTwo + " equals " + secondPoly);
    factorPrinter(numOne, numTwo);
  }
}

// is there is subtraction? then concat.
function isSubtract(neg, poly){
  if(neg === "-"){
  poly = neg + poly;
  poly = Number(poly);
  // console.log(poly);
  }
  return poly;
}

// calling isSubtract depending on if there is subtraction.
function addPlusOrMinus(neg, poly){
  poly = isSubtract(neg, poly);
  // console.log(poly);
  return poly;
}

// if firstPoly is equal to one then dont print with one.
function isOne(firstPoly){
  // If first polynomial is 1 it will be left blank.
  if(firstPoly === 1){
      console.log("x^2 " + plusOrMinusOne + " " + secondPoly + "x " + plusOrMinusTwo + " " + thirdPoly);
  } else {
      console.log(firstPoly + "x^2 " + plusOrMinusOne + " " + secondPoly + "x " + plusOrMinusTwo + " " + thirdPoly);
  }
}

// factor
function factorTrinomial(multFirstThird, secondPoly){
  // factors multFirstThird.
  factorMult(multFirstThird);
  
  var revArrOfF = arrOfF.slice().reverse(),
      countArr  = arrOfF.slice(),
      negArrOfF = [],
      negRevOfF = [];
  
  //check sum of factors against secondPoly.
  sumCheck(arrOfF, revArrOfF, countArr, secondPoly);
  
  // if checkBoo is false, run this code.
  if(!checkBoo){
    // make first list of factors negative, check sum of factors.
    negArrOfF = makeArrNeg(arrOfF);
    sumCheck(negArrOfF, revArrOfF, countArr, secondPoly);
  }
  // if checkBoo is false, run this code.
  if(!checkBoo){
    // make secdond list of factors negative, check sum of factors.
    negRevOfF = makeArrNeg(revArrOfF);
    sumCheck(negArrOfF, negRevOfF, countArr, secondPoly);
  }
}

//factor number
function factorMult(multFirstThird, i){
  if(multFirstThird > 0){
    for(i = 0; i <= multFirstThird; i++){
      if(multFirstThird % i === 0){
        arrOfF.push(i);
      }
    }
  } else if(multFirstThird < 0){
    for(i = 0; i >= multFirstThird; i--){
      if(multFirstThird % i === 0){
        arrOfF.push(i);
      }
    }
  }
}

// make array negative.
function makeArrNeg(arr){
  negArr = [];
  arr.forEach(function(num){
    num *= -1;
    negArr.push(num);
  });
  return negArr;
}

// check sum of factors against checker var.
function sumCheck(arrOne, arrTwo, counter, checker){
  for(i = 0; i < counter.length; i++){
    if((arrOne[i] + arrTwo[i]) === checker){
      numOne = arrOne[i],
      numTwo = arrTwo[i];
     // console.log(arrOne[i], arrTwo[i]);
      checkBoo = true;
      return numOne, numTwo;
    }
    else {
      console.log(arrOne[i] + ", " + arrTwo[i] + " Nah brah!");
      checkBoo = false;
    }
  }
}

// print factors.
function factorPrinter(numOne, numTwo){
  if(numOne < 0 && numTwo < 0){
    // if numOne and numTwo are negative, strip negatives, input subtraction.
    numOne = Math.abs(numOne);
    numTwo = Math.abs(numTwo);
    console.log("(x " + "-" + " " + numOne + ")(x "+ "-" + " " + numTwo + ")");
    
  } else if(numOne < 0 && numTwo > 0){
    // if numOne is negative, strip negative, input subtraction.
    numOne = Math.abs(numOne);
    console.log("(x " + "-" + " " + numOne + ")(x "+ "+" + " " + numTwo + ")");
    
  } else if(numOne > 0 && numTwo > 0){
    // if numOne and numTwo are positive, input addition.
    console.log("(x " + "+" + " " + numOne + ")(x "+ "+" + " " + numTwo + ")");
    
  } else if(numOne > 0 && numTwo < 0){
    // if numTwo is negative, strip negative, input subtraction.
    numTwo = Math.abs(numTwo);
    console.log("(x " + "+" + " " + numOne + ")(x "+ "-" + " " + numTwo + ")");
  }
} 