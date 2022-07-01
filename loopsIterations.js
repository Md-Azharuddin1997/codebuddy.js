// level 2
// function to print sum of first n fabonacci number

const printSum = (n) => {
    let sum = 0;
    for(let i=1; i<=n ; i++){
        if(i === 1 || i === 2){
            sum = sum + 1
        }
        else{
            sum += (i-1) + (i-2)
        }
    }
    return sum
}