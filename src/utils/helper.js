

function dateTimeCompare(timeString1, timeString2){

    const date1 = new Date(timeString1);
    const date2 = new Date(timeString2);

    return date1 > date2;
}


module.exports = {
    dateTimeCompare
}