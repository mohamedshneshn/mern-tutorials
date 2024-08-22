/*
Exception Handling
------------------
- used to handle runtime errors
- try-catch block
- catch block is executed when an exception is thrown
- finally block is executed after the try-catch block

which is the exception you cant handel in salesforce?
- governor limits

what is the difference between try-catch and try-catch-finally?

- try-catch block is used to handle exceptions
- try-catch-finally block is used to handle exceptions and after that, the finally block is executed


1-DMLException
example:

try to insert account records without required fields

public static void insertAccount(){
    Account acc = new Account();
    acc.Name = 'Test Account';
    insert acc;
}

public static void insertAccount(){
    try{
        Account acc = new Account();
        acc.Name = 'Test Account';
        insert acc;
    }catch(DMLException e){
        system.debug('An error occurred: '+e.getMessage());
    }
}

--------------------------------------------

2-ListException

example:

public static void listException(){
    List<Integer> intList = new List<Integer>{1,2,3};
    system.debug(intList[3]);
}

public static void listException(){
    try{
        List<Integer> intList = new List<Integer>{1,2,3};
        system.debug(intList[3]);
    }catch(ListException e){
        system.debug('An error occurred: '+e.getMessage());
    }
}

--------------------------------------------
3-NullPointerException

example:

public static void nullPointerException(){
    Account acc;
    system.debug(acc.Name);
}

public static void nullPointerException(){
    try{
        Account acc;
        system.debug(acc.Name);
    }catch(NullPointerException e){
        system.debug('An error occurred: '+e.getMessage());
    }
}

--------------------------------------------

4-QueryException

example:

public static void queryException(){
    List<Account> accList = [SELECT Id FROM Account WHERE Name = 'Test Account'];
}

public static void queryException(){
    try{
        List<Account> accList = [SELECT Id FROM Account WHERE Name = 'Test Account'];
    }catch(QueryException e){
        system.debug('An error occurred: '+e.getMessage());
    }
}


--------------------------------------------

5-SobjectException

what is the sobject exception?


example:

public static void sobjectException(){
    Account acc = new Account();
    acc.Name = 'Test Account';
    acc.CustomField__c = 'Test';
}

public static void sobjectException(){
    try{
        Account acc = new Account();
        acc.Name = 'Test Account';
        acc.CustomField__c = 'Test';
    }catch(SobjectException e){
        system.debug('An error occurred: '+e.getMessage());
    }
}

--------------------------------------------







*/
