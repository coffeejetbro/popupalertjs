# popupalertjs
A sample html js css code that shows custom popups and alerts

# Popup / Alerts Demo

Just call showPopup form console to see it in action

showPopup(message, positiveText, negativeText, callback, showCloseButton) 

message - Text message you want to show to user

positiveText - Button text for positive response. For eg. "Yes"

negativeText - Button text for negative response. For eg. "No"

callback - a callback function. two parameters will be provided in callback. first parameter will return 1 (positive) or 0 (negative). second parameter will return true or false to indicate whether close button was clicked or not

showCloseButton - True or false, if set to false, it will not allow user to close popup.
