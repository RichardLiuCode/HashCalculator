import { HASH } from "./hash.js"
document.getElementById("InputForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const inputs = new FormData(this);
    console.log(inputs.get("type"))
    HASH(inputs.get("Input"), inputs.get("type"))
        .then(function (output) {
            document.getElementById("display").innerText = output;
        })
})