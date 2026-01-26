async function HASH(input, type) {
    const encoder = new TextEncoder();
    const encodedText = encoder.encode(input);
    const hash = await window.crypto.subtle.digest(type, encodedText);
    const hashArray = Array.from(new Uint8Array(hash))
    const hashHex = hashArray.map((b) =>
        b.toString(16).padStart(2, "0")
    );
    const outputString = hashHex.join("")
    return outputString
}

HASH("COOLER", "SHA-256")
    .then(function (data) {
        console.log(data)
    })