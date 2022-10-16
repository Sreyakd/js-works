// var marks=[10,23,32,43,21,29]
// for(let i=0;i<=5;i++){
//     console.log(marks[i]);
// }

var marks=[10,23,32,43,21,29]
// for(let mark of marks){
//     console.log(mark);
// }

// marks.sort((n1,n2)=>n1>n2?-1:1)
// console.log(marks);

// marks.sort((n1,n2)=>n1<n2?-1:1)
// console.log(marks);

marks.sort((n1,n2)=>n1-n2)
console.log(marks);

marks.sort((n1,n2)=>n2-n1)
console.log(marks);