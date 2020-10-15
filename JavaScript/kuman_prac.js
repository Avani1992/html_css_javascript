// // arr = ['aAoNM','ddfrMbnN','EDssMN'] # Make every entry's characters to vice versa case (i.e. lowercae --> Upeer case and vice versa)

// arr=['aAoNM','ddfrMbnN','EDssMN']

// var arr1=arr.map(function(value)
// {
//     var str="";
    
//     for( var i=0;i<value.length;i++)
//     {
//         if(value[i]===value[i].toUpperCase())
//         {
//             str=str+value[i].toLowerCase();
//         }
//         else
//         {
//             str=str+value[i].toUpperCase() ;  
//         }
//     }
//     return str;
// })

// document.write(arr1+" ")
// document.write("</br>")

// //S="ssdjj&^cskh9sjofdsi&$#" # filter pure [a-z] and [A-Z] characters, do not use regex

// var str="ssdjj&^cskh9sjofdsi&$#"
// var filterstr=""
// for(var i=0;i<str.length;i++)
// {
//     if((str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90) || (str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122 ))
//     {
//         filterstr=filterstr+str[i]
//     }
// }
// document.write(filterstr)
// document.write("</br>")



// //From first list = arr , find out sorted non-zero elements
// //From first list = arr2 , find out sorted total 0s
// // dic= {
// // 'arr':[10,0,0,0,23,32,4,9,2],
// // 'arr2':[-10,0,10,0,-23,32,4,9,2]
// // }

// dic={
//      'arr':[10,0,0,0,23,32,4,9,2],
//      'arr2':[-10,0,10,0,-23,32,4,9,2]
// }

// var sortarr=dic.arr.sort(function(a,b)
// {
//     return a-b
// })
// document.write("Sort: ",sortarr)
// document.write("</br>")
// var filterzero=sortarr.filter(function(value)
// {
//     if(value!=0)
//     {
//         return true
//     }
// })
// document.write("Without zero sort:",filterzero)
// document.write("</br>")

// var total=0
// for(var i=0;i<dic.arr2.length;i++)
// {
//     if(dic.arr2[i]==0)
//     {
//         total=total+1
//     }
// }
// document.write("Total zero: ",total)
// document.write("</br>")

// //////////////////////////////////////////////////////////////////////////
// var T=[10,10,20,20]
// var T1=[10,20,10,10]
// var T2=[20,20,10,10,30,30]
// var T3=[20,20,20,10,10,30,30]
// // var T4=[20]
// var T5=[10,10,"10","10"]

// var t=[]
// function check(arr)
// {
//     if(arr.length==0 || arr.length==1)
//     {
//         return false
//     }
//     else
//     {
//     for(var i=0;i<arr.length;i++)
//     {
//         if(t.length==0)
//         {
//             t.push(arr[i])
//         }
//         else
//         {
//             if(t.pop()===arr[i])
//             {
//                 continue
//             }
//             else
//             {
//                 return false;
//             }
//         }

//     }
//     return true;
//     }
// }
// var ans=check(T5)
// document.write("Consecutive: ",ans)
// document.write("</br>")

//////////////////////////////////////////////////////////////////////////
// 
// var p1=[10,20,20,10]

// var v=[];
// function balancedpara(p1)
// {
// if(p1.length==0 || p1.length==1)
// {
//     return false
// }
// else
// {
//     for(var i=0;i<p1.length;i++)
//     {
//         if(v.length==0)
//         {
//             v.push(p1[i])
//             console.log("Push: ",v)
            
            
//         }
//         else
//         {
//             if(v.pop()==p1[i])
//             {
//                 console.log("pop:",v)
//                 continue
//             }
//             else
//             {
//                v.push(p1[i-1])
//                 v.push(p1[i])
//                 console.log("ppush:",v)
//             }
//         }
//     }

//     if(v.length==0)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
// }
// var result=balancedpara(p1)
// document.write("Balanced Para: ",result)

////////////////////////////////////////////////////////////////////////////////

//'''check whether given string is a balanced parenthesis:
// 1. {[()]} - balanced
// 2. ][{}(()) - balanced
// 3. {(([]))} - balanced
// 4. ()()[][ - unbalanced
// // 5. ()))( - unbalanced

var p1="()()[]["

var v="";
function balancedpara(p1)
{
if(p1.length==0 || p1.length==1)
{
    return false
}
else
{
    for(var i=0;i<p1.length;i++)
    {
        if(v.length==0)
        {
            v=v+p1[i];
            console.log("Push: ",v)
            
            
        }
        else
        {
            if(v.charCodeAt(v.length-1)+1==p1.charCodeAt(i) ||v.charCodeAt(v.length-1)+2==p1.charCodeAt(i) || v.charCodeAt(v.length-1)-1==p1.charCodeAt(i) || v.charCodeAt(v.length-1)-2==p1.charCodeAt(i) )
            {
                v=v.substring(0,v.length-1)
                
            
            }
            else
            {
               v=v+p1[i];

                console.log("ppush:",v)
            }
        }
    }

    if(v.length==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
}
var result=balancedpara(p1)
document.write("Balanced Para: ",result)

/////////////////////////////////////////////////////////////////////////

//arr= [1,2,3,3,0,4,6,0,7,0,9,0] given move all 0's at the end of the array.
// Note other element order should be preserved.
// OP= [1,2,3,3,4,6,7,9,0,0,0,0]

// var arr=[1,2,3,3,0,4,6,0,7,0,9,0]

// var arr1=[];

// for(var i=arr.length-1;i>=0;i--)
// {
//     if(arr[i]!=0)
//     {
//         arr1.unshift(arr[i])
//     }
//     else
//     {
//         arr1.push(arr[i])
//     }
// }

// console.log(arr1)

//////////////////////////////////////////////////////////////
//arr=[23,34,56,90,61,81,25,36,89,4,16]. find the square root of perfect squares. Note 0<= arr[i] <= 100

var arr=[23,34,56,90,61,81,25,36,89,4,16]

var arr1=arr.filter(function(value)
{
    if(Number.isInteger(Math.sqrt(value)))
    {
        return true;
    }
})
console.log(arr1)

/////////////////////////////////////////////////////////////////////////////
 var A1=['A','B','C','D','E']
 var A2= [1,2,3,4,5]

//Gain output = [('A','5'),('B','4'),('C','3'),('D','2'),('E','1')]

// var A3=[];
// var i=0;
// while(i<=4)
// {
//     A3.push((A1.shift()),(A2.pop()))
//     i++;
// }
// console.log(A3)
////////////////////////////////////////////

// gain o/p= ['A1B2C3D4E5','5E4D3C2B1A','15243','AEBDC']
var str="";
var str1="";
var str2="";
var str3="";
var j=0;
var k=1;
var le=A2.length;
while(j<=4)
{
    str=str+A1[j]+A2[j];
    
    str1=str1+A2[le-k]+A1[le-k];
    if(j<2)
    {
        str2=str2+A2[j]+A2[le-k]
        str3=str3+A1[j]+A1[le-k]
    }
    else if(j==2)
    {
        str2=str2+A2[j]
        str3=str3+A1[j]
    }
    j++;
    k++;
}
var A4=[str,str1,str2,str3]
console.log(A4)
























