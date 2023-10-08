 console.log("hi");
function submitFun(){
  let name=document.getElementById("username").value;
  let password=document.getElementById("password").value;
let regex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


if(!regex.test(name)){
  alert("Enter valid email example: test@gmail.com");
return false;
}
let ans=true;
let count1=0;
let count2=0;
let count3=0;
for(let i=0;i<password.length;i++)
{
    if((password.charAt(i)>='a'&&password.charAt(i)<='z'))
    {
        count1++;
      
    }
    if((password.charAt(i)>='0'&&password.charAt(i)<='9'))
    {
      count++;
    }
    let ch = str.charCodeAt(i); 
    // console.log(ch); 
    if ( 
        !(ch >= 65 && ch <= 90) && // A-Z 
        !(ch >= 97 && ch <= 122) && // a-z 
        !(ch >= 48 && ch <= 57) // 0-9 
    )
    count3++;
}


if(count1<=1||count2<=1||count3<=1)
{ 
    alert("Password must contain atleast one Upper case and atleast one lower case")
    return false;
}
else{
    return true;
}


}