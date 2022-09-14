const Name=document.getElementById("name")
const email=document.getElementById("email")
const phonenumber=document.getElementById("number")
const message=document.getElementById("message")
const Send= document.getElementById("send-btn")

Send.addEventListener("click", submit)

function submit(){
    if (Name.value.length<5){
        Name.style.borderBlockColor="red"
    }else{
        Name.style.borderBlockColor="#2c3e50"
    }

    // if (email.value.indexOf("@")=-1){
    //     console.log("hi")
    // }

    let pn=phonenumber.value
   if (pn.substring(0,4)=='+961'){
    if(pn.slice(4).length>8 & pn.slice(4).length<10){
        phonenumber.value=phonenumber.value
        phonenumber.style.borderBlockColor="#2c3e50"
    }else{
        phonenumber.style.borderBlockColor="red"
    }
   }else{
    phonenumber.style.borderBlockColor="red"
   }
    
   if (message.value.length <100){
    message.style.borderBlockColor="red"
   }else{
    message.style.borderBlockColor="#2c3e50"
   }

//    if(message.style.borderBlockColor=="#2c3e50" & Name.style.borderBlockColor=="#2c3e50" & phonenumber.style.borderBlockColor=="#2c3e50"){
        let information={
        method: 'POST',
        body: new URLSearchParams({
            fullname:Name.value,
            email:email.value,
            phonenumber:phonenumber.value,
            messages:message.value,
        })
        }
        fetch("http://localhost/bootstrap%20clone/php%20files/add-msge.php",information)
        .then(Response => Response.json())
        .then(data => console.log(data))
    
   
}