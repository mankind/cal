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
      finish: this.get('finish')
    };
  })
});
