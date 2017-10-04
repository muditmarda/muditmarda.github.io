function validate() {
    var name,email,message;
    var formArr = document.getElementsByTagName('input');
    name = formArr[0].value;
    email = formArr[1].value;
    message = formArr[2].value;
    var emailformat = /\S+@\S+\.\S+/;
    if (name.length <= 0)
    		alert("Name cannot be empty.");
    if(email.length <= 0 || !emailformat.test(email))
    		alert("PLease enter a valid e-mail address.");
    if(message.length <= 0)
    		alert("Message cannot be empty.");
}
document.getElementById('buttonSub').addEventListener("click", validate, false);
