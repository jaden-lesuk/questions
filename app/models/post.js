import DS from 'ember-data';

export default DS.Model.extend({
	author: DS.attr(),
	content: DS.attr(),
	addition: DS.attr(),
	comments: DS.hasMany('comment', {
		async: true
	})
});
