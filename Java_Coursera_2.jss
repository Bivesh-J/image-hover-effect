function undo() {
    // Reset the background image to the original state
    document.getElementById('image').style.backgroundImage = "url('')";

    // Reset the text of the div with id "image"
    document.getElementById('image').innerText = "Hover over an image below to display here.";
}
