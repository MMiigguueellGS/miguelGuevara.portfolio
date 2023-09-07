document.addEventListener("click",(e)=>{
 const show = document.querySelector('.layout__aside')
 if(!show.classList.contains('layout__aside--visible')){
  show.classList.add('layout__aside--visible')
 }
})