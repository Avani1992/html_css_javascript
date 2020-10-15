//////////////////remove duplicate value
var arr=[1,23,45,23,67,45,89]

var filterarray=arr.filter(function(value,index){

    if(arr.indexOf(value)===index)
    {
        return true;
    }
    else
    {
        return false;
    }

}

)
document.write(filterarray)
document.write("<br>")

////////////////////////////////////////////////////////////////////////////////

//2. delete b,c

var b=['a','b','c','d','e']

b.splice(1,2)
document.write(b)
document.write("<br>")

//////////////////////////////////////////////////////////////////////////////////

function Vehicle(name, maker) { 
    this.name = name; 
    this.maker = maker; 
    document.write(name,maker)
    }
    
    
    let car1 = new Vehicle('Fiesta', 'Ford'); 
    let car2 = new Vehicle('Santa Fe', 'Hyundai') 
    
    console.log(car1.name); // Output: Fiesta 
    console.log(car2.name); // Output: Santa Fe 
    
//////////////////////////////////////////////////////////////////////////


var x=[100,200,300,400]
var filterafter=x.filter(function(value,index)
{
    if(value>200)
    {
        return true;
    }
    else
    {
        return false;
    }
})
console.log(filterafter)

//////////////////////////////////////////////////////////////////