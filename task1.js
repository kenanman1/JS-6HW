let input = document.querySelector("input[type = text]");
input.addEventListener("keypress",function(e){
    if(/^\d$/.test(e.key)){
        e.preventDefault();
    }
})
