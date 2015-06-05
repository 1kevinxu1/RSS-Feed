NewsReader.Views.FeedsIndex = Backbone.CompositeView.extend({

  template: JST['feeds/index'],

  tagName: 'div',

  className: 'something-content',

  initialize: function() {
    this.listenTo(this.collection, "add", this.addFeedIndexItemView);
    this.collection.each(this.addFeedIndexItemView.bind(this));
  },

  render: function() {
    var content = this.template({ feeds: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addFeedIndexItemView: function (feedIndexItem) {
    var subview = new NewsReader.Views.FeedsIndexItem({
      model: feedIndexItem,
      attributes: {
        href: "/#feeds/" + feedIndexItem.id,
      }
    });
    this.addSubview('ul.list-group', subview);
  },

  selectFeed: function(id) {
    this.subviews('ul.list-group').each(function(view) {
      view.model.set({selected: false});
      if (view.model.id === parseInt(id)) {
        view.model.set({selected: true});
      }
      view.render();
    });
    this.render();

    return;
  }
});
