import DS from 'ember-data';
import EmberObject, { computed } from '@ember/object';

export default DS.Model.extend({
  description: DS.attr('string'),
  start: DS.attr('moment-date'),
  finish: DS.attr('moment-date'),
  
  asJSON: computed('description', 'start', 'finish', function(){
    return {
      title: this.get('description'),
      start: this.get('start'),
      finish: this.get('finish'),
      color: this.get('color')
    };
  }),

  color:  computed('start', function(){
    let startDay = this.get('start').format('YYYY-MM-DD');
    let today = moment(new Date()).format('YYYY-MM-DD');
    if (startDay === today) {
      return 'red';
    }
  })




});
