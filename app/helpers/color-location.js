import Ember from 'ember';

export function colorLocation(params/*, hash*/) {
  var location = params[0];
  console.log(location);
  var lastCharacter = location.split('')[location.split('').length-1]
  var colors = {A: 'yellow', B: 'red', C: 'orange', D: 'pink', E: 'blue'};
  return colors[lastCharacter];
}

export default Ember.Helper.helper(colorLocation);
