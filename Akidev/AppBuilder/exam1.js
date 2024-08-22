/*
1- Universal Containers implemented an application process that uses custom objects
Internships and Applications. The organization-wide default for Internships has been set to
private and is the master in the master-detail relationship with Applications. The VP of HR wants
to allow edit access to Applications to recruiters.
How should an app builder configure the proper access?

A. Add a sharing rule that grants the users Read/Write access to the Internship records.

B. Create a queue for the web applications and assign access to the users who will be editing
the records.

C. Set the organization-wide default on the Applications object to Read/Write.

D. Create a sharing rule that grants the users Read/Write access to the Application records.


answer: A. Add a sharing rule that grants the users Read/Write access to the Internship records.
       
  Why: By granting access to the "Internships" records, recruiters will automatically get the necessary access to
        the related "Applications" records due to the master-detail relationship.


--------------------------------------------------------------------------------

2-An app builder has created a custom Lightning App and wants to make it available to the
internal users at Universal Containers.
Which two steps are necessary to accomplish this task?
Choose 2 answers


A. Add the app to a Visualforce page.
B. Create a subdomain using My Domain.
C. Build a Custom Tab for the app.
D. Upload the app to Static Resources.


answer: B. Create a subdomain using My Domain.
        C. Build a Custom Tab for the app.

Why: To make a custom Lightning App available to internal users, the app builder must create a subdomain using My Domain
     and build a Custom Tab for the app. This will allow users to access the app from the Salesforce interface.


--------------------------------------------------------------------------------

3- Universal Containers has Public Read/Write as the Account organization-wide default
(OWD) setting. Visitors to the customer community site report that they can see all of the
company’s account records.
How should an app builder configure Account sharing so that community users only see their
own Account?

A. Define a permission set for external accounts.
B. Create an account record type for external accounts.
C. Set the account external OWD to private.
D. Define an owner-based sharing rule for external accounts.

answer: C. Set the account external OWD to private.

Why: By setting the Account external OWD to private, community users will only be able to see their own Account records.

--------------------------------------------------------------------------------

4- DreamHouse Realty is rethinking Its sandbox utilization strategy after acquiring Cloud
Kicks. The Salesforce COE already utilizes a partial and a full sandbox, which it refreshes on
their own regular schedules. Teams are expanding and have to begin each of their small projects
in a sandbox before committing to the larger pool for
Collaborative testing while still keeping costs down.
What type of sandbox should each team member use?

A. Developer pro sandbox
B. Full sandbox
C. Partial sandbox
D. Developer sandbox

answer: D. Developer sandbox

Why: Developer sandboxes are ideal for individual team members to use for small projects before committing to the larger
     Developer pro sandboxes:offer more storage and can handel large datasets, but are more expensive than Developer
     Full sandboxes: are used for testing and training, but are not cost-effective for individual team members
     Partial sandboxes: are used for testing and training, but are not cost-effective for individual team members



 --------------------------------------------------------------------------------

5 - Ursa Major Solar wants to convert the relationship between Galaxy and Star from a
    lookup relationship to a master-detail relationship so each Galaxy record can be equipped with a
    roll-up summary count of Star records.

Which two considerations should be made?
Choose 2 answers
A. The Star records are all required to have an existing value in their Galaxy field.
B. The Galaxy object has fewer than two existing master-detail relationships.
C. The Star object has fewer than two existing master-detail relationships.
D. The Galaxy object is required to contain existing roll-up summary fields.

answer: A. The Star records are all required to have an existing value in their Galaxy field.
        C. The Star object has fewer than two existing master-detail relationships.

Why: When converting a lookup relationship to a master-detail relationship, the Star records must have an existing value in
        their Galaxy field. Additionally, the Star object must have fewer than two existing master-detail relationships.

Note: each object can have up to two master-detail relationships, but only one can be a detail object.

--------------------------------------------------------------------------------



6-  Service Agents are required to confirm a user’s identity before providing support
information over the phone.
What feature can an app builder use to help agents meet this requirement?

A. Case Validation Rules.
B. Add Path to the top of the Case layout.
C. Include Surveys as a Case related list.
D. Guided Action Flows on the record page.

answer: D. Guided Action Flows on the record page.

Why: Guided Action Flows on the record page can help service agents confirm a user's identity before providing support


--------------------------------------------------------------------------------

**7- Ursa Major Solar wants to automate a welcome email to new clients and include a
customized survey about their buying experience. An app builder is tasked with this project and
 has very little time to build the solution from scratch.

What should the app builder do to meet the deadline and custom requirements?

A. Work with a developer to create custom apex code and a Visualforce survey to meet
criteria.

B. Build the survey declaratively and use a workflow rule to send it to the customer as an
external message to meet criteria.

C. Select an unmanaged package from AppExchange that closely meets the requirements of
the project that allows programmatic development.

D. Choose a managed package from AppExchange that closely meets the requirements of
the project And restricts programmatic development.

answer: C. Select an unmanaged package from AppExchange that closely meets the requirements of the project that allows
        D. Choose a managed package from AppExchange that closely meets the requirements of the project And restricts programmatic development.


--------------------------------------------------------------------------------


8 - An app builder has modified a Lightning record page for a case and has added an email
button item to the page layout; however, users are unable to see the new item on the layout.

What are two potential reasons why users are unable to view the item on the Case Lightning
record page?

Choose 2 answers
A. The page layout includes the case feed component.
B. The page layout excludes the case feed component.
C. The case page layout also contains custom buttons.
D. The email button contains JavaScript.

answer: B. The page layout excludes the case feed component.
        D. The email button contains JavaScript.

Why: Users may be unable to view the email button on the Case Lightning record page if the page layout excludes the case feed
        component or if the email button contains JavaScript.
--------------------------------------------------------------------------------

9-. Universal Containers’s app builder has been tasked with replacing workflow rules and
Apex triggers with Process Builders where possible.
What are two important considerations an app builder should know before the project is started?
Choose 2 answers

A. Avoid generating infinite loops.
B. Combine actions when possible.
C. Create a process for each workflow rule.
D. Apex has a different SOQL query limit than Flow.

answer: A. Avoid generating infinite loops.
        B. Combine actions when possible.

--------------------------------------------------------------------------------


10-  Cloud Kicks (CK) wants to set up a custom child object to track gift cards issued to a
customer. A key requirement is to track the total number of gift cards opened and gift cards
issued on an Account. CK wants to permanently ensure the gift cards are unable to be moved
across any other Account once it is created.
On the gift card object, what type of field should be created to support this requirement?

A. Master-detail relationship
B. Roll-up summary
C. Lookup relationship
D. Formula

answer: A. Master-detail relationship

--------------------------------------------------------------------------------

11-  Universal Containers (UC) wants to delete data in several fields for 5,000 Lead records.
UC exported the selected Record IDs and fields that need to have data deleted in a CSV file.

Which two steps should an app builder suggest to meet these requirements?
Choose 2 answers

A. Select the correct record type.
B. Use Data Loader to update leads using the CSV file.
C. Use Import Wizard to update leads using the CSV file.
D. Select Insert Null Values in Settings.


answer: B. Use Data Loader to update leads using the CSV file.
        D. Select Insert Null Values in Settings.

--------------------------------------------------------------------------------

**12-  The previous administrator of Cloud Kicks’ (CK) Salesforce Organization used text as
    the field type when creating new custom fields. CK’s current roadmap requires a project that will
    clean this up during the Lightning migration.
Which three field types should be considered to keep better track of contact information in
fields?
Choose 3 answers
A. Time
B. Number
C. Phone
D. Date
E. Email

answer:
        C. Phone
        D. Date
        E. Email

--------------------------------------------------------------------------------

**13- Which two solutions prevent a formula field from being referenced by a Roll-Up
Summary field?
Choose 2 answers
A. The CASE() function in the formula field
B. A cross-object field reference in the formula field
C. A cross-object workflow updating a field referenced by the formula field
D. The NOW() function in the formula field

answer: 
        B. A cross-object field reference in the formula field
        D. The NOW() function in the formula field


--------------------------------------------------------------------------------

14-
 Managers at Universal Containers want a quick way to create additional accounts to
form a hierarchy from a Parent Account record. They want to auto-populate five fields based on
the parent to make it easier for users to create the child accounts quickly.
What should the app builder recommend?

A. Add Path on Account hierarchy
B. Create a custom action on Account
C. Add a custom link on Account
D. Customize a Global Quick Action

answer: B. Create a custom action on Account

--------------------------------------------------------------------------------

**15- The convert button on Lead should be unavailable until the Lead Status picklist is set to
Qualified.

What should an app builder suggest to meet these requirements?
A. Custom button, validation rule, record types
B. Page layouts, record types, Process Builder field update
C. Process Builder field update, quick action, record type
D. Picklist dependency, page layouts, record types

answer: B. Page layouts,record types, Process Builder field update

--------------------------------------------------------------------------------

16- The services manager wants to make sure the team enters case priority consistently.
What feature can an app builder use to accomplish this?

A. Path
B. In-App Guidance
C. Flow
D. Next Best Action

answer: B. In-App Guidance

--------------------------------------------------------------------------------



17- Universal Containers is migrating its sales operations from a legacy system that was
used in Europe. Opportunities need to be imported with the proper country currency.
Which two steps should an app builder configure to meet these requirements?
Choose 2 answers

A. Include the Currency ISO code in all currency fields in the import file.
B. Use Import Wizard to import the records.
C. Include the Currency ISO Code Column in the import file.
D. Use Data Loader to import the records.

answer:
        A. Include the Currency ISO code in all currency fields in the import file.
        D. Use Data Loader to import the records.

--------------------------------------------------------------------------------


18- An app builder is loading data into Salesforce. To link the new records back to the
legacy system, a field will be used to track the legacy ID on the Account object. For future data
loads this ID will be used when upserting records.
Which two field attributes should be selected?
Choose 2 answers

A. Text (encrypted)
B. Unique
C. Required
D. External ID

answer: B. Unique
        D. External ID


--------------------------------------------------------------------------------


19- Universal Containers wants to embed a chart of all related Opportunities, by stage, on
the Account detail page.
Which type of report should an app builder create to add to the Account page layout?

A. A tabular report on the Account object
B. A tabular report on the Opportunity object
C. A summary report on the Opportunity object
D. A summary report on the Account object

answer: C. A summary report on the Opportunity object

--------------------------------------------------------------------------------


20- Ursa Major Solar is ramping up the sales team to meet increased demand. As part of
the short ramp up for these new reps, the manager wants to provide a help guide to enable reps to
easily get help where needed during the Different sales processes.
Which solution should an app builder recommend?

A. Flow
B. Journey Builder
C. Chatter Publisher
D. Path

answer: D. Path

--------------------------------------------------------------------------------

21- Ursa Major Solar wants to see the Type field from the parent object Galaxy listed on
the child record Star. The app builder is receiving an error stating “Picklist values are only
supported in certain functions”.

What formula should an app builder use to achieve the desired result?

A. VALUE(Galaxy_r.Type_c)
B. ISPICKVAL(Galaxy_r.Type_ c)
C. FIND (Galaxy_r.Type_c)
D. TEXT(Galaxy_r.Type_c)

answer: D. TEXT(Galaxy_r.Type_c)

--------------------------------------------------------------------------------

ok**22- The developer at Universal Containers wants to test code in a sandbox environment. In
order to ensure the code works properly, the sandbox needs to have at least half a gigabyte of
data. The sandbox will need to be refreshed after each three-day sprint.
What type of sandbox should the App Builder provision to the developer?

A. Partial Data
B. Developer Pro
C. Developer
D. Full Copy

answer: B. Developer Pro

--------------------------------------------------------------------------------

23-  An app builder has been asked to display an Overdue Date that is two months after a
Task’s Due Date.

Which approach should the app builder take?

A. Create a formula field using DueDate + 60.
B. Use Process Builder and set Overdue Date equal to DueDate + ((365/12)* 2).
C. Use Process Builder and set Overdue Date equal to DueDate + 60.
D. a formula field using the ADDMONTHS() function.

answer: D. a formula field using the ADDMONTHS() function.

--------------------------------------------------------------------------------

ok**24 - An app builder needs to deploy a new account detail page layout from sandbox to
production
Which three components should an app builder include in the Change Set to ensure it deploys
successfully and Visually as expected?

Choose 3 answers
A. Custom fields
B. Custom actions
C. Lightning App Builder
E. Detail page layout
D. System administrator profile

answer:
        A. Custom fields
        B. Custom actions
        E. Detail page layout

--------------------------------------------------------------------------------

25- Cloud Kicks wants to set up a new opportunity approval process and execute various
action items based on the Initial submission.
Which three action types should an app builder use in the approval process?
Choose 3 answers

A. Invocable Process Builder
B. Task
C. Invocable Flow
D. Outbound Message
E. Email Alert

answer:
        B. Task
        D. Outbound Message
        E. Email Alert

-------------------------------------------------------------------------------------------------
26-  Cloud Kicks (CK) switched to Lightning Experience and started using Chatter across
its global workforce to support its fast-paced sales cycle. CK loves Chatter but struggle with
gathering feedback from core team mmembers Including understanding who is available to
respond.
Which two ways could CK use Chatter to solve this problem?

Choose 2 answers
A. Streams
B. Poll.
C. Out of Office
D. Topics

answer:
        B. Poll
        C. Out of Office

why: CK can use Polls to gather feedback from core team members and Out of Office to understand who is available to respond.

--------------------------------------------------------------------------------

27- Which two places can an app builder go to see a list of available Custom Lightning
components in their org?
Choose 2 answers

A. Lightning App Builder
B. Lightning component Generator
C. Lightning components in Setup
D. components in Setup

answer:
        A. Lightning App Builder
        C. Lightning components in Setup

--------------------------------------------------------------------------------

28- The appraisal team at DreamHouse Realty wants to leverage Salesforce mobile app.
What are three things an app builder should do to optimize mobile experience?

Choose 3 answers

A. Create individual customized layouts for different phone operating systems.
B. Use Global Actions to make it easy to perform vital functionality on mobile.
C. Put the most important fields in the compact layout so they are easy to find.
D. minimize the amount of formula fields and lookup fields to reduce page load time.
E. Avoid using default field values so that the user is required to fill in all fields on the
screen.

answer:
        B. Use Global Actions to make it easy to perform vital functionality on mobile.
        C. Put the most important fields in the compact layout so they are easy to find.
        D. minimize the amount of formula fields and lookup fields to reduce page load time.

--------------------------------------------------------------------------------

29- Due to the complexity of the Universal Containers sandbox release schedule and
requirements, it is advised that change sets are used as often as possible to migrate from one
environment to another.
Which three common items can an app builder move when using a change set?

Choose 3 answers

A. Web-to-lead
B. Standard fields
C. Custom object
D. Apex class
E. Custom field

answer: 
       
        C. Custom object
        D. Apex class
        E. Custom field


--------------------------------------------------------------------------------
30- Which two field types can be referenced by a Roll-Up Summary field using MIN or
MAX?
Choose 2 answers
A. Date/time
B. Formula
C. Checkbox
D. Percent

answer:
        A. Date/time
        D. Percent

--------------------------------------------------------------------------------

31-  How should an app builder configure access to a contact’s Twitter profile for
Salesforce mobile app users?

A. Add the Twitter component to mobile view Lightning pages.
B. Add a Twitter Quick Action to the mobile navigation.
C. Add an AppExchange Lightning Component to the mobile app.
D. Add a formula field to the Contact page layout.

answer: A. Add the Twitter component to mobile view Lightning pages.

--------------------------------------------------------------------------------

Ok**32 of 65. What should an app builder do to upgrade an unmanaged package that has been
installed into production?

A. Uninstall the current version and install the new version.
B. Install the new version to a Developer org then deploy to production.
C. Click the update link on the Installed Packages page.
D. Install the new version in a sandbox then deploy to production.

answer: A. Uninstall the current version and install the new version.

--------------------------------------------------------------------------------

33-  A user is unable to use inline editing on a list view. A quick check verifies the user
should be able to perform inlin editing as they have been assigned the appropriate permissions.
Which two conditions should the app builder review?

Choose 2 answers

A. If the list view selected is the recently viewed list view
B. If the list view contains a chart created by the user
C. If the list view contains more than one record type
D. If the list view restricts sharing for the user

answer:
        C. If the list view contains more than one record type
        D. If the list view restricts sharing for the user

--------------------------------------------------------------------------------

ok**34- An app builder needs to create new automation on an object.

What best practice should the app builder follow when building out automation?

A. One invocable process per object.
B. One record change process per object.
C. One Flow per object.
D. Workflow rule per object.

answer: C. One Flow per object.

--------------------------------------------------------------------------------

ok**35- Service agents at Ursa Major Solar want a more condensed case view. Service
agents also want to be able to modify the associated contact and account records from the
case page layout on the Lightning record page.
Which two components should an app builder use to meet these requirements?
Choose 2 answers
A. Tabs
B. Rich text
C. Path
D. Related record
 
answer:
        A. Tabs
        D. Related record

--------------------------------------------------------------------------------


36- Universal Containers (UC) has several large customers that sell their products through
dealers. Each customer and dealer has an individual rep who works directly with UC and each is
billed separately.

How should an app builder implement these requirements?

A. Create both customer and dealer as accounts, create account teams on each account and
associate the dealer records with the parent account.
B. C. Create a single account record, add each rep as a contact and create a custom dealer
object.
C. Create both customer and dealer as accounts, add each rep as a contact on the
corresponding account and create an account hierarchy.
D. Create a single parent record, add each rep as a contact to the parent account and add
each dealer as a child record.


answer: C. Create both customer and dealer as accounts, add each rep as a contact on the
           corresponding account and create an account hierarchy.


--------------------------------------------------------------------------------

37- Universal Containers (UC) wants to build a Recruiting app that allows for multiple
Positions to appear on custom objects Websites and Postings. UC requires a report that shows the
related custom objects of Postings.

Which two items should an app builder configure to implement this?

Choose 2 answers

A. Configure a Postings object with Master-Detail field to both Positions and Websites.
B. Configure a Postings object with Lookup field to both Positions and Websites.
C. Create two new Custom Report Types.
D. Utilize the Standard Report Types.

answer: A. Configure a Postings object with Master-Detail field to both Positions and Websites.
        C. Create two new Custom Report Types.

--------------------------------------------------------------------------------

38-  Universal Containers has a Lightning record page that supports both the mobile app
and desktop. An app builder has downloaded a custom Lightning component from
AppExchange, but users are unable to view the component On mobile devices.
What can be the issue?


A. The record page needs to be activated.
B. The component needs to be activated.
C. The record page template is unable to support mobile devices.
D. The component has been developed for Desktop Pages.

answer: D. The component has been developed for Desktop Pages.

--------------------------------------------------------------------------------

39-  The app builder at Ursa Major Solar has just created a master-detail relationship
between a parent object Galaxy_c and child object Star_c.
What would be the effect of creating this type of relationship if users want to report on Galaxy_c
with Star_c?

A. A Star_c report type with Galaxy_c as a field will be automatically created.
B. A Galaxy_c with Star_c report type will be automatically created.
C. A new custom report type will need to be created for Galaxy_c with Star_c.
D. A new custom report type will need to be created for Star_c with lookup fields from
Galaxy_c.

answer: C. A new custom report type will need to be created for Galaxy_c with Star_c.

--------------------------------------------------------------------------------

ok*40 of 65. Universal Containers wants to provide users with a process to create Opportunity
records related to an Account. Many fields can be populated based on the Account record. Some
fields require input from the user.

What should an app builder configure to meet the requirement?

A. Quick Action on the Account object
B. Process Builder triggered from Account update
C. Quick Action on the Opportunity object
C. Process Builder triggered from Opportunity update

answer: A. Quick Action on the Account object

--------------------------------------------------------------------------------

41- Cloud Kicks (CK) is finding sales reps are inconsistent in data entry when deals are
won. CK requires that custom shoes are shipped within two weeks after the close date. A custom
field called Scheduled Ship Date on the opportunity records the ship date.
How should the app builder ensure this field is properly filled out before setting the opportunity
to closed won?

A. OR(ISPICKVAL( StageName,”Closed Won”) && ( Scheduled_Ship_Date_ c –
CloseDate) > 14, ISBLANK (Scheduled_Ship_Date_c))
B. ISPICKVAL( StageName = “Closed Won”) && ( CloseDate-Scheduled_Ship_Date_c) >
14
C. ISPICKVAL( StageName,”Closed Won”) && ( Scheduled_Ship_Date_c- CloseDate) >
14
D. OR(ISPICKVAL( StageName = “Closed Won”) && ( Scheduled_Ship_Datec –
CloseDate) > 14, ISBLANK(Scheduled_Ship_Date_c))

answer: A. OR(ISPICKVAL( StageName,”Closed Won”) && ( Scheduled_Ship_Date_ c – CloseDate) > 14, ISBLANK (Scheduled_Ship_Date_c))

--------------------------------------------------------------------------------

ok*42 . DreamHouse Realty wants to track how many lifts are being installed into customer
garages. The To Be Installed custom checkbox field on the custom Lift object should be checked
and an external system should be notified via an outbound message the next day when a lift is
sold.
What automation tool should be used to complete this task?
A. Approval process
B. Workflow
C. Process Builder
D. Flow

answer: D. workflow

--------------------------------------------------------------------------------

ok**43- An app builder has been asked to integrate Salesforce with an external web service.
The web service must be notified every time an opportunity is won.
What are two ways to satisfy this requirement?
Choose 2 answers
A. Use a flow and an outbound message.
B. Use Process Builder with an outbound message.
C. Use Process Builder and Apex code.
D. Use a workflow rule and an outbound message.

answer:  C. Use Process Builder and Apex code.
         D. Use a workflow rule and an outbound message.


--------------------------------------------------------------------------------
44-  Universal Containers has a custom picklist called Support Level on the Account object.
They would like to show The real-time value of Support Level on all case records.
How should an app builder implement this requirement?


A. Create a roll-up summary field using Support Level on the Account object.
B. Create a Process Builder and use a field update on the Case object.
C. Create a formula field on the Account object using the ISPICKVAL function.
D. Create a formula field on the Case object using the TEXT function.

answer: D. Create a formula field on the Case object using the TEXT function.

--------------------------------------------------------------------------------


45- On the Account Lightning record page, users need to see ten fields and the ability to
sort and wrap text on their Related Lists.
What Related List type would the app builder select for the Related List Lightning component?

A. Basic List
B. List Class
C. Enhanced List
D. List View

answer: C. Enhanced List

--------------------------------------------------------------------------------

46- An app builder is tasked with adding key performance indicators on client pages. They
want to see a summary of the number of open Opportunities and the number of won
Opportunities for each Account.
Where should the app builder go to build these new rollups?

A. Account Object
B. Lightning Object Creator
C. Lightning App Builder
D. Opportunity Object

answer: A. Account Object

--------------------------------------------------------------------------------

ok**47- An app builder creates an Account validation rule on the Industry field that will throw
an error if the length of the field is longer than six characters. Another app builder creates a
workflow rule with a field update that sets the Industry field to Technology whenever the Billing
City field is set to San Francisco.
What will happen the next time a sales rep saves an Account with a Billing City of San
Francisco?

A. The record will save and the Industry field will change to Technology.
B. The record will save but the Industry field will not change to Technology.
C. The record will not save and the validation rule’s error message will be displayed.
D. The record will not save and no error message will be displayed.

answer: A. The record will save and the Industry field will change to Technology.

--------------------------------------------------------------------------------

48- Sales reps at Universal Containers create multiple quotes per opportunity.
What automation tool should an app builder recommend to delete rejected quotes?

A. Workflow rule
B. Validation rule
C. Flow process
D. Approval process

answer: C. Flow process

--------------------------------------------------------------------------------


49- Cloud Kicks (CK) wants to begin socializing and collaborating within Salesforce
around customer accounts to discuss various topics. CK would like all company employees to
see these conversations.
Which two features of Chatter would meet CK’s business needs?
Choose 2 answers

A. Set up new private Chatter groups.
B. Use post action on the Account object.
C. Set up new public Chatter groups.
D. Use Chatter actions to create tasks to complete.

answer: B. Use post action on the Account object.
        C. Set up new public Chatter groups.

--------------------------------------------------------------------------------

ok**50- Which three Salesforce functionalities are ignored when processing field updates in
workflow rules and approval Processes?
Choose 3 answers

A. Decimal places and character limits
B. Multiple currencies
C. Field-level security
D. Record type picklist value assignments
E. Validation Rules

answer: C. Field-level security
        E. Validation Rules
        D. Record type picklist value assignments

https://help.salesforce.com/s/articleView?id=sf.workflow_field_update_considerations.htm&type=5

--------------------------------------------------------------------------------

51-  What are the limitations of Schema Builder when creating a custom object?

A. Custom fields can be added to any custom objects, excluding formula field types.
B. Fields and relationships can be created, but they will be unable to add the fields to the
page layout From the canvas.
C. “Save” should be clicked each time a new object, field, or relationship is created.
D. ( Relationships can be made to any custom objects, but any relationships to standard
objects should be built in Lightning Object Manager.

answer: B. Fields and relationships can be created, but they will be unable to add the fields to the page layout From the canvas.

--------------------------------------------------------------------------------

52- Universal Containers assigns system access via permission sets and permission set
    groups to ensure each user has proper access. One department with varying levels of support
    staff has five consistent permission sets they require in order to complete their duties. Some
    higher-level staff have additional permission sets that are only required for them.

How should an app builder recommend assigning permission sets to users?

A. Utilize the manage assignments button to assign a permission set group and additional
   individual permission sets to each user.

B. Utilize the manage assignments button to assign each user with the same set of
   permission set groups and permission sets.

C. Utilize the Data Import Wizard to mass update the desired users with their full list of
   permission Sets and permission set groups.

D. Utilize the Data Loader to mass update the desired users with their full list of permission
   sets and Permission set groups.


answer: A. Utilize the manage assignments button to assign a permission set group and additional individual permission sets to each user.

--------------------------------------------------------------------------------

53-  Cloud Kicks wants to make sure that users without the Marketing role are unable to
     update the Contact Retail Opt In picklist field to Yes.

What validation rule would an app builder use to prevent other users from making this update?

A. AND( $UserRole.Name = ‘Marketing’, Retail Opt_In_c = “Yes” )
B. AND(SUserRole.Name != ‘Marketing’, ISCHANGED (Retall Opt_In_c),
   ISPICKVAL(Retail Opt_In_c,”Yes”))
C. AND( $UserRole.Name = ‘Marketing’, ISPICKVAL(Retall Opt_In_c, “Yes”))
D. AND(SUserRole.Name != ‘Marketing’, Retail Opt_In_c = “Yes” )

answer: B. AND(SUserRole.Name != ‘Marketing’, ISCHANGED (Retall Opt_In_c), ISPICKVAL(Retail Opt_In_c,”Yes”))

--------------------------------------------------------------------------------

**54- Universal Containers allows users to create standard reports on demand.

Which three considerations should users be aware of when creating a new report?

Choose 3 answers

A. Charts can be added to summary reports to provide a visualization.
B. Users will need to add the report to a shared folder for other users to see it.
C. Users can require that child objects exist for parent records using a cross filter.
D. Records will be available in the report regardless of security permissions.
E. The report type determines the types of records and fields that will be available.


answer: A. Charts can be added to summary reports to provide a visualization.
        B. Users will need to add the report to a shared folder for other users to see it.
        E. The report type determines the types of records and fields that will be available.


--------------------------------------------------------------------------------

55- Universal Containers (UC) has large data volumes and is nearing data storage limits.
The planned solution is to archive historical data to reduce data storage in Salesforce; however,
UC would still like to use reports, queries, and lookups on the archived information.
Which two options could meet this requirement?

Choose 2 answers
A. Related objects
B. Big objects
C. External objects
D. Custom objects

answer: B. Big objects
        C. External objects

--------------------------------------------------------------------------------

**56- To increase adoption, Universal Containers is proposing changes to its Salesforce data
model to allow easier visibility for sales reps into key metrics. The proposal has three custom
objects related to the Account object, one with a master-detail, and two that are not. Each of
these objects has 15 fields they would like to summarize on
The Account object.
What are two considerations for this proposal?
Choose 2 answers

A. Roll-up summaries are limited to master-detail relationships.
B. Roll-up summaries allow MAX, MIN, SUM, COUNT, and AVG.
C. An object can have 20 object references.
D. An object can have 25 roll-up summaries.

answer: A. Roll-up summaries are limited to master-detail relationships.
        B. Roll-up summaries allow MAX, MIN, SUM, COUNT, and AVG.

--------------------------------------------------------------------------------

57- DreamHouse Realty (DR) employees started using company-owned airplanes for work
travel after Ursa Major Solar was acquired. DR executives want to automate the submission
travel request forms to enforce the internal policy.
How should an app builder automate travel requests based on these criteria?

A. Approval process
B. Process Builder
C. Apex
D. Workflow rule

answer: A. Approval process

--------------------------------------------------------------------------------

58- Universal Containers is piloting new features in an existing sandbox and wants to
    prevent outbound email sends during testing.
    What should the app builder do to meet the requirement?
A. Email deliverability set to system email only.
B. Email deliverability set to no access.
C. Email configured for SMTP authentication.
D. Email relay to the configured host enabled.

answer: B. Email deliverability set to no access.

--------------------------------------------------------------------------------

**59- Ursa Major Solar’s sales team has been struggling to enter data on mobile since rollout;
the team dislikes scrolling through all of the fields to input only the necessary data.
How could the app builder solve this with minimal impact to desktop users?


A. Reorder the fields to make sense for the reps when in the field.
B. Filter components by device using Form Factor.
C. Deselect the phone radio button on the Lightning record page assignment.
D. Update the training documentation with better screenshots.

answer: B. Filter components by device using Form Factor.


--------------------------------------------------------------------------------
60-  Universal Containers (UC) wants to test code against a subset of production data that is
under 5 GB. Additionally, UC wants to refresh this sandbox every weekend.
Which type of sandbox should be used to accomplish this?

A. Partial Copy
B. Full Copy
C. Developer
D. Developer Pro

answer: A. Partial Copy

--------------------------------------------------------------------------------

61-  Universal Containers wants to understand return on investment for the latest
advertising buy. They currently use a private security model for all objects.
What should an app builder recommend?

A. Utilize Account Hierarchies and Roll-Up Summary fields
B. Configure Campaign Hierarchies and Campaign statistics
C. Run an opportunities pipeline report
D. Change to a public security model

answer: B. Configure Campaign Hierarchies and Campaign statistics

--------------------------------------------------------------------------------

62-  Cloud Kicks has a sales rep who is stating that their Contact is unavailable for other
     users to see within Salesforce.
     In which three ways can an app builder troubleshoot this issue?

Choose 3 answers
A. Confirm whether Default Organization-Wide Sharing Settings provide access to the
Account.
B. Review the Contact record and ensure it is linked to an Account.
C. Create a new Contact and have the users try again.
D. Create an Account Sharing Rule to give the users access to all records.
E. Verify the users with the issue have access to the Contact object.

answer: A. Confirm whether Default Organization-Wide Sharing Settings provide access to the Account.
        B. Review the Contact record and ensure it is linked to an Account.
        E. Verify the users with the issue have access to the Contact object.

--------------------------------------------------------------------------------

**63- Universal Containers uses Contracts for agreements with customers. A sales manager is
required to provide approval for contracts and director approval for any contract over $10,000.

Which two options should an app builder use to ensure all contracts route for the correct
approval and also prevent the sales rep from making changes to the record while it is being
approved?

Choose 2 answers

A. Create a validation rule on the Contract object that prevents updates to the contract record
while Is being reviewed.
B. Create an approval process on the Contract object with one step for each sales manager
that sets the approver as the director.
C. Create an approval process on the Contract object with criteria set on a second approval
step set as ‘Amount_c> 10,000’ and set the approver as director.
D. Create an approval process on the Contract object and set the field for ‘Next Automated
Approver Determined By’ as ‘Manager’.

answer: A. Create a validation rule on the Contract object that prevents updates to the contract record while Is being reviewed.
        C. Create an approval process on the Contract object with criteria set on a second approval step set as ‘Amount_c> 10,000’ and set the approver as director.

--------------------------------------------------------------------------------

64- Universal Containers created a custom object called Component to capture details
about products sold.
What approach should an app builder take to show Component as a related list on Product?

A. Create a lookup relationship on Component to Product. Add the Component related list to
the Product page layout.
B. Create a master-detail relationship on Product to Component. Add the Component related
list to the Product page layout.
C. Create a junction object to relate Component and Product. Add the Component related
list to the Product page layout.
D. Create a roll-up on Product. Add the Component related list to the Product page layout.

answer: A. Create a lookup relationship on Component to Product. Add the Component related list to the Product page layout.

--------------------------------------------------------------------------------



65- Ursa Major Solar has made a great app that leadership wants to share with the world for
free via AppExchange.
What should an app builder consider about the type of package when uploading to
AppExchange?
A. Unmanaged packages allow for patches on programmatic changes but not Apex.
B. Managed packages provide intellectual property protection on Apex code.
C. Managed packages need a per-user charge on AppExchange.
D. Unmanaged packages can be set up to prevent user customizations.

answer: B. Managed packages provide intellectual property protection on Apex code.

--------------------------------------------------------------------------------




*/
