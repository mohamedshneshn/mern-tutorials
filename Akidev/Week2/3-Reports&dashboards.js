/*
D
C


-----------------

services cloud
--------------
solution objects
----------------
- used to store information about customer solutions

knowledge objects
-----------------
- used to store information about customer knowledge

community objects
-----------------

service console
---------------
- is used to manage customer inquiries or issues
--------------------------------------------------------------------------------------------------------------------------------------------------------

service process
---------------


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


how to create a report
-----------------------
- go to the reports tab
- click on new report
- select the report type
- select the report format
- select the report fields
- click on save and run report


what is the report type
------------------------
- the report type determines which objects are available for the report
- the report type determines which fields are available for the report
- the report type determines which filters are available for the report



--------------------------------------------------------------------------------------------------------------------------------------------------------

users: students,presenters,dean
course: name,prfofessor,duration,semesters
student-class: course,student,grade,exam
exam: date,time,course


----------------------------

Recruting App senario
----------------------
What is the flow of the app

-recrutier posts job
-candidate applies for job
-recruiter reviews application
-recruiter schedules interview
- candidate attends interview
-manager evaluates candidate
-offer is made
-candidate accepts offer
-candidate is hired

--------------------------------
who are the people involved in the process

-recruiter
-candidate
-manager
-interviewer


what data is needed for the process

position-salary-location-job title
application- resume,cover letter
applied position
interview date-time



--------------------------------------------------------------------------------------------------------------------------------------------------------


Qiuz
-----
1-What report format cannot be used when creating reports with field groupings? Choose 1

A.) Joined
B.) Summary
C.) Tabular
D.) Matrix


answer: C.) Tabular
Note:
Tabular reports cannot be used to set up groups of data.
A Summary report groups data by rows.
A Matrix report groups data by rows and columns.
Joined report blocks are formatted as Summary reports

-------------------------------------------------------------------------------------------------------------------------------------------------------
2-The Sales manager of Blue Sky Widgets would like to get a report of opportunities grouped by sales stage.
 What kind of report would meet this requirement? Choose 1

A.) Summary
B.) Martix
C.) Two Column
D.) Tabular

answer: A.) Summary
Note: Groups can be created in the summary matrix, or joined reports.
Matrix reports allow to group and summarize data by both rows and columns. 
The requirement is for only one grouping, so a summary report is sufficient.

--------------------------------------------------------------------------------------------------------------------------------------------------------

3-The Director of Sales wants a report that shows the Opportunity pipeline for the current and succeeding fiscal quarters.
 This report should be grouped by Sales Rep and Opportunity Stage. Which report format would be best to use to create this custom
  report? Choose1 answer.

Tabular Report
Summary Report
Matrix Report
Joined Report

answer: Matrix 

Tabular Report: This format displays data in a simple list without grouping or summarization. 
Summary Report: This format groups data by rows and displays subtotals.
Matrix Report: This format groups data by rows and columns. 
Joined Report: This format displays data from multiple report types.



--------------------------------------------------------------------------------------------------------------------------------------------------------

4-GN International Inc. uses Salesforce for managing their sales activities an they have created various custom objects.
 The Sales manager requested the Administrator to create a new report with certain information. When attempting 
 to define the custom report type, the Administrator discovered that certain fields could not be added.
  Which of the following field types can NOT be added to a custom report? 

Product Schedule fields   
Product fields
Account fields
History fields

answer: Product Schedule fields because it is related to specific products and their schedules
      : History fields avaliable only in history reports

--------------------------------------------------------------------------------------------------------------------------------------------------------
5-Kody, the sales manager at Orbit flux has created a joined report in Salesforce which he wants to export.
 In what file format would the exported report be? Choose 1 answer.

Csv
xml
xls
xlsx

ans: xlsx
Note: joined reports are always exported as formatted reports in Excel format (xlsx).
    : If a report is exported as Details Only, the filt format can be set to either .xls or .csv.
--------------------------------------------------------------------------------------------------------------------------------------------------------
6-What is true regarding the Data Export Service? Choose 1 answer.

A request must be sent to Salesforce to enable the Data Export service         //no it is not required
Data will be exported in .csv format
The Data Export service will export data from all records but not attachments  //no it will export all records including attachments
The Data Export service can be set up to run daily                             //No it can be set up to run weekly or monthly

ans: Data will be exported in .csv format

--------------------------------------------------------------------------------------------------------------------------------------------------------
7-When are dashboards refreshed? 

Every day                                                               //no it is not refreshed every day
Every time someone accesses the home page                         //no it is not refreshed every time someone accesses the home page
When a user clicks 'Refresh'                                        //yes
The Dashboard refresh frequency can be set per dashboard          //yes

ans:  When a user clicks 'Refresh'
      The Dashboard refresh frequency can be set per dashboard

--------------------------------------------------------------------------------------------------------------------------------------------------------
8-The Salesforce Administrator at J.W. Computing has been invited to a business requirement gathering workshop.
 The Sales Manager has requested that when users run the same report, they should only be able to see data which they
 have access to. What should the Salesforce Administrator do to enable this? Choose 1 answer.

Define the sharing model as Private for the object reported on
This is not possible with Salesforce
De ne sharing model as Public read/write for the object reported on
Create the same report with a different name for every user

ans: Define the sharing model as Private for the object reported on

Note: The sharing model for the object reported on should be set to Private to
       ensure that users can only see data they have access to.

what is the sharing model
--------------------------
- the sharing model determines how records are shared with users
- examples of sharing models include private, public read/write, and public read only
- the sharing model can be set at the object level or at the record level
- ex

--------------------------------------------------------------------------------------------------------------------------------------------------------
9-The customer service manager of Cosmic Electronics would like to be notified daily via email 
if the number of open cases exceeds 100. What is the best way for an admin to meet this requirement? Choose 1

A.) Create a workflow rule with an automated action that sends an email alert to the manager  
         No-->workflow rules are not design to count records and evaluate aggregate data.
B.) Schedule an open case report for a refresh so that it runs daily and send its results via email to the manager
            No-->need extra steps to ensure the email only triggers when the case count exceeds 100.
C.) Ask the customer service manager to subscribe to an open case report for notifications.


D.) Create a flow that sends an automatic email to the manager based on custom criteria
            No--> possible but more complex than necessary for this requirement.

ans: C.) Ask the customer service manager to subscribe to an open case report for notifications.

Note: Report subscriptions allow users to receive reports via email on a scheduled basis or when certain conditions are met.
--------------------------------------------------------------------------------------------------------------------------------------------------------
10-A sales manager requested the admin to create a dashboard comparing the total sales target to the 
individual sales target and have it displayed on every Sales Rep’s home page. 
He insisted that each Sales Rep should be able to see data specific to the access that each individual Sales Rep has;
 however, the Sales Manager should see data of all Sales Reps. A role hierarchy has been set up for the organization,
  and the “Grant Access Using Hierarchies” option has been enabled for the objects containing the relevant report data.
  While creating the Dashboard, which “View Dashboard As” setting should the admin select? Choose 1

A.) Run as the report user  
B.) Run as the dashboard viewer
C.) Run as the specified user
D.) Run as an admin user  //no --> all data will display with admin level access for all users

ans: B.) Run as the dashboard viewer

Note: The "Run as the dashboard viewer" setting allows the dashboard to be viewed by the user who is accessing it.

view dashboard as
-----------------
1-me allows you to view the dashboard as a specific user
2-dashboard viewer allows you to view the dashboard as the user who is accessing it
3-another person allows you to view the dashboard as another user

--------------------------------------------------------------------------------------------------------------------------------------------------------
11-The cosmic computing call center manger has requested a new Case report to assist in the analysis of how long individual 
call center staff are taking to accept cases. “Case Accepted Time Stamp” is an existing custom field that is populated
 when the call center agent accepts the case. How could this best be achieved using Lightning Report Builder? Choose 1

A.) Add a row-level formula that calculates the difference between “Date/Time Opened” and “Case Accepted Time Stamp” in 
    the new report
B.) Create a new Case custom formula that calculates the difference between “Date/Time Opened” 
   and “Case Accepted Time Stamp” and add it to the new report.
C.) Add a bucket column that calculates the difference between “Date/Time Opened” and “Case Accepted Time Stamp” 
   in the new report
D.) Add the standard “Case Age” field to the new report as this captures the difference between ‘Date/Time Opened” and 
    “Case Accepted Time Stamp”

ans: A.) Add a row-level formula that calculates the difference between “Date/Time Opened” and “Case Accepted Time Stamp” in


*/
