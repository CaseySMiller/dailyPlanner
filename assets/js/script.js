//get date and current hours
var todaysDate = new Date();
var currentHour = todaysDate.getHours();

//define array of textarea elements
var contentEls = $('main textarea');

// check local storage for data and build empty array otherwise and push to local
var contentArray = JSON.parse(localStorage.getItem("contentEvents"));
if (!contentArray) {
    contentArray = [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ];
    //write array to localStorage
    localStorage.setItem("contentEvents", JSON.stringify(contentArray));
};
//now i have a content array and a element array with matching indexes

//write saved event content to page and color code
for (i=0; i < contentArray.length; i++) {
    contentEls[i].value = contentArray[i];
    for (x = 0; x < contentEls.length; x++) {
        hourCheck = x + 9;
        if (hourCheck > currentHour) {
            contentEls[x].classList.remove('past', 'present');
            contentEls[x].classList.add('future');
        } else if (hourCheck === currentHour) {
            contentEls[x].classList.remove('past', 'future');
            contentEls[x].classList.add('present');
        } else {
        contentEls[x].classList.remove('future', 'present');
        contentEls[x].classList.add('past');
        };
    };
};

//display date and time
$('#currentDay').text('Today is ' + todaysDate.toDateString());
$('#currentTime').text('The current time is: ' + todaysDate.toTimeString());

//color events area for past/present/future

//write text area to array when save button is pressed
$('.saveBtn').on('click', function() {
    var textAreaVal = $(this).parent().children('textarea').val();
    var thisIndex = $(this).parent().index();

    contentArray[thisIndex] = textAreaVal;
    //store new array in local
    localStorage.setItem("contentEvents", JSON.stringify(contentArray));
    //reload page with new local data and time
    location.reload(true);
});





// console.log(contentArray);