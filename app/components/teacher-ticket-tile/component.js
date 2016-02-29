import Ember from 'ember';

export default Ember.Component.extend({
  pair: Ember.computed('pair', function() {
    return this.get('ticket.name1')+ ' & ' + this.get('ticket.name2');
  }),

  currentTimeMetronome: function() {
    var interval = 1000;
    Ember.run.later(this, function() {
      this.notifyPropertyChange('currentTimePulse');
      this.currentTimeMetronome();
    }, interval);
  }.on('init'),

  cTime: function () {
    var ticket = this.get('ticket');
    return ticket.get('timestamp');
  }.property('currentTimePulse'),

  actions: {
    closeTicket(ticket) {
      if(confirm("Are you sure?")) {
        ticket.set('isSolved', true);
        ticket.save();
      }
    }
  }
});
