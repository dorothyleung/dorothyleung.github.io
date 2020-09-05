
/**
 * @param {string} lightboxID The id of the lightbox pop-up to show
 */

function unhideLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');

	document.getElementById(lightboxID).classList.remove("hidden");
}
document.getElementById("graphics").onclick = unhideLightbox;


function unhideLightbox1() {
	unhideLightbox("love1");
}
document.getElementById("design-1").onclick = unhideLightbox1;

function unhideLightbox2() {
	unhideLightbox("love2");
}
document.getElementById("design-2").onclick = unhideLightbox2;


function unhideLightbox3() {
	unhideLightbox("love3");
}
document.getElementById("design-3").onclick = unhideLightbox3;

function unhideLightbox4() {
  unhideLightbox("love4");
}
document.getElementById("design-4").onclick = unhideLightbox4;

//  Add hidden class back when clicked outside the picture
function closeLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.add('hidden');

	document.getElementById(lightboxID).classList.add("hidden");
}


function closeAllLightboxes() {
	var lightboxElements = document.getElementsByClassName('lightbox');

	for (var i = 0; i < lightboxElements.length; i++) {
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}
document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;
