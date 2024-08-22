/*

SOQL Query
----------------

select id,name,rating from account limit 10 order by rating nulls first

Select: keyword used to select the fields from the object
From: keyword used to specify the object
Limit: keyword used to limit the number of records
Order by: keyword used to sort the records
Nulls first: keyword used to display the null values first
Where: keyword used to filter the records


relationshipQuery
-------------------
Account ---------- Contact

1-parent to child
-------------------
Select id,name,(select id,lastname from contacts) from account


2-child to parent
-------------------
Select id,name,account.name from contact


for the custom object
----------------------
select id,name,(select id,lastname from contacts) from account



Ex:
1-  Select name ,account.name from opportunity 


2-Select name,id from account order by name asc

3- Select lastname ,name,firstname from contact where lastname like 'a%'


4-ex:display all opportunities with their closedate in next fiscal quarter

SELECT Id,closedate,name  FROM opportunity WHERE Closedate < NEXT_QUARTER


----------------------------------------------------------------------------

SOSL
------
- used to retrieve the records from multiple objects

ex:
-----
FIND {test} 
IN ALL FIELDS RETURNING account(name),contact(lastname)


----------------------------------------------------------------------------------------------------------------------

practice:
----------
-List of contact records which are created today and whose customer name is not test

SELECT Id, FirstName, LastName, CreatedDate
FROM Contact
WHERE CreatedDate = TODAY
AND Name != 'test'
----------------------------------------------------------------------------------------------------------------------------
-List  of patient records with birthdays in next 90 days.list should be in order of the most recent birthdays

SELECT  Patient_Name__c, Birthdate__c
FROM Patient__c
WHERE Birthdate__c >= TODAY
AND Birthdate__c <= NEXT_N_DAYS:90     // NEXT_N_DAYS:90 is used to get the records in next 90 days
ORDER BY Birthdate__c DESC

----------------------------------------------------------------------------------------------------------------------------






*/
