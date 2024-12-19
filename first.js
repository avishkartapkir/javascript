// Age

// let age =2;
// if(age>=18){
//     console.log(age,"is Adult")
// }else{
//     console.log(age,"is not Adult ")
// }

// Grades

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


// For loop 
// for (let i=1;i<=5;i++){
//     console.log("avi");
// }

// While loop

// let i =1;
// while(i<=5){
//     console.log("i=")
//     i++;
// }

// do-while loop

// let i=1;
// do{
//     console.log("i=",i)
//     i++;
// }
// while(i<=5);

// for-of loop 

// let str="avishkar";
// let size=0;
// for(let val of str){
//     console.log("val=",val);
//     size++;
// }
// console.log("size =",size);

// for-in loop

// let student= {
//     name :"Avishkar",
//     age : 22,
//     cgpa : 7.9,
//     isPass : true
// };
 
// for (let key in student){
//     console.log("key =",key ,"value =",student[key]);
// }

// Print all even numbers from 0 to 100.


// for(let num=0;num<=100;num++){
//     if(num %2 ===0){
//         console.log("num =",num)
//     }
// }


// Game for guessing game number

// let gameNum = 25;
// let userNum=prompt("Guess the game number ")
// while(userNum != gameNum){
//     userNum=prompt("you entered wrong number. Guess again ")
// }

// console.log("Congrajulations you entered right number ")

// string indices 

// let str="Avishkar";
// console.log(str[4]);

// template literals

// let obj={
//     item : "pencil",
//     price : 34,
// };

// let output = (`the cost of ${obj.item} is ${obj.price} rupees `)
// console.log(output)

// String Methods 

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

// Practise 

// let fullname=prompt("Enter your fullname :");
// let a="@";
// let username=a.concat(fullname)+ fullname.length;
// console.log(username);

// Array 

// let marks=[87,97,55,87,45];
// console.log(marks);

// let stud_name=["Avishkar","Omkar","Chaitnya","Suyash"];
// console.log(stud_name);
 
// let heroes=["ironman","hulk","spiderman","thor"];

// for(let indx=0;indx<heroes.length;indx ++){
//     console.log(heroes[indx]);
// }

// let student=["avi","omi","chaitu","suya"];
// console.log(student);

// // practice

// let student1=[97,34,75,88,65,45];

// let sum= 0;
// for (let val of student1){
//     sum+=val;
// }
// let Average =sum/student1.length;
// console.log(`Average of student is ${Average}`);


// let items=[250,645,300,900,50]
// for(let i=0;i<items.length;i++){
//     let offer=items[i]/10;
//     items[i]-=offer;
// }
// console.log(`price after offer apply ${items}`);

// // array methods

// let fooditems=["Apple","banana","chips","tomato"];
// fooditems.push("panner");
// console.log(fooditems);
// let deleteditem=fooditems.pop();
// console.log(deleteditem);
// console.log(fooditems);

// let marvel=["ironman","thor","spiderman"];
// let dc=["batman","superman"];
// let hero=marvel.concat(dc);
// console.log(hero);

// marvel.unshift("hulk");
// console.log(marvel);
// let deletemarvel=marvel.shift();
// console.log(deletemarvel);

// // practise

// let company=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// company.shift();
// console.log("remove",company);

// company.splice(2,1,"ola");
// console.log("add ",company);

// company.push("Amazon");
// console.log(company);

//Function in JS

// function myFunction(){
//     console.log("Hello World");
// }
// myFunction()
// function sum(a,b){
//     s=a+b;
//     return s;
// }

// let val=sum(2,2);
// console.log(val);

// const arrowSum=(a,b)=>{
//     console.log(a+b);
// }

// Vowel practice 

// function countVowel(str){
//     let count=0;
//     for(const char of str){
//         if(char==="a"|| char==="e"||char==="i"||char==="o"||char==="u"){
//             count ++;
//         }
//     }
//     return count;
// }


