
// Audio controls
const audio = document.getElementById("cityAudio");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const audioStatus = document.getElementById("audioStatus");

// Play soundscape
playButton.addEventListener("click", () => {
    audio.play()
        .then(() => {
            audioStatus.textContent = "Now playing...";
        })
        .catch(() => {
            audioStatus.textContent = "Please add the audio file first.";
        });
});

// Pause soundscape
pauseButton.addEventListener("click", () => {
    audio.pause();
    audioStatus.textContent = "Soundscape paused.";
});


// Location information
const locationData = {
    park: {
        label: "01 / NATURE",
        title: "Stanley Park",
        description:
            "A peaceful natural space surrounded by trees, fresh air, birds, and the sound of wind.",
        image:
            "https://images.unsplash.com/photo-1511497584788-876760111969?w=1000"
    },

    downtown: {
        label: "02 / CITY LIFE",
        title: "Downtown Vancouver",
        description:
            "The rhythm of the city: footsteps, conversations, traffic, and everyday movement.",
        image:
            "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000"
    },

    waterfront: {
        label: "03 / BY THE WATER",
        title: "Vancouver Waterfront",
        description:
            "A meeting point between the city and the ocean, filled with waves, wind, and distant boats.",
        image:
            "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1000"
    }
};


// Interactive location buttons
const locationButtons = document.querySelectorAll(".location-button");

const locationImage = document.getElementById("locationImage");
const locationLabel = document.getElementById("locationLabel");
const locationTitle = document.getElementById("locationTitle");
const locationDescription = document.getElementById("locationDescription");

locationButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedLocation = locationData[button.dataset.location];

        // Update image and text
        locationImage.src = selectedLocation.image;
        locationTitle.textContent = selectedLocation.title;
        locationLabel.textContent = selectedLocation.label;
        locationDescription.textContent = selectedLocation.description;

        // Update active button
        locationButtons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

    });

});
