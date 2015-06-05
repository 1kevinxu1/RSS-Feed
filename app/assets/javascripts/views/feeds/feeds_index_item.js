NewsReader.Views.FeedsIndexItem = Backbone.View.extend({

  template: JST['feeds/index_item'],

  tagName: 'a',

  initialize: function (options) {
    this.listenTo(this.model, 'sync destroy', this.render);
    this.selected = options.selected || false;
  },

  deleteFeed: function() {
    this.model.destroy();
  },

  render: function() {
    var content = this.template({ feed: this.model });
    this.$el.html(content);
    return this;
  }

});
