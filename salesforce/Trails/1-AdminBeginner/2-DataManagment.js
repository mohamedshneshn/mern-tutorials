/*
Data Management
----------------
1- Importing Data
------------------
- is the process of loading data into salesforce
- is the process of transferring data from an external source into salesforce

methods of importing data
--------------------------
1- data import wizard: is a web-based tool that allows you to import data into salesforce from a csv file

use cases of data import wizard
-------------------------------
-when you want to import a small amount of data
data import wizard


2- data loader: is a client application that allows you to import, export, update, and delete data in salesforce

use cases of data loader
-------------------------
-when you want to import a large amount of data
-when you want to automate the import process

-preparing data for import
--------------------------
- file should have owner id, parent id, and record type id

-importing data using data import wizard
----------------------------------------
- go to setup
- enter data import wizard in the quick find box
- click on launch wizard
- select the object you want to import data into standard or custom
- ex: choose Accounts and Contacts object to import data into
- choose what you want to do?
   . add new records
    . update existing records
    . add new and update existing records
- click on next
- select the csv file
- click on next
- map the fields means to match the fields in the csv file with the fields in salesforce
- click on next
- review the import
- click on start import


----------------------------------------------------------------------------------------------------------------

2- Exporting Data
------------------
- is the process of transferring data from salesforce to an external source

methods of exporting data
-------------------------
1- data export: is a tool that allows you to export data from salesforce
-accessible from setup
-exports data in csv format(common separated values)
-exports data manually once every 7 days or 29 days
-exports data automatically once every 7 days or 29 days


2- data loader: is a client application that allows you to import, export, update, and delete data in salesforce
-accessible from setup or through the command line





 




*/