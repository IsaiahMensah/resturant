const btn = document.querySelector("#form-login");
const p = document.querySelector("p")

const display = () => {
    let html = `<div>Speed</div>`;
    p.innerHTML = html;
}

btn.addEventListener("click", display);