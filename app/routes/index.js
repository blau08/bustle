import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var stories = this.store.findAll('story')
                    .catch(e => {console.log(e.errors);});
    return stories;
  },
});
