function updateTime() {
 let a = new Date();
 hrs.innerHTML= a.getHours();
 min.innerHTML=a.getMinutes();
 sec.innerHTML=a.getSeconds();
 day.innerHTML=a.getDate();
 month.innerHTML=a.getMonth(11)+1;
 year.innerHTML=a.getFullYear();
 let x= a.getDay();
 let z =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][x-1]
 din.innerHTML=z;


}

setInterval(updateTime, 1000);



btn1.onclick = ()=>{
document.querySelector("#main").classList.toggle("bkg1")

}
btn2.onclick = ()=>{
document.querySelector("#main").classList.toggle("bkg2")

}
btn3.onclick = ()=>{
document.querySelector("#main").classList.toggle("bkg3")

}
btn4.onclick = ()=>{
document.querySelector("#main").classList.toggle("bkg4")

}
btn5.onclick = ()=>{
document.querySelector("#main").classList.toggle("bkg5")

}
btn5.onclick = ()=>{
document.querySelector("#main").classList.toggle("bkg6")

}