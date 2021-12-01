(function() {
	"use strict";
	// Code will be here...
	class BadgeInput extends HTMLElement {
	constructor() {
		super();
		this._shadow = this.attachShadow({ mode: "open" });
		var nome = this.getAttribute("nome");
		this._shadow.innerHTML = "<h1>"+nome+"</h1>";
		}
	}
	customElements.define("berna-input", BadgeInput);

})();