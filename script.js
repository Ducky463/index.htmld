console.log("JavaScript is working!");

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Redirect the user to the Rickroll link
    window.location.href = "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjWkcDanq38AhU7SGwGHShdC-AQwqsBegQICRAB&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxvFZjo5PgG0&usg=AOvVaw1bR_FN-SnfIGtKD3fjAA5P";
});
