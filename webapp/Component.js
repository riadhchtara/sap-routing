sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function(UIComponent, JSONModel) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.wt.Component", {

		metadata: {
			manifest: "json"
		},
		getConfig: function() {
			return [{
				p: "detail/{invoicePath}",
				n: "detail",
				callback: this._detailMatched
			}, {
				p: "",
				n: "default",
				callback: this._defaultMatched
			}]
		},
		init: function() {

			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// create the views based on the url/hash

			this.getRouter().initialize();
			let self = this;
			var conf = this.getConfig();
			conf.forEach(function(o) {
				self.getRouter().addRoute({
					"pattern": o.p,
					"name": o.n,
					"target": "default"
				});
				self.getRouter().getRoute(o.n).attachPatternMatched(o.callback, this);

			});
			this.getRouter().parse(location.hash.substr(1));

			//this._detailMatched();

		},
		_defaultMatched: function(oEvent) {
			sap.ui.getCore().byId("nav").to("page1");
			console.log("default");
		},
		_detailMatched: function(oEvent) {
			sap.ui.getCore().byId("nav").to("page2");
			console.log("detail" + oEvent.getParameter("arguments").invoicePath);
		},
		_bypassed: function(oEvent) {
			sap.ui.getCore().byId("nav").to("by");

		}
	});

});