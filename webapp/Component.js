sap.ui.jsview("routerApp.view.View", {
	init: function() {
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.getRoute("data").attachMatched(function(oEvent) {
			this.dataChanged(oEvent.getParameter("arguments")["data*"]);
		}, this);
	},
	dataChanged: function(id) {
		if (typeof id === "undefined")
			id = ""
		console.log("llll", id);
		if (this.getContent().length == 0)
		this.addContent(HealthApp.init(id));
	},
	createContent: function(oController) {
		return null;
	}
});

sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function(UIComponent, JSONModel) {
	"use strict";

	return UIComponent.extend("routerApp.Component", {

		metadata: {
			manifest: "json"
		},
		init: function() {
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
		},
		createContent: function(oController) {
			var app = new sap.m.Shell("app", {
			});
			return app;
		}
	});
});