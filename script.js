import { HASH } from "./hash.js"
document.getElementById("InputForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const inputs = new FormData(this);
    HASH(inputs.get("Input"), inputs.get("type"))
        .then(function (output) {
            document.getElementById("display").innerText = output;
        })
})