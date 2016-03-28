import Ember from 'ember';

export default Ember.Route.extend({
  model(parameters) {
    return this.store.findRecord('rental', parameters.rental_id);
  },
  actions: {

    update(rental, parameters) {
      Object.keys(parameters).forEach(function(key) {
        if(parameters[key]!==undefined) {
          rental.set(key,parameters[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
