/*
Apex
------
- apex used to write the business logic in salesforce

  example of business logic:
    --------------------------
    1- if the opportunity amount is greater than 10000 then the stage should be closed won
- apex is similar to java
- used to create records, update records, delete records, etc
- used to create custom logic





ex:
-----

public class test {                          //class name
    public static void methodapex()         //method name
    {
    account acc= new account();            //object creation
    acc.Name='testaccount';                //assigning values to the fields
    insert acc;                            //inserting the record
    system.debug(acc); 
        contact con= new contact();
        con.lastname='apexcontact';
        con.AccountId=acc.Id;
        insert con;
        system.debug('con details is'+con);
        
        opportunity opp=new opportunity();
        opp.CloseDate=Date.newInstance(2024,12,06);
        opp.Name =acc.Name;
        opp.StageName='prospecting';
        opp.AccountId=acc.Id;
        opp.ContactId=con.Id;
        insert opp;
        system.debug(opp);
    }
}

Static:
--------
- static keyword is used to create a class level variable
- void keyword is used to define a method that does not return a value

primitive data types in apex
---------------------
- Integer
- Long
- Double
- Decimal
- String


what is the difference between set and list in apex?
-----------------------------------------------------
- set is a collection of unordered elements that do not contain duplicates
- list is a collection of ordered elements that can contain duplicates

list
-----
- can contain duplicate values
- can be accessed using index
- can be sorted
- can use add()
- can user get()

set
-----
- cannot contain duplicate values
- cannot be accessed using index
- cannot be sorted
- can use add()
- cannot use get()
---------------------------------------------------------------------------------------------------







*/