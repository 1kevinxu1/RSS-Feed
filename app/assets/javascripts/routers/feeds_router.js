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

  feedIndex: function(callback) {
    this._feeds.fetch({
      success: function() {
        this.feedShow(this._feeds.first().id);
        callback && callback();
      }.bind(this)
    });

    this.feedIndexView = new NewsReader.Views.FeedsIndex({
      collection: this._feeds,
    });
    this._swapView(this.feedIndexView, this.sidebarView, this.$sidebar);
  },

  feedShow: function(id) {
    if (this._feeds.length === 0) {
      this.feedIndex(this.feedShow.bind(this, id));
    }
    this.selectedFeed = this._feeds.getOrFetch(id);
    this.feedShowView = new NewsReader.Views.FeedShow({ model: this.selectedFeed });
    this._swapView(this.feedShowView, this.mainView, this.$main);
    this.feedIndexView.selectFeed(id);
  },

  _swapView: function(newView, currentView, $el) {
    currentView && currentView.remove();
    currentView = newView;
    $el.html(newView.render().$el);
  },

});
