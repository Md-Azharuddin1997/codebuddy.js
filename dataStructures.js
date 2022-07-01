// level 2


// function to return all odd number from an array
const returnAllOdd = (arr) => {
    return arr.filter(data => data%2 !== 0)
}

// function to covert vowel to uppercase
const vowelUpperCase = (str) => {
    let newStr = ''
    for (let i=0; i<str.length; i++){
        if(str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u'){
            newStr += str[i]
        }else{
            // let char = str[i]
            newstr += srt[i].toUpperCase()
        }
    }
    return newStr
}

// function find the max element in an array

const findMaxValue = (arr) => {
    let max = arr[0]
    arr.forEach(item => {
        if(item > max){
            max = item
        }
    })
    return max
}