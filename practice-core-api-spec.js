require('./array-compare.js');
describe('Learning protractor core API', function(){
    var calOperations = function(a,b,c){
      var input1 = element(by.model('first'));
      var input2 = element(by.model('second'));
      var goButton = element(by.id('gobutton'));

     
      input1.sendKeys(a);
      var selectOperator = element(by.model('operator'));
      selectOperator.all(by.tagName('option')).each(function(item){
          item.getAttribute('value').then(function(text){               
              if(text == c){
                  item.click();
              }
          });
      });
      input2.sendKeys(b);
      goButton.click();
    };
    
    it('test-chainlocators', function(){
        browser.get("http://juliemr.github.io/protractor-demo/");
        calOperations(3,5,'ADDITION');
        calOperations(3,3,'MULTIPLICATION');
        calOperations(17,7,'SUBTRACTION');
       
      
       var resultsTable = element.all(by.css("table[class='table'] tr[class='ng-scope']"));
       var arr = [];
        resultsTable.each(function(item){
            item.element(by.css('td:nth-child(3)')).getText().then(function(text){               
                arr.push(text);                             

            });  
           
            }).then(function(){

                expect((arr.compare([ '10', '9', '8' ]))).toBe(true);
        });


        /** 
         * var tRows =  element.all(by.css("table[class='table'] tr[class='ng-scope']"));
            var firstTrLastTd = tRows.last().all(by.css("td[class='ng-binding']")).last().getText().then(function(text){
                 expect(text).toBe('8');
            });*/
      
         
        
    });

    
});
