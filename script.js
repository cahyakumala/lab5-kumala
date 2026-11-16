
/* AUDIO PLAYER */

const audio = document.getElementById("cityAudio");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const audioStatus = document.getElementById("audioStatus");

const audioProgress = document.getElementById("audioProgress");
const currentTimeDisplay = document.getElementById("currentTime");
const durationDisplay = document.getElementById("duration");


function formatTime(seconds) {
    if (!Number.isFinite(seconds)) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const secondsLeft = Math.floor(seconds % 60);

    return String(minutes).padStart(2, "0") + ":" +
        String(secondsLeft).padStart(2, "0");
}


// Update the total duration
function updateDuration() {
    if (Number.isFinite(audio.duration)) {
        audioProgress.max = audio.duration;
        durationDisplay.textContent = formatTime(audio.duration);
    }
}


// Load audio information
audio.addEventListener("loadedmetadata", updateDuration);
audio.addEventListener("durationchange", updateDuration);


// Play button
playButton.addEventListener("click", function() {
    audio.play().catch(function() {
        audioStatus.textContent = "Unable to play audio. Check the MP3 file.";
    });
});


// Pause button
pauseButton.addEventListener("click", function() {
    audio.pause();
});


// Update the time continuously as the audio plays
audio.addEventListener("timeupdate", function() {
    audioProgress.value = audio.currentTime;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
});


// Update status when audio starts
audio.addEventListener("playing", function() {
    audioStatus.textContent = "Now playing. Enjoy listening!";
});


// Update status when paused
audio.addEventListener("pause", function() {
    if (!audio.ended) {
        audioStatus.textContent = "Soundscape paused.";
    }
});


// Move audio when the progress bar is dragged
audioProgress.addEventListener("input", function() {
    audio.currentTime = Number(audioProgress.value);
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
});


// Reset when audio finishes
audio.addEventListener("ended", function() {
    audioStatus.textContent = "Sound journey completed. Thanks for listening!";
});


// Handle errors
audio.addEventListener("error", function() {
    audioStatus.textContent = "Audio file could not be loaded. Check the MP3 file.";
});

/* ==================================
   LOCATION INFORMATION
================================== */

const locationData = {

    park: {

        label: "01 / NATURE",

        title: "Stanley Park",

        description:
            "A peaceful natural space surrounded by trees, fresh air, birds, and the sound of wind.",

        sounds:
            "Birds singing · Leaves moving · Ocean breeze",

        image:
            "https://images.pexels.com/photos/34066293/pexels-photo-34066293.png"

    },


    downtown: {

        label: "02 / CITY LIFE",

        title: "Downtown Vancouver",

        description:
            "The rhythm of the city can be heard through footsteps, conversations, traffic, and the everyday movement of people.",

        sounds:
            "Traffic · Footsteps · Street conversations",

        image:
            "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000"

    },


    waterfront: {

        label: "03 / BY THE WATER",

        title: "Vancouver Waterfront",

        description:
            "A meeting point between the city and the ocean, where the sounds of waves, wind, and distant boats create a different atmosphere.",

        sounds:
            "Ocean waves · Wind · Boats passing",

        image:
            "https://images.pexels.com/photos/18784844/pexels-photo-18784844.jpeg"

    }

};



/* ==================================
   LOCATION BUTTON INTERACTIONS
================================== */

const locationButtons =
    document.querySelectorAll(".location-button");

const locationImage =
    document.getElementById("locationImage");

const locationLabel =
    document.getElementById("locationLabel");

const locationTitle =
    document.getElementById("locationTitle");

const locationDescription =
    document.getElementById("locationDescription");

const locationSounds =
    document.getElementById("locationSounds");


// Change location information when a button is clicked
locationButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedLocation =
            locationData[button.dataset.location];


        // Update image
        locationImage.src = selectedLocation.image;

        locationImage.alt = selectedLocation.title;


        // Update location text
        locationLabel.textContent =
            selectedLocation.label;

        locationTitle.textContent =
            selectedLocation.title;

        locationDescription.textContent =
            selectedLocation.description;

        locationSounds.textContent =
            selectedLocation.sounds;


        // Update active button
        locationButtons.forEach(function(item) {

            item.classList.remove("active");

        });

        button.classList.add("active");

    });

});
