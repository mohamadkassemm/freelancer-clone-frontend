const Name=document.getElementById("name")
const MAIL=document.getElementById("email")
const PN=document.getElementById("number")
const Comment=document.getElementById("message")
const Send= document.getElementById("send-btn")

Send.addEventListener("click", submit)

function submit(){
    if (Name.value.length<5){
        Name.style.borderBlockColor="red"
    }else{
        Name.style.borderBlockColor="#2c3e50"
    }

    // if (MAIL.value.indexOf("@")=-1){
    //     console.log("hi")
    // }

    let pn=PN.value
   if (pn.substring(0,4)=='+961'){
    if(pn.slice(4).length>8 & pn.slice(4).length<10){
        PN.value=PN.value
        PN.style.borderBlockColor="#2c3e50"
    }else{
        PN.style.borderBlockColor="red"
    }
   }else{
    PN.style.borderBlockColor="red"
   }
    
   if (Comment.value.length <100){
    Comment.style.borderBlockColor="red"
   }else{
    Comment.style.borderBlockColor="#2c3e50"
   }
}