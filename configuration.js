/**
 * Configuration file lists:
 * seleniumAddress: The port where protractor is running in the local machine
 * scpecs: All the test files it has to execute
 * @Author: YashJ
 */
exports.config = {
		seleniumAddress:'http://localhost:4444/wd/hub',
		capabilities: {
			'browserName': 'chrome',
			'goog:chromeOptions':{w3c: false}
		},
		framework: 'jasmine',		
		//specs:['tm-spec.js']
		//specs:['practics-core-api-spec.js']
		specs:['tm-register-new-user-spec.js']
}