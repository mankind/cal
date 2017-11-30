import Component from '@ember/component';

export default Component.extend({
  newEvent: '',
  eventDescription: '',

  didInsertElement() {
    this._super(...arguments);
    this.$().attr('contenteditable', true);

    return this.$("#calendar").fullCalendar({

      events: this.convertModelToJson(),
      defaultView: 'agendaWeek',
      eventAfterRender: function (event, element, view) { 
        let today = moment().format('YYYY-MM-DD');
        let fullcalendarTodayDate = $('#calendar').fullCalendar('getDate').format('YYYY-MM-DD')
        if(today == fullcalendarTodayDate ) {
          $("th.fc-day-header.fc-today").addClass('current-day');
           $('.fc-content').css({color: 'yellow'});
         }
      }

    });


  },

 

  convertModelToJson() {
    return this.model.map(function(event) { 
      let eventJson = event.toJSON();
      return eventJson
    });
  }


});
