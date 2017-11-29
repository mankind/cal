require 'test_helper'

class EventTest < ActiveSupport::TestCase
    def setup
    @event = events(:one)
  end

  test 'valid event' do
    assert @event.valid?
  end

  test 'invalid without description' do
    @event.description = nil
    refute @event.valid?
    assert_not_nil @event.errors[:description], 'no validation error for description present'
  end

  test 'invalid without start' do
   @event.start = nil
   refute @event.valid?
   assert_not_nil @event.errors[:start], 'no validation error for start present'

  end

  test 'invalid without finish' do
    @event.finish = nil
    refute @event.valid?
    assert_not_nil @event.errors[:finish], 'no validation error for finish present'
  end

  test 'finish date must be after start date' do
    @event.start = Date.parse('2017-12-29 18:29:08')
    @event.finish = Date.parse('2017-11-29 18:29:08')
    refute @event.valid?
  end

end
