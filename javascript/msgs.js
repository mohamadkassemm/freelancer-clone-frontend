
const msge =document.getElementById("msge")

fetch("http://localhost/bootstrap%20clone/php%20files/contactme.php")
.then(res => res.json())
.then(data => {
    for(let i=0;i< data.length;i++ ){
    msge.innerHTML += `message ${i}:${data[i].messages} <br> `
    }
})

