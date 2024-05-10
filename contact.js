function validateEmail() {
    var email = document.getElementById("email").value;
    var atPosition = email.indexOf("@");
    var dotPosition = email.lastIndexOf(".");
    if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= email.length) {
        alert("Veuillez saisir une adresse e-mail valide.");
        return false;
    }
    return true;
}

document.querySelector("form").addEventListener("submit", function(event) {
    if (!validateEmail()) {
        event.preventDefault();
    } else {
        var message = document.getElementById("message").value;
        var wordCount = message.trim().split(/\s+/).length;
        var remainingWords = 1500 - wordCount;
        if (remainingWords < 0) {
            alert("Le message ne doit pas dépasser 1500 mots.");
            event.preventDefault();
        }
    }
});


document.getElementById("message").addEventListener("input", function() {
    var message = this.value;
    var wordCount = message.trim().split(/\s+/).length;
    var remainingWords = 1500 - wordCount;
    document.getElementById("wordCount").textContent = remainingWords;
});


window.addEventListener("DOMContentLoaded", function() {
    var message = document.getElementById("message").value;
    var wordCount = message.trim().split(/\s+/).length;
    var remainingWords = 1500 - wordCount;
    document.getElementById("wordCount").textContent = remainingWords;
});
