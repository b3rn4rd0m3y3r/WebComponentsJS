(function() {
	"use strict";
	// Code will be here...
	class BadgeInput extends HTMLElement {
	constructor() {
		super();
		this._shadow = this.attachShadow({ mode: "open" });
		this._shadow.innerHTML = "<h1>Hello from the Shadows!</h1>";
		}
	}
	customElements.define("berna-input", BadgeInput);

})();