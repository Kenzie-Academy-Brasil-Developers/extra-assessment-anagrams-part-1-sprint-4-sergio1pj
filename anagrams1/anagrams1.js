const button = document.getElementById("findButton");
button.addEventListener("click", function () {
    let typedText = document.getElementById("input").value;
    getAnagramsOf(typedText);
    });

function getAnagramsOf(input) {
    console.log("teste");
}