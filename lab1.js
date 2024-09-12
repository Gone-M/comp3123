
// ! Exrcise 1

let sentence = "the quick brown fox";
let capitalizedSentence = capitalizeFirstLetter(sentence);

function capitalizeFirstLetter(sentence) {
    return sentence.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

console.log(capitalizedSentence); 



// ! Exercise 2

function max(a, b, c) {
    return Math.max(a, b, c);
}

console.log(max(1, 0, 1));
console.log(max(0, -10, -20));
console.log(max(1000, 510, 440));



// ! Exercise 3

function right(str) {
    if (str.length < 3) {
        return str;
    }
    
    let lastThree = str.slice(-3);
    
    let remaining = str.slice(0, -3);
    
    return lastThree + remaining;
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));



// ! Exercise 4

function angle_Type(angle) {
    if (angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    }
}

console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));



// ! Exercise 5

function array_max_sum(arr, k) {
    let maxSum = 0;

    if (arr.length < k) {
        return 0;
    }

    for (let i = 0; i <= arr.length - k; i++) {
        let currentSum = 0;

        for (let j = 0; j < k; j++) {
            currentSum += arr[i + j];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }

    return maxSum;
}

console.log(array_max_sum([1, 2, 3, 14, 5], 2));
console.log(array_max_sum([2, 3, 5, 1, 6], 3));
console.log(array_max_sum([9, 3, 5, 1, 7], 2));


