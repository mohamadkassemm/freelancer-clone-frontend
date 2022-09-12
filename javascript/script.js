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

    if (MAIL.value.indexOf("@")=-1){
        console.log("hi")
    }
}