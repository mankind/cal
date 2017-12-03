import Component from '@ember/component';

export default Component.extend({

  didInsertElement() {
    this._super(...arguments);
    this.$().attr('contenteditable', true);
    this.showModal();
  },

  willDestroyElement() {
    this._super(...arguments);
    
    this.$('.modal').modal('hide');
  },

  showModal(){
    this.$(".modal").modal("show")
  },

  actions: {

    save(params){
      this.sendAction('addEvent', params);
    },

    destroyModal(params) {
      this.sendAction('cancel', params);
    }

  }

});
