import Ember from 'ember';

export default Ember.Component.extend({
  pair: Ember.computed('pair', function() {
    return this.get('ticket.name1')+ ' & ' + this.get('ticket.name2');
  }),

  // created: Ember.computed('createdTime', function () {
  //   this.currentTimeMetronome();
  //   // console.log(this.get(cTime()));
  //   return cTime();
  // }),

  currentTimeMetronome: function() {
    var interval = 1000;
    Ember.run.later(this, function() {
      this.notifyPropertyChange('currentTimePulse');
      this.currentTimeMetronome();
    }, interval);
  }.on('init'),

  cTime: function () {
    var ticket = this.get('ticket');
    console.log(ticket.get('timestamp'));
    return ticket.get('timestamp');
  }.property('currentTimePulse'),

});
