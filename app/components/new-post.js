import Ember from 'ember';

export default Ember.Component.extend({
	addNewPost: false,
	actions: {
		postFormShow() {
			this.set('addNewPost', true);
		},
		savePost1() {
			var params = {
				author: this.get('author'),
				content: this.get('content'),
				addition: this.get('addition')
			};
			this.set('addNewPost', false);
			this.sendAction('savePost2', params);
		}
	}
});
