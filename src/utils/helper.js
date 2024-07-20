

function dateTimeCompare(timeString1, timeString2){

    const date1 = new Date(timeString1);
    const date2 = new Date(timeString2);

    return date1.getTime() > date2.getTime()
}


module.exports = {
    dateTimeCompare
}