sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function(UIComponent, JSONModel) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.wt.Component", {

		metadata: {
			manifest: "json"
		},

		init: function() {

			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			
			// create the views based on the url/hash

			this.getRouter().initialize();

			this.getRouter().addRoute({
				"pattern": "detail/{invoicePath}",
				"name": "detail",
				"target": "default"
			});
			this.getRouter().getRoute("default").attachPatternMatched(this._defaultMatched, this);

			this.getRouter().getRoute("detail").attachPatternMatched(this._detailMatched, this);
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