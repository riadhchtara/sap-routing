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

			//	this.getRouter().parse(new sap.ui.core.routing.HashChanger().getHash());
		},
		createContent: function(oController) {
			/*
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
			*/
			var app = new sap.m.App("app", {
				pages: [
					//	page1, page2
				]
			});
			return app;

		},

		navtomaster: function() {

			var oRouter = this.getRouter();

			oRouter.navTo("sdata", {
				"*all": "Q%2Fs",
				"data*": "1",
				id: "m"
			});

			// show message

		},

		navtodetail1: function() {
			var oRouter = this.getRouter();

			oRouter.navTo("sdata", {
				"data*": "8/y/a",
				id: "9"
			});

			// show message

		},
		navtodetail2: function() {
			var oRouter = this.getRouter();
			oRouter.navTo("sdata", {
				id: "5/5",
				"data*": "33"
			});

		}
	});
});