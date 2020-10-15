var array1=["ABC","ABA","BCD"]

var mapafter=array1.map(function(value)
    {
        var str="ABA"
        if(value!=str)
        {
            return str
        }
    }
)
document.write(mapafter)
document.write("<br>")
///////////////////////////////////////////////////////////////////////////////
var reversearray=array1.map(function(value)
{
    return value.split("").reverse().join("")
})
document.write(reversearray)
document.write("<br>")
///////////////////////////////////////////////////////////////////////////////
var a1=[[12,23,34],[56,67,45],[78,67,45]]

var a2=a1.map(function(value,index)
{
    
    
})
document.write("reverse array of array:",a2)
document.write("<br>")

///////////////////////////////////////////////////////////////////////////////
var a1="Good_morning"
var a2=a1.slice(-1,-10)
document.write(a2)

var a3=a1.split("_")
document.write(typeof(a3))// object(array)
document.write(a3[0])
document.write(a3[1])
document.write(a1.split(""))
document.write(Number("John"))
//////////////////////////////////////////////////////////////////////
var n1=[4,5,2,67,34,56]
n1.sort(function(a,b)
{
    console.log(a," ",b)
    return(a-b)
})
document.write(n1)
document.write("<br>")
//////////////////////////////////////////////////////////////////////////
//window.open("https://www.google.com")
document.write(window.innerHeight)
document.write("<br>")
document.write(window.innerWidth)
window.resizeTo(450,450)

