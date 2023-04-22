var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
/* 
for each number in the list
check if the number modulo 2 is 0
if yes, counter ++;
if no, go to the next number in the list

console.log(the counter variable)

 */

for (i=0; i<numbers.length; i++){
    if(numbers[i]%2==0 && numbers[i]!=0){
        countPositives++;
    }
}
console.log("There are " + countPositives + " positive values");