function highAndLow(string){
    let number = string.split(' ').map(num => Number(num));
    return `"${Math.max(...number)} ${Math.min(...number)}"`
}

console.log(highAndLow('1 2 3 4 5'));
//return "5 1"
console.log(highAndLow('1 2 -3 4 5'));
console.log(highAndLow('1 2 -3 4 5  10 12'));
//return "5 -3"

function highAndLow2(string){
    let number = string.split(' ').map(num => Number(num))
    let max = number[0];
    let min = number[0];

    if(number.length === 0){
        return number;
    }
    else{
        for(let i =0 ; i < number.length ; i++){
            if(number[i] > max){
                max = number[i];
            }
        }
        for(let i = 0 ; i < number.length ; i++){
            if(number[i] < min){
                min = number[i];
            }
        }
    }
    return `"${max} ${min}"`
}

console.log(highAndLow2('1 2 3 4 5'));
console.log(highAndLow2('1 2 -3 4 5'));