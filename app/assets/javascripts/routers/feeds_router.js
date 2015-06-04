NewsReader.Routers.Feeds = Backbone.Router.extend({

  routes: {
    "feeds/:id": "feedShow"
  },

  initialize: function(options) {
    this.$el = options.$el;
    // this.$sidebar = options.$sidebar;
  },

  feedShow: function(id) {
    var thisFeed = NewsReader._feeds.getOrFetch(id);
    var feedShowView = new NewsReader.Views.FeedShow({ model: thisFeed });
    this._swapView(feedShowView);
    // this.selectFeed(id);
  },

  _swapView: function(newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$el.html(newView.$el);
  },

});
