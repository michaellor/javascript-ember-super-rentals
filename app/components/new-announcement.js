import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    showNewAnnouncementForm() {
      this.set('addNewAnnouncement', true);
    },
    save1() {
      var parameters = {
        title: this.get('title'),
        description: this.get('description'),
      };
      this.set('addNewAnnouncement', false),
      this.sendAction('save2', parameters);
    }
  }
});
