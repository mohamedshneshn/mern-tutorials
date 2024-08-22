/*
D
A



Chatter
-------
- Chatter is a salesforce collaboration tool
- like a whatsapp for salesforce

Gropus
------
- groups are a way to organize people and information in salesforce
- groups can be public or private

feed tracking
-------------
- feed tracking is a way to track changes to records in salesforce

outlook integration
-------------------
- from outlook provides the functionality to add task 




Automation in salesforce
------------------------
- automation is a way to automate repetitive tasks in salesforce 
  like sending an email when a record is created or updating a field when a record is changed
- used to improve productivity and reduce errors



Automation tools
----------------
- workFlow
- process builder


workFlow
--------
- used to automete repetitive tasks in salesforce
- used when we have one condition and one action
- Limited to single if/then logic.
- tasks avaliable(Email alert, field update, task, outbound message, flow, quick action, apex)

process builder
---------------
-used when we have multiple conditions and multiple actions
- can handle more complex scenarios and automate processes involving multiple related objects.
ex:
Task: When an Opportunity is closed won, update a related Account field, create a follow-up task, and send a notification to the Sales Manager.
Implementation: A Process Builder process that checks the Opportunity stage, updates the related Account, creates a Task, and sends a Chatter post or email notification.





How to create an email template
-------------------------------
1- go to setup
2- click on email templates
3- click on new template
4- select the type of the template
5- add the subject and the body
6- click on save



--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
quiz
----
1-The administrator for Mountaineer Apparel is using work ow to automate ordering inventory. What are the types of actions the administrator can use with work flow? Choose 1 answer.

Field update, task creation, email alert, and outbound message  (correct)
Field update, task creation, email alert, and record creation
Field update, event creation, email alert, and record update
Field update, task creation, email template, and outbound message

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

2-An administrator is considering the use of workflow rules for a new custom object Application.
   When are workflow rules evaluated? Choose 1 answer.

Before triggers
After triggers
Before assignment rules
Before auto-response rules

- answer: After triggers

Note: Workflow rules are evaluated after the system saves the record to the database.
    : After Triggers means after the record is saved to the database.
    : the order of execution in Salesforce
    : the order of execution in Salesforce:

        1-System Validation Rules: like required fields, field format, and unique field checks are performed.
        2-Before Triggers: before insert and before update triggers execute.
        3-Custom validation rules: unique field checks are performed.
        4-After Triggers: after insert and after update triggers execute.
        5-Assignment Rules: Leads and cases may be assigned to owners based on assignment rules.
        6-Auto-Response Rules: Automated email responses are sent based on auto-response rules.
        7-Workflow Rules: Workflow rules are evaluated and executed, which may include:

        8-Processes and Flows: Processes and flows that are set to run on the record change execute.
        9-Escalation Rules: Case escalation rules are evaluated and executed.
        10-Entitlement Rules: Entitlement rules are evaluated for the record.
        11- Roll-Up Summary Fields: Parent records’ roll-up summary fields are recalculated if the child records have been modified.
        12-Criteria-Based Sharing Rules: Criteria-based sharing rules are evaluated and sharing recalculations occur.
        13-Commit: The transaction is committed to the database.
        14-Post-Commit Logic: After the transaction commits, post-commit logic such as sending email alerts, executing post-commit Apex, and enqueuing asynchronous jobs occur.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
3-A Salesforce administrator is working in an org with multiple Validation, Escalation, Assignment, and Workflow rules. 
What is the correct sequence of rules that are processed that the administrator needs to keep in mind? Choose 1 answer.

Assignment rules, Workflow rules, Validation rules, Escalation rules
Escalation rules, Assignment rules, Workflow rules, Validation rules
Validation rules, Assignment rules, Workflow rules, Escalation rules
Escalation rules, Validation rules, Workflow rules, Assignment rules

- answer: Validation rules, Assignment rules, Workflow rules, Escalation rules


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
4-When creating a workflow rule, which of the following are valid workflow evaluation criteria? 

Every time a record is deleted                // NO workFlow is not evaluated when a record is deleted only when a record is created or edited
Every time a record is created and any time it's edited subsequently to meet criteria
Every time a record is created and every time it's edited
Every time a record is created         
Every time a record is edited and any time it's edited subsequently to meet criteria  // NO workFlow is not evaluated when a record is edited only when a record is created or edited

- answer: Every time a record is created and every time it's edited
        : Every time a record is created and every time it's edited subsequently to meet criteria
        : every time a record is created .

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
4-In order to improve efficiency and automate actions on cases, a Salesforce administrator is 
considering the use of bulk macros. Which of the following statements are true regarding the use of bulk macros? 

Bulk macros can be run on multiple records of any standard or custom object      No because it's only for cases,leads
Bulk macros can be run on records in multiple list views at the same time        No only one list view
Bulk macros can send emails to contacts on selected records
Bulk macros can update field values on multiple records

- answer: Bulk macros can send emails to contacts on selected records
        : Bulk macros can update field values on multiple records

Note: Bulk macros: is a tool that allows you to perform repetitive tasks on multiple records at once.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
5-The Salesforce administrator of Cosmic Enterprises has set up a time- dependent workflow rule 
that will send an email 30 days before a renewal is due. 
The evaluation criteria is set to 'Evaluate the rule when a record is created, and any time it's edited to subsequently
 meet criteria'. What will happen if the renewal date is changed? Choose 1 answer.

The workflow will still fire 30 days before the original date
The workflow will fire 30 days before the adjusted date
The workflow will not fire at all
You cannot change the date if there is a pending workflow

- answer: The workflow will fire 30 days before the adjusted date
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
6-What does the administrator need to be aware of when using Email Alerts? Choose 1 answer.

Email alerts can only be sent to users and roles          // NO can be sent to contacts,leads,users
The email content can be set when creating the email alert  // NO the email content is set in the email template
Only text-based emails can be sent with email alerts         // NO can send HTML emails
Email alerts use email templates that need to be set up previously

- answer: Email alerts use email templates that need to be set up previously

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
DH Realty wants to offer a form on its Experience Cloud site where inspectors will submit findings f
rom a property inspection. Which feature should an admin place on the page to fulfill this requirement?

Related List
Auto-launched Flow
Record Detail
Screen Flow* // correct

- answer: Screen Flow

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Users at CK want to be able to create a task that will repeat every two weeks. 
What should an admin do to meet this requirement?

Enable Creation of Recurring Tasks
Workflow rule to create recurring tasks
Turn on Recurring Activities
Flow to create recurring tasks

- answer: Enable Creation of Recurring Tasks
Note: Recurring tasks can be enabled in the Salesforce settings to allow users to create tasks that repeat at specified intervals.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*/