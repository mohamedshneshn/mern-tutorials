/*

<apex:page standardController="Car_Order__c" extensions="CarOrderPaymentController">
    <!-- Include the Stripe.js script -->
    <apex:includeScript value="https://js.stripe.com/v3/" />

    <apex:form id="paymentForm">
        <apex:pageMessages />

        <apex:sectionHeader title="Payment Details" />

        <apex:pageBlock title="Enter Payment Details">
            <apex:pageBlockSection >
                <apex:inputText label="Cardholder Name" value="{!cardholderName}" required="true"/>
                <div id="card-element"></div>
                <div id="card-errors" role="alert"></div>
            </apex:pageBlockSection>
        </apex:pageBlock>

        <apex:commandButton value="Submit Payment" onclick="handlePayment(event);" rerender="paymentStatus" status="formStatus" />

        <apex:actionFunction name="submitPayment" action="{!processPayment}" rerender="paymentStatus">
            <apex:param name="stripeToken" value="" assignTo="{!stripeToken}" />
        </apex:actionFunction>

        <apex:outputPanel id="paymentStatus">
            <apex:outputText value="{!paymentStatus}" rendered="{!NOT(ISNULL(paymentStatus))}"/>
        </apex:outputPanel>
    </apex:form>

    <script>
        var stripe = Stripe('pk_test_51PnsFSKUTUoT4tbgshic8oVLTNzDMsXr3wZ5j8h9vXuj9wtGlQNjW0PP0y7Qv4PvJMJDh9VQmXAwMkWJ61GV9fnM008gtuq5ph'); // Replace with your publishable key
        var elements = stripe.elements();
        var card = elements.create('card');
        card.mount('#card-element');

        function handlePayment(event) {
            event.preventDefault();
            stripe.createToken(card).then(function(result) {
                if (result.error) {
                    // Display error in #card-errors element
                    document.getElementById('card-errors').textContent = result.error.message;
                } else {
                    // Send the token to your server using submitPayment action function
                    submitPayment(result.token.id);
                }
            });
        }
    </script>
</apex:page>


public class CarOrderPaymentController {
    public Car_Order__c carOrder { get; set; }
    public String stripeToken { get; set; }
    public String paymentStatus { get; set; }
    public String customerEmail { get; set; }
    public String customerName { get; set; }
    public String carDetails { get; set; }
    public String cardholderName { get; set; }
    public Decimal totalAmount { get; set; }

    // Constractor Method to initialize the controller 
    public CarOrderPaymentController(ApexPages.StandardController controller) {
        this.carOrder = (Car_Order__c)controller.getRecord();
        // Query the car order and include related contact and car details
        carOrder = [SELECT Id, Total_Price__c, Contact__r.Email, Contact__r.FirstName, Contact__r.LastName, 
                    Car__r.Make__c, Car__r.Model__c
                    FROM Car_Order__c 
                    WHERE Id = :carOrder.Id];
        
        // Assign the details to variables
        customerEmail = carOrder.Contact__r.Email;
        customerName = carOrder.Contact__r.FirstName + ' ' + carOrder.Contact__r.LastName;
        carDetails = carOrder.Car__r.Make__c + ' ' + carOrder.Car__r.Model__c ;
        totalAmount = carOrder.Total_Price__c;
    }
    
    // Method to process the payment using Stripe API
    private Boolean processStripePayment() {
        String apiKey = 'sk_test_51PnsFSKUTUoT4tbgJZAyitS6GQppCQf5PzYAWdq6MGiaGtuawoWy8BIqjJ13nYSZmY6Lecdoa0Oof7JeURHQ7g7t00avrcpe74'; // Replace with your Stripe secret key
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://api.stripe.com/v1/charges');
        req.setMethod('POST');
        req.setHeader('Authorization', 'Bearer ' + apiKey);
        req.setHeader('Content-Type', 'application/x-www-form-urlencoded');

        String body = 'amount=' + String.valueOf(totalAmount * 100) + 
                      '&currency=usd' +
                      '&source=' + stripeToken;  // Use the token instead of raw card number
        req.setBody(body);

        Http http = new Http();
        HttpResponse res = http.send(req);

        if (res.getStatusCode() == 200 || res.getStatusCode() == 201) {
            return true; // Payment success
        } else {
            paymentStatus = 'Payment Failed: ' + res.getBody();
            System.debug('Stripe API Error: ' + res.getStatusCode() + ' - ' + res.getBody());
            return false; // Payment failure
        }
    }
    
    // Method to check the payment status and update payment status in the car order record
    public PageReference processPayment() {
        Boolean paymentSuccessful = processStripePayment();

        if (paymentSuccessful) {
            carOrder.Payment_Status__c = 'Completed';
            update carOrder;
            paymentStatus = 'Payment Successful';

            // Send receipt email
            sendReceiptEmail();
        } else {
            paymentStatus = 'Payment Failed. Please try again.';
        }

        return null;
    }

    // Method to send a receipt email to the customer
    private void sendReceiptEmail() {
        // Email body with detailed information
        String emailBody = 'Dear ' + customerName + ',\n\n' +
                           'Thank you for your purchase. Here are the details of your order:\n\n' +
                           'Car Details: ' + carDetails + '\n' +
                           'Total Amount: $' + totalAmount + '\n\n' +
                           'If you have any questions or need further assistance, please do not hesitate to contact us.\n\n' +
                           'Best regards,\n' +
                           'Your Company Name';

        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(new String[] {customerEmail});
        mail.setSubject('Receipt for Your Car Order');
        mail.setPlainTextBody(emailBody);
        // Add more email content or attachments as needed

        Messaging.sendEmail(new Messaging.SingleEmailMessage[] {mail});
    }
}






*/
