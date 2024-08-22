/*

what is salesforce security?
-----------------------------
- used to protect data in salesforce

security levels
---------------
1-org level:
------------
- is the highest level of security
- determines who can access the org and when they can access it
how
---
- ip restrictions (allow only certain ip addresses to access the org)
- password policies (apply a strong password policy like password length, password complexity,, password lockout)
- login access policies (allow users to login only from certain locations or at certain times)

how to change the password policy?
----------------------------------
- go to setup
- enter password policies in the quick find box

how to change the login access policy for 2  groups of users one will work in the day shift and
the other will work in the night shift?
--------------------------------------------------------------------------------------------------------------
- create a custom profile for each group
- go to setup
- enter profiles in the quick find box
- click on profiles
- clone the standard user profile and create a new profile for each group
- change the login hours for each profile
- assign the profiles to the users


What is a profile?
------------------
- is a collection of settings and permissions that define what a user can do in salesforce

what is a permission set?
-------------------------
- is a collection of settings and permissions that define what a user can do in salesforce
- is used to extend the permissions of a user

what is the difference between a standard user profile and a standard platform user profile and system administrator profile?
-------------------------------------------------------------------------------------------
- standard user profile: user has access to standard objects and  custom objects
- standard platform user profile: user has access to custom objects only
- system administrator profile: user has access to all objects and all permissions

how to create a new user?
-------------------------
- go to setup
- enter users in the quick find box
- click on users
- click on new user
- enter the user details
- click on save

what is the difference between a standard user and a system administrator?
----------------------------------------------------------------------------
- standard user: user has access to standard objects and custom objects
- system administrator: user has access to all objects and all permissions

what is user license?
---------------------
- is a license that determines what a user can do in salesforce
- salesforce : user can access standard objects and custom objects
- salesforce platform: user can access custom objects only
- salesforce integration user: user can access the api

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


2-object level
- determines which objects the user can access and what they can do with the objects (create, read, update, delete)


how
---
- profiles
  create a custom profile
  clone the standard platform user profile(have access to custom objects only)
  set the object permissions
  assign the profile to the user

- permission sets
    create a permission set
    new permission set
    set the object permissions
    assign the permission set to the user


note: a user can have only one profile but can have multiple permission sets
    : a user can have only one profile but can have multiple roles
    : we can chose the org level security and the object level security for a user in the same time in the profile


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

3-field level
- determines which fields the user can access and what they can do with the fields (read, edit)

how

- profiles
 field level security
   -select the object and click on field permissions
    
- permission sets
   

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

4-record level
- determines which records the user can access and what they can do with the records (read, edit, delete)
-ex:interviewer can access only his own reviews

how
---
1-OWD (org wide defaults)
 
 -ex: the owner of the record can make the record public read/write, public read only, private
 - note:the private access level is only the owner and the admin can access the record

 - Go to sharing settings
    - click on sharing settings
    - click on edit
    - select the object
    - select the default access level
    - click on save

2-role hierarchy
- based on the role order
ex: the manager can access the records of the employees
  : the employee can access only his own records
- the higher the role the more access the user has
- the lower the role the less access the user has

go to roles
- click on roles
- click on new role
- enter the role name
- select the parent role


3-sharing rules
- SHARE based on the criteria you define OR based on the owner of the record
- go to sharing settings
- click on sharing settings
- click on new sharing rule
- select the object
- select the criteria
- select the access level
- click on save


4-manual sharing
- share based on some clicks

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Quiz
-----

1-All users have the 'Standard User' profile assigned. The Salesforce Administrator would now like all users to be able to read,
 create, and edit contacts but only allow managers to delete contacts.
 What is the best way to handle this?

Clone the standard profile and assign it to all users.
Remove delete permission on contacts in the cloned profile.
Create a permission set that includes permission to delete contacts,
and assign the permission set to managers.

Note: Permission sets are used to extend the permissions of a user.
      A user can have only one profile but can have multiple permission sets.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
2.The users of an organization require edit access to all contacts associated with accounts they own. In many cases,
  some of the related contact records are owned by the account owner and some are owned by other users.
  Which organization-wide default sharing setting can be used for the Contact object to meet this requirement? Choose 1 answer

Controlled by Parent
Private
Public Read Only
Public Read/Write

answer: Controlled by Parent 
- Controlled by Parent: The organization-wide default setting for the Contact object is Controlled by Parent.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
3-A Salesforce Administrator often deals with record-level security. Which of the following are correct regarding 
record-level security?choose 2 answers 

a-Roles are used to create a sharing hierarchy among the users.
b-Sharing rules can never be stricter than the organization-wide sharing defaults.
c-Roles are used to open up the record access among the user groups (i.e. horizontally).      No it vertically
d-Organization-wide sharing defaults are always used for opening record access to the user 2/7/23, 3:30 PM -- No because it is not necessary to open up the record access maybe we want to restrict the access.

answer: a and b 
- Roles are used to create a sharing hierarchy among the users.
- Sharing rules can never be stricter than the organization-wide sharing defaults because 
  sharing rules are used to extend the sharing access of the organization-wide sharing defaults.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

4-A Salesforce Administrator can define a sharing rule to share records with a public group.
  Which of the following can be included in a public group? 

A-Profiles         
B-Roles
C-Permission Sets
D-Other public groups
E-Users assigned to specific territories

answer: b,d,e
- Roles: A public group can include roles.
- Other public groups: A public group can include other public groups.
- Users assigned to specific territories: A public group can include users assigned to specific territories.

what is a public group?
- is a collection of users, roles, and other public groups.
- is used to share records with a group of users, roles, and other public groups.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

5-The standard field called 'Account Site' is not required by the users of an organization.
 How can a Salesforce Administrator ensure that users would not be able to access this field when they view account records? 

a-Use the 'Field Accessibility' page in Setup to restrict the field's visibility.
b-Use field-level security to make the field hidden for all the pro les.
c-Delete the field from the Account object.       No because we can't delete standard fields
d-Remove the field from the page layout.
e-Change the field type.                          No because we can't change the field type

answer: a,b,d
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

6-A sales representative has just left Cosmic Enterprise Solutions. What should be done to ensure that the user
 can no longer log in to Salesforce? Choose 1 answer.

a-Deactivate the user record
b-Deactivate the account record
c-Delete the user record
d-Delete the account record

answer: a
- Deactivate the user record: Deactivating the user record will prevent the user from logging in to Salesforce.

can we delete the user record?
- No, we can't delete the user record because the user record is associated with the data in Salesforce.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
7-A user was deactivated several months ago. What can be done to reactivate the user? Choose 1 answer.

Create a new user
Disable the active checkbox
Enable the active checkbox
Create a new contact

answer: Enable the active checkbox
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

7-The owner of a case needs to be changed to another customer support user.
 The role hierarchy is set up with a customer support role and a support manager role above.
  Who can change the ownership of the case? 

The current owner of the case
All users
The support manager
The Salesforce Administrator
Any user with the customer support role

answer: The current owner of the case
       : The support manager
        : The Salesforce Administrator
    
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

8-In a private sharing model, if the Salesforce Administrator needs to make some exceptions to give
 access to Account records, what features can be used? 

Sharing rules
Manual sharing
Account teams
Sharing exception rules    No --> there is no sharing exception rules in Salesforce
Field permissions          No --> field permissions are used to control the field-level security

answer: Sharing rules
        : Manual sharing
        : Account teams

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
9-A Salesforce Administrator is currently setting up the password policies for the company's Salesforce org.
 Which of the following statements about the settings in the Password Policies page are correct? 

Password complexity always requires that passwords should have numbers, uppercase letters, lowercase letters, and special characters. No --> we can modify the password complexity
The password history enforcement can be modified. Yes --> The password history enforcement can be modified.
The default password length is 8 characters but can be changed anywhere from 3-100 characters. No --> The default password length is 8 characters but can be changed anywhere from 5-50 characters.
The lockout effective period can be set to 'Forever.'

answer: The password history enforcement can be modified.
      : The lockout effective period can be set to 'Forever.'

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Administrator use to control record sharing? 

Role Hierarchy
Organization Wide Default Settings
Sharing Rules
Profiles
Permission Sets Which features can a Salesforce

answer: Role Hierarchy, Organization Wide Default Settings, Sharing Rules

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


A government agency would like to use Chatter but plans to test it in one department initially.
 How can this be accomplished? Choose 1 answer.

Enable Chatter and enable any custom profiles that should have access to Chatter
Enable Chatter and disable the Chatter user permission for those users that should not have access
Enable Role Based Rollout for Chatter and select the roles that should have access to Chatter
Enable Profile Based Rollout for Chatter and disable Chatter access for any custom profiles that should not have access to Chatter

ans: Enable Profile Based Rollout for Chatter and disable Chatter access for any custom profiles that should not have access to Chatter


Note: Chatter can be enabled for specific profiles by using Profile Based Rollout for Chatter.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

If a user is assigned a profile that has read object access to accounts,
 what records will the user be able to see? Choose 1 answer.

All account records
Depends on the sharing model and the user's role
Records owned by the user and records owned by other users in the same role
Only records owned by the user

ans: Depends on the sharing model and the user's role

note: The user's access to records is determined by the organization-wide default settings, role hierarchy, sharing rules, manual sharing, and teams.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
All internal users are being prompted to verify their identity when they login to Salesforce 
from a new computer or device. The Salesforce Administrator has been asked if it is possible to modify this behavior. 
Which of the following statements can the Salesforce Administrator reply with? Choose 1 answer.

Yes - Device Activation can be deactivated for particular users on the user record
No - All users must verify their identity when logging in for the first time on a new device
Yes - Device Activation can be turned off in settings for all users
Yes - Device Activation can be bypassed by adding a range of trusted IP addresses

ans: Yes - Device Activation can be bypassed by adding a range of trusted IP addresses

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
A user is assigned a profile that allows create, edit, and delete permission on Leads. 
The organization-wide setting for Leads has been set to private. A role hierarchy has been set up and the has been assigned 
a role that has subordinate roles below it in the hierarchy. What will the user's access be to leads owned by other users?


The user will not be able to read, edit, or delete leads owned by other users.
The profile setting will override the sharing setting and the user will be able to edit leads owned by other users.
The user will have access to leads owned by other users granted via the role hierarchy.
The profile setting will not override the sharing setting and the user will always only have read access to leads owned by other users.


ans: The user will have access to leads owned by other users granted via the role hierarchy.
   : because the role hierarchy grants access to records owned by users in subordinate roles.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*/
