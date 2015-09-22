import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    prevStory: function(story) {
      $('#story_' + story.id).toggleClass('carousel-hidden')
    },
    nextStory: function(story) {
      $('#story_' + story.id).toggleClass('carousel-hidden')
    }
  }
});
