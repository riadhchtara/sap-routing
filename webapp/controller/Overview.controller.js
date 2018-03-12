sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("sap.ui.demo.wt.controller.Overview", {

	navtomaster: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail");

			// show message
		
		},

		onOpenDialog: function() {}
	});

});