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
});