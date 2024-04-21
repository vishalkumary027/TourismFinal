



const nexttab= document.getElementsByClassName("not")
Array.from(nexttab).map(el=>{
     
    if (!JSON.parse(localStorage.getItem("LoggedIn"))) {
        el.addEventListener("mouseover",(e)=>{ 
            el.setAttribute("href","./HTML files/login.html")
        })
        el.addEventListener("click",(e)=>{
            el.setAttribute("href","./HTML files/login.html")
            console.log(e);
        })
    }
    
})
if (localStorage.getItem("LoggedIn")) {





    const auth = document.body.getElementsByClassName("auth")[0];
    const profile = document.body.getElementsByClassName("profile")[0];
     auth.style.visibility = "hidden"
     auth.style.width = "0px"
     auth.style.position = "absolute"

     
     
        if (location.pathname=='/index.html') {
            profile.innerHTML = ` <button class="btn"><a  href="./HTML files/profile.html">profile</a></</button>
            <button  class="btn logout">logout</button>`
        }else{
        profile.innerHTML = ` <button class="btn"><a  href="./profile.html">profile</a></</button>
<button  class="btn logout">logout</button>`
     }

     




let logout = document.getElementsByClassName("logout")[0]
logout.addEventListener("click",()=>{ 
    console.log("listened");
    localStorage.removeItem("LoggedIn")
    location.assign('./../HTML files/login.html')
})

}
