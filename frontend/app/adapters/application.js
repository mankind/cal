import DS from 'ember-data';
import config from '../config/environment'

export default DS.RESTAdapter.extend({
  host: config.api_host,
  namespace: 'api/v1'
});
