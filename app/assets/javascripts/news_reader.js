window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.feedsRouter = new NewsReader.Routers.Feeds({
      $main: $("div#main-content"),
      $sidebar: $("div#sidebar-content")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
