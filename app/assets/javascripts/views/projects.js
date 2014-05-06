SimplePersonalWebsite.Views.Projectspage = Backbone.View.extend({

	template: JST["projects"],

	events: {
		"click .projects" : "render"
	},

	render: function() {
		var renderedContent = this.template();

		this.$el.html(renderedContent);
		return this;
	}

})