var accordions= 
document.getElementByClassName("accordion");
for (var i = 0; i < accordions.length; i++) {
	accordions[i].onclick= function () {
		this.ClassList.toggle ('is-open');
		var content= this.nextElementSibling;

		if (content.style.maxHeight) {
			//accordions is open, we need to close it
			content.style.maxHeight= null;

		}
		else {
			//accordions is closed
			content.style.maxHeight= content.scrollHeight + "px";
		}
	}
}