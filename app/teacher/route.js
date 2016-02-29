import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('ticket');
  },

  // createdTime: Ember.computed('createdTime', function () {
  //   this.currentTimeMetronome();
  //   console.log(this.get(cTime()));
  //   return this.get(cTime());
  // }),

  currentTimeMetronome: function() {
    var interval = 1000;
    Ember.run.later(this, function() {
      this.notifyPropertyChange('currentTimePulse');
      this.currentTimeMetronome();
    }, interval);
  }.on('init'),

  cTime: function () {
    console.log(this.get('ticket'));
    return this.get('timestamp');
  }.property('currentTimePulse'),
});
