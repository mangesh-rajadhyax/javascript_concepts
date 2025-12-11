

const date = new Date();
console.log(date.toDateString());           // Thu Dec 11 2025
console.log(typeof date);                   // object

const birthDate = new Date(1988,9,21);          // Specific date
console.log(birthDate.toDateString());          // Fri Oct 21 1988

const birthDateStr = new Date('10-21-1988');    // Specific date
console.log(birthDateStr.toLocaleDateString()); // 10/21/1988
console.log(birthDateStr.getTime()); // 10/21/1988
console.log(birthDateStr.getMonth() + 1);       // 10

console.log(Date.now());        // 1765466687920
//this is the difference in milliseconds from date January 1, 1970 till today

// Print Date and Time
const birthDateStr1 = new Date('10-21-1988 10:11:12');
console.log(birthDateStr1.toLocaleDateString()); // 10/21/1988
console.log(birthDateStr1.toLocaleTimeString()); // 10:11:12 AM    
console.log(birthDateStr1.toString());          
     // Fri Oct 21 1988 10:11:12 GMT-0400 (Eastern Daylight Time)



// Date Format - there is no direct way of doing that

// Get diference between two date in hours
const date1 = new Date('10-21-1988 10:11:12');
const date2 = new Date('10-22-1988 10:11:12');

const diff = date2 - date1;
console.log(diff);                          // 86400000

const millisecondsPerDay = 1000 * 60 * 60 * 24;
const hours = (diff / millisecondsPerDay);  // convert to days 
console.log(hours);                         // 1 (1 day is difference)


// Temporal is not yes enabled in NodeJS so we need to use "--harmony-temporal" flag
// Command -> node --harmony-temporal .\date_temporal.js

//console.log(Temporal.Now.instant());