NewsReader.Views.FeedShow = Backbone.View.extend({

  template: JST['feeds/show'],

  tagName: 'ul',

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    var content = this.template({ entries: this.model.entries() });
    this.$el.html(content);
    return this;
  },

});
