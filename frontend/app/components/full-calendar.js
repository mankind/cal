import Component from '@ember/component';

export default Component.extend({
  
  didInsertElement() {
    this._super(...arguments);
    this.$().attr('contenteditable', true);

    return this.$("#calendar").fullCalendar({

      events: this.convertModelToJson(),
      defaultView: 'agendaWeek'
    });

  },

  convertModelToJson() {
    return this.model.map(function(event) {
        let eventJson = event.get('asJSON');
        return eventJson;
    });
  },

  actions: {
    addEvent: function(param) {
      this.sendAction('refreshModel', param);
    }
  }


});
