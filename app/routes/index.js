import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('post');
	},
	actions: {
		deletePost(post) {
			post.destroyRecord();
			this.transitionTo('index');
		}
	}
});
