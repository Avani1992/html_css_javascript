// var arr=['java','sql','react','nodejs','jsp','webtech'];

// // to display all array elements
// console.log("Array is: ",arr)

// //to retrieve the array elements using index value
// console.log('the element in index 3 is', arr[3]);

// //to find the length of array elements
// console.log('the array length is', arr.length);

// //to replace a new element 
// console.log('replacing element is', arr[2]= 'Mongo DB');
// console.log('after replacing the new element',arr);

// //Adding the new array element
// console.log('the new element is', arr[6]='Jquery');
// console.log('After new element', arr);
// console.log('new length of array',arr.length);

// //Array to string
// console.log('String elements are', arr.toString());

 //---------------------------------------------Loop---------------------------------------

   //for each loop 

//    var fruits = ["mango","apple","orange","peach"];
//    //   //fruits.forEach(function(value,index){})
    
//       fruits.forEach(function(fruit,index){
//        console.log(index);
//        console.log(fruit);
//       });

    
    // for of loop

  // var fruits = ["mango","apple","orange","peach"];
    // for(var test of fruits)
    // {
    //     console.log("they are",test); //it retrieves only the values
    // }

    // for in loop

    // for(var demo in fruits){
    //     console.log('the for in values are',demo);   //it stores only index
    //      console.log(fruits[demo]);  //it stores both index and values
    //    }


      // for in loop (for objects) 

    //    var person = {
    //        name:'Avani',
    //        age:18,
    //        comapany:'testyantra'
    //    }
   
    //    for(var key in person) {
    //        console.log("Key is",key);  //it retrieves the key values
          
    //        //it retrieves both the key and values
    //        console.log("person is",person[key]); 
    //    }
   
// ---------------------------------------Array methods---------------------------------------------------

// var arr=['football','singing','reading','cooking','travelling','gyming','dancing'];

// arr.push('sketing','jumping')  // helps to add elements at last index
// console.log("Array is: ",arr)

// arr.pop() // remove last ele.
// console.log("After remove: ",arr)

// arr.unshift("Photography","Baking")  // add first index
// console.log("after adding in front: ",arr)

// arr.shift()  // remove first
// console.log("After first remove: ",arr)

// var isarr=Array.isArray(arr)  // to check it is an array or not
// console.log("arr is array or not: ",isarr)

// var iselement=arr.includes('Baking',5)
// console.log("To check element is there from specific index: ",iselement)

// var index=arr.indexOf('Cooking')
// console.log("Index of Cooking is: ",index) // -1 bcz Cooking is not in array

var index=arr.indexOf('cooking')
console.log("Index of cooking is: ",index)

//to modify the array
// //index one : is to start 
// //index two : is  to delete the count 
// //index three : is to add the items for the deleted place

//  var afterSplice = arr.splice(1,2,'hello','world'); 
//     console.log(' splicied elements',afterSplice);
//     console.log('after splicing',arr);

  //  to create 
    //The slice() method returns the selected elements in an array,
    // as a new array object. The slice() method selects the elements starting
    // at the given start argument, and ends at, but does not include,
    // the given end argument. Note: The original array will not be changed.
   
    //    var afterslice = arr.slice(1,3);
    //     console.log('sliced elements',afterslice);
    //     console.log('after slicing',arr);

    //     var n = [10,20,30];
    //         console.log(n);
    //         var n1 = n.slice(0);
    //         console.log(n1);
    //        n1.splice(2,0,40);
    //        console.log(n1);
        
// --------------------------------------Filter-Map--------------------------------------

// var numbers=[100,200,300,400]

// var filterafter=numbers.filter(function(value,index)
//     {
//         if(value>200)
//         {
//             return true;
//         }
//         else
//         {
//             return false;
//         }
//     }
// );
// console.log("Before filter: ",numbers)
// console.log("After filter: ",filterafter)

// var mapafter=numbers.map(function(value,index)
//     {
//         if(value>200)
//         {
//             value=value+50;
//             return value;
//         }
//         else
//         {
//             value=value-50;
//             return value;
//         }
//     }
// );
// console.log("Before map: ",numbers)
// console.log("After map: ",mapafter)


///////////////////////////////////////////////////////////////////////////////////////////////////

