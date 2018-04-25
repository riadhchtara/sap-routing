sap.ui.jsview("routerApp.view.View", {
	init: function() {
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.getRoute("data").attachMatched(function(oEvent) {
			this._selectItemWithId(oEvent.getParameter("arguments")["data*"]);
		}, this);
	},
	_selectItemWithId: function(id) {
		if (typeof id === "undefined")
			id = "";
		console.log(id)
		if (this.getContent().length == 0) {

			var oButton2 = new sap.m.Button(this.createId("navtodetail"), {
				text: "navtodetail 1",
				press: this.navtodetail1.bind(this)
			});


			var page1 = new sap.m.Page("page1", {
				content: [
			
					oButton2
		
				]
			});

			var oButton4 = new sap.m.Button(this.createId("navtomaster4"), {
				text: "navtomaster",
				press: this.navtomaster.bind(this)
			});

			var page2 = new sap.m.Page("page2", {
				content: [

					oButton4
				]
			});

			var app = new sap.m.App("app1", {
				pages: [
					page1, page2
				]
			});

			this.addContent(app);

		}
		if (id === "p2")
			sap.ui.getCore().byId("app1").to("page2");
		else
			sap.ui.getCore().byId("app1").to("page1");

	},
	createContent: function(oController) {

		return null;

	},

	navtomaster: function() {

		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

		oRouter.navTo("data", {
			"data*": "p1"

		});

		// show message

	},

	navtodetail1: function() {
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.navTo("data", {
			"data*": "p2"

		});

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

			var app = new sap.m.App("app", {
				pages: [
				
				]
			});
			return app;

		}
	});
});