
/* the < fieldset > element provides a grouping for a part of an HTML form, 
with a nested < legend > element providing a caption for the<fieldset>.
It takes few attributes, the most notable of which are form, 
which can contain the id of a < form > on the same page, allowing you to 
make the < fieldset > part of that < form > even if it is not nested inside it, 
and disabled, which allows you to disable the < fieldset > and all its contents in one go.
https://developer.mozilla.org/en-us/docs/web/html/element/fieldset
*/
document.addEventListener("DOMContentLoaded", function (event) {
    // disable the lower part of the form until we have user input for all values
    document.getElementById("new-user").disabled = true;
    document.getElementById("existing-user").disabled = true;
})

function clickNewUser()
{
    document.getElementById("new-user").disabled = false;
    document.getElementById("existing-user").disabled = true;
}

function clickExistingUser()
{
    document.getElementById("new-user").disabled = true;
    document.getElementById("existing-user").disabled = false;
}

function newUserLogin() {
    newUserName = document.getElementById("nusername").value;
    newPassword = document.getElementById("npassword").value;

    if (newUserName.length > 0 && newPassword.length > 0)
    {alert("Welcome  " + newUserName)}
    else{
        alert("Please enter value for user name and password")
    } 
}


function existingUserLogin() {
        eUserName = document.getElementById("eusername").value;
        ePassword = document.getElementById("epassword").value;
    
        if (eUserName.length > 0 && ePassword.length > 0)
        {alert("Welcome  " + eUserName)}
        else{
            alert("Please enter value for user name and password")
        }
    } 
