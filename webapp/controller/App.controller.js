sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.wt.controller.App", {

		onOpenDialog: function () {
		
	
		},
		onShowHello: function () {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail");

			// show message
		
		}
	});

});