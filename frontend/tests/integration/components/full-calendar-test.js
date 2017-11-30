import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

let events = [
  EmberObject.create({description: 'event 1', start: '2017-11-29', finish: '2017-11-29' }),
  EmberObject.create({description: 'event 2', start: '2017-12-29', finish: '2017-13-29' }),
  EmberObject.create({description: 'event 3', start: '2017-13-29', finish: '2017-14-29'}),
]

moduleForComponent('full-calendar', 'Integration | Component | full calendar', {
  integration: true
});

test('it renders fullcalendar', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('model', events);
  this.render(hbs`{{full-calendar model=model}}`);
  assert.equal(this.$('.calendar').text(), 'calendar', 'id to hold fullcalendar is added via component');
});
