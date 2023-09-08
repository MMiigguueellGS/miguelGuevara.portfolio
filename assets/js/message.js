
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_0tbm55e';

  emailjs.sendForm(serviceID, templateID, this)
  .then(() => {
    btn.value = 'Enviar mensaje';
    event.target.reset()
    
  }, (err) => {
    btn.value = 'Send Email';
    alert(JSON.stringify(err));
  })
});