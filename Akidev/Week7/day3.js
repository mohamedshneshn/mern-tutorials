/*


what is trigger in salesforce?
--------------------------------
trigger is a piece of code that is executed before or after the record is inserted or updated.


what is the trigger before insert?
--------------------------------
before insert trigger is used to perform the action before the record is inserted into the database.

example:

trigger AccountTrigger on Account (before insert) {
    for(Account acc : Trigger.new){
        acc.Name = 'Akidev';
    }

}





what is map in salesforce?
--------------------------------
map is a collection of key-value pairs where each unique key maps to a single value. 
Keys and values can be any data type—primitive types, collections, sObjects, user-defined types, and built-in Apex types.






*/