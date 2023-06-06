let btn = document.querySelector("#open");
let modal = document.querySelector(".modal");
btn.addEventListener("click", function () {
    modal.style.display = "block"; 
  
});

let btnClose = document.querySelector("#close");
btnClose.addEventListener("click", function(){
    modal.style.display = "none";
})
