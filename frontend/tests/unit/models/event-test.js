
import { moduleForModel, test } from 'ember-qunit';
import Ember from'ember'

moduleForModel('event', 'Unit | Model | event', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test("model is invalid without description", function(assert){
  let model = this.subject();

  //assert.notOk(model.get('description'), 'event1');
  assert.equal(model.get('description'), undefined);
});

test("description is valid", function(assert){
  let model = this.subject();
  
  Ember.run(function(){
    model.set('description', 'event1');
  });

  assert.equal(model.get('description'), 'event1');
});

test("model is invalid without start", function(assert){
  let model = this.subject();
  assert.equal(model.get('start'), undefined);
});


test("start should be valid", function(assert){
  let model = this.subject();
  let date = '2017-11-29'

  Ember.run(function(){
    model.set('start', date);
  });

  assert.equal(model.get('start'), date);
});

test("finish should be is valid", function(assert){
  let model = this.subject();
  let date = '2017-11-30'

  Ember.run(function(){
    model.set('finish', date);
  });

  assert.equal(model.get('finish'), date);
});



