SimplePersonalWebsite.Routers.StaticRouter = Backbone.Router.extend({
	initialize: function (options) {
		this.$rootEl = options.$rootEl
	},

	routes: {
		"" : "homepage",
		"bio" : "bio",
		"projects" : "projects",
		"resume" : "resume"
	},

	homepage: function () {
		var homepageView = new SimplePersonalWebsite.Views.Homepage();
		this._swapView(homepageView);
	},

	bio: function () {
		var bioView = new SimplePersonalWebsite.Views.Biopage();
		this._swapView(bioView);
	},
	
	projects: function () {
		var projectView = new SimplePersonalWebsite.Views.Projectspage();
		this._swapView(projectView);
	},

	resume: function () {
		var resumeView = new SimplePersonalWebsite.Views.Resumepage();
		this._swapView(resumeView);
	},

	_swapView: function (view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}

});
