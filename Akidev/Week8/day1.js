/*

what is visualforce page?
--------------------------------
- is a framework that enables developers to design and build pages with HTML, JavaScript,
   and Apex (Salesforce's programming language).


what is the difference between visualforce page and lightning component?
--------------------------------
- Visualforce is a framework that enables developers to build sophisticated, custom user
   interfaces for mobile and desktop apps that can be hosted on the Lightning Platform.

- Lightning components are a new framework for building components in the Salesforce1


1-Example of visualforce page to insert opportunity:
-----------------------------------------------
<apex:page standardStylesheets="true" standardController="opportunity">

    <apex:form title="Opportunity">
        <apex:pageBlock title="Opportunity Insert Info">
            <apex:pageBlockSection >
                <apex:inputField value="{!opportunity.name}" label="OppName" />
                <apex:inputField value="{!opportunity.StageName}" label="StageName" />
                <apex:inputField value="{!opportunity.closeDate}" label="CloseDate" />
              </apex:pageBlockSection>
      
                <apex:commandButton action="{!Save}" value="save" />
                <apex:commandButton action="{!Cancel}" value="Cancel" />
            
        .  </apex:pageBlock>
    
    </apex:form>
    
</apex:page>


2-Example of visualforce page to display account contacts:
-----------------------------------------------------------

<apex:page standardStylesheets="true" standardController="Account">
    
    <apex:pageBlock title="Account Contact List">
        <apex:pageBlockTable value="{!Account.contacts}" var="contact">
               <apex:column value="{!contact.firstname}" />
               <apex:column value="{!contact.lastname}" />
               <apex:column value="{!contact.email}" />
               <apex:column value="{!contact.phone}" />
        </apex:pageBlockTable>
    
    </apex:pageBlock>
    
</apex:page>

--


elements of visualforce page:
--------------------------------




1-  <apex:page ></apex:page> is the root tag of visualforce page used to create a visualforce page.

    standardStylesheets attribute is used to include the standard stylesheets in the page.
    standardController attribute is used to bind the page to the controller.

2-  <apex:form></apex:form> is used to create a form in visualforce page.
   title attribute is used to give a title to the form.


3-  <apex:pageBlock></apex:pageBlock> is used to create a block in visualforce page.
      title attribute is used to give a title to the block.

4-  <apex:pageBlockSection></apex:pageBlockSection> is used to create a section in visualforce page. like a div in html.

5-  <apex:inputField></apex:inputField> is used to create an input field in visualforce page.
      value attribute is used to bind the field to the controller.
      label attribute is used to give a label to the field.

6-  <apex:commandButton></apex:commandButton> is used to create a button in visualforce page.
       action attribute is used to bind the button to the controller. 
       action type can be save, cancel, delete, etc
       value attribute is used to give a label to the button.


7-  <apex:pageBlockTable></apex:pageBlockTable> is used to create a table in visualforce page.
            value attribute is used to bind the table to the controller.
            var attribute is used to define a variable to iterate over the table.

            










*/