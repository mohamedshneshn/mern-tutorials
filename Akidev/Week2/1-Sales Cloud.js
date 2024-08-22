/*
a,c
b
----------------------------------------------------------------------------------------------------------------
sales cloud
--------------  
- CRM: -Customer Relationship Management system 
       -that keeps your customer data in one place 
       - each department can access the same data 
       - provides a 360-degree view of your customers to all departments

- salesforce: - is the first company that took CRM to the cloud
              - enabling companies to access all of their customer data online,anytime, anywhere

- sales cloud: - is a part of crm system that focuses on sales
                - help you sell faster and smarter by tracking customer information and interactions in one place
               -  track customer interactions, manage leads, and track sales opportunities
               - you can get a real time reports of how the business is doing
               -

Quiz
-----
-which sales best practice should you follow to increase sales?
: keep your customer data in one place
: track customer interactions
: manage leads

-what is the best way to manage leads?
:reps should prioritize leads that are ranked the highest and are most likely to close

-what are the leads?
:leads are potential customers who have shown interest in your products or services

-what are the reps?
:reps are sales representatives who are responsible for selling products or services    

-how can you helpmakes yours sales team more productive?
: givethem guidance at every step of the sales cycle

-Which of the following is true of tracking progress with reports and dashboards?
: you can get a real-time view of how your business is doing
: dashboards are used to display multiple reports on a single page


                  -------------------------------------

sales cloud objects
-------------------
campaigns,leads,accounts,contacts,opportunities,quotes,products,price books,forecasts,reports,dashboards


campaigns
---------
- used to store information about marketing campaigns

leads
-----
- used to store information about potential persons or companies that are interested in your products or services
- can be converted into accounts, contacts, or opportunities when they are qualified as sales deals
- the relationship between leads and contacts is one-to-many
- the relationship between leads and accounts is one-to-many
- the relationship between leads and opportunities is one-to-many

what is the lead record?
-------------------------


--------------------------------------------------------------------------------------------------------------------------------------------------------

accounts
--------
- used to store information about companies or organizations that you're doing business with
-: the relationship between accounts and contacts is one-to-many


contacts
--------
- is used to store information about people who work for the companies or organizations that you're doing business with
- the relationship between contacts and accounts is one-to-many


relationships between contacts and accounts
-------------------------------------------
- the relationship between contacts and accounts is one-to-many
- direct relationship: the contact is directly associated with the account
- indirect relationship: the contact is indirectly associated with the account




--------------------------------------------------------------------------------------------------------------------------------------------------------
opportunities
-------------
- used to store information about potential sales deals 
  like the amount of the deal,
   the stage of the deal, 
   and the probability of closing the deal
- stages:
       - value proposition : the sales rep has identified a potential opportunity
       - qualification : the sales rep has qualified the opportunity



-oppurtunity team : is a temporary group of reps that work together to close a deal
                  : share information,tips,contacts, and other resources to help close the deal
-oppurtunity splits : is used to split the revenue of an opportunity between multiple users
-Revenue splits: between the responsible sales reps and the sales manager
-overlay splits: for reps who provide support to the responsible sales reps

--------------------------------------------------------------------------------------------------------------------------------------------------------

products
--------
- used to store information about the product like
       the name of the product,
       the price of the product,
       and the description of the product



price books
-----------
- is a collecton of products and their prices
- allows you to manage different prices for the same product

Quotes
------
- a detailed list of products and their prices that are created for a specific customer

--------------------------------------------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------------------------------------------
Reports and Dashboards
----------------------
- reports are used to display data from the salesforce database
- dashboards are used to display multiple reports on a single page

Reports types
-------------
- tabular reports: are used to display data in a table format
- summary reports : are used to display data in a summary format
- matrix reports: are used to display data in a matrix format
- joined reports: are used to display data from multiple report types   


reports filters
---------------
- filters are used to limit the data that is displayed in a report
- filters can be used to filter data based on specific criteria
- filters can be used to filter data based on date ranges

reports groupings
-----------------
- groupings are used to group data in a report
- groupings can be used to group data based on specific criteria

how to create a report
-----------------------
- go to the reports tab
- click on new report
- select the report type
- select the report format
- select the report fields
- add filters
- click on save and run report

what is the report type
------------------------
- the report type determines which objects are available for the report
- the report type determines which fields are available for the report
- the report type determines which filters are available for the report

how to create a dashboard
--------------------------
- go to the dashboards tab
- click on new dashboard
- select the report type
-add widgets




--------------------------------------------------------------------------------------------------------------------------------------------------------


opportunities : is specific sales deals that are being pursued inccluding the expected revenue
                : is used to store information about sales deals

quotes        : is used to create and manage quotes for products or services
              : the relationship between quotes and opportunities is one-to-many
              : each opportunity can have multiple quotes

products      : is used to store information about products or services

price books   : is used to store information about product prices

forecasts     : is used to predict sales revenue



how to create web-to-lead forms
-------------------------------
- go to setup
- enter web-to-lead in the quick find box
- click on web-to-lead
- click on create web-to-lead form
- enter the form details
- click on generate
- copy the html code
- paste the html code into your website


leads assignment rules
----------------------
- is used to automatically assign leads to sales reps
- is based on criteria such as location, industry, or lead source

how to create lead assignment rules
------------------------------------
- go to setup
- enter lead assignment rules in the quick find box
- click on lead assignment rules
- click on new rule
- enter the rule details
- define the rule criteria

what is a lead queue
---------------------
- is used to assign leads to a group of sales reps
- the leads are distributed to the group members in a round-robin fashion

how to create a lead queue
--------------------------



sales process
-------------
- the sales process is used to track the progress of a deal

- the sales process is divided into stages

- each stage represents a step in the sales process
--------------------------------------------------------------------------------------------------------------------------------------------------------
Matching Rules
--------------
- is used to identify duplicate records in salesforce and you can alert the user or block the record from being saved.
types of matching rules
-----------------------
- standard matching rules : are predefined matching rules that are provided by salesforce
       - account matching rule
       - contact matching rule
       - lead matching rule
          
- custom matching rules: are custom matching rules that are created by the salesforce administrator
--------------------------------------------------------------------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------------------------------------------------------------------
Quiz
-----
1-When converting a lead, how can an administrator capture custom lead data on the converted contact?

a) Map custom lead fields to custom contact fields
b) Use the lead conversion wizard to select the fields
c) Use the data loader to move the custom lead data
d) Map custom lead fields to standard contact fields.

ans: a) Map custom lead fields to custom contact fields

Note: Maping is a way to connect two fields in two different objects.
      When converting a lead, you can map custom lead fields to custom contact fields to capture custom lead data on the converted contact.
    : mapping makes it easy to transfer data between objects in salesforce.
    : we cant cant crearte a lead to standard contact fields.
--------------------------------------------------------------------------------------------------------------------------------------------------------

2- On Lead Conversion a Lead Object Custom field cannot be mapped to Which Object custom field?

a) Account
B) Contacts
c) Case
d) Opportunity
ans: c) Case
--------------------------------------------------------------------------------------------------------------------------------------------------------

3- Which record type can be updated when converting a lead? Choose two answers

a) An existing custom object record
b) An existing contact record
c) An existing opportunity record
d) An existing account record

ans: b) An existing contact record
     d) An existing account record

Note: When converting a lead, you can update an existing contact record and an existing account record or create a new contact record and a new account record.
      You can also create a new opportunity record.

    : Each lead can be converted into one account, one contact, and one opportunity.
--------------------------------------------------------------------------------------------------------------------------------------------------------

4-During the Lead Conversion Process in Salesforce, which types of records can be created?
a) Account
b) Contact
c) Opportunity
d) All of the above

ans: d) All of the above
--------------------------------------------------------------------------------------------------------------------------------------------------------

5-To help prevent duplicates, Salesforce provides Standard Matching Rules for which objects? Choose 3 options.

Leads
Accounts
Contacts
Opportunities
Cases

ans: Leads , Accounts , Contacts 

--------------------------------------------------------------------------------------------------------------------------------------------------------
6- .Cosmic Road has multiple Case record types and is looking to implement a support process.
 How do record types relate to business processes? Choose 1 answer

business process can be associated with multiple record types
A business process can be used instead of a record type
Multiple business processes can be related to one record type
A business process is related to only one record type

ans: A business process is related to only one record type

Note: A business process is related to only one record type.
     

--------------------------------------------------------------------------------------------------------------------------------------------------------  
3.Quotes that are discounted more than 20% need Sales Director approval. How can this requirement be met? Choose 1 answer.

Create a Validation Rule to check the discount percentage
Create a Work ow to assign the quote to the Sales Director
Create an Approval Process on the opportunity with an entry criteria on the opportunity discount percentage
Create an Approval Process on the quote with an entry criteria on the quote discount percentage

ans: Create an Approval Process on the quote with an entry criteria on the quote discount percentage

Note: quotes that are discounted more than 20% need Sales Director approval.
      opportunity discount percentage is not mentioned in the requirement.

--------------------------------------------------------------------------------------------------------------------------------------------------------
4-A jewelry company offers gold, silver, and retail price for products depending on the customer type. 
What is the best way of handling this? Choose 1 answer

Create products for each customer type with different prices
Use a default product schedule
Create three quantity product schedules
Create a price book for each customer type

ans: Create a price book for each customer type
Note: A price book is used to store information about product prices.

--------------------------------------------------------------------------------------------------------------------------------------------------------
5-What is true regarding queues?

A list view is automatically created when a queue is created for Cases, Leads, or custom objects  (yes)
Any user can accept records from the queue                        (No - only the queue members can accept records from the queue)
Records are removed from queues if not assigned within 30 days  (No - records remain in the queue until they are assigned or removed manually)
Records can be placed in a queue manually or via an assignment rule (yes)
Custom objects can be assigned to a queue                        (yes)

--------------------------------------------------------------------------------------------------------------------------------------------------------
6-Sarah is the manager of a team of sales reps who collaborate on Opportunities.
 They are each awarded an appropriate share of the total sale on each Opportunity.
  Which of the following features should her company implement? 

Opportunity Teams
Opportunity Splits
Opportunity Revenue Sharing     No -- it is not a feature in Salesforce
Opportunity Collaboration       No -- it is not a feature in Salesforce

ans: Opportunity Splits, Opportunity Teams

Note: Opportunity Splits is used to share the revenue from an opportunity among multiple users.
       Opportunity Teams is used to collaborate on opportunities with other users.

--------------------------------------------------------------------------------------------------------------------------------------------------------

7-New product that will be delivered once ordered but billed in quarterly installments for one year.
 How can this be reflected in Salesforce? Choose 1 answer.

Create a default revenue schedule for the product  (yes -more straightforward way to create a revenue schedule)
Create a default quantity schedule for the product (No - order is delivered)
Create both a default revenue and quantity schedule for the product (No - order is delivered)
Create a customizable schedule for the product  (No - order is delivered)

--------------------------------------------------------------------------------------------------------------------------------------------------------

Which objects are Sales objects? Choose 1 answer.

Accounts, Contacts, Opportunities, and Knowledge
Leads, Campaigns, Opportunities, and Orders (yes)
Leads, Contacts, Quotes, and Entitlements
Leads, Opportunities, Forecasts, and Service Contract

ans: Leads, Campaigns, Opportunities, and Orders
--------------------------------------------------------------------------------------------------------------------------------------------------------

After implementing the Lightning Service Console, agents complain that they find it difficult to find case record
updates of one type, such as all the email messages and text posts. What should the Consultant recommend? 

Configure the feed filter to display in the right column
Add the Chatter Feed component to the Case record page.
Ensure the feed filter is enabled
Assign the record page to the Service Console app and profile

ans: Add the Chatter Feed component to the Case record page.
   : assign the record page to the Service Console app and profile

Note: The Chatter Feed component displays all the updates related to a record, such as email messages and text posts.

--------------------------------------------------------------------------------------------------------------------------------------------------------



*/
