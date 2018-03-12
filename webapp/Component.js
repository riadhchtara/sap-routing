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

			// set data model
			var oData = {
				recipient: {
					name: "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);

			// create the views based on the url/hash
			this.getRouter().initialize();
			this.getRouter().getRoute("overview").attachPatternMatched(this._overviewMatched, this);

			this.getRouter().getRoute("detail").attachPatternMatched(this._detailMatched, this);
		},
		_overviewMatched: function(oEvent) {
			console.log("W");
		},
		_detailMatched: function(oEvent) {
			console.log("over");
		}
	});

});