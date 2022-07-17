const button = document.getElementById("findButton");
const anagramsList = document.createElement("ul");
function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}
function getAnagramsOf(input) {
    const alphabeticalInput = alphabetize(input);
    const anagrams = palavras.filter(palavra => alphabetize(palavra) === alphabeticalInput);
    anagramsList.innerHTML = "";
    anagrams.forEach(anagram => {
        let tagLi = document.createElement("li");
        tagLi.innerText = anagram;
        anagramsList.appendChild(tagLi);
    })
    return anagrams;
}
button.addEventListener("click", function () {
    let typedText = document.getElementById("input").value;
    getAnagramsOf(typedText);
});
document.body.appendChild(anagramsList)