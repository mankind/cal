import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    let model = this.get('store').findAll('event');
    return model
  }
});
