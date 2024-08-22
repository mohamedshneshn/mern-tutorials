/*
Approve Record with approval process
-----------------------------------

why we need to approve a record ?
---------------------------------
- to ensure that the record meets certain criteria like budget, quality, or compliance 
ex: when a sales rep wants to give a discount to a customer, the discount request must be approved by the sales manager



what is an approval process ?
------------------------------
- it is a process that automates the approval of records in salesforce

-what are the parts you define in an approval process ?
-------------------------------------------------------
1. steps: define the steps for approving a record
2. approvers: define the users who can approve a record
3. actions: define the actions that are taken when a record is approved or rejected



how to create an approval process ?
------------------------------------
1. go to setup
2. enter approval process in the quick find box
3. select the object
4. Create New Approval Process" and choose either the standard setup wizard or the jump start wizard
5. enter the approval process name
6. enter criteria for submitting records for approval
7. select the approvers
8. configure the actions
   - initial submission actions / lock the record for editing/ chanange the status to pending
   - approval actions / lock the record for editing/ chanange the status to approved
   - rejection actions / lock the record for editing/ chanange the status to rejected
   - final approval actions / lock the record for editing/ chanange the status to approved

9. click on save
10. click on activate


Eample:
-------
- create an approval process for the discount request object 
- the discount request must be approved by the sales manager if the discount amount is greater than 1000
- when the discount request is approved, the status of the discount request should be changed to approved
- when the discount request is rejected, the status of the discount request should be changed to rejected


object: discount request
fields: 
- discount amount/ number /
- reason
- status (picklist field with values: pending, approved, rejected)
- sales rep
- sales manager

approval process:
-----------------
-select object: discount request
- name: discount request approval
- criteria: discount amount >   , 1000 Status = pending
- approvers: sales manager
- actions:
    - initial submission actions: lock the record for editing, change the status to pending
    - approval actions: lock the record for editing, change the status to approved
    - rejection actions: lock the record for editing, change the status to rejected
    - final approval actions: lock the record for editing, change the status to approved

--------------------------------------------------------------------------------------------------------------------------------------------------------


*/
