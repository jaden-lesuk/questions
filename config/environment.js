/* jshint node: true */

module.exports = function (environment) {
	var ENV = {
		modulePrefix: 'questions',
		environment: environment,
		rootURL: '/',
		locationType: 'auto',
		EmberENV: {
			FEATURES: {
				// Here you can enable experimental features on an ember canary build
				// e.g. 'with-controller': true
			},
			EXTEND_PROTOTYPES: {
				// Prevent Ember Data from overriding Date.parse.
				Date: false
			}
		},
		firebase: {
			apiKey: "AIzaSyC7msx47Xd_JVbavqh_TSOg3j1jGmbOrMI",
			authDomain: "questions-32c32.firebaseapp.com",
			databaseURL: "https://questions-32c32.firebaseio.com",
			projectId: "questions-32c32",
			storageBucket: "questions-32c32.appspot.com",
			messagingSenderId: "149568987273"
		},
		APP: {
			// Here you can pass flags/options to your application instance
			// when it is created
		}
	};

	if (environment === 'development') {
		// ENV.APP.LOG_RESOLVER = true;
		// ENV.APP.LOG_ACTIVE_GENERATION = true;
		// ENV.APP.LOG_TRANSITIONS = true;
		// ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		// ENV.APP.LOG_VIEW_LOOKUPS = true;
	}

	if (environment === 'test') {
		// Testem prefers this...
		ENV.locationType = 'none';

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = '#ember-testing';
	}

	if (environment === 'production') {

	}

	return ENV;
};
