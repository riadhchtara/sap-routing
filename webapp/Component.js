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
		var oButton1 = new sap.m.Button(this.createId("navtomaster"), {
			text: "navtomaster",
			press: this.navtomaster.bind(this)
		});
		var oButton2 = new sap.m.Button(this.createId("navtodetail"), {
			text: "navtodetail 1",
			press: this.navtodetail1.bind(this)
		});
		var oButton3 = new sap.m.Button(this.createId("navtodetail2"), {
			text: "navtodetail 2",
			press: this.navtodetail2.bind(this)
		});

		var page1 = new sap.m.Page("page1", {
			content: [
				oButton1,
				oButton2,
				oButton3
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

		if (this.getContent().length == 0)

			this.addContent(app);

		if (id == "p2")
			app.to(page2);
		else
			app.to(page1);
	},
	createContent: function(oController) {
		return null;
	},
	navtomaster: function() {

		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.navTo("data", {
			"*all": "Q%2Fs",
			"data*": "p1",
			id: "m"
		});

		// show message

	},

	navtodetail1: function() {
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

		oRouter.navTo("data", {
			"data*": "p2",
			id: "9"
		});

		// show message

	},
	navtodetail2: function() {
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.navTo("data", {
			id: "5/5",
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
				var app = new sap.m.App("app", {});
			return app;
		}
	});
});