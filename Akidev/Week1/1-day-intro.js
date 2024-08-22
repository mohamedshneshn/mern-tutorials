/*

salesforece:
-------------
1. salesforce is a CRM tool that helps companies manage their relationships with customers like 
    -keeping track of customer interactions, managing leads, and tracking sales opportunities



cloud computing:
----------------
1. cloud computing is a way to store and access data and programs over the internet instead of on your computer's hard drive
2.no installation required

service models:
---------------
1. IaaS (Infrastructure as a Service): provides virtualized computing resources over the internet
2. PaaS (Platform as a Service): provides a platform for developers to build, deploy, and manage applications
3. SaaS (Software as a Service): provides software applications over the internet 

salesforce is a SaaS product

CRM:
----
1. CRM (Customer Relationship Management) is a strategy for managing a company's relationships and interactions with customers and potential customers

multitenacy:
-------------
1. multitenancy is a software architecture where a single instance of the software serves multiple customers


org:
----
1. org is a salesforce instance that contains your data and customization
2. org is short for organization

types of orgs:
--------------
1. production org: is the live instance of salesforce that you use to run your business
2. sandbox org: is a copy of your production org that you can use for testing and development
3. developer org: is a free, fully functional salesforce org that you can use to develop and test applications
4. test org: is a sandbox org that you can use to test changes before deploying them to production


metadata:
---------
1. metadata is data that describes other data


salesforce sandbox:
-------------------
1. salesforce sandbox is a copy of your production org that you can use for testing and development

partial copy sandbox:
---------------------
1. partial copy sandbox is a type of salesforce sandbox that contains a subset of your production org's data

developer sandbox:
------------------
1. developer sandbox is a type of salesforce sandbox that is used for development and testing

MVC:
----
1. MVC (Model-View-Controller) is a software design pattern that separates an application into three main components: the model, the view, and the controller   
- how to store and manipulate and display data in an application
model: 
------
1.model is how data is stored and manipulated in an application
  -in salesforce we store data in tables called objects




How to create a new app in salesforce
-------------------------------------
1. go to setup
2. enter app manager in the quick find box
3. click on app manager
4. click on new lightning app
5. enter the app name
6. enter the app label
7. click on next
8. select the tabs that you want to include in the app
9. select the profiles that you want to have access to the ap (system admin.)
10. click on save

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

what is the difference between field label and field name?
---------------------------------------------------------
- field label: is the name that appears on the user interface or the page layout
             : used to make the field more user-friendly
              : can be changed without affecting the underlying data
              :example: first name, last name, email

- field name: is the name that is used in the database or in the code
            : used in code, formulas, and reports
            : cannot be changed without affecting the underlying data
            : example: first_name, last_name, email




--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Quiz:
-----
1.What modification can be made to standard Object? Choose 1 answer.

Change the Object label
Delete the Object
Change the Object length
Change the Object type

answer: Change the Object label

note: you can modify the standard object in salesforce by changing the object label, adding custom fields, 
      and creating custom page layouts

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
2-After consulting with the HR manager, the administrator needs to add several custom fields to 
the Employee object. What are the basic steps when adding a new custom field? Choose 1 answer.

Choose field label, select field type, set sharing rules, select page layouts
Choose field type, enter field details, set sharing rules, select field level security
Choose field label, select field type, select field level security, select record types
Choose field type, enter field details, set field level security, select page layouts

answer: Choose field type, enter field details, set field level security, select page layouts
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
3-The custom object Job needs several custom fields added because of an HR request. What is true regarding custom fields? Choose 1 answer.

Once added, custom fields cannot be deleted
Custom fields can be added to standard or custom objects
Custom fields can only be added to custom objects
Once added, the field type of a custom field cannot be changed

answer: Custom fields can be added to standard or custom objects

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
4-European users are reporting that dates are displaying in the US date format instead of the European date format. The majority of users are based in the U.S. What is the most efficient way to handle this issue? Choose 1 answer.

Manually change each European user's locale in User settings    No --> not efficient will take time
Change the default locale setting on the company profile        No --> not efficient will affect all users
Change the date format setting on the company profile           No --> not efficient will affect all users
Inform European users to change the locale settings in personal settings

ans: Inform European users to change the locale settings in personal settings
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

5-A connection from Salesforce to an existing cloud application is required.
 What should an administrator first do when evaluating the level of effort? Choose 1 answer.

Create a new object for the application in Salesforce
Estimate the level of effort to design an application in Apex
Create a WSDL based on the API provided by the application vendor
Search for a connector or app for the application on the AppExchange


ans: search for a connector or app for the application on the AppExchange

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
An administrator has been given a list of requirements that will involve the creation of several custom fields.
What is true regarding custom fields? 

Field-level security does not apply to custom fields
The field type of a custom field can be changed after it has been created (True)
Custom fields cannot be deleted once created
Custom fields can be created on standard or custom objects (True)

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*/
