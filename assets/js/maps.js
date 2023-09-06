document.addEventListener("DOMContentLoaded",()=>{
  setTimeout(() => {
    document.querySelector('#load-iframe-map').innerHTML = 
  `<iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidht="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1975.2014099764167!2d-79.02251640293431!3d-8.060329121272195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3f09ae368f85%3A0xc05ac61d1e6d2c14!2zQm9kZWdhIOKAnERvw7FhIE1hcnnigJ0!5e0!3m2!1ses-419!2spe!4v1693887291846!5m2!1ses-419!2spe" width="600" height="450" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  }, 500);
  
})