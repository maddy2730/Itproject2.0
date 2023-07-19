 function sendEmail(){
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "akashsharma88917@gmail.com",
    Password : "besttech",
    To : 'tomarh200@gmail.com',
    From : document.getElementById("email").value,
    Subject : "BestTech new user details",
    Body : "Name:" + document.getElementById("name").value 
    + "<br> your age:" + document.getElementById("age").value +
    "<br> Phone Number:" + document.getElementById("phonenumber").value+
    "<br> email: " + document.getElementById("email").value+
    "<br> comments:"+ document.getElementById("comments")
}).then(
  message => alert("send succesfully")
); }