// forEach loop in array

// let arr=[1,2,3,4,5];
// arr.forEach((valu) => {
//     console.log(valu);
// });

// // practice 

// let num1 =[1,2,3,4,5,6];

// num1.forEach((vak)=>{
//     console.log(vak*vak);
    
// })

// map method 

// let nums=[1,2,3,4,5,6,7];
// let newarr=nums.map((val)=>{
//     return val*val;
// })

// console.log(newarr);

//filter method 

// let newarray=nums.filter((val1)=>{
//     return val1%2==0;
// })
// console.log(newarray);

//Reduse method 

// let arr1=[1,2,3,4];

// const output=arr1.reduce((res,curr)=>{
//     return res * curr;
// });
// console.log(output);

//pratice

// let stud=[98,67,87,90,78,100];

// let stud1=stud.filter((mark)=>{
//     return mark >=90;
// });
// console.log(stud1);

// //practice Question 2
// let n=prompt("Enter the number :");

// let arr2=[];
// for(let i=1;i<=n;i++){
//     arr2[i-1]=i;
// }
// console.log(arr2);

// let sum1=arr2.reduce((pres,current)=>{
//     return pres+current;
// })
// console.log("sum =",sum1);

// let factorial=arr2.reduce((pres,current)=>{
//     return pres*current;
// })
// console.log("factorial =",factorial);

// // DOM document object model 

// let heading =document.getElementsByClassName("heading");
// console.log(heading);
// console.dir(heading);

// // query selector
// let elem1=document.querySelector(".heading");
// console.dir(elem1);

// let elem=document.querySelector("#header");
// console.dir(elem);

// practice

// let h2=document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText=h2.innerText + " from college ! ";

// let divs=document.querySelectorAll(".box");

// let indx=1;

// for (div of divs){
//     div.innerText = `unique value ${indx}`;
//     indx++;
// }

//Attribute 

// let h3=document.querySelector("h3");
// // console.log(h3.getAttribute("id")); 

// let di=document.querySelector(".box");
// console.log(di.setAttribute("class","squarebox"));

//Style
// let div=document.querySelector("div");

// div.style.backgroundColor="red";

// //insert Elements

// let newBtn=document.createElement("button");
// newBtn.innerText="click me ";
// console.log(newBtn);

// let div=document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before()

// let head=document.querySelector("h1");
// head.remove();


// let btn=document.createElement("button");
// btn.innerText="Click Me!";
// btn.style.backgroundColor="red";
// btn.style.color="white";
// console.log(btn);

// document.querySelector("body").prepend(btn);


//Event handling 

// let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("btn1 was clicked");
//     let a= 24;
//     a++;
//     console.log(a);
// }

// // let div1=document.querySelector(".box1");
// // div1.onmouseover=()=>{
// //     console.log("you are inside div");
// // }

// //Event Listener

// btn1.addEventListener("click",()=>{
//     console.log("button was clicked -handler 1");
// });
// btn1.addEventListener("click",()=>{
//     console.log("button was clicked -handler 2");
// });

// const handler3=()=>{
//     console.log("button was clicked -handler 3")
// }
// btn1.addEventListener("click",handler3);


// btn1.removeEventListener("click",handler3);
// //practice

// let changemode=document.querySelector("#mode");

// let  currmode= "light";

// changemode.addEventListener("click",()=>{
//     if(currmode === "light" ){
//         currmode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }
//     else{
//         currmode="light";
//         document.querySelector("body").style.backgroundColor="white";   
//      }
//      console.log(currmode);
// })

//homework 

let div2=document.querySelector("#box");
let mouseover="red";
div2.addEventListener("mouseover",() =>{
    if(mouseover === "red"){
        mouseover="orange";
        document.querySelector("#box").style.backgroundColor="orange";
    }else{
        mouseover="red";
        document.querySelector("#box").style.backgroundColor="red";
    }
    console.log(mouseover);
});
