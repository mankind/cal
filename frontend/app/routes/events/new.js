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
      record.save().then((error) => {
        this.send('refreshModel');
        this.transitionTo("events")
      }, function(error) {
        if (error.status === 422) {
          alert('if there are no empty fields, ensure your finish date is after start date');
        } else {
          alert('if there are no empty fields, ensure your finish date is after start date');   
        }

      })
    }
  }

});
