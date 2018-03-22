sap.ui.jsview("sap.ui.demo.wt.view.Default", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf view.View1
	 */


	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf view.View1
	 */

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

		return nav;

	},
	_defaultMatched: function(oEvent) {
		sap.ui.getCore().byId("nav").to("page1");
		console.log("default");
	},
	_detailMatched: function(oEvent) {
		sap.ui.getCore().byId("nav").to("page2");
		console.log("detail" + oEvent.getParameter("arguments").invoicePath);
	},
	_bypassed: function(oEvent) {
		sap.ui.getCore().byId("nav").to("by");

	},

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