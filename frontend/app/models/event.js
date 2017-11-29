import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  start: DS.attr('moment-date'),
  finish: DS.attr('moment-date'),
  title: DS.attr('string')
});
