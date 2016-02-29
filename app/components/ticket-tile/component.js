import Ember from 'ember';

export default Ember.Component.extend({
  pair: Ember.computed('pair', function() {
    return this.get('ticket.name1')+ ' ' + this.get('ticket.name2');
  })
});
