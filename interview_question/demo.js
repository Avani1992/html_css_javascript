var array1=[23,45,67,78,23,67,99,3,4]

var arra2=array1.sort(function(a,b)
{
	return (a-b)
}
)
document.write(arra2)
document.write("<br>")

var arra3=array1.reduce(function(total,a)
{
	return total+a
})

document.write(arra3)
document.write("<br>")
var arra4=array1.map(function(a)
{
	return a*5
})
document.write(arra4)
document.write("<br>")

var str="avani"
var str1=str.split("").reverse().join("")
document.write(str1)