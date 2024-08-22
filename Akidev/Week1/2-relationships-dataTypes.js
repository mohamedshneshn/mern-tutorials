/*
salesforce objects:
-------------------
-standard objects: are objects that are included with salesforce
-custom objects: are objects that you create in salesforce

standard fields:
----------------
-standard fields are fields that are included with salesforce
-custom fields: are fields that you create in salesforce


relationships
-------------
- relationships are connections between objects 
- used to retrieve data from multiple objects
types of relationships:
------------------------
1-master-detail relationship
- called parent-child relationship
- the child record is dependent on the parent record
- when the parent record is deleted, the child record is also deleted
- roll up summary fields are available on The parent object to calculate values from child records
- only available on custom objects
- create on the child object and you have to select the parent object
- roll up summary fields are available on the parent object to calculate values from child records

example:
- projects is a parent object   
- tasks is a child object
- when the project is deleted, the tasks are also deleted
- roll up summary fields are available on the project object to calculate the total number of tasks

when to use?
- cascade deletion is required
- roll up summary fields are required
- sharing and security settings are inherited from the parent object

2-lookup relationship
----------------------
- relationship between two objects
- the child record is not dependent on the parent record
- when the parent record is deleted, the child record is not deleted
- no roll up summary fields are available
- available on both standard and custom objects
- create on the child object and you have to select the parent object

example:
- account is a parent object
- contact is a child object
- when the account is deleted, the contact is not deleted
- no roll up summary fields are available

when to use?
- cascade deletion is not required
- roll up summary fields are not required
- sharing and security settings are not inherited from the parent object

3-Hierarchical relationship
--------------------
- used to create a lookup relationship between users and other users in the organization
- used to create a manager-employee relationship
- used to determine who is the manager of the new user
- available on the user object


----------------------------------------------------------------------------------------------------------------------------

Junction object
---------------
- a custom object with two master-detail relationships
- used to connect two objects together
- used to create a many-to-many relationship between two objects
- 
- create a junction object
- create two master-detail relationships
- create a lookup relationship on the junction object to the two objects

Example:
- account is a parent object
- contact is a child object
- junction object is a custom object
- junction object has two master-detail relationships to account and contact
- junction object has a lookup relationship to account and contact


-----------------------------------------------------------------------------------------------------------------
what are the data types in salesforce
-------------------------------------
1-text
2-number
3-date
4-date/time
5-checkbox
6-picklist
7-email
8-phone
9-url
10-lookup relationship
11-master-detail relationship
12-formula
13-roll-up summary

-----------------------------------------------------------------------------------------------------------------

formula data type
------------------
- used to display values that are calculated based on other fields in the same object
- used to reference fields from the same object or related objects
- read-only field
- available on all objects

example:
- calculate the remaining days of a project based on the start date and end date
 remaining days = end date - start date

cross-object formula field : a formula field that references fields from related objects
- ex: display the account name on the opportunity object
     on the opportunity object create a formula field with the following formula
      field type: formula
      field name: account name
      formula: account.name

Note: to use the cross-object formula field you have to create a lookup relationship between the two objects

-----------------------------------------------------------------------------------------------------------------

roll-up summary data type
--------------------------
-used to display values that are calculated based on related records in other objects
- read-only field
- only available on master-detail relationships on the parent object
example:
-parent object: project
-child object: task
- create a master-detail relationship between the project and task objects on the task object.
- create a roll-up summary field on the project object to calculate the total number of tasks.

- calculate the total number of tasks in a project
- calculate the total amount of opportunities in an account

-----------------------------------------------------------------------------------------------------------------
picklist data type
------------------
- used to create a list of values that users can select from
- available on all objects

types of picklist fields
-------------------------
1- standard picklist
2- global picklist
3- dependent picklist

standard picklist
------------------
- a list of values that you create for a specific object
- available on a specific object

global picklist
---------------
- a list of values that you create and can be used in multiple objects
- available on all objects
- go to Picklist Value Sets
- click on new
- enter the picklist name
- enter the picklist values
- click on save


dependent picklist
-------------------
- a picklist field that is dependent on another picklist field
- the values in the dependent picklist are based on the value selected in the controlling picklist field
- available on all objects
- go to Field dependencies to create a dependent picklist

example:
- country is a controlling picklist
- city is a dependent picklist
- the values in the city picklist are based on the value selected in the country picklist

control field: the picklist field that controls the values available in one or more dependent fields
ex: standard picklist, custom picklist, standard checkbox, custom checkbox

dependent field: the picklist field that displays values based on the value selected in a controlling field
ex: custom picklist, multi-select picklist
-----------------------------------------------------------------------------------------------------------------





Quiz:
-----


-----------------------------------------------------------------------------------------------------------------
1- What do you create in Salesforce to establish a many-to-many relationship between two objects?
- junction object
-----------------------------------------------------------------------------------------------------------------

2-The Director of Sales Operations wants to display additional information on Opportunity records.
 The specific request is to pull in the picklist value that is displayed in the Type field on the Account
  so that it can be viewed and displayed
  as well on the Opportunity. What type of custom field can be created on the Opportunity object to fulfill this request?

  - cross-object formula field 
  Note: A cross-object formula field is a formula field that references fields from related objects.

-----------------------------------------------------------------------------------------------------------------

3-Which of the following types of fields can be used as the controlling field in a field dependency?
   -Standard Checkbox
    -Custom Checkbox
   -Custom Picklist
   -Standard Picklist
   
   note: A controlling field is a picklist field that controls the values available in one or more dependent fields.

-----------------------------------------------------------------------------------------------------------------

4-Which of the following types of fields can be used as the dependent field in a field dependency?
    -Custom Picklist
    -Multi-Select Picklist

    note: A dependent field is a picklist field that displays values based on the value selected in a controlling field.

-----------------------------------------------------------------------------------------------------------------

5-The Director of Clients Services has asked you to add a new field on all Account records.
 This new field needs to provide the total amount of all won opportunities for each individual account.
 What type of field should you create to fulfill this requirement?

 -account    new field? total amount of all won opportunities = roll-up summary field
 -oppurtunity object  (master-detail relationship)

Roll-Up Summary

note: A roll-up summary field :is used to display values that are calculated based on related records in other objects.
                              :is only available on master-detail relationships on the parent object.
                              : type of operation: sum, count, min, max, average

-----------------------------------------------------------------------------------------------------------------

6-During the creation of an Approval Process, you discover that you need to create a Lookup field on the User object 
that looks up to the User object. In attempting to create this Lookup field, you discover that you cannot create Lookup
from User to User. Which type of field would you need to create instead, in order to accomplish this?

Hierarchical

note: A hierarchical relationship is a special lookup relationship available for the User object that allows you to 
      create a tree-like structure for users in your organization.

-----------------------------------------------------------------------------------------------------------------

7-In a Master-Detail relationship, what happens to Detail records when the Master record is deleted?

All detail records are also deleted.

note: In a Master-Detail relationship, when the Master record is deleted, all Detail records are also deleted.

-----------------------------------------------------------------------------------------------------------------
8-When creating a custom object, what are the two valid data type options for the Record Name field?

Auto-Number
Text

note: Auto-Number generates a unique number for each record,
      while Text allows users to enter a custom name for each record.

-----------------------------------------------------------------------------------------------------------------

9-The Director of IT alerts you late in the day that another Salesforce administrator in your organization has abruptly
left the company. This departing administrator’s user account cannot be deactivated, because they are tied to several
key dashboards as the running user, they are tied to several scheduled reports that are delivered daily, and they have
several other core settings in the system that will take time to reassign to you. You need to prevent this departing
administrator from being able to log in to Salesforce, as quickly as possible. What can you do to fulfill this request,
without deactivating the departing administrator’s user account?

Freeze the departing administrator's user account.

note: Freezing a user account prevents the user from logging in to Salesforce,
      while still maintaining the user's record and settings.
      Deactivating a user account would remove the user's access and settings from the system.
      deleting a user account would permanently remove the user's record and settings from the system.
      

-----------------------------------------------------------------------------------------------------------------

10- In an org with a large number of custom objects and custom fields, 
the Salesforce Administrator notices that there are many duplicate picklists.
 Which feature can help to eliminate duplicating sets of picklist values across fields and objects?

Common Picklist
Master Picklist
Reusable Picklist
Global Value Set

note: A Global Value Set is a feature that allows you to create a list of values that can be used across multiple 
objects and fields,

-----------------------------------------------------------------------------------------------------------------
11-Which two methods can be used together to reduce the time spent by sales representatives on entering information, 
increasing their productivity in Salesforce? 

Use field history tracking to track field values on objects
Create lookup relationship fields to other objects
Define account hierarchies to organize accounts
Create formula fields to auto-populate field values from related objects

answer: create lookup relationship fields to other objects
      : Create formula fields to auto-populate field values from related objects

 
-----------------------------------------------------------------------------------------------------------------
12-The Service Operations Director of Cosmic Service Solutions would like the picklist values of the 'Status' field on 
the Case object modified. What options are available to modify the standard field? 

The standard values can be deleted
Additional values can be added
New values can be added, but standard values cannot be deleted
Additional values cannot be added, but standard values can be deleted
The values can be reordered

ans: The standard values can be deleted
   : Additional values can be added
   : The values can be reordered

-----------------------------------------------------------------------------------------------------------------







*/
