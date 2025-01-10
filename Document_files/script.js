// 1.for loop//
// ex 1 loop 1 to 5//

// for(count = 1; count <= 5; count++){
//     console.log("my name is ritik");
// }
// console.log("loop has end");

// ex 2 calculate superm of 1 to 5//

// let sum = 0;
// for(i = 0;i <= 5;i++){
//     sum = sum + i;//sum = 15
// }
// console.log("sum=", sum);
// console.log("loop has end");

// 2.while loop//
// let i = 1;
// while(i <= 10){
//     console.log("my name is ritik");
//     i++;
// }

// 3.do while loop//
// let i = 1;
// do{
//     console.log("i=",i);
//     i++;
// }
// while(i <= 10);

// 4.for of loop//
// let str ="my name is ritik";
// for(let i of str){
//     console.log("i=",i);
// }

// ex2 //
// let str ="my name is ritik";
// let size =0;
// for(let val of str){
//     console.log("val=",val);
//     size++;
// }
// console.log("string size",size);

// 5.for in loop//
// let student = {
//     name : "ritik patel",
//     age : 20,
//     cgpa : 6.77,
//     iipass : true,
// };
// for(let key in student){
//     console.log("key=",key, "value=",student[key]);
// }

// practics 1//

// for(let num=0;num<=100;num++){
//    if(num % 2 === 0){
//    console.log("num=",num);
//    }
// }

// practics 2//
// let gameNum = 25;
// let userNum = prompt("guess the  agme number");
//     while(userNum !=gameNum){
//         userNum =prompt("you enter wrong number, guess gain");
//     }
//     console.log("congratulation , you entered the right number");




// string//

// let str =  "patelritik";
// console.log(str[4]);//l

// let str2 ="my"

// let obj = {
//     item : "pen",
//     price : 10,
// };
// let output = `the cost of ${obj.item} is $(abj.price} rupees;`
// console.log(output);
// //template literals//
// let specialString =`this ia a template literal`;
// console.log(typeof specialString);

// 2.string methos//
// 2.str.toUpperCase()//

// let str = "apnacollage";
// let newstr = str.toUpperCase();
// console.log(str);
// console.log(newstr);//APNACOLLAGE

// 3.str.toLowerCase()//
// let str = "apnacollage";
// let newstr = str.toLowerCase();
// console.log(str);
// console.log(newstr);//apnacollage

// 4.str.trim()//
// let str = "    apna collage  js";
// let newstr = str.trim();
// console.log(str);
// console.log(newstr);

//5 str.slice//
// let str = "0123456";
// console.log(str.slice(1,6));//12345

//6.concat//
// let str1 = "patel";
// let str2 = "ritik";
// let res =str1.concat(str2);
// console.log(res);//patelritik

//7.replace//
// let str = "hello";
// console.log(str.replace("h","y"));//yello

// 8.charat//
// let str ="ilovejs";
// console.log(str.charAt(3));//v

//practice//

let FullName = prompt("enter your fullname without spaces");
let userName ="@" + FullName + FullName.length;
console.log(userName);