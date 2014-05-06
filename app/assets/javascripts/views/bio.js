SimplePersonalWebsite.Views.Biopage = Backbone.View.extend({

	template: JST["bio"],

	event: {
		"click #bio" : "render",
		console.log("bioness")
	},

	render: function() {
		var renderedContent = this.template();

		this.$el.html(renderedContent);
		return this;
	}

})