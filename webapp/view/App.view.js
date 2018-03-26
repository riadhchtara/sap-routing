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
	createContent: function(oController) {
	    setTimeout(function(){	this.initRouting();}.bind(this), 5000);
		return new sap.m.App({
			id: "app"
		});
	}
});