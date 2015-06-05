NewsReader.Views.FeedsIndexItem = Backbone.View.extend({

  template: JST['feeds/index_item'],

  tagName: 'a',

  events: {

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
});
