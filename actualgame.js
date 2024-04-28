document.addEventListener("DOMContentLoaded", function() {
    const character = document.getElementById("character");
    const gameContainer = document.getElementById("gameContainer");

    // Initial character position
    let x = 50;
    let y = gameContainer.clientHeight - character.clientHeight;
    
    // Movement state
    let movingUp = false;
    let movingDown = false;
    let movingLeft = false;
    let movingRight = false;

    // Update character position
    function updateCharacterPosition() {
        const speed = 5; // Movement speed
        if (movingUp) {
            y = Math.max(gameContainer.clientHeight - (gameContainer.offsetHeight - 50), y - speed);
        }
        if (movingDown) {
            y = Math.min(gameContainer.clientHeight - character.clientHeight, y + speed);
        }
        if (movingLeft) {
            x = Math.max(gameContainer.clientWidth - (gameContainer.offsetWidth - 50), x - speed);
        }
        if (movingRight) {
            x = Math.min(gameContainer.clientWidth - character.clientWidth, x + speed);
        }
        character.style.left = `${x}px`;
        character.style.top = `${y}px`;
    }

    // Keyboard controls
    document.addEventListener("keydown", function(event) {
        switch(event.key) {
            case "w": // Up
                movingUp = true;
                break;
            case "a": // Left
                movingLeft = true;
                break;
            case "s": // Down
                movingDown = true;
                break;
            case "d": // Right
                movingRight = true;
                break;
        }
    });

    // Stop character movement when key is released
    document.addEventListener("keyup", function(event) {
        switch(event.key) {
            case "w": // Up
                movingUp = false;
                break;
            case "a": // Left
                movingLeft = false;
                break;
            case "s": // Down
                movingDown = false;
                break;
            case "d": // Right
                movingRight = false;
                break;
        }
    });

    // Continuous character movement
    setInterval(updateCharacterPosition, 20); // Update every 20 milliseconds
});
