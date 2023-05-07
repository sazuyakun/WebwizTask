let changebg = document.getElementById("changebg");
let color = ["#252626", "#0B0F0E", "#273734"];
changebg.addEventListener('click', function(){
    let randomcolor = color[Math.floor(Math.random()*color.length)];
    document.getElementById('mainbody').style.backgroundColor = randomcolor;
});



let changehead = document.getElementById("changehead");
function header(){
    const head = document.getElementById("mainheading");
    head.innerText = "Made by Soham Samal";
}
function headercover(){
    setTimeout(header, 5000)
}
changehead.addEventListener('click', headercover);






// getting date
let today = new Date();

let month = today.getMonth() + 1;
let year = today.getFullYear();
let date = today.getDate();
document.getElementById("date").textContent = date + "/" + month + "/" + year;



// getting time
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
document.getElementById("time").textContent = hours + ":" + minutes + ":" + seconds;
