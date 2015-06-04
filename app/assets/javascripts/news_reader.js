window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this._feeds = new NewsReader.Collections.Feeds();
    this._feeds.fetch({
      reset: true,
      success: function() {
        this.feedsRouter.feedShow(this._feeds.first());
      }.bind(this)
    });

    this.feedsRouter = new NewsReader.Routers.Feeds({ $el: $("div#main-content")});
    Backbone.history.start();

    this.feedIndexView = new NewsReader.Views.FeedsIndex({ collection: this._feeds });
    $("div#sidebar-content").html(this.feedIndexView.$el);

  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
