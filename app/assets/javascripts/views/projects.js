SimplePersonalWebsite.Views.Project = Backbone.View.extend({

	template: JST["projects"],

	events: {
		"click #projects" : "render",
		console.log("project render")
	},

	render: function() {
		var renderedContent = this.template();

		this.$el.html(renderedContent);
		return this;
	}

})