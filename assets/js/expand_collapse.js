Prism.plugins.toolbar.registerButton('Expand_Collapse', {
	text: 'Expand/Collapse', // required
	onClick: function () { // optional
		if (this.parentNode.parentNode.parentNode.childNodes[0].style.maxHeight != "none") {
			this.parentNode.parentNode.parentNode.childNodes[0].style.maxHeight = "none";
		}
		else {
			this.parentNode.parentNode.parentNode.childNodes[0].style.maxHeight = "10em";
		}
	}
});


Prism.plugins.toolbar.registerButton('Filler', {
	text: '  ', // required
});
