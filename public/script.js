const videoFile = document.getElementById("video-file"),
	videoButton = document.getElementById("video-button"),
	videoIcon = document.getElementById("video-icon");

function playPause() {
	if (videoFile.paused) {
		// Play video
		videoFile.play();
		// We change the icon
		videoIcon.classList.add("bx-pause");
		videoIcon.classList.remove("bx-play");
	} else {
		// Pause video
		videoFile.pause();
		// We change the icon
		videoIcon.classList.remove("bx-pause");
		videoIcon.classList.add("bx-play");
	}
}
videoButton.addEventListener("click", playPause);

function finalVideo() {
	// Video ends, icon change
	videoIcon.classList.remove("bx-pause");
	videoIcon.classList.add("bx-play");
}
// ended, when the video ends
videoFile.addEventListener("ended", finalVideo);

function scrollTop() {
	const scrollTop = document.getElementById("scroll-top");
	// When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
	else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
	origin: "top",
	distance: "40px",
	duration: 2000,
	reset: true,
});

sr.reveal(
	`.paragraph, .video,
            #video-file1,
            .p1, .snip1390,
            .footer__content`,
	{
		interval: 200,
	}
);
