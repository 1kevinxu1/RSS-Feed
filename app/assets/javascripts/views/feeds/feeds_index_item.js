NewsReader.Views.FeedsIndexItem = Backbone.View.extend({

  template: JST['feeds/index_item'],

  tagName: 'a',

  events: {
    'click li': "selectFeed"
  },

  initialize: function () {
    this.listenTo(this.model, 'sync destroy', this.render);
  },

  deleteFeed: function() {
    this.model.destroy();
  },

  render: function() {
    var content = this.template({ feed: this.model });
    this.$el.html(content);
    return this;
  },

  selectFeed: function(event) {
    var $currentTarget = $(event.currentTarget);
    $currentTarget.addClass("selected");
  }
});
