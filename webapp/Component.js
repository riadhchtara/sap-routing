sap.ui.jsview("routerApp.view.App", {

	initRouting: function() {
		let router = sap.ui.core.UIComponent.getRouterFor(this);
		router.initialize();

	},
	createContent: function(oController) {
		var r = new sap.m.App({
			id: "apppp"
		});

		this.initRouting();
		return r;
	}
});

sap.ui.jsview("routerApp.view.Default", {

	createContent: function(oController) {
		let router = sap.ui.core.UIComponent.getRouterFor(this);
		let r = HealthApp.init('this.getManifestEntry("/sap.app/id")', router);

	//	HealthApp.inited();
		return r;
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
			if (typeof stand === "undefined"){
			
					
			}
			UIComponent.prototype.init.apply(this, arguments);
		}
	});
});