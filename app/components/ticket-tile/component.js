import Ember from 'ember';

export default Ember.Component.extend({
  pair: Ember.computed('pair', function() {
    return this.get('ticket.name1')+ ' ' + this.get('ticket.name2');
  }),

  actions: {
    closeTicket(ticket) {
      if (confirm('Do you really want to delete this ticket?')) {
        this.sendAction('deleteTicket', ticket);
      }
    }
  }
});
