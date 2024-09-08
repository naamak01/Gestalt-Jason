// Calling the ID of the intro image
const imageSlider = document.getElementById('intro-image-slides');
const introText = document.getElementById('intro-text'); // Get the <h2> element

// Setting an array of images to be used as a slider for the intro section
let images = [
	'/images/Happy-family.png',
	'/images/Couple-Driving.png',
	'/images/Retired-couple-riding-bikes.png',
	'/images/couple-hiking.png',
];

// let text = "RETIREMENT PLANNING THAT'S UNDERSTANDABLE !";

let imageLength = images.length;
let i = 0;

// Function targets the length of images available
// Image changes after every 9 seconds to another image
function slider() {
	if (i > images.length - 1) {
		i = 0;
	}
	imageSlider.src = images[i];
	// Reset the animation for the <h2> element
	introText.style.animation = 'none'; // Remove the animation
	void introText.offsetWidth; // Trigger reflow (force repaint)
	introText.style.animation = 'fadeIn 2s'; // Reapply the fadeIn animation

	i++;

	setTimeout('slider()', 9000);
}
