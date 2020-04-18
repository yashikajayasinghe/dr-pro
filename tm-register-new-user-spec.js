/**
 * All the tests are included in the spec file.
 * Spec file uses Jasmine synatx ('describe' for the 'test suite' and 'it' for the 'test case') https://jasmine.github.io/
 * Protractor code is placed in the 'it' function
 * ref https://www.protractortest.org/#/tutorial
 * @Author: YashJ
 * regirster a new user at https://www.trademe.co.nz/a/
 */

 describe('As a TM user I can create my own user account', function(){
     it('go to TM homepage and create a user account successfully', function(){
        browser.get('https://www.trademe.co.nz/a');
        var registerLink = element(by.css("tm-shell-log-in-out a[href*='register']"));
        
        
        //TODO:  generate as a unique username and email to use in an automation suite 
        var randomUsername = 'ry7rttser12jj'; 
        var randomEmail = 'ry77887Usrerer12jj@gmail.com';

        var elementsOfForm2 = function(){
            var firstName = element(by.css('form tg-input-container input[name="firstName"]'));
            var lastName = element(by.css('form tg-input-container input[name="lastName"]'));
            var dob_day = element(by.css('form tm-date-of-birth input[name="day"]'));
            var dob_month = element(by.css('form tm-date-of-birth select[name="month"]'));
            var dob_year = element(by.css('form tm-date-of-birth input[name="year"]'));
            var phoneNumber_serviceProvider = element(by.css('form tm-phone-numbers select[name="primaryPhonePrefix"]'));
            var phoneNumber_digits = element(by.css('form tm-phone-numbers input[name="primaryPhoneNumber"]'));
            var gender = element(by.css('tg-radio-group[name="gender"]')).all(by.tagName('tg-radio-item'));
            var address = element(by.css('form tm-add-new-address tg-input-container input[name="fullAddress"]'));
            var address_searchDropDown = $$('form tm-add-new-address tg-dropdown tg-dropdown-content ul li').first();
            var closestTown = $('form tm-closest-town select[name="closestTown"]')
            var over18CheckBox =element(by.css('form tg-checkbox'));
            var buttonCreateAccount = element(by.css('button[type="submit"]'));
            var EC = protractor.ExpectedConditions;
            var selectedAddress = '';
            var urlChangedToSuccess = function() {
                return browser.getCurrentUrl().then(function(url) {
                return url === 'https://www.trademe.co.nz/a/register/success';
                });
            };

                firstName.sendKeys('eufhdfh');
                lastName.sendKeys('hfgsdfhjsdf');
                dob_day.sendKeys('19');
                dob_month.$('[value="8: 9"]').click();
                dob_year.sendKeys('1993');
                phoneNumber_serviceProvider.$('[value="7: 022"]').click();;
                phoneNumber_digits.sendKeys('3145654');
                gender.get(0).click();
                address.sendKeys('17 Car').then(function(){
                   
                    browser.wait(EC.visibilityOf(address_searchDropDown), 5000);
                    address_searchDropDown.$('tg-rack-item-primary div').getText().then(function(text){
                        selectedAddress = text;
                        
                    });
                   
                    address_searchDropDown.click();
                });
                address.sendKeys(selectedAddress);                
                browser.wait(EC.invisibilityOf(address_searchDropDown), 5000);
                closestTown.$('[value="86"]').click(); // Canterbury - Christchurch City 
        
                over18CheckBox.click();
                buttonCreateAccount.click().then(function(){
                    browser.wait(urlChangedToSuccess, 5000);                    
                    var ExpectedSuccessMsg = 'Hey eufhdfh, welcome to Trade Me!';
                    expect($('tm-register-success h1').getText()).toBe(ExpectedSuccessMsg);
                });
               
        }

        var urlChanged = function() {
            return browser.getCurrentUrl().then(function(url) {
            return url === 'https://www.trademe.co.nz/a/register/personal/details';
            });
        };

        var elementsOfForm1 = function(){
            var email = element(by.css('form tm-email input'));
            var password = element(by.css('form tm-password-confirm input[name="password"]'));
            var confPassword = element(by.css('form tm-password-confirm input[name="confirmPassword"]'));
            var username = element(by.css('form tm-user-name input[name="userName"]'));
            var country = element(by.css('tg-radio-group')).all(by.tagName('tg-radio-item')); 
            var buttonNextStep = element(by.css('button[type="submit"]'));
            var form1 = element(by.tagName('form'));
            
            var EC = protractor.ExpectedConditions;

            email.sendKeys(randomEmail);
            password.sendKeys('abc123!@#');
            confPassword.sendKeys('abc123!@#');
            username.sendKeys(randomUsername);
            country.get(0).click();          
            browser.sleep(5000);
            browser.wait(EC.elementToBeClickable(buttonNextStep),5000);    
            buttonNextStep.click().then(function(){  
                form1.submit();
                browser.wait(urlChanged, 6000);                          
                elementsOfForm2();
           });
        }
        
        
        registerLink.click().then(function(){
            browser.waitForAngularEnabled(false);
            browser.sleep(5000);
            element.all(by.css('section tg-row')).then(function(items){
               items[4].element(by.css("tg-col a[href*='register/personal']")).click().then(function(){
                
                browser.sleep(5000);
                    elementsOfForm1();
               });

            });
        });

     });
 });