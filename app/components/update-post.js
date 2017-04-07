import Ember from 'ember';

export default Ember.Component.extend({
	updatePostForm: false,
	actions: {
		cancel() {
			this.set("updatePostForm", false);
		},
		updatePostForm() {
			this.set("updatePostForm", true);
		},
		update(post) {
			var params = {
				author: this.get('author'),
				content: this.get('content'),
				addition: this.get('addition')
			};
			this.set("updatePostForm", false);
			this.sendAction('update', post, params);
		}
	}
});
