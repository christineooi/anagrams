


function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

document.getElementById("findButton").onclick = function() {
    var anagrams = [];
    var typedText = document.getElementById("input").value;
    // This changes all the letter to lower case.
    typedText = typedText.toLowerCase().trim();
    var typedTextAlph = alphabetize(typedText);

    //Check if span exists, if so remove to clear results
    if (document.contains(document.getElementById("anaspan"))) {
        console.log("in check for anaspan");
        document.getElementById("anaspan").remove();
    } 

    //Loop through the words dictionary to detect anagrams and store in anagram array
    for (var i = 0; i < words.length; i++){
        var wordAlph = alphabetize(words[i]);
        if (typedTextAlph === wordAlph){
            anagrams.push(words[i]);
        } else {
            continue;
        }

    }

    //Create span element and set id
    var span = document.createElement("span");
    span.setAttribute("id", "anaspan");

    //Output the anagrams
    for(word in anagrams) {
        var textContent = document.createTextNode(anagrams[word] + " ");
        span.appendChild(textContent);
        document.getElementById("results").appendChild(span);
     }
    
 }