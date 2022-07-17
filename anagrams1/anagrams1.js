const button = document.getElementById("findButton");
function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}
function getAnagramsOf(input) {
    const alphabeticalInput = alphabetize(input);
    const anagrams = palavras.filter(palavra => alphabetize(palavra) === alphabeticalInput);
    let tagResult = document.createElement("ul");
    anagrams.forEach(element => {
        let tagLi = document.createElement("li");
        tagLi.innerText = element;
        tagResult.appendChild(tagLi);
        return false;
    })
    document.body.appendChild(tagResult)
    return anagrams;
}
button.addEventListener("click", function () {
    let typedText = document.getElementById("input").value;
    getAnagramsOf(typedText);
});