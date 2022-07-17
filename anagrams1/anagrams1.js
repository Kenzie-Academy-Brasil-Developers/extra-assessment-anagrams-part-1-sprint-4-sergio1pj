const button = document.getElementById("findButton");
function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}
function getAnagramsOf(input) {
    const alphabeticalInput = alphabetize(input);
    const anagrams = palavras.filter(palavra => alphabetize(palavra) === alphabeticalInput);
    let anagramsList = document.createElement("ul");
    anagrams.forEach(anagram => {
        let tagLi = document.createElement("li");
        tagLi.innerText = anagram;
        anagramsList.appendChild(tagLi);
        return false;
    })
    document.body.appendChild(anagramsList)
    return anagrams;
}
button.addEventListener("click", function () {
    let typedText = document.getElementById("input").value;
    getAnagramsOf(typedText);
});