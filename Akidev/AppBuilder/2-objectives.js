/*
1-A Salesforce organization uses a custom object to capture expense data.
 One of their requirements is to ensure that an expense record is only visible to the respective record owners and
 those above them in the organization hierarchy. Which of these Salesforce features can be configured to meet this requirement? (2)

A.) OWD
B.) Role Hierarchy
C.) Expense Sharing Rule
D.) Permission Sets



A.) OWD
  - correct: OWD can be used to restrict access to records based on the organization-wide defaults.

B.) Role Hierarchy
    - correct: Role Hierarchy can be used to grant access to records based on the role hierarchy.

C.) Expense Sharing Rule
    - incorrect: Sharing Rules can be used to grant access to records based on criteria, but not based on the role hierarchy.

D.) Permission Sets
    - incorrect: Permission Sets can be used to grant additional permissions to users, but not to restrict access to records based on the role hierarchy.

--------------------------------------------------------------------------------
2-Global Systems requires that some specific Opportunities be collaborated on by multiple Regional Sales Managers 
so that they are closed efficiently. Collaborating on an Opportunity is an ad hoc decision taken by a Regional Sales Manager,
 and there is no common criterion used to determine such Opportunities. Which Salesforce feature would help in achieving this use
  case? (1)

A.) Manual Sharing
B.) Programmatic Sharing
C.) Roles
D.) Sharing Rules


A.) Manual Sharing
    - correct: Manual Sharing allows users to share individual records with other users without any criteria.

B.) Programmatic Sharing
    - incorrect: Programmatic Sharing is not a standard Salesforce feature.

C.) Roles
    - incorrect: Roles are used to define the hierarchy of the organization and do not directly help in sharing records.

D.) Sharing Rules
    - incorrect: Sharing Rules are used to grant access to records based on criteria, not based on ad hoc decisions.

--------------------------------------------------------------------------------

3-Cosmic Smart Solutions has a group of support users who require access to Salesforce.
  All these users need access to Chatter features and activities. A few of these users also require the ability
  to view and edit cases and records of a custom object called ‘Product Issue’. None of the users should be able
  to view or edit the records of any other object. Which solution should be utilized to ensure that these users have 
  the required permissions? (1)

A.) Assign the ‘Read Only’ profile to all the users and assign a permission set to the users who require additional access.

B.) Assign the ‘Standard Platform User’ profile to all the users and assign a permission set to the users who require additional access.

C.) Assign the ‘Minimum Access - Salesforce’ profile to all the users and assign a permission set to the users who require additional access.

D.) Assign the ‘Standard User’ profile to all the users and assign a permission set to the users who require additional access.



A.) Assign the ‘Read Only’ profile to all the users and assign a permission set to the users who require additional access.
    - incorrect: because users should not view or edit records of any other objects

B.) Assign the ‘Standard Platform User’ profile to all the users and assign a permission set to the users who require additional access.
    - incorrect: It is more than what is required for this scenario.

C.) Assign the ‘Minimum Access - Salesforce’ profile to all the users and assign a permission set to the users who require additional access.
    - correct: provides the minimum access required for users to access Salesforce.

D.) Assign the ‘Standard User’ profile to all the users and assign a permission set to the users who require additional access.
    - incorrect: It is more than what is required for this scenario.


--------------------------------------------------------------------------------

4-There is a requirement that when the ‘Audit’ field on an Account record is marked as ‘Y’, all audit team members should get 
access to it. An audit team is a collection of senior users from each department. How can this requirement be addressed? (1)

A.) Create a sharing rule and associate it to Public Groups
B.) Ask a developer to programmatically share records using Apex
C.) Create a sharing rule and associate it to a Role & Internal Subordinates
D.) Create a sharing rule and associate it to a Role


A.) Create a sharing rule and associate it to Public Groups
    - correct: Sharing rules can be created to grant access to records based on criteria, such as the ‘Audit’ field being marked as ‘Y’.

B.) Ask a developer to programmatically share records using Apex
    - incorrect: This is not the best approach for this requirement.

C.) Create a sharing rule and associate it to a Role & Internal Subordinates
    - incorrect: would only work if all audit team members were in a single role

D.) Create a sharing rule and associate it to a Role
    - incorrect: would only work if all audit team members were in a single role

--------------------------------------------------------------------------------

5- Sam, a Salesforce developer, is trying to limit the visibility of contact records using the org wide default setting of Private.
   While testing, he is still able to see all contact records. What could be a reason? (2)

A.) Sam’s profile does not have role hierarchy permission

B.) Sam’s profile has ‘View All Data’ permission

C.) Sam’s profile has ‘View All’ permission for the Contact object

D.) Sam’s role has ‘View All Data’ permission


A.) Sam’s profile does not have role hierarchy permission
    - incorrect: Role hierarchy permission is not required to limit visibility.

B.) Sam’s profile has ‘View All Data’ permission
    - correct: ‘View All Data’ permission overrides the org-wide default settings.

C.) Sam’s profile has ‘View All’ permission for the Contact object
    - correct: ‘View All’ permission overrides the org-wide default settings.

D.) Sam’s role has ‘View All Data’ permission
    - incorrect: The "View All Data" permission is profile-based, not role-based.

--------------------------------------------------------------------------------
6-The customer service department of Cosmic Solutions does not have access to Opportunities
 Due to a new cross-selling initiative, access to the Opportunity object needs to be provided to allow customer service
  representatives to create and edit opportunities. Which of the following can be configured for this requirement? (1)

A.) Profiles
B.) Datasets
C.) User Roles
D.) Opportunity Settings


A.) Profiles
    - correct: Profiles can be used to control access to objects and fields.

B.) Datasets
    - incorrect: Datasets are not used to control access to objects.

C.) User Roles
    - incorrect: User Roles are used to define the hierarchy of the organization.

D.) Opportunity Settings
    - incorrect: Opportunity Settings are not used to control access to objects.

--------------------------------------------------------------------------------

7-Global Containers has deployed a custom app for managing Contracts.
 A sales user named Sam has noticed that the ‘Expiry Date’ field on the Contract detail page can be e
 dited by him, but another user named Eric from a different department has found that the field is read-only for him.
  What could be the possible reasons for this discrepancy? (2)

A.) The field is set as ‘Read-only’ for Eric’s User record.
B.) The field is set as ‘Read-only’ in the profile assigned to Eric.
C.) The field is set as ‘Read-only’ for Eric’s role in the role hierarchy.
D.) The field is set as ‘Read-only’ in the page layout defined for Eric’s profile.


A.) The field is set as ‘Read-only’ for Eric’s User record.
    - incorrect: User records do not control field-level security.

B.) The field is set as ‘Read-only’ in the profile assigned to Eric.
    - correct: Profiles control field-level security.

C.) The field is set as ‘Read-only’ for Eric’s role in the role hierarchy.
    - incorrect: Role hierarchy does not control field-level security.

D.) The field is set as ‘Read-only’ in the page layout defined for Eric’s profile.
    - correct: Page layouts control field-level security.

--------------------------------------------------------------------------------


8-The HR Manager would like to give permission to only one Account Executive to access the Employee custom tab,
 which is currently only available for the ‘HR Employee’ profile. How can this be configured? (1)

A.) Use organization-wide default settings
B.) Use object level security to grant access
C.) Add a permission set to the Account Executive profile
D.) Add a permission set for the specific user


A.) Use organization-wide default settings
    - incorrect: Organization-wide default settings control the visibility of records, not tabs.

B.) Use object level security to grant access
    - incorrect: Object level security does not control access to tabs.

C.) Add a permission set to the Account Executive profile   
    - incorrect: Permission sets are not added to profiles; they are assigned to individual users

D.) Add a permission set for the specific user
    - correct: Permission sets can be assigned to individual users to grant additional permissions.

--------------------------------------------------------------------------------

9-Cosmic Consulting uses the Project custom object to store Sales and Service project records.
 Service projects, distinguished by a ticked “Service/Support” checkbox, must be accessible to Support Agents.
  Sales project records contain sensitive data and should not be accessed by Support agents. Which data security feature
   can best achieve this requirement? (1)

A.) Sharing Rules
B.) Restriction Rules
C.) Public Groups
D.) Permission Set


A.) Sharing Rules
    - incorrect: Sharing Rules are used to grant access to records based on criteria, but they are not used to restrict access.

B.) Restriction Rules
    - correct: Restriction Rules can be used to restrict access to records based on criteria.

C.) Public Groups
    - incorrect: Public Groups are used to group users together for sharing purposes.

D.) Permission Set
    - incorrect: Permission Sets are used to grant additional permissions to users, not to restrict access.

--------------------------------------------------------------------------------
10-SolarFlower would like to prevent its users with the ‘Support’ profile from accessing Documents in Salesforce. 
Which of the following is the best way to achieve this? (1)


A.) Set the Document Tab setting to ‘Default Off’ for the Support profile
B.) Use a permission set to restrict access to users with the Support profile
C.) Set the Document Tab setting to ‘Tab Hidden’ for the Support profile
D.) Disable object access to the Document Object for the Support profile


A.) Set the Document Tab setting to ‘Default Off’ for the Support profile
    - incorrect: This setting controls the visibility of the Document Tab, not access to Documents.

B.) Use a permission set to restrict access to users with the Support profile
    - incorrect: Permission sets are used to grant additional permissions, not to restrict access.

C.) Set the Document Tab setting to ‘Tab Hidden’ for the Support profile
    - incorrect: This setting controls the visibility of the Document Tab, not access to Documents.

D.) Disable object access to the Document Object for the Support profile
    - correct: Disabling object access to the Document Object will prevent users with the Support profile from accessing Documents.

--------------------------------------------------------------------------------
11-Cosmic Solutions has developed a new recruitment application in Salesforce for supporting their global 
recruitment team. The Admin wants to give access to this new application to several users from the HR and 
recruitment teams who have not used Salesforce before and do not need access to any other apps or functionality 
in Salesforce. What is the best option? (2)

A.) Modify an existing profile and modify it to only include permissions to the app.
B.) Create a new profile by cloning an existing profile and modify it to only include permissions to the app.
C.) Assign an existing profile to the users and add permission that allows the users to access the app.
D.) assign the minimum access profile to the users and add permission that allows the users to access the app.


A.) Modify an existing profile and modify it to only include permissions to the app.
    - incorrect: Modifying an existing profile may affect other permissions.

B.) Create a new profile by cloning an existing profile and modify it to only include permissions to the app.
    - correct: Creating a new profile allows for specific permissions to be granted to users.

C.) Assign an existing profile to the users and add permission that allows the users to access the app.
    - incorrect: This may grant access to other functionality in Salesforce.

D.) assign the minimum access profile to the users and add permission that allows the users to access the app.
    - correct: Assigning the minimum access profile and adding permissions for the app is a good approach.

--------------------------------------------------------------------------------

12-The role of a sales manager of Cosmic Electronics was recently changed due to a transfer.
 She is now able to access an account record that is not owned by her. The Admin of the company would like to determine whether 
 the role hierarchy is the reason for the record access. Which of the following can be used to quickly determine this? (1)

A.) Account Team related list
B.) Sharing Hierarchy button
C.) Sharing settings
D.) Apex sharing reason


A.) Account Team related list
    - incorrect: The Account Team related list shows users who have access to the account, not the reason for access.   

B.) Sharing Hierarchy button
    - correct: The Sharing Hierarchy button shows the reason for access to a record, including the role hierarchy.

C.) Sharing settings
    - incorrect: Sharing settings are used to configure sharing rules and settings.

D.) Apex sharing reason
    - incorrect: Apex sharing reason is not a standard Salesforce feature.

--------------------------------------------------------------------------------

13-Global Systems has a ‘Net Worth’ field on the Account object to capture the value of a customer’s total assets minus
 the liabilities. However, only executive users should be able to view the data in this field. How would Global Systems
  achiever this requirement? (1)

A.) Specify field-level security for the ‘Net Worth’ field
B.) Define separate page layouts for executive and regular users
C.) Define appropriate account sharing rules
D.) Use Visualforce to selectively mask net worth data



A.) Specify field-level security for the ‘Net Worth’ field
    - correct: Field-level security can be used to control who can view or edit specific fields.

B.) Define separate page layouts for executive and regular users
    - incorrect: Page layouts control the layout of fields, not access to data.

C.) Define appropriate account sharing rules
    - incorrect: Sharing rules are used to grant access to records, not to fields.

D.) Use Visualforce to selectively mask net worth data
    - incorrect: Field-level security is a more straightforward way to control access to fields.

--------------------------------------------------------------------------------
14-The Admin of Cosmic Service Solutions has set the organization-wide default sharing setting of the Account object to 
‘Private’. The company uses Enterprise Territory Management and has an active territory model with the following territories:
 Canada, Northeast, Southwest, and California. Account records owned by users who are assigned to the California territory need 
 to be shared with all the users in the Northeast territory. They should have ‘Read’ access to the account records. What solution
  should be used to accomplish this? (1)

A.) A sharing rule based on record ownership should be created to share the account records.
B.) A sharing rule based on criteria should be created to share the account records.
C.) A permission set should be created to grant record access to users in the Northeast territory.
D.) The default access level of account records should be set in the ‘California’ territory.


A.) A sharing rule based on record ownership should be created to share the account records.
    - Correct: A sharing rule based on record ownership can be used to share account records with users in the Northeast territory.

B.) A sharing rule based on criteria should be created to share the account records.
    - Incorrect: used to share records based on specific field values

C.) A permission set should be created to grant record access to users in the Northeast territory.
    - Incorrect: Permission sets are used to grant additional permissions, not to share records.

D.) The default access level of account records should be set in the ‘California’ territory.
    - Incorrect: Default access levels are set at the organization-wide level, not at the territory level.

--------------------------------------------------------------------------------

15-The HR department is considering to use Salesforce for managing performance reviews for employees.
 It is concerned about access to this sensitive data such that the organization-wide default settings for the 
 Performance Review object will be set to Private. What feature can then be used to open up access to this data to
 the employees’ manager only? (1)

A.) Permission Sets
B.) Role Hierarchy
C.) Manual Sharing
D.) Manager Group Sharing


A.) Permission Sets
    - Incorrect: Permission sets are used to grant additional permissions, not to share records.

B.) Role Hierarchy
    - Incorrect: Role hierarchy grants access based on the hierarchy, not based on specific criteria.

C.) Manual Sharing
    - Correct: Manual sharing can be used to share individual records with specific users.

D.) Manager Group Sharing
    - Incorrect: Manager Group Sharing is not a standard Salesforce feature.

--------------------------------------------------------------------------------
16-Fun Toys Inc. allows all employees to view open positions, but only the HR department should be able to
 create and update the records. Create, read, edit, and delete permissions have been set on the HR user profile.
  Also, users with the same HR role are allowed to make changes to each others’ records. What other configurations are necessary
   for this requirement? (2)

A.) Set the OWD setting for the Position object to Public Read-Only
B.) Define the OWD setting for the Position object to Public Read/Write
C.) Configure field-level security to allow HR users to work on each other’s Position records
D.) Create a sharing rule that allows HR users to work on each others’ Position records


A.) Set the OWD setting for the Position object to Public Read-Only
    - correct: Setting the OWD to Public Read-Only allows all employees to view the records.

B.) Define the OWD setting for the Position object to Public Read/Write
    - incorrect: Public Read/Write would allow all employees to edit the records.

C.) Configure field-level security to allow HR users to work on each other’s Position records
    - correct: Field-level security can be used to control who can view or edit specific fields not records.

D.) Create a sharing rule that allows HR users to work on each others’ Position records
    - correct: Sharing rules can be used to grant access to records based on ownership.

--------------------------------------------------------------------------------

17-If a user has ‘Create and Read’ access to the Case object via their profile and Edit access via the role hierarchy,
 which of the following statements is true regarding the user’s access to the object? (1)


A.) The user will have create, read, and edit access due to the role hierarchy
B.) The user will not have create and read access due to the role hierarchy
C.) The user will have edit access as granted via the role hierarchy
D.) The user will only have create and read access as specified in their profile


A.) The user will have create, read, and edit access due to the role hierarchy
    - incorrect: role hierarchy does not grant create access

B.) The user will not have create and read access due to the role hierarchy
    - incorrect: role hierarchy does not grant create access

C.) The user will have edit access as granted via the role hierarchy
    - incorrect: role hierarchy does not grant create access

D.) The user will only have create and read access as specified in their profile
    - correct: the user will have create and read access as specified in their profile

--------------------------------------------------------------------------------
subordinate



*/
