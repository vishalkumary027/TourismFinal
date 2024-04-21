 
const insert=document.getElementById("insert");
document.addEventListener('DOMContentLoaded',function(){
    var form=document.querySelector('form');
    console.log(form);

    var validUser=JSON.parse(localStorage.getItem("data"));
    console.log(validUser);

    form.addEventListener('submit',function(event){
        event.preventDefault();


        console.log(event);
        var usernameInput=document.body.getElementsByClassName('username')[0].value;
        var passwordInput=document.body.getElementsByClassName('password')[0].value;
         console.log(usernameInput,passwordInput);

        var username=usernameInput;
        var password=passwordInput;
        console.log("values",username,password);

        if (!usernameInput || !passwordInput) {
            insert.style.padding = '2vh'
            insert.style.marginBottom= '1vh'
            insert.style.textAlign="center"
            insert.innerText="please enter all the details "
            setTimeout(()=>{
                insert.innerText=""
                insert.style.padding = '0px'
    
            },4000)
            // alert("please enter all the details")
        }
        if (!validUser) {
                alert("No data found in the database please register new user then try to login")
                location.assign('./signup.html')

                return 
            }
            let log=false;
        validUser.map(el =>{
            if(el.email == username){
                if (el.password == password) {
                    localStorage.setItem("LoggedIn","true")
                    localStorage.setItem("loginData",`${JSON.stringify({name : el.name  ,email :el.email})}`)
                    log=true;
                    location.assign('/index.html')

                }else{

                    insert.style.padding = '2vh'
                    insert.style.marginBottom= '1vh'
                    insert.style.textAlign="center"
                    insert.innerText="enter valid email or password "
                    setTimeout(()=>{
                        insert.innerText=""
                        insert.style.padding = '0px'
            
                    },4000)
                    // console.log("came");
                    
                    // alert("enter valid email or password ")
                }
            } 
        })
        
        if (!log) {
            insert.style.padding = '2vh'
                    insert.style.marginBottom= '1vh'
                    insert.style.textAlign="center"
                    insert.innerText="enter valid email or password "
                    setTimeout(()=>{
                        insert.innerText=""
                        insert.style.padding = '0px'
            
                    },4000)
            // alert("enter valid email or password ")

            
        }
    

    });
});
