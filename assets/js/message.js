const btn = document.getElementById("button");
const message = document.getElementById("message");
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_0tbm55e";
  const message__sent = document.createElement("label");

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Enviar mensaje";

      event.target.reset();
      message__sent.textContent = "Mensaje enviado";
      message__sent.className = "message__sent"
      message.appendChild(message__sent);
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});



  form.addEventListener("focus", (e) => {
    if ( form.contains(message)) {
      console.log('estoy en el input')
    }
  });



const inputs = form.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("focus", (e) => {
    const message__sent = form.querySelector(".message__sent")
    if ( message.childElementCount) {
      console.log('soy yo')
      message__sent.remove()
    }
  });
});