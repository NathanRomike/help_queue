import DS from 'ember-data';

export default DS.Model.extend({
  name1: DS.attr(),
  name2: DS.attr(),
  location: DS.attr(),
  question: DS.attr(),
  timestamp: DS.attr(),
  isSolved: DS.attr(),
});
