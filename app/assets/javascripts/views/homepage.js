SimplePersonalWebsite.Views.Homepage = Backbone.View.extend({

	template: JST["homepage"],

	events: {
		"click #home" : "render"
	},

	render: function() {
		var renderedContent = this.template();

		this.$el.html(renderedContent);
		return this;
	}

})