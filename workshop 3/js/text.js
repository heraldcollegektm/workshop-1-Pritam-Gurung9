alert("hello world");

// area of triangle 
function triArea(b, h) {
    area = (b * h) / 2;
    return area;
};

area = triArea(8, 5);

console.log(area);

document.write("this is the area of triangle:", area);


// return something to me
function giveMeSomething(a) {
    result = "something" + " " + a;
    return result;
};

result = giveMeSomething("is better than nothing");

console.log(result);

// basketball counter
function points(twoP, threeP) {
    var score = 2 * twoP + 3 * threeP;
    console.log("the score of match is ", score)
}

points(2, 3);

// less than 100?
function lessThan100(a, b) {
    var sum = a + b;
    if (sum < 100) {
        var ans = true;
    } else {
        var ans = false;
    }
    console.log(ans);
}

lessThan100(20, 30);

// add up the number from single number
function addUp(a) {
    let i = 1;
    let sum1 = 0;
    while (i <= a) {
        sum1 = sum1 + i;
        i++;
    }
    console.log("this is the added sum:", sum1);
}

addUp(4);

//oddish or evenish
function oddishOrEvenish(a) {
    var numOfOddish = a;
    var sumOfNum = 0;
    while (numOfOddish != 0) {
        sumOfNum += (numOfOddish % 10);
        numOfOddish = parseInt(numOfOddish / 10);
    };

    // alternate code for adding up the digits of integer
    // let a = 135
    // let stringA = a.toString();
    // let sumO = 0
    // for (i = 0; i < stringA.length; i++) {
    //     sumO += parseInt(stringA.charAt(i));
    // }
    // console.log(sumO);
    if (sumOfNum % 2 == 0) {
        console.log("Evenish");
    } else {
        console.log("Oddish");
    };
};

oddishOrEvenish(15);

//prime number in range

function primeInRange(a, b) {
    num1 = a;
    num2 = b;

    while (num1 <= num2) {
        let i = 2;
        while (i < num1 / 2) {
            if (num1 % i == 0) {
                console.log(true);
                break
            }
            i++;
        }
        num1++;
    };
};

primeInRange(5, 11);

// left shift by power of two

function shiftToLeft(base, mult) {
    return base * (mult ** 2);
}

console.log(shiftToLeft(5, 2));

//convert a numbr to base -2


function binary(a) {
    let decimal = a
    let binaryResult = ""
    while (decimal => 1) {
        if (decimal == 1) {
            binaryResult = (decimal.toString()).concat(binaryResult);
            decimal = parseInt(decimal / 2);
            break;
        } else if (decimal > 1) {
            binaryResult = ((decimal % 2).toString()).concat(binaryResult);
            decimal = parseInt(decimal / 2);
        };
    };
    console.log(parseInt(binaryResult));
};

binary(9)