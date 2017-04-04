import Ember from 'ember';

var posts = [{
		author: "Jaden Lesuk",
		content: "Would it be easier to use Angular or Ember to build a social network",
		addition: "A.S.A.P plz"
	},
	{
		author: "Bry Onyoni",
		content: "Wouldn't static types just bring more bugs, looking at you typescript",
		addition: "Just asking"
	},
	{
		author: "Morris Mburu",
		content: "Does majestic and stupendous mean the same thing?",
		addition: "I don't have a dictionary"
	}
];

export default Ember.Route.extend({
	model() {
		return posts;
	},
});
