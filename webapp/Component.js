sap.ui.jsview("routerApp.view.App", {

	addRoute: function(route) {
		let router = sap.ui.core.UIComponent.getRouterFor(this);

		router.addRoute({
			"pattern": route.p,
			"name": route.n,
			"target": "default"
		});
		router.getRoute(route.n).attachPatternMatched(route.callback, this);

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
	initRouting: function() {

		let router = sap.ui.core.UIComponent.getRouterFor(this);
		let self = this;
		var conf = this.getConfig();

		/*conf.forEach(function(o) {
			self.addRoute(o);

		});*/

		router.parse(location.hash.substr(1));

	},
	_defaultMatched: function(oEvent) {

		//sap.ui.getCore().byId("nav").to("page1");
		console.log("default");
	},
	_detailMatched: function(oEvent) {
		//sap.ui.getCore().byId("nav").to("page2");
		console.log("detail" + oEvent.getParameter("arguments").invoicePath);
	},
	createContent: function(oController) {
		setTimeout(function() {
			this.initRouting();
		}.bind(this), 5000);
		return new sap.m.App({
			id: "app"
		});
	}
});
sap.ui.jsview("routerApp.view.Default", {

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

		var nav = new sap.m.NavContainer("nav", {
			pages: [
				page1, page2
			]
		});

		var oHashChanger = sap.ui.core.routing.HashChanger.getInstance();
		oHashChanger.attachEvent("hashChanged", function(oEvent) {
			if (oEvent.getParameter("newHash") === "")
				nav.to(page1)
			else if (oEvent.getParameter("newHash").indexOf("detail") > -1)
				nav.to(page2)
			console.log("hashChanged", oEvent.getParameter("newHash") + "," + oEvent.getParameter("oldHash"));
		});
		if (oHashChanger.getHash() === "")
			nav.to(page1)
		else if (oHashChanger.getHash().indexOf("detail") > -1)
			nav.to(page2)
		return nav;

	},

	navtomaster: function() {

		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		if (oRouter.getRoute("default"))
			oRouter.navTo("default");

		var oHashChanger = sap.ui.core.routing.HashChanger.getInstance();
		oHashChanger.setHash("");
		// show message

	},

	navtodetail1: function() {
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		if (oRouter.getRoute("detail"))
			oRouter.navTo("detail", {
				invoicePath: "1"
			});
		var oHashChanger = sap.ui.core.routing.HashChanger.getInstance();
		oHashChanger.setHash("detail ");
		// show message

	},
	navtodetail2: function() {
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		if (oRouter.getRoute("detail"))
			oRouter.navTo("detail", {
				invoicePath: "2"
			});
		var oHashChanger = sap.ui.core.routing.HashChanger.getInstance();
		oHashChanger.setHash("detail");
		// show message

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

			var oHashChanger = sap.ui.core.routing.HashChanger.getInstance();
			oHashChanger.attachEvent("hashChanged", function(oEvent) {

				console.log("hashChanged", oEvent.getParameter("newHash") + "," + oEvent.getParameter("oldHash"));
			});
			oHashChanger.attachEvent("hashSet", function(oEvent) {
				console.log("hashSet" + oEvent.getParameter("sHash"));
			});
			oHashChanger.attachEvent("hashReplaced", function(oEvent) {
				console.log("hashReplaced" + oEvent.getParameter("sHash"));
			});
		}
	});
});