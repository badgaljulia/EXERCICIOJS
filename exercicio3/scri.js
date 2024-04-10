function inverterTexto() {
  let originalText = document.getElementById("originalTextarea").value;
  let words = originalText.split(" ");
  let invertedWords = words.map(word => word.split("").reverse().join(""));

  let invertedText = invertedWords.join(" ");
            document.getElementById("invertedTextarea").value = invertedText;
}