/*
Flow Builder
----------------
- is an automation tool in salesforce that allows you to automate business logic without writing code 

- used to automate repetitive tasks

- used to automate business processes like sending an email, updating a record, creating a record, and calling an apex class
- used to automate repetitive tasks

- Flow Builder is a tool that allows you to automate business processes by building flows

steps to create a flow
-----------------------
- decide the object that you want to create the flow on 
- decide when the flow should be triggered

- add the elements to the flow
Example elements :
- Data (Create Records, Update Records, Get Records, Delete Records)


what are the elements and resources in the flow builder
-------------------------------------------------------
- elements are the building blocks of a flow 
- resources are the data that the flow uses


Flow Builder advantages
-----------------------
- no code required
- debug and test the flow before deploying it
- has a drag-and-drop interface so it is easy to use
- implement complex logic.
- update/insert/delete records



flow builder use cases
-----------------------
- create a new record
   ex: when a new opportunity is closed-won, create a new contract record
- update a record
    ex: when a new opportunity is closed-won, update the No. of closed-won opportunities on the account record
- delete a record
    ex: when a case is closed, delete the case record
- send an email
    ex: when a case is escalated, send an email to the manager


    
flow types
----------
- autolaunched flow
- screen flow: used to create a wizard-like experience for the user
- scheduled flow: used to run the flow at a specific time
- record-triggered flow: used to run the flow when a record is created or updated

flow builder blocks
---------------
- elements : are the actions that the flow performs like creating a record, updating a record, sending an email
- resources: are the data that the flow uses like variables, formulas, and connectors
- connectors:  are used to connect to external systems like google sheets, slack, and twitter to get data
- formulas
- variables
- screens
- decisions
- loops
- subflows
- actions
- debug
- test
- activate
- deactivate
- delete
- clone


The best practices to create a flow in flow builder
---------------------------------------------------
- create a flow that is easy to understand

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------











--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Public Groups
--------------
- used to group users together
- used to assign permissions to multiple users at once
- used to share records with multiple users at once

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Email alerts
------------
- used to send an email to a user or group of users
- used email templates to create an email alert

Email templates
---------------
- used to create an email template
- used to send an email to a user or group of users

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Quiz
-----
4.Cosmic Global wants to implement an automatic and dynamic chat routing that assigns chat requests to the correct agent
 based on the customers' language: English, Japanese, or French. Once the agent accepts the request, the related contact and case records must also open in new tabs. Which of the following can best address the requirements? Choose 1 answer.

Queue-based routing
Omni-channel flow
Apex Class and Trigger
Data Loader

Answer: Omni-channel flow

notes: Omni-channel flow is used to route the chat requests to the correct agent based on the customers' language and open the related contact and case records in new tabs

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
While designing a flow in the Flow Builder, which resource allows creating a container to hold multiple field
 values related to a single record? Choose 1 answer.

Record collection variable
Apex-defined variable
Collection variable
Variable  (correct)

Answer: Variable

notes: Variable is used to create a container to hold multiple field values related to a single record

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Before closing a case, support agents should be able to use a flow for a customer survey.
 Which flow element can be used to collect customer feedback? Choose 1 answer.

Quick Action
Screen
Apex Action
Assignment

Answer: Screen 
notes: Screen is used to collect customer feedback
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
The administrator for Global Containers is automating approval processes.
 Which of the following tools can be used to submit records for approval? 

Validation Rules
Flow
Process Builder
Workflow

Answer: Process Builder, Flow

notes: Process Builder and Flow can be used to submit records for approval

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Global Containers is building custom clone functionality using a flow.
 In the flow, almost all fields from the source record will need to be copied into t he new record.
  How would an app builder configure the 'Get Records' element to store the record fields 
  in the quickest way possible? Choose 1 answer

Manually type in all the field references
Set element to automatically store all fields  (correct)
Select fields to store in separate variables
Write a 'select all fields' query in the element

Answer: Set element to automatically store all fields
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

CK has asked the admin to test a new screen flow that creates contacts. What are the two key components of testing the flow? 

Run the flow using it to create contacts. (correct)
Test the flow in a sandbox.
Use debug to test the flow in Flow Builder.(correct)
Set up a flow interview to test the flow.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CK users are seeing error messages when they use one of their screen flows. T
he error messages are confusing but could be resolved if the users entered more information on the account before
 starting the flow. How should the admin address this issue?

Remove validation rules so that the users are able to proceed without complete records.
Use a fault connector and display a screen with text explaining what went wrong and how to correct it.
Uncheck the End User Flow Errors box in Setup.
Create a permission set to allow users to bypass the error.

answer: Use a fault connector and display a screen with text explaining what went wrong and how to correct it.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



*/
