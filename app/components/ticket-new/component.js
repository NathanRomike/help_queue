import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveTicket() {
      var params = {
        name1: this.get('name1'),
        name2: this.get('name2'),
        location: this.get('location'),
        question: this.get('question'),
        timestamp: Date.now(),
        isSolved: false,
        rating: 0
      };
      this.set('name1', '');
      this.set('name2', '');
      this.set('location', '');
      this.set('question', '');
      this.sendAction('saveTicket', params);
    }
  }
});
