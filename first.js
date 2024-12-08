//Age

// let age =2;
// if(age>=18){
//     console.log(age,"is Adult")
// }else{
//     console.log(age,"is not Adult ")
// }

//Grades

// let score=prompt("Enter the score :");
// let grade;
// if(score>=90 && score<=100){
//     grade="A";
// }else if (score>=70 && score<=89) {
//     grade="B";
// }else if(score>=60 && score<=69){
//     grade="C";     
// }else if(score>=50 && score<=59){
//     grade="D";
// }
// else if(score>=30 && score<=49){
//     grade="F";
// }

// console.log("According to your score your grade is ",grade)


//For loop 
// for (let i=1;i<=5;i++){
//     console.log("avi");
// }

//While loop

// let i =1;
// while(i<=5){
//     console.log("i=")
//     i++;
// }

//do-while loop

// let i=1;
// do{
//     console.log("i=",i)
//     i++;
// }
// while(i<=5);

//for-of loop 

// let str="avishkar";
// let size=0;
// for(let val of str){
//     console.log("val=",val);
//     size++;
// }
// console.log("size =",size);

//for-in loop

// let student= {
//     name :"Avishkar",
//     age : 22,
//     cgpa : 7.9,
//     isPass : true
// };
 
// for (let key in student){
//     console.log("key =",key ,"value =",student[key]);
// }

//Print all even numbers from 0 to 100.


// for(let num=0;num<=100;num++){
//     if(num %2 ===0){
//         console.log("num =",num)
//     }
// }


//Game for guessing game number

// let gameNum = 25;
// let userNum=prompt("Guess the game number ")
// while(userNum != gameNum){
//     userNum=prompt("you entered wrong number. Guess again ")
// }

// console.log("Congrajulations you entered right number ")

//string indices 

// let str="Avishkar";
// console.log(str[4]);

//template literals

// let obj={
//     item : "pencil",
//     price : 34,
// };

// let output = (`the cost of ${obj.item} is ${obj.price} rupees `)
// console.log(output)

//String Methods 

// let str="Avishkar";
// let newStr=str.toUpperCase();
// let a="AVISHKAR"
// a=str.toLowerCase();
// console.log("Uppercase", newStr)
// console.log("lower case" ,a)

// console.log("slice", str.slice(1,3));

// let str1="Avi";
// let str2="Tapkir";
// let output= str1.concat(str2);
// console.log("concat ", output);


// let str3="hello";
// console.log("Replace ", str3.replace("h","y"));

// let str4="ILoveJS";
// console.log("charAt",str4.charAt(2));

//Practise 

// let fullname=prompt("Enter your fullname :");
// let a="@";
// let username=a.concat(fullname)+ fullname.length;
// console.log(username);

//Array 

let marks=[87,97,55,87,45];
console.log(marks);

let stud_name=["Avishkar","Omkar","Chaitnya","Suyash"];
console.log(stud_name);
 
let heroes=["ironman","hulk","spiderman","thor"];

for(let indx=0;indx<heroes.length;indx ++){
    console.log(heroes[indx]);
}

let student=["avi","omi","chaitu","suya"];
console.log(student);