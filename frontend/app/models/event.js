import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  start: DS.attr('date'),
  finish: DS.attr('date'),
  title: DS.attr('string')
});
