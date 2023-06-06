let div = document.querySelector("div");
let ball = document.querySelector("#ball");
div.addEventListener("click", function (e) {
    const rect = div.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    if (offsetX < 530 && offsetX > 0 && offsetY < 290) {
        ball.style.left = `${offsetX}px`;
        ball.style.top = `${offsetY}px`;
    }
})
