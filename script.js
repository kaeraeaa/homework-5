// script.js
document.addEventListener("DOMContentLoaded", () => {
    const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "m"];
    let currentKeyIndex = 0;

    const keyElement = document.getElementById("key");
    const messageElement = document.getElementById("message");
    const newGameButton = document.getElementById("new-game-btn");

    const setKey = () => {
        currentKeyIndex = Math.floor(Math.random() * keys.length);
        keyElement.textContent = keys[currentKeyIndex];
    };

    const showSuccessMessage = () => {
        PNotify.success({
            text: "Правильна клавіша!",
            delay: 2000,
        });
    };

    const showErrorMessage = () => {
        PNotify.error({
            text: "Неправильна клавіша, спробуйте ще раз!",
            delay: 2000,
        });
    };

    const checkKey = (event) => {
        if (event.key === keys[currentKeyIndex]) {
            showSuccessMessage();
            setKey();
        } else {
            showErrorMessage();
        }
    };

    const preventDefaultAction = (event) => {
        event.preventDefault();
    };

    const startNewGame = () => {
        setKey();
        messageElement.textContent = "";
        PNotify.info({
            text: "Нова гра розпочата!",
            delay: 2000,
        });
    };

    document.addEventListener("keydown", checkKey);
    document.addEventListener("keypress", preventDefaultAction);
    newGameButton.addEventListener("click", startNewGame);

    startNewGame();
});



