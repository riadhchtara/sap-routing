sap.ui.jsview("sap.ui.demo.wt.view.Default", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf view.View1
	 */
	getControllerName: function() {
		return "sap.ui.demo.wt.controller.Default";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf view.View1
	 */
	createContent: function(oController) {

		var oButton1 = new sap.m.Button(this.createId("navtomaster"), {
			text: "navtomaster",
			press: oController.navtomaster.bind(oController)
		});
		var oButton2 = new sap.m.Button(this.createId("navtodetail"), {
			text: "navtodetail 1",
			press: oController.navtodetail1.bind(oController)
		});
		var oButton3 = new sap.m.Button(this.createId("navtodetail2"), {
			text: "navtodetail 2",
			press: oController.navtodetail2.bind(oController)
		});

		return new sap.m.Page({
			content: [
				oButton1,
				oButton2, 
				oButton3
			]
		});
	},
		createContent: function(oController) {
		var oButton1 = new sap.m.Button(this.createId("navtomaster"), {
			text: "navtomaster",
			press: oController.navtomaster.bind(oController)
		});
		var oButton2 = new sap.m.Button(this.createId("navtodetail"), {
			text: "navtodetail 1",
			press: oController.navtodetail1.bind(oController)
		});
		var oButton3 = new sap.m.Button(this.createId("navtodetail2"), {
			text: "navtodetail 2",
			press: oController.navtodetail2.bind(oController)
		});
	
		var page1=	new sap.m.Page("page1", {
			content: [
				oButton1,
				oButton2, 
				oButton3
			]
		});
		
	var oButton4 = new sap.m.Button(this.createId("navtomaster4"), {
			text: "navtomaster",
			press: oController.navtomaster.bind(oController)
		});

	

	
		var page2=	new sap.m.Page("page2", {
			content: [

			oButton4
			]
		});
		var nav =new	sap.m.NavContainer("nav",{
			pages: [
				page1, page2
			]
		});



		return nav;
	}
});