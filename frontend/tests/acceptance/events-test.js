import { test } from 'qunit';
import moduleForAcceptance from 'frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | events');

test('visiting /events', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/events');
  });
});

test('should link to add new page', function(assert){
  visit('/');
  click('a:contains("Add Events")');
  andThen(function(){
    assert.equal(currentURL(), '/events/new', 'should navigate to new events page');
  });
});

test('should be able to fill in description', function(assert){
  visit('/');
  click('a:contains("Add Events")');
  fillIn("#description", 'event-1');
  find("#description").change();
  andThen(function(){
     assert.equal(find("#description").val(), 'event-1');

  });
});





