import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('post');
	},
	actions: {
		deletePost(post) {
			post.destroyRecord();
			this.transitionTo('index');
		},

		savePost3(params) {
			var newPost = this.store.createRecord('post', params);
			newPost.save();
			this.transitionTo('index');
		},

		update(post, params) {
			debugger;
			post.save();
			this.transitionTo('index');
		}
	}
});
