import Ember from 'ember';

export default Ember.Component.extend({
	updatePostForm: false,
	actions: {
		delete(post) {
			if (confirm("Are you sure?")) {
				this.sendAction('deletePost', post);
			}
		},
		update(post, params) {
			this.sendAction('update', post, params);
		}
	},
});
