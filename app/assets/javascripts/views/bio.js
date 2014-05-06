SimplePersonalWebsite.Views.Biopage = Backbone.View.extend({

	template: JST["bio"],

	event: {
		"click .bio" : "render"
	},

	render: function() {
		var renderedContent = this.template();

		this.$el.html(renderedContent);
		return this;
	}

})