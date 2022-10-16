var number=[6,3,5,7,8,50,1]

var maximum=number.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(maximum);

var minimum=number.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(minimum);

// var cubes=array.map(n=>n**3)
// console.log(cubes);

// if num > 5 map to num+1 num < 5 map to num-1

// var narray=number.map(n=>n>5?n+1:n-1)
// console.log(narray);

// var even=number.filter(n=>n%2==0)
// console.log(even);

// var odd=number.filter(n=>n%2!=0)
// console.log(odd);