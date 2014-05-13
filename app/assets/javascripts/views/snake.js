SimplePersonalWebsite.Views.Snakepage = Backbone.View.extend({

  template: JST["snakepage"],

  events: {
    "click .snake" : "render"
  },

  render: function() {
    var renderedContent = this.template();

    this.$el.html(renderedContent);
    return this;
  }
})