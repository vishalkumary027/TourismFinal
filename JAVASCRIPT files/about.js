


const c2=document.getElementsByClassName("cont2")[0]
const c1=document.getElementsByClassName("container")[0]
 
 c2.style.visibility = "hidden" 
 let cr;


 const arr=[` <div class="row">
 <div class="col">
     <div class="content">
     <button class="cross">&larr;</button>
         <p>Vishalkumar Vyas Yadav<br>
            Mobile no.:-9573748234<br>
            Profession:-Javascript<br><br>
            Expertise:<br>
            Our team comprises seasoned travel experts who have explored every corner of the globe. With their firsthand knowledge and insights, we ensure that every trip is meticulously planned and executed to perfection.<br>
            Quality & Safety: <br>Your safety and comfort are our top priorities. We partner with reputable vendors, accommodations, and tour operators to guarantee high-quality experiences while adhering to the highest safety standards<br>
            24/7 Support:<br> From the moment you book your trip to your safe return home, our dedicated customer support team is here to assist you every step of the way. Have a question or need assistance? We're just a phone call or email away<br>

            </p>
      </div>
 </div>
</div>`,` <div class="row">
<div class="col">
    <div class="content">
    <button class="cross">&larr;</button>
    <p>Atharv Nanasaheb Gawade<br>
    Mobile no.:-7873748768<br>
    Profession:-HTML<br><br>
    Expertise:<br>
    Our team comprises seasoned travel experts who have explored every corner of the globe. With their firsthand knowledge and insights, we ensure that every trip is meticulously planned and executed to perfection.<br>
    Quality & Safety: <br>Your safety and comfort are our top priorities. We partner with reputable vendors, accommodations, and tour operators to guarantee high-quality experiences while adhering to the highest safety standards<br>
    24/7 Support:<br> From the moment you book your trip to your safe return home, our dedicated customer support team is here to assist you every step of the way. Have a question or need assistance? We're just a phone call or email away<br>

    </p>
     </div>
</div>
</div>`,` <div class="row">
<div class="col">
    
    <div class="content">
    <button class="cross">&larr;</button>
    <p>Om Naresh Chavan<br>
    Mobile no.:-9473574823<br>
    Profession:-CSS<br><br>
    Expertise:<br>
    Our team comprises seasoned travel experts who have explored every corner of the globe. With their firsthand knowledge and insights, we ensure that every trip is meticulously planned and executed to perfection.<br>
    Quality & Safety: <br>Your safety and comfort are our top priorities. We partner with reputable vendors, accommodations, and tour operators to guarantee high-quality experiences while adhering to the highest safety standards<br>
    24/7 Support:<br> From the moment you book your trip to your safe return home, our dedicated customer support team is here to assist you every step of the way. Have a question or need assistance? We're just a phone call or email away<br>

    </p>
    </div>
</div>
</div>`]
 
let orarr=c1.innerHTML 

 const btns = document.getElementsByClassName("btn1");
 console.log(btns);
 Array.from(btns).map((el,i)=>{
     el.addEventListener("click",(e)=>{
         
        // c1.style.visibility = "hidden"
            
 
         
        c1.innerHTML = arr[i]
        cr=document.getElementsByClassName("cross")[0] 
        cr?.addEventListener("click",()=>{
     
            c1.innerHTML = orarr
            location.reload();
        
            
        //  .style.visibility = "hidden"
         })
        
    })
 })
 



