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
    localStorage.setItem("contentEvents", JSON.stringify(contentArray));
};
//now i have a content array and a element array with matching indexes

//write event content to page
for (i=0; i < contentArray.length; i++) {
    contentEls[i].value = contentArray[i];
};





// console.log(contentArray);