let arr = ["Javascript for kids", "Eloquent Javascript", "Javascript the good parts",
    "Programming Javascript", "Effective Javascript"];
const ol = document.createElement("ol");

for (let book of arr) {
    const li = document.createElement("li");
    li.innerText = book;
    const menu = document.querySelector("main");
    ol.append(li);
    menu.appendChild(ol);
    li.addEventListener("click", function () {
        this.classList.toggle("change");
    })
}
