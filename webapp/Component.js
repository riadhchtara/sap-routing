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
	
		
		
			this.getRouter().addRoute({
				"pattern": "detail/{invoicePath}",
				"name": "detail",
				"target": "default"
			});
			this.getRouter().getRoute("default").attachPatternMatched(this._defaultMatched, this);

			this.getRouter().getRoute("detail").attachPatternMatched(this._detailMatched, this);
		},
		_defaultMatched: function(oEvent) {
			console.log("default");
		},
		_detailMatched: function(oEvent) {
			console.log("detail" +  oEvent.getParameter("arguments").invoicePath);
		}
	});

});