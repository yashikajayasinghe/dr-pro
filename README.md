# dr-pro
Doctor Pro includes the project I create(d) to learn Protractor: an end-to-end test framework for Angular and AngularJS applications. 

Content in this repo is WIP.

#### IDE: <br>
  Eclipse (Release 4.7.0 (Oxygen))<br><br>
#### Resources: <br>
  https://www.protractortest.org/ <br>
  https://jasmine.github.io/ <br>
  
  ###### Limitations at this stage:<br>
  * System under test sould be an angular website (otherwise errors will be thrown when running the tests)
  
  ###### Steps to set up 'Run Configurations' in the Eclipse IDE
  
  1. Select Run configurations -> Node.js Application -> <right click> new -> specify the following 3 settings
  - Project (browse and get the project name)
  - Main file : ``` ${workspace_loc:/doctor-pro/protractor/built/cli.js}``` (Note: this refers to the cli.js file in the protractor folder)'Protractor' folder is already included in this repo. However, if it is needed to get the local protractor folder to the project level: copy the 'protractor' folder from C:\Users\<usrname>\AppData\Roaming\npm\node_modules and paste it to the Eclipse project folder)
  - Arguments (tab) - Application Arguments : configuration (this refers to the configiration.js file in the project)  
  
  




