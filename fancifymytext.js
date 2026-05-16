function makeBigger() {
    alert("Hello, world!");
    document.getElementById("myText").style.fontSize = "24pt";
}

function changeStyle() {
    var textarea = document.getElementById("myText");
    if (document.getElementById("fancyShmancy").checked) {
        textarea.style.fontWeight = "bold";
        textarea.style.color = "blue";
        textarea.style.textDecoration = "underline";
    } else {
        textarea.style.fontWeight = "normal";
        textarea.style.color = "";
        textarea.style.textDecoration = "";
    }
}

function mooify() {
    var textarea = document.getElementById("myText");
    var text = textarea.value.toUpperCase();
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        var s = sentences[i].trimEnd();
        if (s.length > 0) {
            var words = s.split(" ");
            words[words.length - 1] = words[words.length - 1] + "-MOO";
            sentences[i] = words.join(" ");
        }
    }
    textarea.value = sentences.join(".");
}
