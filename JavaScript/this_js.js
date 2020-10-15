// console.log("Global this:",this)

// // arrow function

// display=()=>{ console.log("Window object:",this)}
// display()

// //named function

// function show()
// {
//     console.log("window object:",this)
// }
// show()

//////////////////////////////////////////////

var person={
    
    name:"Avani",
    age:29,
    getFullname:function(){
        //this is person object as it is invoked by person
    //object reference 
        console.log("getfullname:",this)},

    getdata:function()
    {
        display1=()=>{
            //this is person object as it is invoked by person
    //object reference
            console.log("Dispaly1:",this)};

        function showdata()
        {
            //this is the window object as it is invoked by the
    //window reference
            console.log("Showdata: ",this)
        }
        display1();
        showdata();
    }
}
person.getFullname()
person.getdata()


var s="Avani";
var str=s.split("").reverse().join();
console.log(str)