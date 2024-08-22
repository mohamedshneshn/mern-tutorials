/*

what is the difference between SOQL and SOSL?
---------------------------------------------
- SOQL is used to retrieve the records from a single object
- SOSL is used to retrieve the records from multiple objects

Examples of SOQL and SOSL
--------------------------
SOQL
-----
1-  SELECT Id, FirstName, LastName, CreatedDate
    FROM Contact
    WHERE CreatedDate = TODAY
    AND Name != 'test'

    this query will return the list of contact records which are created today and whose customer name is not test


SOSL
-----
1-  FIND {test}
    IN ALL FIELDS RETURNING account(name),contact(lastname)

 this query will return the account name and contact lastname which contains the word test in any field of the object

 ----------------------------------------------------------------------------------------------------------------------------

Test Class
----------

- test class is used to test the apex class before deploying it to the production



public class calculator {
   private Integer a,b,result;
    public calculator(integer a,integer b)
    {
        this.a=a;
        this.b=b;
    }
public void add()
{
    result=a+b;
}
    public void minus()
    {
        result=a-b;
    }
    public void multiply()
    {
        result=a*b;
    }
    public void divide()
    {
        if(b==0)
            result=0;
        else
            result=a/b;
    }
    public integer getresult()
    {
        return result;
    }
}


---

@isTest
public class TestCalculator {
    
    @istest
    static void add()
    {
        Calculator c=new Calculator(10,20);
        c.add();
        integer r=c.getresult();
        system.assertEquals(3,r);
    }
    
    @istest
    static void minus()
    {
        Calculator c=new Calculator(30,20);
        c.minus();
        integer r=c.getresult();
        system.assertEquals(10,r);
    }
    @istest
    static void multiply()
    {
        Calculator c=new Calculator(3,2);
        c.multiply();
        integer r=c.getresult();
        system.assertEquals(5,r);
    }
    @istest
    static void divide()
    {
        Calculator c=new Calculator(10,2);
        c.divide();
        integer r=c.getresult();
        system.assertEquals(5,r);
    }
 
}

----------------------------------------------------------------------------------------------------------------------------








*/