
// AUDIO PLAYER

const audio = document.getElementById("cityAudio");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const audioStatus = document.getElementById("audioStatus");

// Play button
playButton.addEventListener("click", function() {

    audio.play()
        .then(function() {
            audioStatus.textContent = "Now playing. Enjoy listening!";
        })
        .catch(function() {
            audioStatus.textContent = "Audio file not found. Please check the file.";
        });

});

// Pause button
pauseButton.addEventListener("click", function() {

    audio.pause();

    if (audio.currentTime > 0 && !audio.ended) {
        audioStatus.textContent = "Soundscape paused.";
    } else {
        audioStatus.textContent = "Audio is not playing yet.";
    }

});

// Update status when audio finishes
audio.addEventListener("ended", function() {

    audioStatus.textContent = "Sound journey completed. Thanks for listening!";

});


// LOCATION INFORMATION

const locationData = {

    park: {
        label: "01 / NATURE",
        title: "Stanley Park",
        description: "A peaceful natural space surrounded by trees, fresh air, birds, and the sound of wind.",
        sounds: "Birds singing · Leaves moving · Ocean breeze",
        image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=1000"
    },

    downtown: {
        label: "02 / CITY LIFE",
        title: "Downtown Vancouver",
        description: "The rhythm of the city can be heard through footsteps, conversations, traffic, and the everyday movement of people.",
        sounds: "Traffic · Footsteps · Street conversations",
        image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000"
    },

    waterfront: {
        label: "03 / BY THE WATER",
        title: "Vancouver Waterfront",
        description: "A meeting point between the city and the ocean, where waves, wind, and distant boats create a different atmosphere.",
        sounds: "Ocean waves · Wind · Boats passing",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1000"
    }

};


// GET LOCATION ELEMENTS

const locationButtons = document.querySelectorAll(".location-button");

const locationImage = document.getElementById("locationImage");
const locationLabel = document.getElementById("locationLabel");
const locationTitle = document.getElementById("locationTitle");
const locationDescription = document.getElementById("locationDescription");
const locationSounds = document.getElementById("locationSounds");


// CHANGE LOCATION WHEN BUTTON IS CLICKED

locationButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get the selected location
        const selectedLocation = locationData[button.dataset.location];

        // Update the image and text
        locationImage.src = selectedLocation.image;
        locationImage.alt = selectedLocation.title;

        locationLabel.textContent = selectedLocation.label;
        locationTitle.textContent = selectedLocation.title;
        locationDescription.textContent = selectedLocation.description;
        locationSounds.textContent = selectedLocation.sounds;

        // Remove active class from all buttons
        locationButtons.forEach(function(item) {
            item.classList.remove("active");
        });

        // Highlight the selected button
        button.classList.add("active");

    });

});
