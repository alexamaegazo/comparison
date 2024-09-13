let firstFavNum = 31;
let secondFavNum = 29;

//Use comparison operators and store the results in variables
let isFirstFavNumGreaterThanSecondFavNum = firstFavNum  > secondFavNum;
console.log("Is firstFavNum greater than secondFavNum?", isFirstFavNumGreaterThanSecondFavNum );

let isFirstFavNumLessThanSecondFavNum = firstFavNum < secondFavNum;
console.log("Is firstFavNum less than secondFavNum?", isFirstFavNumLessThanSecondFavNum );

let isFirstFavNumGreaterThanOrEqualToSecondFavNum = firstFavNum  >= secondFavNum;
console.log("Is firstFavNum greater than or equal to secondFavNum?", isFirstFavNumGreaterThanOrEqualToSecondFavNum );

let isFirstFavNumLessThanOrEqualToSecondFavNum = firstFavNum <= secondFavNum;
console.log("Is firstFavNum less than or equal to secondFavNum?", isFirstFavNumLessThanOrEqualToSecondFavNum );

let isFirstFavNumStrictlyEqualToSecondFavNum = firstFavNum === secondFavNum ;
console.log("Is firstFavNum strictly equal to secondFavNum?", isFirstFavNumStrictlyEqualToSecondFavNum );

let isFirstFavNumLooseEqualitytoSecondFavNum  =  firstFavNum == secondFavNum;
console.log("Is firstFavNum loose equality to secondFavNum?", isFirstFavNumLooseEqualitytoSecondFavNum);

let isiFirstFavNumStrictInequalityToSecondFavNum = firstFavNum !== secondFavNum ;
console.log("Is firstFavNum strict inequality to secondFavNum?", isiFirstFavNumStrictInequalityToSecondFavNum );

let isFirstFavNumLooseInequalitytoSecondFavNum  =  firstFavNum != secondFavNum;
console.log("Is firstFavNum loose inequality to secondFavNum?", isFirstFavNumLooseInequalitytoSecondFavNum );

console.log("AND:", firstFavNum > 31 && secondFavNum < 29); //true
console.log("OR:", firstFavNum > 31 || secondFavNum < 29); //true
console.log("NOT:", !(firstFavNum === secondFavNum )); //true