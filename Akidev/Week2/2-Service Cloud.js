/*
a,b
a


page layouts
------------

to create separate page layouts for different profiles

what kind of records can be customized with page layouts


record types and page layouts
------------------------------
- record types allow you to offer different business processes, picklist values, and page layouts to different users
- record types are used to implement different business processes
- record types are used to implement different picklist values


what are the stages
--------------------
- stages are used to represent the different steps in a sales process

each sales process has its own set of stages
each sales process has a record type associated with it
each record type has its page layout associated with it


------------------------------------------------------------------------------------------------------------
- we have to create stages on the opportunity object
- we have to create a sales process on the opportunity object
- we have to create a record type on the opportunity object
- we have to create a page layout on the opportunity object
- we have to assign the page layout to the record type
- we have to assign the record type to the sales process

------------------------------------------------------------------------------------------------------------

Service Cloud
-------------
- Service Cloud is a customer service application
- used to manage customer inquiries and issues like cases, solutions,  and knowledge articles
- used to provide customer support through multiple channels like email, phone, chat, and social media


objects
-------
- case object : customer inquiries or issues
   types of cases
    --------------
    Email-to-case
    Web-to-case
    Escalation rules

    case
    ----
    - create a new case 
    - assign the case to a queue
    - active the auto-response rule
    - escalate the case

    add fields/




Quiz
-----


------------------------------------------------------------------------------------------------------------

2-Tim works for a Support Center that is looking to streamline their case management.
 Currently, all cases are routed to a single user who then manually assigns them to support reps.
 The support center handles all cases based on the Geography field selected on the case.
 Which of the following combination of configuration options could Tim suggest to help automate their Case Management?
 Choose 2 answers


Creating a Case Assignment rule
Setting up queues based on Geography
Setting up an email notification to an administrator when a case is created
Creating an approval process to standardize case resolution

a,b

Note: Case Assignment Rules are used to automatically assign cases to users or queues based on criteria.
      Queues are used to manage cases based on the Geography field selected on the case.

------------------------------------------------------------------------------------------------------------

3-Cosmic Pawn Services is considering the creation of a phone channel using Salesforce to provide another option
 to new and existing customers for reaching the support department when they have questions related to pawning personal items 
 for a loan. Which of the following are features that Computer Telephony Integration (CTI) can offer when it is used to integrate
  an existing phone system with Salesforce? Choose 3 answers

Screen pop on incoming calls offers information about the caller
Click to dial functionality allows calling customers from records
Automated call logging generates call log activity records for external calls

Convert voicemails into SMS using speech-to-text technology

Route calls to agents' mobile devices to ensure 100% coverage 2/7/23, 3:07 PM

a,b,c

Note: Computer Telephony Integration (CTI) is used to integrate an existing phone system with Salesforce.
      It offers features like Screen pop on incoming calls, Click to dial functionality, and Automated call logging.

------------------------------------------------------------------------------------------------------------

4-. A Salesforce Administrator thought it would be a good idea to set up a business process for a new custom object
  called 'Purchase Order". Which of the following are valid considerations regarding business processes provided by
  Salesforce in Salesforce Classic and Lightning Experience?
Choose 1 answer.
A. Business processes are available for the Lead object only
B. Business processes are available only for standard objects such as Lead, Solution, Opportunity, and Case
C. Business processes are available for all standard and custom objects
D. Business processes can be assigned to custom objects by making a request to Salesforce support

answer: B 

Note: Business processes are available for standard objects such as Lead, Solution, Opportunity, and Case.
      Sales Process ----> Opportunity
      Support Process ----> Case
      Solution Process ----> Solution
      Lead Process ----> Lead

what is the difference between a business process and a record type
- business process is used to guide users through a process
- record type is used to offer different business processes, picklist values, and page layouts to different users

------------------------------------------------------------------------------------------------------------

5-Which of the following are true regarding automated case actions in Salesforce? 

When a case is automatically assigned using a case assignment rule, the automated case user is listed in the 'Case History' related list.
When a case is escalated, the default case owner is listed in the 'Case History' related list.   No(When a case is escalated, the history will reflect the escalation action, not necessarily the default case owner)
When a case is created through Web-to-Case, the automated case user is listed in the 'Case History' related list.
When a case is created through On Demand Email-to-Case, the default case owner is listed in the 'Case History' related list.(No, the history will reflect the creation of the case, not necessarily the default case owner)

answer: a,c

------------------------------------------------------------------------------------------------------------
6-support agents who use the Case Feed complete repetitive tasks quickly and consistently? Choose 1 answer.

Set up auto-response rules for cases in the Case Feed
Use macros in the Case Feed
Set up automatic email responses for cases in the Case Feed
Set up workflow rules for cases

answer: b use macros in the case feed

Note: Macros are used to complete repetitive tasks quickly and consistently in the Case Feed. like

------------------------------------------------------------------------------------------------------------

Which feature can be used to alert the support manager via email if a gold customer and high-priority case has not been 
closed within the SLA response time after two hours from case creation? Choose 1 answer.

Case Queues
Case Assignment Rules
Case Escalation Rules
Case Settings

answer: c Case Escalation Rules

------------------------------------------------------------------------------------------------------------


*/
