 

 
 



 



const insert=document.getElementById("insert");
const submit=document.getElementById("submit");
const name=document.getElementById("name");
const email=document.getElementById("email");
const password=document.getElementById("password");
const cCpassword=document.getElementById("cCpassword");


console.log("cameeeeeeeee");
console.log(submit);
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    if (password.value != cCpassword.value) {
        insert.style.padding = '2vh'
        insert.style.marginBottom= '1vh'
        insert.style.textAlign="center"
        
        insert.innerText="Please check your Set Password and cnf password field "
        setTimeout(()=>{
            insert.innerText=""
            insert.style.padding = '0px'
        },4000)

        return
    }
    if (!password.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {

        insert.style.padding = '2vh'
        insert.style.marginBottom= '1vh'
        insert.style.textAlign="center"
        insert.innerText="At least one alphabetical , Minimum length of 8 characters , At least one special character ,  At least one digit. "
        setTimeout(()=>{
            insert.innerText=""
            insert.style.padding = '0px'

        },4000)

        return
    }

    if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {

        insert.style.padding = '2vh'
        insert.style.marginBottom= '1vh'
        insert.style.textAlign="center"
        insert.innerText="please enter valid email "
        setTimeout(()=>{
            insert.innerText=""
            insert.style.padding = '0px'

        },4000)

        return
    }
    
    

if (!(name.value.length >= 2)) {
    insert.innerText="name to be atleast two character"
        setTimeout(()=>{
            insert.innerText=""

        },4000)

        return
}
let data;
  if (!localStorage.getItem("data")) {
    console.log("came");
     data = [{
        id : 1,
        name : name.value,
        email : email.value,
        password : password.value,
    }]
    
}else{
  
    let dataArray = JSON.parse(localStorage.getItem("data"))
    console.log(dataArray);
    let c=dataArray[dataArray.length -1].id
    console.log(c);
    localStorage.setItem("count",JSON.stringify(c))  
    data = [{

        id : c,
        name : name.value,
        email : email.value,
        password : password.value,
    }]
    data = [...data,...dataArray]
  }

  localStorage.setItem("data",JSON.stringify(data)) 
  const box=document.getElementById("auth") 
  localStorage.setItem("LoggedIn","true") 
  localStorage.setItem("loginData",`${JSON.stringify({name : name.value  ,email :email.value})}`)
     
   location.assign('/index.html')






   })















