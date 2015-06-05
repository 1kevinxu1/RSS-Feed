NewsReader.Routers.Feeds = Backbone.Router.extend({

  routes: {
    "": "feedIndex",
    "feeds/:id": "feedShow"
  },

  initialize: function(options) {
    this._feeds = new NewsReader.Collections.Feeds();
    this.$main = options.$main;
    this.$sidebar = options.$sidebar;
  },

  feedIndex: function() {
    debugger;
    this._feeds.fetch({
      reset: true,
      success: function() {
        this.feedShow(this._feeds.first());
      }.bind(this)
    });
    this.feedIndexView = new NewsReader.Views.FeedsIndex({ collection: this._feeds });
    this._swapView(this.feedIndexView, this.sidebarView, this.$sidebar);
  },

  feedShow: function(id) {
    var thisFeed = this._feeds.getOrFetch(id);
    var feedShowView = new NewsReader.Views.FeedShow({ model: thisFeed });
    this._swapView(feedShowView, this.mainView, this.$main);
    // this.selectFeed(id);
  },

  _swapView: function(newView, currentView, $el) {
    currentView && currentView.remove();
    currentView = newView;
    $el.html(newView.render().$el);
  },

});
