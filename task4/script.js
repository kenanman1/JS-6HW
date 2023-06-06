let btn = document.querySelector("button");
let allDiv = document.querySelectorAll(".inner-div")
btn.addEventListener("click", function () {
    if (allDiv[0].style.backgroundColor === "red") {
        allDiv[1].style.backgroundColor = "yellow";
        allDiv[0].style.backgroundColor = "gray";
    }
    else if (allDiv[1].style.backgroundColor === "yellow") {
        allDiv[2].style.backgroundColor = "green";
        allDiv[1].style.backgroundColor = "gray";
    }
    else if (allDiv[2].style.backgroundColor === "green") {
        allDiv[0].style.backgroundColor = "red";
        allDiv[2].style.backgroundColor = "gray";
    }
    else
        allDiv[0].style.backgroundColor = "red";
})
