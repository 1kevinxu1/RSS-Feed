NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url: "/api/feeds",

  model: NewsReader.Models.Feed,

  getOrFetch: function(id){
    var allFeeds = this;
    var feed = allFeeds.get(id);
    if (feed) {
      console.log("got");
      feed.fetch();
    } else {
      console.log("fetched");
      feed = new NewsReader.Models.Feed({id: id});
      feed.fetch({
        success: function() {
          allFeeds.add(feed);
        }
      });
    }

    return feed;
  }

});
