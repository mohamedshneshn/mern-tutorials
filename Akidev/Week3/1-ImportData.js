/*

Data Import & Data Export
-------------------------

ways to import data into salesforce
-----------------------------------
1-data import wizard
2-data loader
3-salesforce inspector

data import wizard
-------------------
-  allows you to import ,export, update data in salesforce not delete   
- delete operation is not available
- for simple imports can import up to 50,000 records at a time
- allows you to import accounts, contacts, leads, solutions, and custom objects



data loader
-----------
- allows you to import, export, update, and delete data in salesforce
- cleans the import file by removing duplicate records
- allows you to import up to 5,000,000 records at a time
- supports all objects in salesforce

how to import data using data import wizard
-------------------------------------------
- click on the app launcher
- enter data import wizard in the quick find box
- click on data import wizard
- click on launch wizard
- select the object you want to import( accounts, contacts, leads, solutions, custom objects)
- select the operation you want to perform (add new records, update existing records, add and update records)
-select Match lead by email 
- select the file you want to import
- map the fields
- click on next
- click on start import


how to import data using data loader
------------------------------------
- go to dataloader.io
- click on login
- enter your salesforce credentials
- click on authorize
- click on new task
- select the operation you want to perform (insert, update, upsert, delete)
- select the object you want to import
- select the file you want to import   
- map the fields
- click on next
- click on start import





- select the file you want to import
- map the fields
- click on next
- click on start import


quiz
----
Excel files should be in what format?
- CSV

What can be imported using the Data Import Wizard ?
- accounts, contacts, leads, solutions,campaings and custom objects no opportunities or cases 

Max # of records that can be uploaded using data import wizard
- 50,000

Max # of records that can be uploaded using data loader
- 5,000,000

what is the difference between data import wizard and data loader
- data import wizard allows you to import, export, update data in salesforce
- data loader allows you to import, export, update, and delete data in salesforce



how to convert 15 digit id to 18 digit id
------------------------------------------
- by using the formula below
   case safe id = CASESAFEID(15 digit id)
- 15 digit id is case sensitive
- 18 digit id is case insensitive

what is the difference between 15 digit id and 18 digit id
----------------------------------------------------------
- 15 digit id is case sensitive usED by
- 18 digit id is case insensitive used by salesforce 

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Quiz
-----

1-What is true regarding the Data Export Service? Choose 1 answer.
A. The Data Export service can be set up to run daily                                  No=weekly or monthly
B. The Data Export service will export data from all records but not attachments       No=attachments are included
C. Data will be exported in .csv format
D. A request must be sent to Salesforce to enable the Data Export service              No=it is enabled by default 

answer: c

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
A Salesforce Administrator wants to update the records that have a picklist field status of 'New' and make that
 field blank instead. How can this be achieved? Choose 1 answer.

Use the Data Import Wizard and use the setting 'Insert Blanks' for the picklist field
Export the records, change the 'New' to blank, and upload the data using Data Loader using the setting 'Insert Null Values'
Upload the Data using Data Loader and External ID's
Export the records, change the 'New' value to blank, and import the records using Data Loader

answer: b
Note: The Data Import Wizard does not have the option to insert blanks for picklist fields.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
The Salesforce administrator has scheduled a data backup using the Salesforce Data Export service because
 they would like to download backup files from Salesforce to their local machine. How long does a backup data export
  remain available before it is automatically deleted? Choose 1 answer

36 hours
24 hours
48 hours
12 hours

answer: c

After Salesforce creates your data backup, you have 48 hours to download the backup files.
 If you do not download them within this time, they will be automatically deleted.
*/
