import Route from '@ember/routing/route';

export default Route.extend({

  model(){
   return this.get('store').createRecord('event');
  },

  actions: {
    cancel(record){
      record.rollbackAttributes();
      this.transitionTo('events');
    },

    addEvent(record){
      self = this;
      record.save().then(function(error) {
        self.transitionTo("index")
      }, function(error) {
        console.log("event error", error)
        self.transitionTo("index")
      })
    }
  }

});
