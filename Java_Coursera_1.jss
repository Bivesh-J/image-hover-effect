function upDate(previewPic) {
    console.log('Event triggered: ', previewPic); // Check if the event triggers

    // Log alt and src attributes of the image
    console.log('Alt: ', previewPic.alt);
    console.log('Source: ', previewPic.src);

    // Change the text of the div with id "image"
    document.getElementById('image').innerText = previewPic.alt;

    // Change the background image of the div with id "image"
    document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;
}
