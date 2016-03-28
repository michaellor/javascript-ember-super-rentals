import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental')
  },

  // USED IN APP/TEMPLATES/INDEX.HBS FILE TO DISPLAY MULIPULE MODELS ON A PAGE
  // model() {
  //   return Ember.RSVP.hash({
  //     rentals: this.store.findAll('rental'),
  //     announcements: this.store.findAll('announcement')
  //   });
  // },
  actions: {
    save3(parameters) {
      var newRental = this.store.createRecord('rental', parameters);
      newRental.save();
      this.transitionTo('index');
    },

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
