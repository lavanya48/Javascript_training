var current = new Date();
var date = current.getDate();
var month = current.getMonth();
var hours = current.getHours();
var min = current.getMinutes();
var sec = current.getSeconds();
var monthname;
var strtoappend;

if (hours < 12)
{
    h = "0" + hours;
    strtoappend="AM";
}
else if(hours >12)
{
    h = "0" + (hours -12);
    strtoappend="PM";
}
else
{
    h = hours;
    strtoappend="PM";
}
if (min<10)
{
    min = "0" +min;
}
if (sec<10)
{
    sec = "0" + sec;
}

switch(month+1)
{
    case 1: 
        monthname = "January";
        break;
    case 2:
        monthname = "February";
        break;
    case 3:
        monthname = "March";
        break;
    case 4:
        monthname = "April";
        break;
    case 5:
        monthname = "May";
        break;
    case 6:
        monthname = "June";
        break;
    case 7:
        monthname = "July";
        break;
    case 8:
        monthname = "August";
        break;
    case 9:
        monthname = "September";
        break;
    case 10:
        monthname = "October";
        break;
    case 11:
        monthname = "November";
        break;
    case 12:
        monthname = "December";
        break;
}

var year = current.getFullYear();
var mystring;
mystring = "Today is " + date + " - " + monthname + " - " + year + ".<br />Current time is " + h      + ":" + min + ":" + sec  + " " + strtoappend + ".";
document.write(mystring);


