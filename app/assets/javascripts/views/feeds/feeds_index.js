NewsReader.Views.FeedsIndex = Backbone.View.extend({

  template: JST['feeds/index'],

  tagName: 'ul',

  className: 'list-group',

  // events: {
  //   "click li": "selectFeed"
  // },

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
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

  // selectFeed: function(event) {
  //   event.preventDefault();
  //   $("div#sidebar-content li").removeClass("selected");
  //   var $currentTarget = $(event.currentTarget);
  //   NewsReader.feedsRouter.feedShow($currentTarget.data("id"));
  //   $currentTarget.addClass("selected");
  //   return;
  // }

});
