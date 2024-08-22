/*


what is bad data
-----------------
-bad data is data that is incorrect, incomplete, or inconsistent

solution to bad data
---------------------
- validation rules
- use picklist fields
- use lookup fields
-----------------------------------------------
how to create a validation rule
-------------------------------
- go to setup
- go the object that you want to create the validation rule on
- click on validation rules
- click on new
- enter the rule name
- enter the rule description
- enter the formula
- click on save
- click on activate

operators
---------
- AND - all conditions must be true
- OR - at least one condition must be true
- NOT - the condition must be false
- ISBLANK - the field must be blank
- ISNULL - the field must be null

AND (condition1, condition2, condition3)
OR (condition1, condition2, condition3)
NOT (condition)
ISBLANK (field)
ISNULL (field)




example of validation rule
--------------------------
- create a validation rule that requires the phone number to be in the format (123) 456-7890
- formula: NOT(REGEX(Phone, "\\(\\d{3}\\) \\d{3}-\\d{4}"))

- create a validation rule that requires the email to be in the format 
- formula: NOT(REGEX(Email, "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$"))



-------------------------------------------------------------------------------------------------------
Quiz
-----
1-The Marketing Manager has complained that Lead records in Salesforce have inconsistent formatting of phone numbers.
 What could you utilize on Lead records
 to enforce consistency with phone number entries in Leads?

- Validation Rule

-------------------------------------------------------------------------------------------------------

ABC Corporation would like to have a report on the reasons why cases are closed or rejected.
 What is the best way of handling this? Choose 1 answer.

Create a new record type and page layout for closed cases that includes the 'Case Close Reason'
Create a picklist for 'Case Close Reason' with a validation rule that enforces the selection of a 'Case Close Reason' when a case is closed or rejected
Create a workflow field update that updates the 'Case Close Reason' when the case is closed
Create a 'Case Close Reason' text field and make it available to be filled in when cases are closed or rejected

answer: Create a picklist for 'Case Close Reason' with a validation rule that
 enforces the selection of a 'Case Close Reason' when a case is closed or rejected

-------------------------------------------------------------------------------------------------------









*/
