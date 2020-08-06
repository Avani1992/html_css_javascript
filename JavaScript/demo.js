// var a;
// console.log(a);  // undefined
// a="Java";
// console.log(a); // Java
// alert(a);

// var name=prompt("Enter name");
// alert(name)

// confirm("confirm")
// document.write(name)

var age=Number(25)
console.log("Age type:"+typeof(age))

var str=String("Java")
console.log("str type:"+typeof(str))

var bool=true
console.log("bool type:"+typeof(bool))

var c=null;
console.log("c type:"+typeof(c))  // object

var un;
console.log("un type:"+typeof(un))  // only variable declare. not value assign

var typecast=String(100)  // typecast number to string
console.log("Typecast is : "+typeof(typecast))

var num=Number("100")
console.log("Typecast is:"+typeof(num))

var date=new Date();
console.log("Today's date:"+date)

var date1=new Date("2020-03-12")
console.log("Defined date:"+date1)

console.log("Today's day:"+date1.getDay())
console.log("Today's year:"+date.getFullYear())
console.log("Today's month:"+date.getMonth())
console.log("Hour:"+date.getHours())

console.log("ceil:"+Math.ceil(3.6)) // 4
console.log("floor:"+Math.floor(3.6)) // 3
console.log("random: "+Math.random()) // any number between 0-1(float)

var obj={name:"Avani",age:29,married:true} // object declaration

console.log("object: "+obj.name)
console.log("object age:"+obj.age)
console.log("object married: "+obj.married)

var arr=[1,null,true,"Java"]
console.log(`Array is ${arr}`)

// function

// anomous
// function()
// {
//     console.log("Anonomous func.")
// }

// name func.

function f1()
{
    console.log("name func.")
}
f1()  // calling part

// function expression

var f2=function()
        {
            console.log("func. expression")
        }
f2()

// immediate invoke func.

(function f3()
    {
       alert("Immediate invoke func.")
    }
());  // calling  

//setTimeout(function time(){document.write("Time out")},2000)  // work as sleep

// setInterval(() => {
//     document.write(date)
// }, 1000);


