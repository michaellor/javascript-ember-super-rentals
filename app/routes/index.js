import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  },

  actions: {
    save3(parameters) {
      var newRental = this.store.createRecord('rental', parameters);
      newRental.save();
      this.transitionTo('index');
    },
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
