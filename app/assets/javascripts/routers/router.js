SimplePersonalWebsite.Routers.StaticRouter = Backbone.Router.extend({
	initialize: function (options) {
		this.$rootEl = options.$rootEl
	},

	routes: {
		"" : "homepage",
		"bio" : "bio",
		"projects" : "projects"
	},

	homepage: function () {
		var homepageView = new SimplePersonalWebsite.Views.Homepage();
		this._swapView(homepageView);
	},

	bio: function () {
		var bioView = new SimplePersonalWebsite.Views.Biopage();
		this._swapView(bioView);
	},
	

	_swapView: function (view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}

});
