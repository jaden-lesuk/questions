import Ember from 'ember';

export default Ember.Route.extend({
	// updatePostForm: false,
	model(params) {
		return this.store.findRecord('post', params.post_id);
	},
	actions: {
		deletePost(post) {
			post.destroyRecord();
			this.transitionTo('index');
		},
		update(post, params) {
			Object.keys(params).forEach(function (key) {
				if (params[key] !== undefined) {
					post.set(key, params[key]);
				}
			});


			post.save();
			this.transitionTo('index');
		}
	}
});
