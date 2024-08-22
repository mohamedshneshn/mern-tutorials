/*




public class caseWizardController {
    
    Account account;
    Contact contact;
    Case case;
    
    public Account getAccount(){
        if(account==null){
            account = new Account();
        }
        return account;
    }
    
     public Contact getContact(){
        if(contact==null){
            contact = new Contact();
        }
        return contact;
    }
    
     public Case getCase(){
        if(case==null){
            case = new Case();
        }
        return case;
    }

//next button
    
    public pagereference goToPage2(){
        return Page.caseWizard2;
    }
    
    public pagereference goToPage1(){
        return Page.caseWizard1;
    }
    
     public pagereference goToPage3(){
        return Page.caseWizard3;
    }
    
  //Save
    public pagereference insertData(){
        try{
            insert account;
            
            contact.AccountId = account.id;
            insert contact;
            
            case.AccountId = account.id;
            case.Contact__c = contact.id;
            insert case;
           
        } catch(System.DmlException e){
            System.debug(e.getMessage());
            return null;
        }
        
        String oppPageUrl = 'https://playful-hawk-1w28ft-dev-ed.trailblaze.lightning.force.com/';
                PageReference pgRef = new PageReference(oppPageUrl +case.id);
        return pgRef;
    }

    
    //Cancel
    public pagereference Cancel(){
               
        String oppPageUrl = 'https://playful-hawk-1w28ft-dev-ed.trailblaze.lightning.force.com/lightning/o/Case/list?filterName=__Recent';
                PageReference pgRef = new PageReference(oppPageUrl);
        return pgRef;
    }
    
    

}

----------------------------------------------------------------------------------------------------------------------------
<apex:page lightningStylesheets="true" tabStyle="Case" controller="caseWizardController">
    
    <apex:form>
        <apex:sectionHeader title="New Customer Case" subtitle="Step 3 of 3"/>
        <apex:pageBlock title="Confirmation">
            
            <apex:pageBlockSection title="Account Information" collapsible="false" >
                <apex:outputField value= "{!Account.name}"/>
                <apex:outputField value= "{!Account.Site}"/>
            </apex:pageBlockSection>
            
            <apex:pageBlockSection title="contact Information" collapsible="false" >
                  <apex:outputField value= "{!contact.firstName}"/>
                  <apex:outputField value= "{!contact.lastName}"/>
                  <apex:outputField value= "{!contact.phone}"/>
            </apex:pageBlockSection>
            
            <apex:pageBlockSection title="Case Information" collapsible="false" >
                  <apex:outputField value= "{!Case.Status}"/>
                  <apex:outputField value= "{!Case.Origin}"/>
                  <apex:outputField value= "{!Case.Priority}"/>
                  <apex:outputField value= "{!Case.Subject}"/>
            </apex:pageBlockSection>
        
        <apex:pageBlockButtons>
            <apex:commandButton value="Previous" action="{!goToPage2}" immediate="true" />
            <apex:commandButton value="Save" action="{!insertData}"/>
            <apex:commandButton value="Cancel" action="{!Cancel}"  immediate="true" />
        
        </apex:pageBlockButtons>
        
       
        </apex:pageBlock>
        
    </apex:form>
</apex:page>

----------------------------------------------------------------------------------------------------------------------------

<apex:page lightningStylesheets="true" tabStyle="Case" controller="caseWizardController">
    
    <apex:form>
        <apex:sectionHeader title="New Customer Case" subtitle="Step 2 of 3"/>
        <apex:pageBlock title="Case Information">
            <apex:pageBlockSection title="Case Information" collapsible="false" >
                <apex:inputField value= "{!Case.Status}"/>
                <apex:inputField value= "{!Case.Origin}"/>
                <apex:inputField value= "{!Case.Priority}"/>
                <apex:inputField value= "{!Case.Subject}"/>
            </apex:pageBlockSection>
        
        <apex:pageBlockButtons>
            <apex:commandButton value="Previous" action="{!goToPage1}" immediate="true" />
            <apex:commandButton value="Next" action="{!goToPage3}"/>
            <apex:commandButton value="Cancel" action="{!Cancel}"  immediate="true" />
        
        </apex:pageBlockButtons>
        
       
        </apex:pageBlock>
        
    </apex:form>
</apex:page>

----------------------------------------------------------------------------------------------------------------------------

<apex:page lightningStylesheets="true" tabStyle="case" controller="caseWizardController">
    
    <apex:form>
        <apex:sectionHeader title="New Customer Case" subtitle="Step 1 of 3"/>
        
        <apex:pageBlock title="Customer Information">
            <apex:pageBlockSection title="Account Information" collapsible="false" >
                <apex:inputField value= "{!Account.name}"/>
                <apex:inputField value= "{!Account.Site}"/>
            </apex:pageBlockSection>
        
        
       
            <apex:pageBlockSection title="Contact Information" collapsible="false" >
                <apex:inputField value= "{!contact.firstName}"/>
                <apex:inputField value= "{!contact.lastName}"/>
                <apex:inputField value= "{!contact.phone}"/>
            </apex:pageBlockSection>
        <apex:pageBlockButtons>
            <apex:commandButton value="Next" action="{!goToPage2}"/>
            <apex:commandButton value="Cancel" action="{!Cancel}" immediate="true"/>
        
        </apex:pageBlockButtons>
        
       
        </apex:pageBlock>
        
    </apex:form>
</apex:page>


how can i create order custom object for the carHub App
 1-include different ways for payment(Cash - Lease-finance)
  and each way has differnt amount
   cash =( 3300 Rear-Wheel Drive , 29000 Long Range Rear -Wheel Drive , 36000Long Range All-Wheel Drive)
    Lease=(Rear-Wheel Drive 216/mo , Long Range Rear-Wheel Drive 346/mo) 
    Finance=(Rear-Wheel Drive 512/mo , Long Range Rear-Wheel Drive 402/mo) 

2- different colors for the car (Red, Blue, Black, White)
   color has different price (Red 1000, Blue 2000, Black 3000, White 4000)

3- different wheels for the car (18" Aero Wheels, 19" Sport Wheels)
    wheels has different price (18" Aero Wheels 1000, 19" Sport Wheels 2000)

4- different interior for the car (Black, White)
    interior has different price (Black 1000, White 2000)


*/