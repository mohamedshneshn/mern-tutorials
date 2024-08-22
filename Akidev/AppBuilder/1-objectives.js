/*

1-High Mountain Travel Company currently uses both Sales Cloud and Service Cloud.
 The current financial application used by the company has reached its end of life,
 and the management is considering a replacement that can be accessed by users from Salesforce.
 What would be recommended in this situation? (1)

A.) Salesforce functionality is limited to Sales, Service, and Marketing, so consider the implementation of an independent ERP system.
 - Incorrect: Salesforce is not limited to Sales, Service, and Marketing.
   It can be used to build custom applications for any business process.

B.) Evaluate building the required financial application using the Lightning App Builder.
 - Incorrect: The Lightning App Builder is used to create custom user interfaces not to build financial applications from scratch.

C.) Use Salesforce Connect to set up a new financial application that has the same functionality.
    - Incorrect: Salesforce Connect is used to integrate external data sources with Salesforce.

D.) Evaluate financial applications on the AppExchange to determine if one of them meets the organization’s requirements.
    - Correct: The AppExchange is a marketplace for third-party applications that can be installed in Salesforce.

-----------------------------------------------------------------------------------------------------------

2-Global Containers requires that when saving an opportunity record, a check is performed to determine 
if the opportunity amount is the highest value in the current year for all opportunities in the org. 
If so, a checkbox on the opportunity record should be marked and an email should be sent to the record owner’s manager.
 What Salesforce feature should be recommended to handle this requirement? (1)

A.) Flow Builder
    - correct: Flow Builder can be used to automate business processes in Salesforce.

B.) Workflow Rule
    - Incorrect: Workflow rules are used for automating simple business processes.


C.) Formula Field
    - Incorrect: Formula fields are used to calculate values based on other fields.

D.) Apex Trigger
    - Incorrect: Apex triggers are used to automate complex business processes.

-----------------------------------------------------------------------------------------------------------
3-Global Containers uses the account hierarchy to record the structure of businesses in various regions and locations.
  The Admin working for the company has been asked to provide a rolled up total of the number of opportunities associated with
  accounts across all levels of the hierarchy. The display of the accounts should be indented according to 
  the level in the hierarchy. How could this be created? 

A.) Create a new custom report type and include a roll-up summary field for the total number of opportunities
    - Incorrect: Custom report types are used to create reports that include data from multiple objects.

B.) Use the standard Account report type and create a new report for the number of opportunities related to each account
    - Incorrect: The standard Account report type does not provide the option to display the account hierarchy.

C.) Request a developer to build a Visualforce page or custom Lightning component to display data in the required format
    - Correct: A developer can create a custom solution to display the account hierarchy with the rolled-up total.


D.) It is not possible to create a report with this data
    - Incorrect: It is possible to create a custom solution to display the account hierarchy with the rolled-up total.

-----------------------------------------------------------------------------------------------------------
4-There is a requirement that when an opportunity is closed, commission records should be created automatically for each member of
 the opportunity team. The Commission custom object has a Currency field where in its value is calculated based on the opportunity 
 team role of the member, and the Type and Amount of the related opportunity. How should this be achieved? (1)

A.) Flow Builder
    - Correct: Flow Builder can be used to automate business processes in Salesforce.

B.) Apex Trigger
    - Incorrect: Apex triggers are used to automate complex business processes.

C.) Process Builder
    - Incorrect: Process Builder is used to automate create a record not multiple records.

D.) Workflow Rule
    - Incorrect: Workflow rules are used for automating simple business processes.


-----------------------------------------------------------------------------------------------------------
5-Grand College is an educational institution that tracks student data using Salesforce.
 It would like to generate the attendance records for its students in a printable PDF format with data from at
 least five different objects. Which of the following would help in achieving this use case? 

A.) Build a report in Report Builder and export it as a PDF file.
    - Incorrect: Report Builder does not support exporting reports as PDF files.

B.) Build a Visualforce page to display the necessary data.
    - Correct: A Visualforce page can be used to display data from multiple objects in a printable format.
    - by using the renderAs attribute to generate the page as a PDF.

C.) Add the PDF Lightning component in Lightning App Builder.
    - Incorrect: The PDF Lightning component is not available in Lightning App Builder.

D.) Add the built-in ‘Convert PDF’ button to the page layout.
    - Incorrect: The ‘Convert PDF’ button is not available in Salesforce.

-----------------------------------------------------------------------------------------------------------

6-Global Insurance would like users to be able to enter policy and advisor details on a screen.
 When a user clicks the ‘Next’ button on the screen, the advisor commission related to the details entered by 
 the user should be displayed on the next screen. What would be the recommended solution for this requirement? 

A.) Create an approval workflow
    - Incorrect: Approval workflows are used to automate approval processes.

B.) Create a Visualforce wizard
    - inCorrect: A Visualforce wizard can be used to guide users through a multi-step process but it is not the recommended solution.

C.) Create a flow with Flow Builder
    - Correct: by using screen flow, the user can enter policy and advisor details on a screen and display the advisor commission on the next screen.

D.) Create a process with Process Builder
    - Incorrect: Process Builder is used to automate simple business processes.

-----------------------------------------------------------------------------------------------------------
7-Cool Air Conditioners has been using Service Cloud to manage cases, but they are now considering using it to
  manage field service jobs. They would like to track field service activity and assignment of field service jobs to technicians.
  What is the recommended solution to meet these requirements? (1)

A.) Extend the Service Cloud configuration to handle Field Service cases
    - Incorrect: Service Cloud is not designed to handle field service jobs.

B.) Use real-time API integration to connect Salesforce with an external field service application
    - Incorrect: Real-time API integration is not the recommended solution for field service management.

C.) Use Field Service to utilize Service Appointment, Work Order, and Work Order Line Items
    - Correct: Salesforce Field Service is specifically designed for managing field service jobs, including scheduling,
               dispatching, and tracking. It provides the necessary objects like Service Appointments, 
               Work Orders, and Work Order Line Items to manage field service activities effectively.

D.) Install an AppExchange product that provides Field Service functionality
    - Incorrect: Field Service is a standard Salesforce feature and does not require an AppExchange product.

-----------------------------------------------------------------------------------------------------------

8-The marketing department of Cosmic Marketing Solutions would like to manage email campaigns and track responses,
 including the number of opens and clicks in Salesforce. They do not need the complete functionality of Marketing Cloud at
 this stage. What is the recommended solution for this requirement? (1)

A.) Use a third party email campaign application and integrate it with Salesforce

B.) Use a third party app from the AppExchange

C.) Build custom functionality that tracks the responses

D.) Use the standard campaign functionality




A.) Use a third party email campaign application and integrate it with Salesforce
    - Incorrect:  might offer more functionality than required, especially if the marketing team doesn’t need a
                  full-fledged email marketing solution like Marketing Cloud.

B.) Use a third party app from the AppExchange
    - Correct: There are several apps available on the AppExchange that provide email campaign management and tracking functionality.

C.) Build custom functionality that tracks the responses
    - Incorrect: Building custom functionality may require more time and resources than using an existing app from the AppExchange.

D.) Use the standard campaign functionality
    - Incorrect: The standard campaign functionality in Salesforce does not provide detailed tracking of email responses.

-----------------------------------------------------------------------------------------------------------

9-Cosmic Solutions would like to generate invoices in Salesforce, allow customer to pay their invoice securely from their email,
 and process the payment. Which of the following should be used to meet this requirement?

A.) Build a custom Apex solution

B.) Check if an AppExchange app exists

C.) Use Lightning Process Builder

D.) Use Workflow Rule and Formula Fields


A.) Build a custom Apex solution
    - Incorrect: Building a custom Apex solution may require more time and resources than using an existing app from the AppExchange.

B.) Check if an AppExchange app exists
    - Correct: There are several apps available on the AppExchange that provide invoicing and payment processing functionality.

C.) Use Lightning Process Builder
    - Incorrect: Lightning Process Builder is used to automate simple business processes, not for generating invoices and processing payments.


D.) Use Workflow Rule and Formula Fields
    - Incorrect: Workflow rules and formula fields are not suitable for generating invoices and processing payments.


-----------------------------------------------------------------------------------------------------------

10-An organization has recently completed a large marketing campaign across the globe using Salesforce. 
The Marketing Director wants to collect customer feed back related to the campaign. He wants to use Salesforce for sending 
survey forms and collating the survey results directly within the org. Which options are best to recommend? (2)


A.) Use the Salesforce native mass survey functionality
B.) Develop a custom survey application using .Net and integrate it with Salesforce
C.) Use a third-party could survey application an integrate it with Salesforce
D.) Look for an AppExchange solution that meets the requirements



A.) Use the Salesforce native mass survey functionality
    - Correct: Salesforce offers native survey functionality that allows users to create and send surveys directly within the org.

B.) Develop a custom survey application using .Net and integrate it with Salesforce
    - Incorrect: Developing a custom survey application using .Net may require more time and resources than using an existing solution.

C.) Use a third-party could survey application an integrate it with Salesforce
    - Correct: This is a viable option but might involve complex integration and additional costs.
      It is preferable to first explore native Salesforce
      features or an AppExchange solution.

D.) Look for an AppExchange solution that meets the requirements
    - Correct: The AppExchange offers various survey applications that can be installed in Salesforce to meet the organization’s requirements.

-----------------------------------------------------------------------------------------------------------
11-A real estate app has been configured in a Salesforce org. When people are interested in leasing apartments, 
they are required to send an email with their personal information attached and include in the email such as the Apartment Number,
 Lease Duration, and other requested details. When the email is received, an application record should be automatically created in 
 Salesforce where the details included in the email are mapped to designated fields in the record, and also have the email
  attachment linked. Which of the following can be utilized for this requirement? (1)

A.) Using the standard Email-to-Case functionality
B.) Using the standard Web-to-Case functionality
C.) It is not possible to process email attachments in Salesforce
D.) Developing an email handler to process the email and attachment


A.) Using the standard Email-to-Case functionality
    - Incorrect: Email-to-Case is used to create cases from incoming emails, not to create application records.

B.) Using the standard Web-to-Case functionality
    - Incorrect: Web-to-Case is used to create cases from web forms, not to create application records from emails.

C.) It is not possible to process email attachments in Salesforce
    - Incorrect: Salesforce does support processing email attachments.

D.) Developing an email handler to process the email and attachment
    - Correct: An apex email handler can be developed to process the incoming email, create an application record, and link the email attachment.

-----------------------------------------------------------------------------------------------------------
12-What are valid reasons for considering an AppExchange App? (3)


A.) AppExchange apps cover functionality not covered by Salesforce
B.) AppExchange apps can be installed by any Salesforce user
C.) AppExchange apps are isolated from other customizations, so they will not interfere with existing functionality
D.) Some AppExchange apps are open source
E.) Some AppExchange apps are free


A.) AppExchange apps cover functionality not covered by Salesforce
    - Correct: AppExchange apps can provide additional functionality that is not available in Salesforce.

B.) AppExchange apps can be installed by any Salesforce user
    - incorrect: AppExchange apps can be installed by users with the necessary permissions.

C.) AppExchange apps are isolated from other customizations, so they will not interfere with existing functionality
     - incorrect: AppExchange apps can interact with other customizations in Salesforce.

D.) Some AppExchange apps are open source
    - correct: Some AppExchange apps are open source and can be customized by developers.

E.) Some AppExchange apps are free
    - correct: Some AppExchange apps are free to install and use.


-----------------------------------------------------------------------------------------------------------
13-A Sales Manager is looking to gain more insight into the customers’ interactions with the company via social media.
   He wants to use the information to generate more leads for the sales reps. He would like to implement a solution within a month,
   before the end of the fiscal quarter. Which is the most efficient way to accomplish the requirement? (1)

A.) Create a custom application using Apex and Visualforce to pull the information from social media applications
B.) Create a workflow to pull the information from social media applications
C.) Create a process using Process Builder to pull information from social media applications.
D.) Install an application from the AppExchange to pull information from social media applications


A.) Create a custom application using Apex and Visualforce to pull the information from social media applications
    - Incorrect: Developing a custom application using Apex and Visualforce may require more time and resources than other solutions.

B.) Create a workflow to pull the information from social media applications
    - Incorrect: Workflows are not designed to pull information from external sources like social media applications.

C.) Create a process using Process Builder to pull information from social media applications.
    - Incorrect: Process Builder is not designed to pull information from external sources like social media applications.

D.) Install an application from the AppExchange to pull information from social media applications
    - Correct: Installing an application from the AppExchange can provide a quick and efficient solution to pull information from social media applications.

-----------------------------------------------------------------------------------------------------------

14-New Horizon Satellites uses Salesforce for opportunity management for its data service products.
 There are many variables and complex combinations that can be configured when offering a data service. The company currently 
 uses Excel to produce quotes but would like to use Salesforce instead. What would be the recommended solution? (2)


A.) Create a Visualforce page that displays the quote and allows saving it as a PDF
B.) Look for an AppExchange product that meets the requirements
C.) Create a custom button that allow exporting the opportunity details to Excel
D.) Use Salesforce CPQ functionality


A.) Create a Visualforce page that displays the quote and allows saving it as a PDF
    - incorrect: Creating a Visualforce page may require more time and resources than other solutions.

B.) Look for an AppExchange product that meets the requirements
    - correct: There are several apps available on the AppExchange that provide quoting functionality for Salesforce.

C.) Create a custom button that allow exporting the opportunity details to Excel
    - incorrect: Exporting opportunity details to Excel may not provide the necessary quoting functionality.

D.) Use Salesforce CPQ functionality
    - correct: Salesforce CPQ (Configure, Price, Quote) is designed to handle complex quoting processes within Salesforce.

-----------------------------------------------------------------------------------------------------------
15-When an address on an account is entered, the account address should be validated based on data that is referenced from
   records unrelated to the account. What is the recommended solution to achieve this requirement? (1)

A.) have a developer build an apex trigger that performs the validation
B.) use a process builder to perform the validation
C.) use  a before-save flow to perform the validation
D.) use a validation rule to perform the validation


A.) have a developer build an apex trigger that performs the validation
    - incorrect: Using an apex trigger may require more time and resources than other solutions.

B.) use a process builder to perform the validation
    - incorrect: Process Builder is not designed to interact with external web services.

C.) use  a before-save flow to perform the validation
    - correct: A before-save flow can be used to perform the validation based on data from unrelated records.
    
D.) use a validation rule to perform the validation
    - incorrect: Validation rules are used to enforce data quality, not to perform complex validations based on external data.

-----------------------------------------------------------------------------------------------------------
16- Which of the following are valid reasons for considering an AppExchange app? (3)

A.) AppExchange apps do not affect organization limits.
B.) An existing app may solve the business problem, meaning a custom solution does not need to be developed.
C.) All AppExchange apps are free.
D.) An existing unmanaged package app may meet most of the requirements and can be further customized.
E.) Many AppExchange apps include support for Salesforce mobile app.


A.) AppExchange apps do not affect organization limits.
    - incorrect: AppExchange apps can consume organization limits, such as custom objects and API calls.

B.) An existing app may solve the business problem, meaning a custom solution does not need to be developed.
    - correct: AppExchange apps can provide ready-made solutions to common business problems.

C.) All AppExchange apps are free.
    - incorrect: Not all AppExchange apps are free; some are paid apps.

D.) An existing unmanaged package app may meet most of the requirements and can be further customized.
    - correct: Unmanaged package apps can be customized to meet specific requirements.

E.) Many AppExchange apps include support for Salesforce mobile app.
    - correct: Many AppExchange apps are designed to work with the Salesforce mobile app.

-----------------------------------------------------------------------------------------------------------

17-Which of the following are valid use cases for the AppExchange? (2)

A.) To exchange ideas and tips with other developers
B.) To extend standard Salesforce functionality
C.) To exchange apps with other developers
D.) To add industry specific functionality to Salesforce


A.) To exchange ideas and tips with other developers
    - incorrect: The AppExchange is not primarily used for exchanging ideas and tips.

B.) To extend standard Salesforce functionality
    - correct: The AppExchange offers apps that extend the standard functionality of Salesforce.

C.) To exchange apps with other developers
    - incorrect: The AppExchange is a marketplace for apps, not a platform for exchanging apps between developers.

D.) To add industry specific functionality to Salesforce
    - correct: The AppExchange offers industry-specific apps that can be installed in Salesforce to meet specific business requirements.

-----------------------------------------------------------------------------------------------------------

18-Cosmic Partners developed a free version of their HR Management package that includes custom objects, fields, and Apex components
. They want it to be available for free in the AppExchange but still retain component privacy, app ownership, 
and possible app updates. Which packaging solution fits the requirement? (1)

A.) Semi-Unmanaged packages
B.) Semi-Managed packages
C.) Unmanaged packages
D.) Managed packages


A.) Semi-Unmanaged packages
    - incorrect: Semi-Unmanaged packages do not exist in Salesforce packaging options.

B.) Semi-Managed packages
    - incorrect: Semi-Managed packages do not exist in Salesforce packaging options.

C.) Unmanaged packages
    - incorrect: Unmanaged packages do not provide the ability to control component privacy, app ownership, and updates.

D.) Managed packages
    - correct: Managed packages allow the publisher to control component privacy, app ownership, and updates while distributing the package on the AppExchange.


 -----------------------------------------------------------------------------------------------------------










-----------------------------------------------------------------------------------------------------------

Managed Packages:
    Controlled by the publisher, often commercial, with obfuscated code, support for upgrades, and licensing.

Unmanaged Packages:
      Open and editable by the subscriber, often used for templates or samples, with no support for versioning or upgrades.

*/
