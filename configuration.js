/**
 * Configuration file lists:
 * seleniumAddress: The port where protractor is running in the local machine
 * scpecs: All the test files it has to execute
 * @Author: YashJ
 */
exports.config = {
		seleniumAddress:'http://localhost:4444/wd/hub',
		specs:['tm-spec.js']
}