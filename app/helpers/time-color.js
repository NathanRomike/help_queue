import Ember from 'ember';

export function timeColor(params/*, hash*/) {
  var time = params[0];
  var duration = moment(time).fromNow();
  var colors = {green: 'green', yellow: 'yellow', red: 'red'};
  // if (duration.search("hour") > 0) {
  //   return colors.red;
  // } else if (moment(duration, 'm').format('m') < 15){
  //   return colors.green;
  // }
  console.log(moment('11:58', "hh:mm").fromNow())
  console.log(moment(moment('11:58', "hh:mm").fromNow(), 'm').format('m'))
  var time = {}
  return params;
}

export default Ember.Helper.helper(timeColor);
