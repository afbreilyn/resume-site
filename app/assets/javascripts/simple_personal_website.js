window.SimplePersonalWebsite = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	new SimplePersonalWebsite.Routers.StaticRouter({
  		$rootEl: $("#content")
  	});
  	Backbone.history.start()
  }
};


$(document).ready(function(){
  SimplePersonalWebsite.initialize();
});