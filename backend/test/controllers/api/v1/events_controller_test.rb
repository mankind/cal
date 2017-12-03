require 'test_helper'
require 'json'

class Api::V1::EventsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @event = events(:one)
  end

  test "should get list of events" do
    get api_v1_events_url, as: :json
    events = JSON.parse response.body
    assert_response :success
    assert_equal 'application/json', response.content_type
    assert_equal 1, events.length
  end

  test "should create event" do
    assert_difference('Event.count') do
      post api_v1_events_url, params: { 
          event: {
           description: 'Meeting', start: '2017-12-04T07:08:08',
         finish: '2017-12-04T09:08:08'  } 
      }, as: :json
    end

    assert_response 201
    data = JSON.parse(@response.body)
    assert_equal data['event']['description'], "Meeting"
  end

end
