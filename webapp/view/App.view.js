sap.ui.jsview("sap.ui.demo.wt.view.App", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf view.View1
	 */

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf view.View1
	 */

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

		conf.forEach(function(o) {
			self.addRoute(o);

		});

		router.parse(location.hash.substr(1));

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
	createContent: function(oController) {
	    setTimeout(function(){	this.initRouting();}.bind(this), 5000);
		return new sap.m.App({
			id: "app"
		});
	}
	/*
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

		var page1 = new sap.m.Page("page4", {
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
		
			    setTimeout(function(){	this.initRouting();}.bind(this), 5000);
		let n =  new sap.m.App({
			id: "app",
			content : nav
		});

		return n;

	}
	*/,
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

	}
});