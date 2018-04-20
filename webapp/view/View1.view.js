sap.ui.jsview("routerApp.view.View1", {

	createContent: function(oController) {


		var oButton4 = new sap.m.Button(this.createId("navtomaster4"), {
			text: "navtomaster4"
		});

		var page2 = new sap.m.Page("page4", {
			content: [

				oButton4
			]
		});


		return page2;

	}
});