NewsReader.Views.FeedsIndex = Backbone.CompositeView.extend({

  template: JST['feeds/index'],

  tagName: 'ul',

  className: 'list-group',

  initialize: function(options) {
    this.listenTo(this.collection, "sync", this.render);
    this.selectedFeed = NewsReader.feedsRouter.selectedFeed;
  },

  render: function() {
    debugger;
    var content = this.template({ feeds: this.collection });
    this.$el.html(content);
    var that = this;
    this.collection.each(function(feed) {
      var view = new NewsReader.Views.FeedsIndexItem({
        model: feed,
        attributes: {
          href: "/#feeds/" + feed.id
        }
      });
      that.$el.append(view.render().$el);
    });

    return this;
  },
});
