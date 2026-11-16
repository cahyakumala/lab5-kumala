
// Audio player
const audio = document.getElementById("cityAudio");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const audioStatus = document.getElementById("audioStatus");

// Play audio
playButton.addEventListener("click", function() {
    audio.play()
        .then(function() {
            audioStatus.textContent = "Now playing. Enjoy listening!";
        })
        .catch(function() {
            audioStatus.textContent = "Audio could not be played. Check the audio file.";
        });
});

// Pause audio
pauseButton.addEventListener("click", function() {
    audio.pause();
    audioStatus.textContent = "Soundscape paused.";
});

// Update status when audio ends
audio.addEventListener("ended", function() {
    audioStatus.textContent = "The sound journey has ended. Thanks for listening!";
});


// Information for each location
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
        description: "A meeting point between the city and the ocean, where the sounds of waves, wind, and distant boats create a different atmosphere.",
        sounds: "Ocean waves · Wind · Boats passing",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1000"
    }
};


// Select the location buttons
const locationButtons = document.querySelectorAll(".location-button");

// Get the location elements
const locationImage = document.getElementById("locationImage");
const locationLabel = document.getElementById("locationLabel");
const locationTitle = document.getElementById("locationTitle");
const locationDescription = document.getElementById("locationDescription");
const locationSounds = document.getElementById("locationSounds");

// Change the location when a button is clicked
locationButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedLocation = locationData[button.dataset.location];

        // Change the location information
        locationImage.src = selectedLocation.image;
        locationImage.alt = selectedLocation.title;
        locationLabel.textContent = selectedLocation.label;
        locationTitle.textContent = selectedLocation.title;
        locationDescription.textContent = selectedLocation.description;
        locationSounds.textContent = selectedLocation.sounds;

        // Change the active button
        locationButtons.forEach(function(item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

    });

});
