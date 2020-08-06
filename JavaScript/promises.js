var p=new Promise(function(resolve,reject)
{
    if(500>700)
    {
        resolve("Right")
    }
    else
    {
        reject("Wrong")
    }
});

p
.then(function(success)
{
    console.log(success)
})
.catch(function(error)
{
    console.log(error)
})

//////////////////////////////////////////////////////////////////////
// const myPromise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(" successfully my promise 1 executed");
//     }, 1000);
//   });
  
//   const myPromise2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(" successfully my promise 2 executed");
//     }, 1000);
//   });
  
//   Promise.race([myPromise1, myPromise2])
//     .then(function(success) {
//       console.log(success);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });

    ////////////////////////////////////////////////////////////////////////////////

    const myPromise1 = new Promise(function(resolve, reject) {
        resolve([10,20,30])
          })
          
          const myPromise2 = new Promise(function(resolve, reject) {
            resolve([10,20,40])
          });
          
          Promise.race([myPromise1, myPromise2])
            .then(function(success) {
              console.log(success);
            })
            .catch(function(error) {
              console.log(error);
            });

    var pro=  new Promise(function(resolve,reject)
    {
      //setTimeout(function(){resolve("Execute")},2000)
      setTimeout=()=>{resolve("done"),1000}
    })      
    pro.then(function(success)
    {
      document.write(success)
    })