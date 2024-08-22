/*

1-Universal Containers manages internal projects by department using a custom object called Projects.
 Only employees in the project's respective department should have view access to all of the department's project records.
 If an employee changes job roles and moves to another department, 
 the employee should no longer have access to the projects within their former department. Which two options will meet
 these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)

A. Create a criteria-based sharing rule using the Project's department that grants access to users by pro¦les.
B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.
C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.
D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups

Answer: C, D

Note: profiles & permission sets they dont dynamically controll access to records, they are static.
    : roles & public groups they can dynamically controll access to records.

----------------------------------------------------------------------------------------------------------------------------

2- Universal Containers has a customer base where many customers have the same or similar company names.
 Which functionality should be configured to improve an end user's search experience? (Choose two.)

A. Update the account search layouts search filter fields.
B. Update the account search layouts accounts tab columns displayed.
C. Update the account search layouts search results columns displayed.
D. Update the account search layouts list view filter settings

Answer: A, C

Note: search filter fields & search results columns displayed they are related to search experience.

    : accounts tab columns displayed & list view filter settings they are not related to search experience.

    :Search layout used to determine which fields are displayed in the search results and which fields are available for search filters.

----------------------------------------------------------------------------------------------------------------------------
3- The previous administrator of the CK Salesforce Org always utilized text as the field type when creating new custom fields.
 CK's current road map requires a project that cleans up this Org during Lightning migration.
Which three field types should be considered to keep better track of contact information in fields? Choose 3 answers

1 -Date
2 -Phone
3 -Email
4 -Number
5- Time

Answer:  Date, Phone, Email

Note: Date, Phone, Email they are related to contact information.

    : Number, Time they are not related to contact information.

----------------------------------------------------------------------------------------------------------------------------
ok 4- An app builder creates an Account validation rule on the Industry field that will throw an error 
if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that
 sets the Industry field to Technology whenever the Billing City field is set to SanFrancisco. What will happen the next 
 time a sales person saves an Account with a Billing City of San Francisco?

A. The record will save and the Industry field will change to Technology.
B. The record will not save and no error message will be displayed.

D. The record will save but the Industry field will not change to Territory.

Answer: C. The record will not save the validation rule's error message will be displayed.

Note: validation rule will not be triggered because the workflow will be triggered first.
    : workflow field update occurs, it does not re-evaluate or trigger validation rules, 
      assignment rules, auto-response rules, or escalation rules.

----------------------------------------------------------------------------------------------------------------------------
5- What is a true statement when deleting a dashboard?

A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.
B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.
C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.
D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.

Answer: A

----------------------------------------------------------------------------------------------------------------------------

**6-A junction object has two Master-Detail relationships, a primary and a secondary master object.
 What happens to a junction object record when both associated master records are deleted?

A. The junction object record is permanently deleted and can't be restored.
B. The delete operation cannot be performed on both master records.
C. The delete operation is not allowed with Roll-up summary fields defined.
D. The junction object records is deleted and placed in the recycle bin.

Answer: A

Note: junction object is a custom object with two master-detail relationships, and is the key to making a many-to-many relationship in Salesforce.

----------------------------------------------------------------------------------------------------------------------------

7-Universal Containers wants its Field Sales team to only see the accounts that they own.
 Separate North American and European marketing teamsshould only see accounts in their respective regions.
  The Inside Sales Team needs to see all accounts in Salesforce. How should an app builder accomplish this?

A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team,
     and create an Inside Sales Team role that is at the top of the Role Hierarchy.

B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team,
   and create an InsideSales Team permission set with the "View All" setting for accounts.

C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team,
   and create an Inside SalesTeam profile with the "View All" setting for accounts.

D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, 
   and create an Inside Sales Team profile with the "View All" setting for accounts.

Answer: D

Note:
Private OWD: Ensures that users only see records they own unless additional access is granted.
Criteria-Based Sharing Rules: Allow you to grant access to specific groups (e.g., Marketing Teams) based on criteria like account 
   region, ensuring that each team only sees accounts in their respective regions.
"View All" Setting for Inside Sales: The Inside Sales Team profile is given "View All" access to the Account object, 
   allowing them to see all accounts regardless of ownership or criteria, fulfilling their need for full visibility.

----------------------------------------------------------------------------------------------------------------------------
8-The app builder has just created a Visual Workflow for the VP of Service.
 Which two Flow be accessed by users? (Choose two.)

A. Custom Button
B. Quick Action
C. Visual Workflow Launcher
D. From a Process

Answer: A, B

Note: Custom Button & Quick Action they are related to access visual workflow.

----------------------------------------------------------------------------------------------------------------------------

9-Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)

A. Validation rules
B. Apex Triggers
C. Apex Classes
D. Visualforce pages

Answer: A, D

Note: Validation rules & Visualforce pages they can be made directly in a production environment without deploying from a sandbox.
    
    :  Apex Triggers and C. Apex Classes typically require deployment from a sandbox to ensure that they are properly tested and 
       validated before being used in production.
    
----------------------------------------------------------------------------------------------------------------------------

10-The Training team at Universal Containers uses a custom Training object to track their customer training sessions.
 An app builder needs to createa relationship between the Training object and the related Students' record.
  Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)

A. On Training record, the Student Lookup field can be made optional.
B. On Student record, users can set up Roll-up summary field on Training records.
C. On Training record, users can only delete Students, if they have access to it.
D. Cross-object field updates between Training and Student records are not supported

Answer: A, D

----------------------------------------------------------------------------------------------------------------------------

11-An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields
 on various objects. Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)

A. Checkbox
B. Date
C. Percent
D. Time
E. Currency

Answer: B, C, E

Note: SUM ----> Number, Currency, Percent
        MIN ----> Number, Currency, Percent, Date ,Date/Time
        MAX ----> Number, Currency, Percent, Date ,Date/Time
        AVG ----> Number, Currency, Percent 
    

----------------------------------------------------------------------------------------------------------------------------

12- Which two are capabilities of record types? (Choose two.)

A. Displaying different field labels.
B. Displaying different page layouts.
C. Filtering picklist values.
D. Having multiple record types on one record.

Answer: B, C

Note: Displaying different page layouts & Filtering picklist values they are related to record types.

----------------------------------------------------------------------------------------------------------------------------
13- A custom object has a Public Read Only sharing setting that does not grant access using hierarchies.
 A dynamic sharing rule provides Write access to the object to the Global Marketing public group if the record is marked as Global.
 A user creates a new record and marks it as Global.Who will have write access to the record?

A. The Global Marketing public group and anyone above the owner in the role hierarchy.
B. The record owner and the Global Marketing public group.
C. The record owner and anyone above the owner in the role hierarchy.
D. The Global Marketing public group, the record owner, and anyone above the owner in the role hierarchy

Answer: B

Note: Public Read Only sharing setting that does not grant access using hierarchies.
        dynamic sharing rule provides Write access to the object to the Global Marketing public group 
        if the record is marked as Global.
        The record owner and the Global Marketing public group.

----------------------------------------------------------------------------------------------------------------------------

14-Which three are features of the Custom Button? (Choose three.)

A. Custom Button with Javascripts enhance Lightning Experience.  // false because Custom Button with Javascripts enhance Classic Experience.
B. Custom Button is available for User Object.                   // false because Custom Button is not available for User Object.
C. Custom Button display at the top and bottom of a page.
D. Custom Button is available for Person Account.
E. Custom Button can reference an external app.

Answer: C, D, E

Note: Custom Button display at the top and bottom of a page.
      Custom Button is available for Person Account.
      Custom Button can reference an external app.

----------------------------------------------------------------------------------------------------------------------------
15- Universal Containers has two teams: Sales and Services. Both teams interact with the same records.
 Sales users use ten fields on the Accountrecord. Service users use three of the same fields as the Sales team,
  but also have five of their own, which the Sales team does not use.What is the minimum configuration necessary to meet
   this requirement?

A. One profiles, one record type, one page layout.
B. One profiles, two record types, one page layout.
C. Two profiles, two record types, two page layouts.
D. Two profiles, one record type, two page layouts

Answer: D

----------------------------------------------------------------------------------------------------------------------------

16-
*/