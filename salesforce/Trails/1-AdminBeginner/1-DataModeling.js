/*
Data Modeling
--------------
- is the process of creating a data model for a database
- is the process of defining the structure of the database


object
-----
-objects are used to store data in salesforce
-objects are similar to tables in a database

column
------
- is a field in the database table

row
---
- is a record in the database table


standard object
---------------
-objects that are provided by salesforce
-objects that are available in all salesforce orgs

custom object
-------------
-objects that are created by users
-objects that are specific to a particular salesforce org


how to create a custom object
-------------------------------
- go to setup
- enter object manager in the quick find box
- click on object manager
- click on create
- click on custom object
- enter the object name
- enter the object label
- enter the object plural label
- enter the record name
- enter the data type
- click on save

how to create a custom field
-------------------------------
- go to setup
- enter object manager in the quick find box
- click on object manager
- click on the object
- click on fields & relationships
- click on new field
- enter the field label
- enter the field name
- enter the data type
- click on save
-----------------------------------------------------------------------------------------
what is a relationship
-----------------------
- a relationship is a connection between two objects
- a relationship is used to link two objects together
- a relationship is used to retrieve data from multiple objects

what are the types of relationships
------------------------------------
- lookup relationship:
    - a relationship where one object is the parent and another object is the child
    - can be one-to-one or one-to-many
    -example: account and contact  (one-to-many)
    -example: contact and account  (one-to-one) 
 
- master-detail relationship :
    - a relationship where one object is the parent and another object is the child
    - is always one-to-many
    -example: account and contact


how to create a lookup relationship
-------------------------------------
- go to setup
- enter object manager in the quick find box
- click on object manager
- click on the object
- click on fields & relationships
- click on new field
- select lookup relationship
- select the related object
- enter the field label
- enter the field name
- click on save

how to create a master-detail relationship
-------------------------------------------
- go to setup
- enter object manager in the quick find box
- click on object manager
- click on the object
- click on fields & relationships
- click on new field
- select master-detail relationship
- select the related object
- enter the field label
- enter the field name
- click on save
----------------------------------------------------------------------------------------------------------------

Schema Builder
---------------
- is a tool in salesforce that allows users to create and modify the database schema 
- allows users to create custom objects, fields, and relationships
-schema means the structure of the database


to create a custom object using schema builder
-----------------------------------------------
- go to setup
- enter schema builder in the quick find box
- click on schema builder
- click on the elements tab
- click on the object icon and drag it to the canvas
- enter the object name
- click on save

to create a custom field using schema builder
-----------------------------------------------
- go to setup
- enter schema builder in the quick find box
- click on schema builder
- click on the elements tab
- click on the field icon and drag it to the object
- enter the field label
- enter the field name
- enter the data type
- click on save

----------------------------------------------------------------------------------------------------------------




----------------------------------------------------------------------------------------------------------------
    









*/
