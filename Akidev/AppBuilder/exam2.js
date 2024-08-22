/*

1- Universal Containers is piloting new features in an existing sandbox and wants to
   prevent outbound email sends during testing.

What should the app builder do to meet the requirement?
A. Email configured for SMTP authentication.
B. Email deliverability set to system email only.
C. Email deliverability set to no access.
D. Email relay to the configured host enabled

answer: C. Email deliverability set to no access.


-------------------------------------------------------------------------------------

2- The marketing team at Universal Containers has a list of 400 leads it wants to upload to
Salesforce. The team needs to avoid creating duplicate records.
Which two actions should be taken to meet this requirement?
Choose 2 answers

A. Use Data Loader's update function to import leads and match to existing records based on email address.
B. Utilize a Lead Matching Rule and corresponding Duplicate Rule to block newly created duplicate leads.
C. Enable Duplicate Matching in the Data Management section in Setup and activate the Leadto-Lead scenario
D. Upload the lead list using the Import Wizard and select a Matching Type to prevent duplicate lead creation.

answer: B. Utilize a Lead Matching Rule and corresponding Duplicate Rule to block newly create duplicate leads.
        D. Upload the lead list using the Import Wizard and select a Matching Type to prevent duplicate lead creation.


-------------------------------------------------------------------------------------

3- Cloud Kicks wants to know the total value of all won Opportunities for Accounts and display it on the record.
What type of summary should the app builder use in the roll-up summary field?

A. Count
B. Sum
C. Min
D. Max

answer: B. Sum

-------------------------------------------------------------------------------------

4- Service Agents are required to confirm a user's identity before providing support information over the phone.
What feature can an app builder use to help agents meet this requirement?

A. Guided Action Flows on the record page.
B. Case Validation Rules.
C. Add Path to the top of the Case layout.
D. Include Surveys as a Case related list.

answer: A. Guided Action Flows on the record page.

-------------------------------------------------------------------------------------

5- Universal Containers is expecting impacts to operations due to increased demand. The executive team will be reaching out to
   current customers and want to see the number of open cases for the account and parent account.
   Which two tools could an app builder combine to display the number of open cases on the account page?
Choose 2 answers
A. Workflow
B. Process Builder
C. Approval Process
D. Flow

answer: B. Process Builder
        D. Flow

-------------------------------------------------------------------------------------

6- An app builder needs a custom solution and is considering using either AppExchange or their local developer community.
 Ease of updates is the primary consideration. What should the app builder consider?

A. An open-source custom development
B. An unmanaged package from AppExchange
C. An open-source unmanaged package
D. A managed package from AppExchange

answer: D. A managed package from AppExchange

because managed packages are easier to update than unmanaged packages.

-------------------------------------------------------------------------------------

7-Ursa Major Solar wants to provide sales console users with an incredible experience,
with the most used components easily accessible at all times.
What solution can enable reps to see and access these components from anywhere within the app
without leaving the page where the team is working?

A. Favorites
B. Home page
C. Utility bar
D. Global actions

answer: C. Utility bar

-------------------------------------------------------------------------------------

**8-. Which two options are available to an app builder when defining an object-specific create record custom action?
Choose 2 answers

A. Allowing the end user to choose the record type.
B. Redirecting the end user to the detail page of the target object.
C. Pre-defining field values on the target object.
D. Specifying the fields and layout of the action.

answer: C. Pre-defining field values on the target object.
        D. Specifying the fields and layout of the action.

why? because the create record custom action allows you to predefine field values on the target object and specify
     the fields and layout of the action.

-------------------------------------------------------------------------------------
**9- After Universal Containers converts qualified Leads, Sales Reps need to be able to report on converted leads.
How should an app builder support for this requirement?

A. Ensure the representative has Read access to the original lead records.
B. Create a custom report type with Converted Leads as the primary object.
C. Enable Preserve Lead Status in the lead conversion settings.
D. Assign the representative View and Edit Converted Leads permission.

answer: B. Create a custom report type with Converted Leads as the primary object.

-------------------------------------------------------------------------------------

10- DreamHouse Realty (DR) is expanding into subsidized housing by partnering with
local government entities. DR uses Sales Cloud and has enabled field history tracking on the
Opportunity object. Due to increased information requirements, the App Dev team is changing
Text Area (Long) fields to Rich Text fields to allow for up to 1,000 characters and better
descriptions,
Which two considerations should be made by the team?
Choose 2 answers

A. Field History Tracking records value changes of 255 characters or less.
B. Data loss may occur when changing custom field types.
C. Audit Trail is available through REST API extracts.
D. Rich text field values of all lengths are displayed fully in reports.

answer: A. Field History Tracking records value changes of 255 characters or less.
        B. Data loss may occur when changing custom field types.

-------------------------------------------------------------------------------------


11- Universal Containers wants to ensure that they are accepting clean data from their users and verify that important fields 
are entered.
What should an app builder recommend to meet this requirement?

A. Configure a validation to require a field for a specific record type.
B. Make a formula field to check the format of the important fields.
C. Create a workflow rule to check the fields are formatted correctly.
D. Update the important fields to be required on the page layout.


Answer: A. Configure a validation to require a field for a specific record type.

-------------------------------------------------------------------------------------


**12- An app builder notices several Accounts converted from Leads are missing information they expected to be caught via Account
 validation rules.
 What could be the source of this issue?

A. Account validation rules fail to validate on records converted from a lead.
B. The lead settings are unchecked to require validation for converted leads.
C. The lead settings are allowing users to intentionally bypass validation rules,
D. Lead validation rules fail to validate on records when they are being converted.

Answer: A. Account validation rules fail to validate on records converted from a lead.
       B

-------------------------------------------------------------------------------------



**13- When configuring a record type, an app builder can configure the available value of a picklist field for the page layout.
Which two Opportunity standard fields are available to be configured directly in the Opportunity
record type?
Choose 2 answers
A. Type
B. Lead source
C. Stage
D. Forecast category

Answer: A. Type
        C. Stage

-------------------------------------------------------------------------------------

14- Universal Containers created a 'New Task' custom action on the Opportunity object.
The action was added to all page layouts in the Mobile & Lightning Actions section.
Which Lightning component should the app builder add to the layout to display the action?

A. Highlights panel
B. Related lists
C. Activities
D. Related record

Answer: C. Activities

-------------------------------------------------------------------------------------



15- How should an app builder configure access to a contact's Twitter profile for Salesforce
mobile app users?

A. Add the Twitter component to mobile view Lightning pages.
B. Add an AppExchange Lightning Component to the mobile app.
C. Add a formula field to the Contact page layout.
D. Add a Twitter Quick Action to the mobile navigation.

Answer: A. Add the Twitter component to mobile view Lightning pages.

-------------------------------------------------------------------------------------

16- A sales manager at Cloud Kicks wants the team to spend more time in the field and less
time manually entering the information found on the business cards they collect.
What should an app builder do to help achieve this goal without sacrificing data quality?

A. Use a combination of workflow rules and formula fields to populate key fields for the sales
user.
B. Post daily to the Chatter feed any relevant fields that need to be populated.
C. Research and evaluate data enrichment products on the AppExchange to automate data entry.
D. Use Flow to create a data entry wizard to automate data entry.

Answer: C. Research and evaluate data enrichment products on the AppExchange to automate data entry.

-------------------------------------------------------------------------------------


17- An app builder has created a new report type but users are unable to select it from the Report Type list when making 
a new report for records they own.
What could be causing this issue?

A Access to Create and Customize Reports is disabled.
B. Access to the necessary object is unavailable.
C. The report type is in a status of Deployed.
D. The report type is in a status of In Development.

Answer: D. The report type is in a status of In Development.

-------------------------------------------------------------------------------------

18- A recently refreshed partial sandbox at Cloud Kicks has no data in the custom object
Shipping. Checking in production, there are two million rows of data in the object.
What could be the reason the data is missing?

A. The sandbox is still populating data.
B. The selected objects in the sandbox template.
C. The partial sandbox is at capacity.
D. The sandbox was refreshed too early.

Answer: B. The selected objects in the sandbox template.

why? because the Shipping object was not selected in the sandbox template.
-------------------------------------------------------------------------------------

**19- What are two capabilities of Schema Builder?
Choose 2 answers

A. Editing custom settings                 -
B. Creating a new record type
C. Viewing page layouts in a new window    -
D. Showing selected objects on a page      -

Answer: A. Editing custom settings
        D. Showing selected objects on a page

-------------------------------------------------------------------------------------

20- Universal Containers (UC) wants to delete data in several fields for 5,000 Lead records.
UC exported the selected Record IDs and fields that need to have data deleted in a CSV file.
Which two steps should an app builder suggest to meet these requirements?
Choose 2 answers

A. Use Data Loader to update leads using the csv file.
B. Use Import Wizard to update leads using the CSV file.
C. Select the correct record type.
D. Select Insert Null Values in Settings.


Answer: A. Use Data Loader to update leads using the csv file.
        D. Select Insert Null Values in Settings.

-------------------------------------------------------------------------------------
21- Cloud Kicks has five years of sales data and would like to track when customers made their first purchase.
    How should an app builder use a roll-up summary to meet the requirements?

A. Create a new date field called First Order Date, create a new Workflow to set the date, and
   roll up the value with a filter where IsWon = TRUE.
B. Create a new roll-up summary field called First Order Date, using Type MIN on the
   Opportunity Close Date with a filter where IsWon = TRUE.
C. Create a new roll-up summary field called First Order Date, using Type SUM on Opportunity
   Close Date.
D. Create a new date field called First Order Date, then create a roll-up summary to update the
   field using Type MIN.

Answer: B. Create a new roll-up summary field called First Order Date, using Type MIN on the
              Opportunity Close Date with a filter where IsWon = TRUE.


-------------------------------------------------------------------------------------
22- Universal Containers (UC) tracks Account locations in Zip Code, a custom text field with a validation rule to
    enforce proper formatting of the US ZIP+4 code for UC's orders.
   What formula should the app builder create on Order to display only the first five digits of Zip Code from the parent Account?

A. LPAD(Account.Zip_ Code_r 15)
B. LEFT(Account.Zip _Code_c, 5)
C. TEXT(Account.zip _Code _c, 5)
D. BEGINS(Account.Zip _Code__r. 5)

Answer: B. LEFT(Account.Zip _Code_c, 5)

-------------------------------------------------------------------------------------

23-  An app builder is asked to create a sandbox for a developer. The developer will be
testing robust sample data sets and will need to store up to 250 MB of data. The sandbox will be
refreshed each day.
What type of sandbox should the app builder create?

A. Developer pro sandbox
B. Partial copy sandbox
C. Full sandbox
D Developer sandbox

Answer: A. Developer pro sandbox

-------------------------------------------------------------------------------------
**24- The Director of Customer Service wants to receive a notification when a case stays in
    the new status for more than four business hours.
    Which two automation processes should be used to accomplish this?

Choose 2 answers
A. Process Builder
B. Flow Builder
C. Escalation rules
D. Scheduled Apex

Answer: B. Flow Builder
        C. Escalation rules

-------------------------------------------------------------------------------------

25- Universal Containers (UC) has large data volumes and is nearing data storage limits.
The planned solution is to archive historical data to reduce data storage in Salesforce; however,
UC would still like to use reports, queries, and lookups on the archived information.
Which two options could meet this requirement?

Choose 2 answers
A. Custom objects
B. External objects
C Related objects
D. Big objects

Answer: B. External objects
        D. Big objects

-------------------------------------------------------------------------------------


26- DreamHouse Realty (DR) has many properties for sale and wants to identify the
    highest value of all offer_c records on each Property_c record.
    What solution should the app builder use to meet DreamHouse Realty's needs?

A. Multi-select Picklist
B. Text Area (Long)
C. Lookup Object
D. Master-Detail Child Object

Answer: D. Master-Detail Child Object

-------------------------------------------------------------------------------------


**27- The CFO wants to make sure that a deal with more than a 40% discount gets approved
    by the VP of Finance before a quote is sent to the customer.
    In which two ways can this be accomplished?

Choose 2 answers
A. Launch a flow that uses a submit for approval action to submit deals for approval.
B. O Launch a new approval process that has automatic submission enabled as an initial
submission
action.
C. Create a new process with a submit for approval action to automatically submit deals for
approval.
D. Create a new approval process that has automatic submission enabled in the entry criteria.

Answer: A. Launch a flow that uses a submit for approval action to submit deals for approval.
        D. Create a new approval process that has automatic submission enabled in the entry criteria.

-------------------------------------------------------------------------------------

28- Universal Containers (UC) delivers purchased containers to remote construction sites.
Customers supply UC with crossroads or location markers.
What type of field should the app builder use to capture this information?

A. External Lookup
B. Number
C. Formula
D. Geolocation

Answer: D. Geolocation

-------------------------------------------------------------------------------------


**29- A Manager at Universal Containers has requested that a custom text field be converted
to a picklist in order to promote better data hygiene.
Which two actions should be considered before changing the field type?

Choose 2 answers
A. All data should be backed up before converting a text field.
B. Existing list views that reference the field may be deleted.
C. Field references will be removed in Visualforce pages.
D. Changing a field type will remove existing field history.

Answer: A. All data should be backed up before converting a text field.
        B. Existing list views that reference the field may be deleted.

-------------------------------------------------------------------------------------


30- At Universal Containers, the VP of Service has requested a visual indicator flag on
each case, based on the case priority. High-priority cases should be flagged red, medium-priority
should be flagged yellow, and low-priority cases should be flagged green.
Which two formulas will accomplish this requirement?
Choose 2 answers

A. IMAGE( CASE( Priority, "Low", "/img/samples/flag_green.gif", "Medium",
"/img/samples/flag_yellow.gif", "High", "/img/samples/flag_red.gif", "/s.gif"), "Priority Flag")

B. IF(ISPICKVAL(Priority, "low"); "/img/samples/flag_green.gif" , IF(ISPICKVAL(Priority,
"Medium"),
"/img/samples/flag_yellow.gif" , IF(ISPICKVAL(Priority, "High"), "/img/samples/flag_red.gif",
/s.gif")))

C. IMAGE( IF(ISPICKVAL(Priority, "Low"), "/img/samples/flag_green.gif"
,IF(ISPICKVAL(Priority,"Medium"), "/img/samples/flag_yellow.gif" ,IF(ISPICKVAL(Priority, "High"),
"/img/samples/flag_red.gif", "/s.gif") ) ), "Priority Flag")

D. CASE( Priority, "Low", "/img/samples/flag_green.gif", "Medium","/img/samples/flag_yellow.gif,"High",
 "/img/samples/flag_red.gif", "75.gif">

Answer: A. IMAGE( CASE( Priority, "Low", "/img/samples/flag_green.gif", "Medium",
"/img/samples/flag_yellow.gif", "High", "/img/samples/flag_red.gif", "/s.gif"), "Priority Flag")
        C. IMAGE( IF(ISPICKVAL(Priority, "Low"), "/img/samples/flag_green.gif"


-------------------------------------------------------------------------------------

** imp 31. Universal Containers uses Contracts for agreements with customers. A sales manager is
required to provide approval for contracts and director approval for any contract over $10,000.
Which two options should an app builder use to ensure all contracts route for the correct
approval and also prevent the sales rep from making changes to the record while it is being
approved?
Choose 2 answers

A. Create an approval process on the Contract object with criteria set on a second approval step set as
"Amount_c > 10,000" and set the approver as director.

B. Create an approval process on the Contract object and set the field for 'Next Automated Approver Determined By as Managerl.

C. Create an approval process on the Contract object with one step for each sales manager that sets
the approver as the director,

D. Create a validation rule on the Contract object that prevents updates to the contract record while it
is being reviewed

Answer: A. Create an approval process on the Contract object with criteria set on a second approval step set as
           "Amount_c > 10,000" and set the approver as director.
        D. Create a validation rule on the Contract object that prevents updates to the contract record while it
           is being reviewed

-------------------------------------------------------------------------------------

32- Sales reps at Cloud Kicks (CK) forget to submit for approval when CK needs orders
reviewed before cose won. CK wants to automatically submit opportunities into the Secure
Commitment Stage to eliminate manual submission.
Which three features would meet the business requirements?

Choose 3 answers
А. Apex
B Workflow
C.Process Builder
D. Chatter action
E. Flow

Answer: A. Apex
        C.Process Builder
        E. Flow

-------------------------------------------------------------------------------------

33-Cloud Kicks (CK) wants to track orders against inventory, ensuring its ability to fulfill
order requests. CK created a junction object called Request Inventory to enable many-to-many
relationships with the Inventory and Order objects.
What does the app builder need to provide to ensure users can view Request Inventory records?

A. Sharing rules on Request Inventory object.
B. Apex-based sharing on the first master object.
C. Read access to both master objects.
D. Read access to the first master object.

Answer: C. Read access to both master objects.

-------------------------------------------------------------------------------------
34- An app builder wants to streamline the user experience by reflecting summarized
calculations of specific fields on various objects
Which three field types can be used in roll-up summary fields to accomplish this?
Choose 3 answers

A. Checkbox
B. Time
C. Currency
D. Date
E. Percent

Answer: C. Currency
        D. Date
        E. Percent

-------------------------------------------------------------------------------------

35- Sales reps at Universal Containers use Salesforce on their mobile devices. They want a
way to add new contacts quickly and then follow up later to complete the additional information
necessary.
what mobile solution should an app builder recommend?

A. Build a global action to create Contacts
B. Use Path and set pre-defined values.
C Add a compact layout to Contacts
D. Customize the mobile menu to move Contacts to the top.

Answer: A. Build a global action to create Contacts

why? because a global action allows users to create records quickly and easily from anywhere in Salesforce.

-------------------------------------------------------------------------------------

36. Universal Containers needs the 18-digit record ID from Opportunity records when
exporting data to Excel in order to ensure each record is treated uniquely.
What formula should an app builder use to create this new field?

A. VALUE(ID)
B. TEXT(ID)
C. CASESAFEID(ID)
D. ISNUMBER(ID)

Answer: C. CASESAFEID(ID)

why? because CASESAFEID() function returns the 18-character record ID for the specified 15-character record ID.

-------------------------------------------------------------------------------------

37- Universal Containers has a requirement that an opportunity should have a field showing
the value of its associated account's billing state. This value should be static after the opportunity
has been created.
What is the recommended solution to configure this automation behavior?
A. Apex
B. Workflow
C. Formula field
D. Roll-up summary field

Answer: B. Workflow

why? because a workflow rule can be used to update a field on the opportunity with the value of the associated account's billing state.

-------------------------------------------------------------------------------------

38- Northern Trail Outfitters uses a custom object to track travel requests. Rangers want to
    have automatic posts on a record whenever a travel request has been approved.
    Which feature should be used to accomplish this?
А. Workflow rule
B. Feed tracking
C. Auto-response rule
D. Feed quick action

Answer: B. Feed tracking

why? because feed tracking allows users to follow records and receive updates when changes are made to the record.

-------------------------------------------------------------------------------------
27 of 65. Cloud Kicks (CK) tracks the support level of its customers on the account record page.
CK wants to show a text notification on a case record page when the related account is a
platinum-level customer.
How could an app builder meet this requirement?
A. Create a text-only Visualforce page > Drag the visualforce component into the Case page
layout >
Set its visibility to show when the account support level is platinum.
B. Clone the Case Lightning page > Add a rich text area to the new page, and assign this page to
platinum accounts.
C. Create a text-only Visualforce page > Clone the case page layout > Drag the Visualforce
component
into the page, and assign the layout to platinum cases.
D. Add a rich text area to the Case Lighting page > Set the component visibility of the rich text
area to
show when the account support level is platinum.
24 of 65. DreamHouse Realty (DR) has a policy that requires the phone number on Contact to be
deleted when the DoNotCall checkbox is checked.
What automation tool should the app builder recommend?
A. Workflow rule
B. Approval process
C. Validation rule
D. Quick action.
25 of 65. Universal Containers wants users to have access to the pricing guidelines document
when viewing a Contract related to an Account.
What feature should an app builder use to create easy access to the document?
www.salesforcekeeda.com Telegram: @salesforcekeeda WhatsApp: Salesforce Keeda
A. A custom detail page link on the Contract object
B. A custom detail page link on the Account object
C. Quick Action on the Contracts object
D. Quick Action on the Account object
26 of 65. Universal Containers has two types of applicants, hourly and salary. There are separate
record types for each. While all members of the human resource department need to be able to
view all applicant records, only the hiring Manager and VP of HR should be able to create salary
applicant records.
What should the app builder recommend to meet this requirement?
A. Configure the hourly record type as the default and instruct non-management users to
accept the default record type.
B. Create a permission set containing the salary record type and assign it to the appropriate
users.
C. Remove "create" permission for the salary applicant object for everyone except the
manager and VP
D. Update the org-wide default to private and create a sharing rule for the role of recruiting
manager.
22 of 65. Which two solutions prevent a formula field from being referenced by a Roll-Up
Summary field?
Choose 2 answers
A. A cross-object field reference in the formula field
B. The Now ()function in the formula field
C. The CASE()function in the formula field
D. A cross-object workflow updating a field referenced by the formula field
23 of 65. Universal Containers wants the sales reps to clean up its Salesforce customer contacts
using the Contacts tab.
Which two solutions can be used to support and simplify this process using a list view?
Choose 2 answers
www.salesforcekeeda.com Telegram: @salesforcekeeda WhatsApp: Salesforce Keeda
A. Filter the list view by customer record type and enable inline edit functionality.
B. Add a chart to the list view to show the percentage of contacts that have already been cleaned
up.
C. Clone a master list view for each user on the team so they can view their customers.
D. Make the list view dynamic so only "My Contacts are visible to the user.
21 of 65. Cloud Kicks recently implemented the application lifecyde management process to its
release management strategy.
Which category handles bug fixes and simple changes?
A. Patch
B. Minor
C. Major
D. Rollback
18 of 65. Universal Containers uses the Asset object to track products that are installed at
customer locations. A new object, Asset Inventory, has been created to capture details about the
asset.
Which approach should the app builder take to show Asset Inventory as a related list on Asset?
A. Create a roll-up on Asset. Add the Asset Inventory related list to the Asset page layout.
B. Create a master-detail relationship on Asset to Asset Inventory Add the Asset Inventory
related list to the Asset page layout.
C. Create a junction object to relate Asset Inventory and Asset. Add the Asset Inventory
related list to the Asset page layout.
D. Create a lookup relationship on Asset Inventory to Asset. Add the Asset Inventoryc
related list to the Asset page layout.
19 of 65. Universal Containers uses a private sharing model on Accounts. User A and user B
both own Accounts of their ownand have both been sent a new account record in an email owned
by user C to take a look at. User A is able toopen and view the record but user B receives an
insufficient privileges error. User A and user B have the same role in the role hierarchy as user
C.
www.salesforcekeeda.com Telegram: @salesforcekeeda WhatsApp: Salesforce Keeda
What are the three reasons user A has access but user B is unable to access the record?
Choose 3 answers
A. User A is on the same account team as user C.
B. User A and user B have different profiles.
c. User A is in a public group that has access via a sharing rule.
D. User A was granted an additional permission set.
E.User C has manually shared the record with user A.
20 of 65. An app builder is preparing to deploy a new app from the sandbox to production using
change sets,
What two considerations should an app builder keep in mind during this process?
Choose 2 answers
A. Transactions will nevert if the deployment errors.
B. Users should be logged out of production when receiving inbound change sets.
C. Salesforce Connect automatically establishes a link between environments.
D. Change sets do not include all components and may have to perform some changes manually,
15 of 65. Cloud Kicks wants to make sure that users without the Marketing role are unable to
update the Contact Retail Opt In picklist field to Yes.
What validation rule would an app builder use to prevent other users from making this update?
A. AND( $UserRole.Name = "Marketing', Retail_Opt_In_c="Yes")
B. AND( $UserRole Name - Marketing', ISCHANGED(Retail_Opt_In_c),
ISPICKVAL(Retail_Opt_In_c. "Yes"))
C. AND( $User Role.Name = 'Marketing', ISPICKVAL(Retail_Opt_In_c, "Yes"))
D. AND( $UserRole. Name != 'Marketing', Retail_Opt_in_c = "Yes" )
www.salesforcekeeda.com Telegram: @salesforcekeeda WhatsApp: Salesforce Keeda
16 of 65. An app builder at Cloud Kicks created a custom object and related fields in the schema
builder.
What next steps should the app build take to ensure users can access the new object and fields?
A. Assign data types to the fields on the object.
B. Add the fields to the page layout on the object.
C. Create a permission set for access to the object and fields.
D. Allow reporting for the object and fields.
17 of 65. Universal Containers (UC) wants to build a Recruiting app that allows for multiple
Positions to appear on custom objects Websites and Postings. UC requires a report that shows the
related custom objects of Postings.
Which two items should an app builder configure to implement this?
Choose 2 answers
A. Utilize the Standard Report Types.
B. Configure a Postings object with Master-Detail field to both Positions and websites.
C. Create two new Custom Report Types.
D. Configure a Postings object with Lookup field to both Positions and websites.
14 of 65. Cloud Kicks received a new requirement to calculate summaries from child objects of a
standard object. The team would prefer to solve this dedaratively,
What are two considerations an app builder should evaluate?
Choose 2 answers
A. A trigger on save or update can kick off calculations.
B. An object can have up to two master-detail relationships.
C. An app builder is unable to change a lookup to a master-detail relationship.
D. A value is required in all records of the lookup field prior to converting to a master-detail
relationship.
www.salesforcekeeda.com Telegram: @salesforcekeeda WhatsApp: Salesforce Keeda
13 of 65. Accounts at Universal Containers are currently readable by all users but editable only
by their owners. Management wants to designate some Accounts as VIP Accounts. Only
Account owners should have read access to these VIP accounts.
Which two actions should an app builder take to meet the requirements?
Choose 2 answers
A. Configure a permission set.
B. Implement a sharing rule.
C. Change organization-wide defaults.
D. Set up an Account Team.
12 of 65. Which two places can an app builder go to see a list of available Custom Lightning
components in their org?
Choose 2 answers
A. Visualforce components in Setup
B. Lightning components in Setup
C. Lightning component Generator
D. Lightning App Builder
9 of 65. Cloud Kicks works on an annual subscription model. When a sales rep marks an
opportunity as closed won, a new opportunity should automatically be created for the renewal.
The contracts team works outside of Salesforce but also needs to be notified about closed deals
in order to initiate the contract process with the customer.
Which automation solution would meet these requirements?
A. Process Builder
B. Workflow Rule
C. Validation Rule
D. Approval Process
www.salesforcekeeda.com Telegram: @salesforcekeeda WhatsApp: Salesforce Keeda
10 of 65. Cloud Kicks has created a custom object called Interests which is joined to Accounts
by way of a junction object called Account Interest What is the impact to users attempting to
view an Account and the associated Account Interest records if they are
without read access to the Interest object?
A.Users will be able to view the Account Interest record, but unable to view the field or any
information relating back to the Interest record.
B. Users will be unable to view Account records that have a related Account Interest record.
C. Users will be unable to view the Account Interest records or the Interest records.
D. Users will be able to view the Account Interest records and will have read-only access to the
Interest records,
11 of 65. Cloud Kicks conducts an evaluation of sales reps with a custom object that houses a
scorecard.
The company wants to ensure that only the sales reps, their managers, and their manager's
executives can view the rep's scorecard, but also prevent the reps from being able to view the
executive comment fields on their review.
How should these requirements be met?
A. Use a private sharing model granting record access using hierarchy; manage field access with
record types and field-level security.
B. Use a private sharing model granting record access using hierarchy: manage field access with
fieldlevel security
c. Use a private sharing model granting record access using custom settings: manage field access
with
page layouts and field-level security.
D. Use a private sharing model granting record access using custom settings; manage field
access with
record types and page ayouts.
www.salesforcekeeda.com Telegram: @salesforcekeeda WhatsApp: Salesforce Keeda
8 of 65. An app builder wants to create a report to compare the number of support cases in each
status (New, In-progress, or Closed) and by priority (Critical, High, Medium, or Low).
What solution should be used for the report?
A. Filters
B.Grouping
c. Custom Report Type
D. Bucket Columns
7 of 65. An app builder is creating a Lightning record page and has added Mobile & Lightning
Actions to the page layout.
What two components could be included on the layout to display the actions?
Choose 2 answers
A. Chatter
B. Highlights panel
C. Activities
D. Path
6 of 65. Universal Containers (UC) has a custom Invoice object and a custom Invoice Line Item
object. The Invoice Line Item object has a lookup relationship to the Invoice. UC would like to
convert the lookup relationship to a master- detail relationship but is unable to do so.
Which two reasons could be preventing this relationship conversion?
Choose 2 answers
A. There are already two master-detail relationships on the Invoice Line Item.
B. Invoice Line Item records exist without having the Invoice lookup field populated.
C. Custom objects are unable to be on the detail side of a master-detail relationship.
D. There is a roll-up summary field on the Invoice object.
3 of 65.
www.salesforcekeeda.com Telegram: @salesforcekeeda WhatsApp: Salesforce Keeda
Universal Containers require different fields to be filled out at each stage of the Opportunity
sales process.
What configuration steps can an app builder use to meet this requirement?
A. Define record types and page layouts for each stage.
B. Create a Process Builder to prompt the User for field information.
C. Set page layout required fields based on the current stage.
D. Add the Path component to the Lightning record page.
4 of 65. An app builder needs to deploy a new account detail page layout from sandbox to
production.
Which three components should an app builder include in the Change Set to ensure it deploys
successfully and visually as expected?
Choose 3 answers
A. Custom fields
B.Custom actions
C. Detail page layout
D. Lightning App Builder
E. System administrator profile
5 of 65. Universal Containers wants sales reps to get permission from their managers before
deleting Opportunities.
What can be used to meet these requirements?
A. Process Builder with Submit for Approval action
B. Approval Process with Time-Dependent Workflow action
C. Two-step Approval Process
D. Approval Process with Apex Trigger
www.salesforcekeeda.com Telegram: @salesforcekeeda WhatsApp: Salesforce Keeda
2 of 65. An app builder has downloaded a component from the AppExchange successfully;
however, they are unable to add it to the Lightning home page.
Which two reasons can be preventing the app builder from being able to add the custom
component?
Choose 2 answers
A. The component requires a developer permission to add it to the page with the App Builder
B. My Domain must be deployed to add custom components to the page with the App Builder.
C A custom tab must be created to add custom components to the page with the App Builder.
D. The component is tagged for record pages instead of home pages and is not showing up in the
App
Builder
1 of 65. Universal Containers wants to collaborate with its customers within Salesforce and has
decided to enable the Allow Customer Invitations in the Chatter settings.
Which permission is granted to customers when invited to a Chatter group?
A. The ability to invite members to groups of which they are a member.
B. The ability to interact with members of their groups.
C. The ability to request access to public groups.
D. The ability to @mention accounts of which they are a contact.



*/
