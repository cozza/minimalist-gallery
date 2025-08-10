// Get the modal
var modal = document.getElementById("modal");

// Get and insert image into modal. Use "alt" text for captions
var images = document.getElementsByClassName("image");
var modalImg = document.getElementById("insertedimage");
var captionText = document.getElementById("caption");

// Go through all of the images with class
for (var i = 0; i < images.length; i++) {
	var img = images[i];
	img.onclick = function(evt) {
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	}
}

// Close the modal via [x]
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
	modal.style.display = "none";
}

// Click anywhere to close modal
var modal = document.getElementById('modal');
modal.addEventListener('click', function() {
	this.style.display = "none";
})

// Event handlers
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
function switchTheme(e) {
	if (e.target.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
	}
}
toggleSwitch.addEventListener('change', switchTheme, false);

// Store user colour scheme preference
function switchTheme(e) {
	if (e.target.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark'); //add this
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light'); //add this
	}
}

// Check for user colour scheme preference
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
	document.documentElement.setAttribute('data-theme', currentTheme);
	if (currentTheme === 'dark') {
		toggleSwitch.checked = true;
	}
}