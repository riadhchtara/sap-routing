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
			this.getRouter().attachBypassed(function(l) {
					console.log(l.mParameters.hash);
				})
				//	this.getRouter().parse("e");
			this.getRouter().addRoute({
				"pattern": "/:data*:",
				"name": "data"
			});
			
			this.getRouter().getRoute("data").attachEvent("patternMatched", function(l) {
				console.log(l.mParameters.arguments["data*"]);
			})
		},
		createContent: function(oController) {

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

			var app = new sap.m.App("app", {
				pages: [
					page1, page2
				]
			});
			return app;

		},

		navtomaster: function() {

			var oRouter = this.getRouter();

			oRouter.navTo("data", {
				"*all": "Q%2Fs",
				"data*": "1",
				id: "m"
			});

			// show message

		},

		navtodetail1: function() {
			var oRouter = this.getRouter();

			oRouter.navTo("data", {
				"data*": "8/y/a",
				id: "9"
			});

			// show message

		},
		navtodetail2: function() {
			var oRouter = this.getRouter();
			oRouter.navTo("data", {
				id: "5/5",
				"data*": "33"
			});

		}
	});
});