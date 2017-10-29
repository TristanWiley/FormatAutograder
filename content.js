var codeBlock = document.getElementById("code-block")
if (codeBlock) {
    var json = codeBlock.textContent;
    document.getElementsByTagName("pre")[0].innerHTML = JSON.stringify(JSON.parse(json), undefined, 2);
}