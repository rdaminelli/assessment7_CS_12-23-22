// 1) Sum Zero

const addToZero = arr => {
    for(let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true
            }
        }
    }
    return false
}

// The runtime for the function addToZero is O(n^2)

console.log("Results for addToZero")
console.log( addToZero([]), addToZero([1]), addToZero([1, 2, 3]), addToZero([1, 2, 3, -2]))
console.log('---------------------------------')

const addToZero2 = arr => {
    posNums = [];
    negNums = [];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] >= 0){
            posNums.push(arr[i])
        } else {
            negNums.push(arr[i] * -1)
        }
    }
    return negNums.some(num => posNums.includes(num));
}

console.log("Results for addToZero2")
console.log(addToZero2([]), addToZero2([1]), addToZero2([1, 2, 3]), addToZero2([1, 2, 3, -2]))
console.log('---------------------------------')


// 2) Unique Characters

const hasUniqueChars = (str) => [...new Set([...str])].join('') === str

// The runtime for the function hasUniqueChars is O(n)

console.log("Results for hasUniqueChars")
console.log(hasUniqueChars('Monday'), hasUniqueChars('Moonday'))
console.log('---------------------------------')


// 3) Pangram Sentence

const isPangram = (str) => [...new Set([...str.toLowerCase()])].sort().splice(-26).join('') === 'abcdefghijklmnopqrstuvwxyz'

// The runtime for the function isPangram is O(n)

console.log("Results for is Pangram")
console.log(isPangram("The quick brown fox jumps over the lazy dog!"), isPangram("I like cats, but not mice"))
console.log('---------------------------------')

const isPangram2 = (str) => {
    let letters = []
    str = str.toLowerCase()
    for (i = 0; i < str.length; i++){
        if (str[i] >= 'a' && str[i] <= 'z' && !letters.includes(str[i])){
          letters.push(str[i])
        }
    }
    letters.sort()
    letters = letters.join('')
    return letters === 'abcdefghijklmnopqrstuvwxyz'
}

console.log("Results for is Pangram2")
console.log( isPangram2("The quick brown fox jumps over the lazy dog!"), isPangram2("I like cats, but not mice"))
console.log('---------------------------------')


// 4) Longest Word

const findLongestWord = (arr) => {
    let largest = 0
    arr.forEach(str => {
        if (str.length > largest) {
            largest = str.length
        }
    })
    return largest
}

// The runtime for the function findLongestWord is O(n)

console.log("Results for findLongestWord")
console.log(findLongestWord(["hi", "hello"]))
console.log('---------------------------------')