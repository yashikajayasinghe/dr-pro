/**
 * All the tests are included in the spec file.
 * Spec file uses Jasmine synatx ('describe' for the 'test suite' and 'it' for the 'test case') https://jasmine.github.io/
 * Protractor code is placed in the 'it' function
 * ref https://www.protractortest.org/#/tutorial
 * @Author: YashJ
 */
describe('As a TM user I can got to TM main Homepage to perform a search', function(){
	
	it('go to tm home and search for a baby stroller',function(){
			
			browser.get("https://www.trademe.co.nz/a"); //Fact: Homepage is identified as an agnular page by the protractor webdriver
			var searchTextBox = element(by.id('search'));
			var searchButton = element(by.css('tm-global-search button[class="tm-global-search__search-form-submit-button o-button2--primary o-button2"]'));
			searchTextBox.sendKeys('baby stroller');

			browser.waitForAngularEnabled(false); //Hack for: the search results page is not being identified as an angular page
			searchButton.click().then(function(){	
				browser.sleep(6000);	//Hack for: Dom element is not being able to locate after ignoring async operations	
				var catSugesstionHeading = element(by.css('tm-category-suggestions h2[class="tm-category-suggestions__heading"]'));
				catSugesstionHeading.getText().then(function(text){
					expect(text).toBe("Narrow your search for 'baby stroller'");
		
				});		
			})
			
			
			
				
			
							
			});
		
	
		
	});