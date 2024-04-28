document.addEventListener("DOMContentLoaded", function() {
    const titleScreen = document.getElementById("titleScreen");
    const settingsScreen = document.getElementById("settingsScreen");
    const playButton = document.getElementById("playButton");
    const websiteButton = document.getElementById("settingsButton");

    window.alert("Welcome to Season 3 of Kadenang Gold. Please go to Fullscreen before you start playing or just left-click after pressing OK ;)");

    document.addEventListener("click", function() {
        // Check if the page is not already in fullscreen mode
        if (!document.fullscreenElement) {
            // Request fullscreen mode
            document.documentElement.requestFullscreen();
        }
    });

    playButton.addEventListener("click", function() {
        // Redirect to the game page or start the game
        console.log("Starting the game...");
    });

    websiteButton.addEventListener("click", function() {
        // Show the settings screen
        titleScreen.classList.add("hidden");
        settingsScreen.classList.remove("hidden");
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            // Show the settings screen when Escape key is pressed
            titleScreen.classList.add("hidden");
            settingsScreen.classList.remove("hidden");
        }
    });

});
