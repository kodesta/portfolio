
import emailjs from 'emailjs-com';


const btn = document.getElementById('btn');
btn.addEventListener('click', function(e){
    e.preventDefault();

   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    

    const body = 'name:' +name + '<br/> email:' + email+'<br/> subject:'+subject+ '<br/> message:'+ message;

    /*----------------------------

    Email.send({
        SecureToken : "001d2e24-ee8b-4290-988a-2008b4fc0b4d",
        To : 'jbeya8@gmail.com',
        From : ['email'],
        Subject : "This is the subject",
        Body : body
    }).then(
      message => alert(message)
    );*/


   
})






const sendEmail = (e) => {
    e.preventDefault();
    var parameters = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        

    }

    const serviceID = "service_025jgkf";
const templateID = "template_pbzoenp";
const secureToken = "001d2e24ee8b4290988a2008b4fc0b4d";
emailjs.sendForm(serviceID,templateID,parameters,secureToken)
.then(
    res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Message sent successfully.");
    }, (error) => {
        console.log(error);
    }

)
e.target.reset();
}
export default sendEmail