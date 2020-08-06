function data(sms,email)
{
    console.log("Process start")
    sms();
    email();
}
// data(function ()
// {
//     alert("sms sent");
// }
//  ,function ()
// {
//     alert("mail sent");
// });
console.log("Process end")

/////////////////////////////////////
var x=function()
{
    alert("sms sent")
}
var y=function()
{
    alert("Mail sent")
}
data(x,y);

/////////////////////////////////////////////////
const firstName = 'Bill'
const lastName = 'Gates'
console.log('FIRSTNAME',firstName);
console.log('LASTNAME',lastName);

function display() {
    console.log('this is ',this);
    console.log('Display function')
}
 display();