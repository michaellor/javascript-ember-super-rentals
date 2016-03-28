import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('announcement');
  },
  actions: {
    save3(parameters) {
      var newAnnouncement = this.store.createRecord('announcement', parameters);
      newAnnouncement.save();
      this.transitionTo('announcements');
    },
    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('announcements');
    }
  }
});
