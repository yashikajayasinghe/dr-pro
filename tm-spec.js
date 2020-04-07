/**
 * All the tests are included in the spec file.
 * Spec file uses Jasmine synatx ('describe' for the 'test suite' and 'it' for the 'test case') https://jasmine.github.io/
 * Protractor code is placed in the 'it' function
 * @Author: YashJ
 */
describe('As a TM user I can got to TM main Homepage to perform a search', function(){
	it('go to tm home and search for a baby stroller',function(){
		
		browser.get("https://www.trademe.co.nz/a");
		element(by.id('search')).sendKeys('baby stroller');
		element(by.css('tm-global-search button[class="tm-global-search__search-form-submit-button o-button2--primary o-button2"]')).click().then(function(){
			browser.sleep(5000); //for viewing purpose only
		})
		
	})
	
})