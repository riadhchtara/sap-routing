sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("sap.ui.demo.wt.controller.Default", {

		navtomaster: function() {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			if (oRouter.getRoute("default"))
				oRouter.navTo("default");

			// show message

		},

		navtodetail1: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			if (oRouter.getRoute("detail"))
				oRouter.navTo("detail", {
					invoicePath: "1"
				});

			// show message

		},
		navtodetail2: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			if (oRouter.getRoute("detail"))
				oRouter.navTo("detail", {
					invoicePath: "2"
				});
			// show message

		},
	});

});