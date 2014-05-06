SimplePersonalWebsite.Views.Resumepage = Backbone.View.extend({

	template: JST["resume"],

	events: {
		"click .resume" : "render"
	},

	render: function() {
		var renderedContent = this.template();

		this.$el.html(renderedContent);
		return this;
	}

})