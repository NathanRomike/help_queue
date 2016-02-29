import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('ticket');
  },

  currentTimeMetronome: function() {
    var interval = 1000;
    Ember.run.later(this, function() {
      this.notifyPropertyChange('currentTimePulse');
      this.currentTimeMetronome();
    }, interval);
  }.on('init'),

  createdTime: function () {
    return this.get('timestamp');
  }.property('currentTimePulse'),
});
